import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle2 } from 'lucide-react'
import { Language } from '../../types'
import { reviews } from '../../data/reviews'
import { translations } from '../../data/translations'
import { Badge } from '../ui/Badge'
import { cn } from '../../utils/cn'

export interface ReviewsSectionProps {
  lang: Language
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const [isPaused, setIsPaused] = useState(false)
  const t = translations[lang].reviews

  // Duplicate reviews array for smooth infinite marquee looping
  const displayReviews = [...reviews, ...reviews, ...reviews]

  return (
    <section
      id="reviews"
      className="relative bg-surface-muted py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-surface-border/60"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-50/60 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex justify-center mb-4"
          >
            <Badge variant="brand">{t.badge}</Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark-900 leading-[1.18]"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Infinite Scrolling Reviews Marquee */}
      <div
        className="relative w-full overflow-hidden select-none py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Gradient edge overlays for seamless fade in/out */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-surface-muted via-surface-muted/90 to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-surface-muted via-surface-muted/90 to-transparent z-10"
          aria-hidden="true"
        />

        {/* Marquee Track */}
        <div
          className={cn(
            'flex gap-6 sm:gap-8 w-max transition-all duration-300',
            'animate-marquee-slow'
          )}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {displayReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[320px] sm:w-[380px] lg:w-[420px] flex-shrink-0"
            >
              <div className="h-full bg-white rounded-3xl p-6 sm:p-8 border border-surface-border hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Card Header: Rating stars & Verified Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className={cn(
                            'w-4 h-4',
                            starIdx < review.rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-200'
                          )}
                        />
                      ))}
                    </div>

                    {/* Verified client badge */}
                    {review.verified && (
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{t.verifiedClient}</span>
                      </div>
                    )}
                  </div>

                  {/* Purchased Model Tag */}
                  {review.purchasedModel && (
                    <div className="mb-3">
                      <span className="text-[11px] font-medium text-brand-700 bg-brand-50 border border-brand-200/60 px-2.5 py-1 rounded-md">
                        {review.purchasedModel}
                      </span>
                    </div>
                  )}

                  {/* Review Quote / Text */}
                  <div className="relative mt-3">
                    <Quote className="w-6 h-6 text-slate-200 absolute -top-2 -left-1 -z-0 opacity-60 pointer-events-none" />
                    <p className="relative z-10 text-sm sm:text-base text-slate-700 leading-relaxed italic">
                      «{review.text[lang]}»
                    </p>
                  </div>
                </div>

                {/* Card Footer: Author, City & Date */}
                <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-dark-900">
                      {review.author[lang]}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {review.city[lang]}
                    </p>
                  </div>

                  <span className="text-xs font-mono text-slate-600 bg-surface-subtle px-2 py-1 rounded border border-surface-border">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
