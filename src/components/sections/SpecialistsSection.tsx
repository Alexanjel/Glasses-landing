import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Award, Calendar, Quote } from 'lucide-react'
import { Language, Specialist } from '../../types'
import { specialists } from '../../data/specialists'
import { translations } from '../../data/translations'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { cn } from '../../utils/cn'

export interface SpecialistsSectionProps {
  lang: Language
  onBookWithSpecialist: (specialistName: string) => void
}

export const SpecialistsSection: React.FC<SpecialistsSectionProps> = ({
  lang,
  onBookWithSpecialist,
}) => {
  const t = translations[lang]

  const getBookButtonText = (specialist: Specialist): string => {
    const name = specialist.name[lang]
    if (lang === 'uk') return `Записатися до ${name}`
    if (lang === 'en') return `Book with ${name}`
    return `Записаться к ${name}`
  }

  return (
    <section
      id="experts"
      className="relative bg-white py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-surface-border/60"
    >
      {/* Subtle background ambient blur */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-brand-50/50 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-0 w-[500px] h-[500px] bg-slate-100/60 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="flex justify-center mb-4"
          >
            <Badge variant="brand">{t.experts.badge}</Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark-900 leading-[1.18]"
          >
            {t.experts.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            {t.experts.subtitle}
          </motion.p>
        </div>

        {/* Specialists Staggered / Alternating List */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {specialists.map((specialist, index) => {
            const isRightAligned = specialist.align === 'right'

            return (
              <motion.div
                key={specialist.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="relative bg-surface-muted/60 rounded-3xl p-6 sm:p-8 lg:p-10 border border-surface-border/90 shadow-[0_4px_24px_-4px_rgba(10,13,20,0.03)] hover:border-brand-200/80 transition-colors"
              >
                <div
                  className={cn(
                    'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center',
                    isRightAligned ? '' : 'lg:grid-flow-dense'
                  )}
                >
                  {/* Image Column */}
                  <div
                    className={cn(
                      'lg:col-span-5 relative',
                      isRightAligned ? 'lg:order-2' : 'lg:order-1 lg:col-start-1'
                    )}
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-surface-subtle border border-surface-border shadow-md group">
                      <div className="aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5] w-full max-h-[480px]">
                        <img
                          src={specialist.image}
                          alt={specialist.name[lang]}
                          className="w-full h-full object-cover object-top sm:object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                      </div>

                      {/* Subtle gradient overlay at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Experience Badge */}
                      <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md border border-white/80 px-4 py-2.5 rounded-xl shadow-lg shadow-slate-900/10 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold tracking-wider text-brand-700">
                            {t.experts.experience}
                          </p>
                          <p className="text-xs sm:text-sm font-bold text-dark-900 leading-none mt-0.5">
                            {specialist.experience[lang]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div
                    className={cn(
                      'lg:col-span-7 flex flex-col justify-center',
                      isRightAligned ? 'lg:order-1' : 'lg:order-2'
                    )}
                  >
                    {/* Index & Role Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200/50">
                        0{index + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-500">
                        {specialist.role[lang]}
                      </span>
                    </div>

                    {/* Specialist Name */}
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-dark-900 mb-4">
                      {specialist.name[lang]}
                    </h3>

                    {/* Quote / Statement Card */}
                    <div className="relative mb-6 p-4 sm:p-5 rounded-2xl bg-white border border-surface-border shadow-xs">
                      <Quote className="w-5 h-5 text-brand-400/60 mb-2 shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal">
                        {specialist.description[lang]}
                      </p>
                    </div>

                    {/* Qualifications Header & List */}
                    <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                        {t.experts.specialization} &amp; Кваліфікація
                      </h4>
                      <ul className="space-y-2.5">
                        {specialist.qualifications[lang].map((qualification, qIdx) => (
                          <li
                            key={qIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{qualification}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action CTA Button */}
                    <div className={cn('flex', isRightAligned ? 'justify-start' : 'justify-start lg:justify-end')}>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => onBookWithSpecialist(specialist.name[lang])}
                        icon={<Calendar className="w-4 h-4" />}
                        className="w-full sm:w-auto justify-center text-center shadow-sm hover:shadow"
                      >
                        {getBookButtonText(specialist)}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SpecialistsSection
