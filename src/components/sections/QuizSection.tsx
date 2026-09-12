import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Check,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { Language, Product } from '../../types'
import { quizSteps } from '../../data/quizData'
import { products } from '../../data/products'
import { translations } from '../../data/translations'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { cn } from '../../utils/cn'

export interface QuizSectionProps {
  lang: Language
  onQuizComplete: (modelName: string) => void
}

export const QuizSection: React.FC<QuizSectionProps> = ({ lang, onQuizComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isCompleted, setIsCompleted] = useState<boolean>(false)
  const [direction, setDirection] = useState<number>(1)

  const t = translations[lang].quiz
  const totalSteps = quizSteps.length
  const currentStep = quizSteps[currentStepIndex]

  const handleSelectOption = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentStepIndex]: optionId,
    }))
  }

  const handleNext = () => {
    if (!answers[currentStepIndex]) return

    if (currentStepIndex < totalSteps - 1) {
      setDirection(1)
      setCurrentStepIndex((prev) => prev + 1)
    } else {
      setDirection(1)
      setIsCompleted(true)
    }
  }

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setDirection(-1)
      setCurrentStepIndex((prev) => prev - 1)
    }
  }

  const handleRestart = () => {
    setDirection(-1)
    setAnswers({})
    setCurrentStepIndex(0)
    setIsCompleted(false)
  }

  // Smart matching algorithm based on quiz answers
  const getMatchedProduct = (): {
    product: Product
    matchScore: number
    matchReasons: string[]
  } => {
    const faceShape = answers[0] // oval, square, round, heart
    const purpose = answers[1] // pc-work, daily-vision, driving-sun, image-style
    const material = answers[2] // titanium, acetate, combo

    let matchedId = 'optik-kuro-01'
    let matchScore = 98

    if (purpose === 'driving-sun') {
      matchedId = 'optik-urban-sun-04'
      matchScore = 99
    } else if (purpose === 'pc-work' || material === 'combo') {
      matchedId = 'optik-vision-ready-03'
      matchScore = 97
    } else if (material === 'acetate' || faceShape === 'square' || faceShape === 'heart') {
      matchedId = 'optik-aero-02'
      matchScore = 98
    } else {
      matchedId = 'optik-kuro-01'
      matchScore = 99
    }

    const product = products.find((p) => p.id === matchedId) || products[0]

    const matchReasonsMap: Record<Language, string[]> = {
      uk: [
        'Ідеально гармоніює з геометрією ліній вашого обличчя',
        'Створена під ваш ключовий щоденний сценарій використання',
        'Ультралегкий матеріал з надійними японськими шарнірами',
      ],
      en: [
        'Harmonizes naturally with your unique facial geometry',
        'Engineered for your primary daily activity & eye comfort',
        'Ultralight premium materials with precision Japanese hinges',
      ],
      ru: [
        'Идеально гармонирует с геометрией линий вашего лица',
        'Создана под ваш ключевой ежедневный сценарий использования',
        'Ультралегкий материал с надежными японскими шарнирами',
      ],
    }

    return {
      product,
      matchScore,
      matchReasons: matchReasonsMap[lang],
    }
  }

  const result = isCompleted ? getMatchedProduct() : null

  // Slide variants for Emil Kowalski spring animations
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
    }),
  }

  return (
    <section
      id="quiz"
      className="relative bg-white py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-surface-border/60"
    >
      {/* Decorative gradient background glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-50/70 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
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
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Quiz Main Card */}
        <div className="relative bg-surface-muted rounded-3xl p-6 sm:p-10 border border-surface-border/80 min-h-[460px] flex flex-col justify-between">
          <AnimatePresence mode="wait" custom={direction}>
            {!isCompleted ? (
              <motion.div
                key={`step-${currentStepIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Step & Progress Bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                      <span className="text-brand-700">
                        {t.step} {currentStepIndex + 1} {t.of} {totalSteps}
                      </span>
                      <span>{Math.round(((currentStepIndex + 1) / totalSteps) * 100)}%</span>
                    </div>

                    <div className="h-2 w-full bg-slate-200/80 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-brand-600 rounded-full"
                        initial={{ width: `${(currentStepIndex / totalSteps) * 100}%` }}
                        animate={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  {/* Question Heading */}
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-dark-900 tracking-tight">
                      {currentStep.question[lang]}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mt-2">
                      {currentStep.subtitle[lang]}
                    </p>
                  </div>

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 my-2">
                    {currentStep.options.map((option) => {
                      const isSelected = answers[currentStepIndex] === option.id
                      return (
                        <motion.button
                          key={option.id}
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          onClick={() => handleSelectOption(option.id)}
                          className={cn(
                            'relative text-left p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex items-start gap-4',
                            isSelected
                              ? 'bg-white border-brand-600 ring-4 ring-brand-100'
                              : 'bg-white/80 hover:bg-white border-surface-border hover:border-slate-300'
                          )}
                        >
                          {/* Selection indicator */}
                          <div
                            className={cn(
                              'shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors',
                              isSelected
                                ? 'border-brand-600 bg-brand-600 text-white'
                                : 'border-slate-300 bg-white'
                            )}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>

                          <div className="flex-1 min-w-0">
                            <p
                              className={cn(
                                'text-sm sm:text-base font-semibold transition-colors',
                                isSelected ? 'text-brand-900' : 'text-dark-900'
                              )}
                            >
                              {option.label[lang]}
                            </p>
                            {option.description && (
                              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                                {option.description[lang]}
                              </p>
                            )}
                          </div>
                        </motion.button>
                      )
                    })}
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-surface-border/80">
                  <Button
                    type="button"
                    variant="ghost"
                    size="md"
                    icon={<ArrowLeft className="w-4 h-4" />}
                    iconPosition="left"
                    onClick={handlePrev}
                    disabled={currentStepIndex === 0}
                    className={cn(currentStepIndex === 0 && 'opacity-0 pointer-events-none')}
                  >
                    {t.prevBtn}
                  </Button>

                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4 ml-1" />}
                    iconPosition="right"
                    onClick={handleNext}
                    disabled={!answers[currentStepIndex]}
                    className="px-7 sm:px-8 font-semibold"
                  >
                    {t.nextBtn}
                  </Button>
                </div>
              </motion.div>
            ) : (
              /* Results View */
              result && (
                <motion.div
                  key="result-card"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Badge & Title */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D63ED] text-white text-xs font-bold mb-3">
                        <Zap className="w-3.5 h-3.5 text-sky-200 fill-sky-200" />
                        <span>{result.matchScore}% точність підбору</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-dark-900 tracking-tight">
                        {t.resultTitle}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 mt-2">
                        {t.resultSubtitle}
                      </p>
                    </div>

                    {/* Matched Product Details Card */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-border flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                      {/* Product Visual */}
                      <div className="w-full md:w-1/2 bg-surface-subtle/80 rounded-xl p-6 flex items-center justify-center relative overflow-hidden">
                        <img
                          src={result.product.image}
                          alt={result.product.name}
                          className="w-full max-h-56 object-contain hover:scale-105 transition-transform duration-300 ease-out"
                        />
                        <span className="absolute top-3 left-3 text-[11px] font-mono font-medium text-slate-600 bg-white/90 px-2 py-0.5 rounded border border-surface-border">
                          {result.product.code}
                        </span>
                      </div>

                      {/* Product Meta */}
                      <div className="w-full md:w-1/2 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                            {t.recommendedModel}
                          </span>
                          <h4 className="text-xl sm:text-2xl font-bold text-dark-900 mt-1">
                            {result.product.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            {result.product.shape} • {result.product.weight}
                          </p>

                          <div className="mt-4 space-y-2">
                            {result.matchReasons.map((reason, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{reason}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between">
                          <div>
                            <span className="text-xs text-slate-500 block">Ціна оправи</span>
                            <span className="text-xl font-extrabold text-dark-900">
                              {result.product.price.toLocaleString()} ₴
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 text-xs text-dark-900 font-medium bg-slate-100 px-3 py-1 rounded-full">
                            <ShieldCheck className="w-3.5 h-3.5 text-dark-900" />
                            <span>2 роки гарантії</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pt-4 border-t border-surface-border/80">
                    <Button
                      type="button"
                      variant="primary"
                      size="lg"
                      icon={<Calendar className="w-4 h-4" />}
                      onClick={() => onQuizComplete(result.product.name)}
                      className="w-full sm:w-auto"
                    >
                      {t.bookChosen}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      icon={<RotateCcw className="w-4 h-4" />}
                      onClick={handleRestart}
                      className="w-full sm:w-auto"
                    >
                      {t.restart}
                    </Button>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default QuizSection
