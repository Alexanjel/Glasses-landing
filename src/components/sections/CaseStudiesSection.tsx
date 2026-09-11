import React from 'react'
import { motion } from 'framer-motion'
import {
  Glasses,
  ArrowRight,
  User,
} from 'lucide-react'
import { Language, CaseStudy } from '../../types'
import { caseStudies } from '../../data/caseStudies'
import { translations } from '../../data/translations'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { cn } from '../../utils/cn'

export interface CaseStudiesSectionProps {
  lang: Language
  onBookCaseConsultation: (modelName: string) => void
}

const ctaLabels: Record<Language, string> = {
  uk: 'Хочу такий самий результат',
  en: 'I want the same result',
  ru: 'Хочу такой же результат',
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  lang,
  onBookCaseConsultation,
}) => {
  const t = translations[lang]

  return (
    <section
      id="cases"
      className="relative bg-white py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="flex justify-center mb-4"
          >
            <Badge variant="brand">{t.cases.badge}</Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark-900 leading-[1.18]"
          >
            {t.cases.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            {t.cases.subtitle}
          </motion.p>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12 sm:space-y-16">
          {caseStudies.map((caseItem: CaseStudy, index: number) => {
            const isReversed = index % 2 === 1

            return (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="relative bg-slate-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm"
              >
                <div
                  className={cn(
                    'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center',
                    isReversed ? 'lg:grid-flow-dense' : ''
                  )}
                >
                  {/* Image Column */}
                  <div
                    className={cn(
                      'lg:col-span-5 relative',
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    )}
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm group">
                      <div className="aspect-[4/5] sm:aspect-[4/5] lg:aspect-[4/5] w-full max-h-[460px]">
                        <img
                          src={caseItem.image}
                          alt={caseItem.client[lang]}
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-transparent pointer-events-none" />

                      {/* Client Name Badge over Image */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-white/80 p-3.5 rounded-xl shadow-md flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-dark-900 text-white flex items-center justify-center shrink-0">
                          <User className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                            Клієнт OPTIK
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-dark-900 truncate mt-0.5">
                            {caseItem.client[lang]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Case Details Column */}
                  <div
                    className={cn(
                      'lg:col-span-7 flex flex-col justify-between',
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    )}
                  >
                    <div>
                      {/* Case Tag & Title */}
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="text-xs font-mono font-bold text-dark-900 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                          КЕЙС 0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-dark-900 mb-6 leading-snug">
                        {caseItem.title[lang]}
                      </h3>

                      {/* 3 Step Breakdown: Problem -> Solution -> Result */}
                      <div className="space-y-3.5 mb-6">
                        {/* 1. Problem */}
                        <div className="p-4 rounded-2xl bg-white border border-slate-200">
                          <div className="text-slate-500 font-bold text-[11px] uppercase tracking-wider mb-1">
                            {t.cases.problemLabel}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {caseItem.problem[lang]}
                          </p>
                        </div>

                        {/* 2. Solution */}
                        <div className="p-4 rounded-2xl bg-white border border-slate-200">
                          <div className="text-dark-900 font-bold text-[11px] uppercase tracking-wider mb-1">
                            {t.cases.solutionLabel}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {caseItem.solution[lang]}
                          </p>
                        </div>

                        {/* 3. Result */}
                        <div className="p-4 rounded-2xl bg-white border border-slate-200">
                          <div className="text-dark-900 font-bold text-[11px] uppercase tracking-wider mb-1">
                            {t.cases.resultLabel}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                            {caseItem.result[lang]}
                          </p>
                        </div>
                      </div>

                      {/* Chosen Model Box */}
                      <div className="mb-6 p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-dark-900 shrink-0">
                            <Glasses className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                              {t.cases.modelUsed}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-dark-900 truncate block">
                              {caseItem.modelChosen}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className={cn('flex', index === 0 ? 'justify-start lg:justify-end' : 'justify-start lg:justify-start')}>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => onBookCaseConsultation(caseItem.modelChosen)}
                        icon={<ArrowRight className="w-4 h-4" />}
                        className="w-full sm:w-auto justify-center text-center shadow-sm hover:shadow"
                      >
                        {ctaLabels[lang]}
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

export default CaseStudiesSection
