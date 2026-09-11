import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Feather, ShieldCheck, ArrowRight, Eye, CheckCircle2, Award } from 'lucide-react'
import { Language } from '../../types'
import { translations } from '../../data/translations'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { cn } from '../../utils/cn'

export interface GlassesMarqueeSectionProps {
  lang: Language
  onTryOnClick: (productCode?: string) => void
  onViewCatalogClick: () => void
}

interface MarqueeModel {
  id: string
  code: string
  name: {
    uk: string
    en: string
    ru: string
  }
  shape: {
    uk: string
    en: string
    ru: string
  }
  material: {
    uk: string
    en: string
    ru: string
  }
  weight: string
  price: {
    uk: string
    en: string
    ru: string
  }
  image: string
  tags: {
    uk: string[]
    en: string[]
    ru: string[]
  }
}

const marqueeModels: MarqueeModel[] = [
  {
    id: 'optik-kuro-01',
    code: 'OPT-KURO-01',
    name: {
      uk: 'OPTIK Kuro Titanium 01',
      en: 'OPTIK Kuro Titanium 01',
      ru: 'OPTIK Kuro Titanium 01',
    },
    shape: {
      uk: 'Геометричний прямокутник',
      en: 'Geometric Rectangle',
      ru: 'Геометрический прямоугольник',
    },
    material: {
      uk: 'Японський бета-титан 0.6mm',
      en: 'Japanese Beta-Titanium 0.6mm',
      ru: 'Японский бета-титан 0.6mm',
    },
    weight: '12 г',
    price: {
      uk: '6 800 ₴',
      en: '$170',
      ru: '6 800 ₴',
    },
    image: '/assets/images/glasses-1.webp',
    tags: {
      uk: ['Бестселер', '12 г', 'Бета-титан'],
      en: ['Bestseller', '12g', 'Beta-Titanium'],
      ru: ['Бестселлер', '12г', 'Бета-титан'],
    },
  },
  {
    id: 'optik-aero-02',
    code: 'OPT-AERO-02',
    name: {
      uk: 'OPTIK Aero Slate 02',
      en: 'OPTIK Aero Slate 02',
      ru: 'OPTIK Aero Slate 02',
    },
    shape: {
      uk: 'М’який панто',
      en: 'Soft Panto',
      ru: 'Мягкий панто',
    },
    material: {
      uk: 'Ацетат Mazzucchelli 1849',
      en: 'Mazzucchelli 1849 Acetate',
      ru: 'Ацетат Mazzucchelli 1849',
    },
    weight: '16 г',
    price: {
      uk: '6 200 ₴',
      en: '$155',
      ru: '6 200 ₴',
    },
    image: '/assets/images/glasses-2.webp',
    tags: {
      uk: ['Mazzucchelli', '16 г', 'Хіт сезону'],
      en: ['Mazzucchelli', '16g', 'Season Hit'],
      ru: ['Mazzucchelli', '16г', 'Хит сезона'],
    },
  },
  {
    id: 'optik-edge-03',
    code: 'OPT-MIN-03',
    name: {
      uk: 'OPTIK Minimalist Edge 03',
      en: 'OPTIK Minimalist Edge 03',
      ru: 'OPTIK Minimalist Edge 03',
    },
    shape: {
      uk: 'Округлий мінімалізм',
      en: 'Round Minimalist',
      ru: 'Округлый минимализм',
    },
    material: {
      uk: 'Тонкий японський титан',
      en: 'Slim Japanese Titanium',
      ru: 'Тонкий японский титан',
    },
    weight: '11 г',
    price: {
      uk: '5 900 ₴',
      en: '$150',
      ru: '5 900 ₴',
    },
    image: '/assets/images/glasses-3.webp',
    tags: {
      uk: ['Ультралегкі', '11 г', 'Титан'],
      en: ['Ultralight', '11g', 'Titanium'],
      ru: ['Ультралегкие', '11г', 'Титан'],
    },
  },
  {
    id: 'optik-ready-04',
    code: 'OPT-RDY-04',
    name: {
      uk: 'OPTIK Ready Pro BlueBlocker',
      en: 'OPTIK Ready Pro BlueBlocker',
      ru: 'OPTIK Ready Pro BlueBlocker',
    },
    shape: {
      uk: 'Класичний вейфарер',
      en: 'Classic Wayfarer',
      ru: 'Классический вейфарер',
    },
    material: {
      uk: 'Ацетат & BlueBlocker лінзи',
      en: 'Acetate & BlueBlocker Optics',
      ru: 'Ацетат & BlueBlocker оптика',
    },
    weight: '17 г',
    price: {
      uk: '7 400 ₴',
      en: '$185',
      ru: '7 400 ₴',
    },
    image: '/assets/images/glasses-4.webp',
    tags: {
      uk: ['Готове рішення', 'BlueBlocker', 'Захист очей'],
      en: ['Ready Solution', 'BlueBlocker', 'Eye Shield'],
      ru: ['Готовое решение', 'BlueBlocker', 'Защита глаз'],
    },
  },
  {
    id: 'optik-sun-05',
    code: 'OPT-SUN-05',
    name: {
      uk: 'OPTIK Urban Polarized Sun',
      en: 'OPTIK Urban Polarized Sun',
      ru: 'OPTIK Urban Polarized Sun',
    },
    shape: {
      uk: 'Авіатор модерн',
      en: 'Modern Aviator',
      ru: 'Авиатор модерн',
    },
    material: {
      uk: 'Бета-титан + UV400 Polarized',
      en: 'Beta-Titanium + UV400 Polarized',
      ru: 'Бета-титан + UV400 Polarized',
    },
    weight: '15 г',
    price: {
      uk: '8 100 ₴',
      en: '$200',
      ru: '8 100 ₴',
    },
    image: '/assets/images/glasses-5.webp',
    tags: {
      uk: ['100% UV400', 'Поляризація', 'Для авто'],
      en: ['100% UV400', 'Polarized', 'Driver Choice'],
      ru: ['100% UV400', 'Поляризация', 'Для авто'],
    },
  },
]

const craftHighlights = {
  uk: [
    {
      icon: Award,
      stat: '48',
      statLabel: 'етапів полірування',
      title: '48 етапів ручної обробки',
      description: 'Кожна оправа проходить ювелірне ручне шліфування та багаторівневу обробку для абсолютної шовковистості поверхні.',
      qualityLabel: 'Стандарт якості OPTIK',
    },
    {
      icon: Feather,
      stat: '12 г',
      statLabel: 'ультралегка вага',
      title: 'Невагомий японський титан',
      description: 'Аерокосмічний сплав 0.6 мм забезпечує феноменальну гнучкість і міцність без будь-якої зайвої ваги на обличчі.',
      qualityLabel: 'Стандарт якості OPTIK',
    },
    {
      icon: ShieldCheck,
      stat: '0.0',
      statLabel: 'втоми та слідів',
      title: 'Нульовий тиск на перенісся',
      description: 'Анатомічні носоупори з гіпоалергенного медичного силікону з памʼяттю посадки гарантують комфорт з ранку до ночі.',
      qualityLabel: 'Стандарт якості OPTIK',
    },
  ],
  en: [
    {
      icon: Award,
      stat: '48',
      statLabel: 'polishing stages',
      title: '48 Hand-Polished Stages',
      description: 'Every frame undergoes precision artisan polishing and multi-stage treatment for a silky, flaw-free touch.',
      qualityLabel: 'OPTIK Quality Standard',
    },
    {
      icon: Feather,
      stat: '12g',
      statLabel: 'ultralight weight',
      title: 'Featherlight Japanese Titanium',
      description: 'Aerospace-grade 0.6mm beta-titanium delivers incredible resilience and zero fatigue during long hours.',
      qualityLabel: 'OPTIK Quality Standard',
    },
    {
      icon: ShieldCheck,
      stat: '0.0',
      statLabel: 'pressure & fatigue',
      title: 'Zero Nose Bridge Pressure',
      description: 'Memory-fit medical silicone nose pads distribute weight evenly, leaving no marks or discomfort.',
      qualityLabel: 'OPTIK Quality Standard',
    },
  ],
  ru: [
    {
      icon: Award,
      stat: '48',
      statLabel: 'этапов полировки',
      title: '48 этапов ручной обработки',
      description: 'Каждая оправа проходит ювелирную ручную шлифовку и многоуровневую полировку для безупречной гладкости.',
      qualityLabel: 'Стандарт качества OPTIK',
    },
    {
      icon: Feather,
      stat: '12 г',
      statLabel: 'ультралегкий вес',
      title: 'Невесомый японский титан',
      description: 'Аэрокосмический бета-титан 0.6 мм обеспечивает максимальную прочность при полном ощущении невесомости.',
      qualityLabel: 'Стандарт качества OPTIK',
    },
    {
      icon: ShieldCheck,
      stat: '0.0',
      statLabel: 'усталости и следов',
      title: 'Нулевое давление на переносицу',
      description: 'Анатомические медицинские силиконовые носоупоры равномерно распределяют вес без следов и сдавливания.',
      qualityLabel: 'Стандарт качества OPTIK',
    },
  ],
}

export const GlassesMarqueeSection: React.FC<GlassesMarqueeSectionProps> = ({
  lang,
  onTryOnClick,
  onViewCatalogClick,
}) => {
  const [isPaused, setIsPaused] = useState(false)
  const t = translations[lang].modelsMarquee
  const highlights = craftHighlights[lang]

  // Double the list for seamless CSS infinite loop
  const displayModels = [...marqueeModels, ...marqueeModels]

  const tryOnLabels = {
    uk: 'Приміряти',
    en: 'Try On',
    ru: 'Примерить',
  }

  const priceLabels = {
    uk: 'Ціна оправи',
    en: 'Frame price',
    ru: 'Цена оправы',
  }

  return (
    <section
      id="models"
      className="relative bg-slate-50 py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-200"
    >
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
            {t.description}
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee Strip */}
      <div
        className="relative w-full overflow-hidden select-none py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Gradient Fade Edge Overlays */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10"
          aria-hidden="true"
        />

        {/* Marquee Track Container */}
        <div
          className={cn(
            'flex gap-6 sm:gap-8 w-max transition-all duration-300',
            'animate-marquee-slow'
          )}
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {displayModels.map((model, idx) => (
            <div
              key={`${model.id}-${idx}`}
              className="w-[300px] sm:w-[360px] lg:w-[390px] flex-shrink-0 group/card"
            >
              <div className="h-full bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Image Presentation Box - Pure Transparent Display right at top */}
                  <div className="relative h-48 sm:h-56 w-full bg-slate-50/80 rounded-2xl p-4 flex items-center justify-center overflow-hidden group-hover/card:bg-slate-100/80 transition-colors duration-300">
                    <img
                      src={model.image}
                      alt={model.name[lang]}
                      width="360"
                      height="200"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain filter drop-shadow-[0_8px_14px_rgba(10,13,20,0.12)] group-hover/card:scale-105 transition-transform duration-300 ease-out"
                    />
                  </div>

                  {/* Model Name & Specs */}
                  <div className="mt-5">
                    <h3 className="text-lg font-bold text-dark-900">
                      {model.name[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-1">
                      {model.shape[lang]} • {model.material[lang]}
                    </p>
                  </div>
                </div>

                {/* Card Bottom: Price & Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-600 font-medium block">{priceLabels[lang]}</span>
                    <span className="text-lg font-extrabold text-dark-900 tracking-tight">
                      {model.price[lang]}
                    </span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onTryOnClick(model.code)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-dark-900 text-white hover:bg-dark-800 transition-colors cursor-pointer shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{tryOnLabels[lang]}</span>
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-600/20">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black tracking-tight text-dark-900 block">
                      {item.stat}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                      {item.statLabel}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-dark-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-dark-900">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>{item.qualityLabel}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => onTryOnClick()}
            className="w-full sm:w-auto"
          >
            {t.quickTry}
          </Button>

          <Button
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={onViewCatalogClick}
            className="w-full sm:w-auto"
          >
            {t.viewAll}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default GlassesMarqueeSection
