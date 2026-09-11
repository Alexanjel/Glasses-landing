import React from 'react'
import { motion, Variants } from 'framer-motion'
import { ArrowRight, Calendar, Activity, ShieldCheck, Users } from 'lucide-react'
import { Language } from '../../types'
import { translations } from '../../data/translations'
import { Button } from '../ui/Button'
import { cn } from '../../utils/cn'

export interface HeroSectionProps {
  lang: Language
  onQuizClick: () => void
  onBookingClick: () => void
  className?: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 24,
    },
  },
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onQuizClick,
  onBookingClick,
  className,
}) => {
  const t = translations[lang]

  return (
    <section
      id="hero"
      className={cn(
        'relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-dark-950 text-white',
        'pt-28 pb-16 px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {/* 1. Background Video with Ambient Lighting & Dark Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <video
          className="w-full h-full object-cover scale-105 filter brightness-90"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/Як ми працюємо.jpg"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Primary Dark 950 Overlay for Crystal-Clear Text Readability */}
        <div className="absolute inset-0 bg-dark-950/65 backdrop-brightness-95" />

        {/* Ambient Top & Bottom Vignette for Smooth Transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-transparent to-dark-950" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center"
        >
          {/* 2. Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-white/90 border border-white/20 backdrop-blur-md select-none">
              <span>{t.hero.badge}</span>
            </div>
          </motion.div>

          {/* 3. Centered High-Impact Title */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.12] mb-5 sm:mb-6 text-balance"
          >
            {t.hero.title}
          </motion.h1>

          {/* 4. Subtitle Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10 text-balance"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* 5. Dual CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={onQuizClick}
              icon={<ArrowRight className="w-4 h-4 ml-0.5" />}
              className="w-full sm:w-auto shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 transition-all font-semibold"
            >
              {t.hero.ctaQuiz}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onBookingClick}
              icon={<Calendar className="w-4 h-4 text-slate-200" />}
              className="w-full sm:w-auto text-white border-white/30 hover:border-white hover:bg-white/10 active:bg-white/20 backdrop-blur-md font-medium"
            >
              {t.hero.ctaBooking}
            </Button>
          </motion.div>

          {/* 6. Floating Stats Bar - Sleek Glass with Bold Highlights */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-4xl mx-auto mt-12 sm:mt-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-left">
              {/* Stat Item 1: Precision */}
              <div className="flex items-center gap-3.5 p-2.5 sm:p-3 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0 text-white shadow-xs">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-0.5">
                    {t.hero.stats.precision}
                  </div>
                  <div className="text-xs text-slate-200 leading-snug">
                    {lang === 'uk' ? (
                      <>
                        <strong className="font-bold text-white">Точність</strong> компʼютерної діагностики
                      </>
                    ) : lang === 'en' ? (
                      <>
                        <strong className="font-bold text-white">Precision</strong> computer diagnostics
                      </>
                    ) : (
                      <>
                        <strong className="font-bold text-white">Точность</strong> компьютерной диагностики
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Stat Item 2: Warranty */}
              <div className="flex items-center gap-3.5 p-2.5 sm:p-3 rounded-xl hover:bg-white/5 transition-colors sm:border-l sm:border-white/15 sm:pl-5">
                <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0 text-white shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-0.5">
                    {t.hero.stats.warranty}
                  </div>
                  <div className="text-xs text-slate-200 leading-snug">
                    {lang === 'uk' ? (
                      <>
                        <strong className="font-bold text-white">Офіційна гарантія</strong> на оправи та лінзи
                      </>
                    ) : lang === 'en' ? (
                      <>
                        <strong className="font-bold text-white">Official warranty</strong> on frames & lenses
                      </>
                    ) : (
                      <>
                        <strong className="font-bold text-white">Официальная гарантия</strong> на оправы и линзы
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Stat Item 3: Clients */}
              <div className="flex items-center gap-3.5 p-2.5 sm:p-3 rounded-xl hover:bg-white/5 transition-colors sm:border-l sm:border-white/15 sm:pl-5">
                <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0 text-white shadow-xs">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-0.5">
                    {t.hero.stats.clients}
                  </div>
                  <div className="text-xs text-slate-200 leading-snug">
                    {lang === 'uk' ? (
                      <>
                        <strong className="font-bold text-white">Задоволених клієнтів</strong> в Україні
                      </>
                    ) : lang === 'en' ? (
                      <>
                        <strong className="font-bold text-white">Satisfied clients</strong> in Ukraine
                      </>
                    ) : (
                      <>
                        <strong className="font-bold text-white">Довольных клиентов</strong> в Украине
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
