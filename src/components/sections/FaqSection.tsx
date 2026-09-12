import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Language } from '../../types'
import { faqItems } from '../../data/faq'
import { translations } from '../../data/translations'
import { Badge } from '../ui/Badge'
import { cn } from '../../utils/cn'

export interface FaqSectionProps {
  lang: Language
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null)
  const t = translations[lang].faq

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="faq"
      className="relative bg-surface-muted py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-surface-border/60"
    >
      {/* Decorative subtle ambient circle */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-50/50 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex justify-center mb-4"
          >
            <Badge variant="brand">{t.badge}</Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.06, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark-900 leading-[1.18]"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                className={cn(
                  'bg-white rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden',
                  isOpen
                    ? 'border-brand-200 ring-2 ring-brand-50'
                    : 'border-surface-border hover:border-slate-300'
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 select-none"
                >
                  <div className="flex items-center gap-3.5 pr-2">
                    <span
                      className={cn(
                        'w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold transition-colors',
                        isOpen
                          ? 'bg-brand-600 text-white'
                          : 'bg-surface-subtle text-slate-500'
                      )}
                    >
                      {index + 1}
                    </span>
                    <h3
                      className={cn(
                        'text-base sm:text-lg font-bold tracking-tight transition-colors',
                        isOpen ? 'text-brand-900' : 'text-dark-900'
                      )}
                    >
                      {item.question[lang]}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className={cn(
                      'p-2 rounded-full shrink-0 transition-colors',
                      isOpen
                        ? 'bg-brand-50 text-brand-600'
                        : 'bg-surface-subtle text-slate-400'
                    )}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                    >
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1 border-t border-surface-border/50 text-slate-600 text-sm sm:text-base leading-relaxed">
                        {item.answer[lang]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
