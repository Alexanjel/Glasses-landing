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
    <section id="about" className="relative bg-white py-20 sm:py-28 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Image container with floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm group">
              <div className="aspect-[4/5] sm:aspect-[4/5] md:aspect-[4/4] lg:aspect-[4/5] w-full max-h-[560px]">
                <img
                  src="/assets/images/how-we-work.jpg"
                  alt={t.about.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Gradient overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md border border-white/80 p-3.5 sm:p-4 rounded-2xl shadow-md flex items-center gap-3.5"
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

          {/* Column 2: Story & Value Points */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Philosophy Badge - Centered */}
            <div className="flex justify-center mb-4">
              <Badge variant="brand">{t.about.badge}</Badge>
            </div>

            {/* Title - Centered */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-dark-900 leading-[1.2] mb-6 text-center">
              {t.about.title}
            </h2>

            {/* Brand Story Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8 text-center sm:text-left">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>

            {/* 3 Value Point Cards */}
            <div className="grid grid-cols-1 gap-3.5 sm:gap-4 mb-8">
              {t.about.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + index * 0.08,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="flex items-start gap-4 p-4 sm:p-4.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0">
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
            <div className="w-full">
              <Button
                variant="primary"
                size="lg"
                onClick={onConsultationClick}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center text-center font-semibold shadow-md shadow-brand-600/20"
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
