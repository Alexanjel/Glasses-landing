import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Palette, ShieldCheck, ArrowRight } from 'lucide-react'
import { Language } from '../../types'
import { translations } from '../../data/translations'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

export interface AboutSectionProps {
  lang: Language
  onConsultationClick: () => void
}

const floatingBadgeData: Record<Language, { title: string; subtitle: string; ctaText: string }> = {
  uk: {
    title: '100% Японський бета-титан',
    subtitle: 'Ультралегка вага від 12г • Гіпоалергенно',
    ctaText: 'Записатись на консультацію',
  },
  en: {
    title: '100% Japanese Beta-Titanium',
    subtitle: 'Ultra-lightweight from 12g • Hypoallergenic',
    ctaText: 'Book a Consultation',
  },
  ru: {
    title: '100% Японский бета-титан',
    subtitle: 'Ультралегкий вес от 12г • Гипоаллергенно',
    ctaText: 'Записаться на консультацию',
  },
}

const valueIcons = [
  <Sparkles key="titanium" className="w-5 h-5 text-dark-900" />,
  <Palette key="acetate" className="w-5 h-5 text-dark-900" />,
  <ShieldCheck key="lenses" className="w-5 h-5 text-dark-900" />,
]

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onConsultationClick }) => {
  const t = translations[lang]
  const badgeInfo = floatingBadgeData[lang]

  return (
    <section id="about" className="relative bg-white py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex justify-center mb-4"
          >
            <Badge variant="brand">{t.about.badge}</Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.06, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark-900 leading-[1.18]"
          >
            {t.about.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            {t.about.paragraph1}
          </motion.p>
        </div>

        {/* Balanced 2-Column Content Grid: Photo Left, Details Right, Aligned Top & Bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Image container with floating badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 group h-full flex flex-col min-h-[380px] sm:min-h-[460px]">
              <img
                src="/assets/images/how-we-work.webp"
                alt={t.about.title}
                width="735"
                height="490"
                decoding="async"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out flex-1"
                loading="lazy"
              />

              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/45 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.4, ease: 'easeOut' }}
                className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-white border border-slate-200 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-dark-900 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-dark-900 leading-tight">
                    {badgeInfo.title}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {badgeInfo.subtitle}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Column 2: Story & Value Points, Aligned evenly from Top to Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Story Paragraph 2 */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {t.about.paragraph2}
            </p>

            {/* 3 Value Point Cards */}
            <div className="grid grid-cols-1 gap-3.5 sm:gap-4 mb-6 flex-1 justify-center">
              {t.about.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + index * 0.06,
                    ease: 'easeOut',
                  }}
                  className="flex items-start gap-4 p-4 sm:p-4.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    {valueIcons[index] || <Sparkles className="w-5 h-5 text-dark-900" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-dark-900 mb-0.5">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Consultation Action CTA - Full Width & Centered */}
            <div className="w-full pt-1">
              <Button
                variant="primary"
                size="lg"
                onClick={onConsultationClick}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center text-center font-semibold"
              >
                {badgeInfo.ctaText}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
