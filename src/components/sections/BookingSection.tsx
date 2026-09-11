import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import {
  User,
  Phone,
  Sparkles,
  Glasses,
  X,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'
import { Language, BookingFormData } from '../../types'
import { specialists } from '../../data/specialists'
import { translations } from '../../data/translations'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { BookingSuccessModal } from '../booking/BookingSuccessModal'
import { cn } from '../../utils/cn'

export interface BookingSectionProps {
  lang: Language
  initialSpecialist?: string
  initialProduct?: string
}

const MAX_MESSAGE_LENGTH = 3000

// Helper to format Ukrainian phone numbers into +380 (XX) XXX-XX-XX
const formatUkrainianPhone = (value: string): string => {
  const digits = value.replace(/\D/g, '')
  if (!digits) return ''

  let normalizedDigits = digits
  if (normalizedDigits.startsWith('380')) {
    // Already has country code
  } else if (normalizedDigits.startsWith('0')) {
    normalizedDigits = '38' + normalizedDigits
  } else if (normalizedDigits.startsWith('80')) {
    normalizedDigits = '3' + normalizedDigits
  } else {
    normalizedDigits = '380' + normalizedDigits
  }

  // Limit to 12 digits (380 + 9 digits)
  normalizedDigits = normalizedDigits.slice(0, 12)

  let result = '+380'
  const rest = normalizedDigits.slice(3)
  if (rest.length > 0) {
    result += ` (${rest.slice(0, 2)}`
  }
  if (rest.length >= 2) {
    result += `) ${rest.slice(2, 5)}`
  }
  if (rest.length >= 5) {
    result += `-${rest.slice(5, 7)}`
  }
  if (rest.length >= 7) {
    result += `-${rest.slice(7, 9)}`
  }

  return result
}

// Helper to validate Ukrainian phone numbers
const isValidUkrainianPhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, '')
  return digits.length === 12 && digits.startsWith('380')
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  lang,
  initialSpecialist,
  initialProduct,
}) => {
  const t = translations[lang].booking
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('+380 ')
  const [message, setMessage] = useState('')
  const [selectedSpecialist, setSelectedSpecialist] = useState<string>('')
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(initialProduct)
  
  const [errors, setErrors] = useState<{
    name?: string
    phone?: string
    message?: string
  }>({})
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null)

  // Update initial selections if passed via props
  useEffect(() => {
    if (initialSpecialist) {
      setSelectedSpecialist(initialSpecialist)
    }
  }, [initialSpecialist])

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct)
    }
  }, [initialProduct])

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value
    // If user deletes everything, reset to base +380 
    if (rawVal.length < 5 && !rawVal.includes('380')) {
      setPhone('+380 ')
      return
    }
    const formatted = formatUkrainianPhone(rawVal)
    setPhone(formatted || '+380 ')
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }))
    }
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value
    if (val.length <= MAX_MESSAGE_LENGTH) {
      setMessage(val)
      if (errors.message) {
        setErrors((prev) => ({ ...prev, message: undefined }))
      }
    }
  }

  const validateForm = (): boolean => {
    const newErrors: { name?: string; phone?: string; message?: string } = {}

    if (!name.trim()) {
      newErrors.name = t.validation.nameRequired
    }

    if (!phone || phone.trim() === '+380' || phone.trim() === '+380 ') {
      newErrors.phone = t.validation.phoneRequired
    } else if (!isValidUkrainianPhone(phone)) {
      newErrors.phone = t.validation.phoneInvalid
    }

    if (!message.trim()) {
      newErrors.message = t.validation.messageRequired
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = t.validation.messageTooLong
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error(lang === 'uk' ? 'Будь ласка, перевірте заповнені поля' : lang === 'en' ? 'Please check required fields' : 'Пожалуйста, проверьте поля')
      return
    }

    setIsSubmitting(true)

    // Simulate API request
    setTimeout(() => {
      const data: BookingFormData = {
        name: name.trim(),
        phone: phone.trim(),
        message: message.trim(),
        selectedSpecialist: selectedSpecialist || undefined,
        selectedProduct: selectedProduct || undefined,
      }

      setSubmittedData(data)
      setIsSubmitting(false)
      setIsSuccessModalOpen(true)

      // Trigger Sonner Toast
      toast.success(t.successModal.title, {
        description: t.successModal.message,
        duration: 5000,
      })

      // Reset form
      setName('')
      setPhone('+380 ')
      setMessage('')
      setSelectedSpecialist('')
      setSelectedProduct(undefined)
      setErrors({})
    }, 800)
  }

  const charsRemaining = MAX_MESSAGE_LENGTH - message.length

  return (
    <section
      id="booking"
      className="relative bg-white py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-surface-border/60"
    >
      {/* Ambient background decoration */}
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-50/70 rounded-full blur-3xl -z-10"
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

        {/* Booking Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
          {/* Left Info Column - Symmetrical & Full Height */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-5 bg-gradient-to-b from-dark-900 via-dark-900 to-[#0c162d] text-white rounded-3xl p-7 sm:p-9 lg:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden h-full border border-slate-800/80"
          >
            <div
              className="pointer-events-none absolute -bottom-12 -right-12 w-64 h-64 bg-brand-600/25 rounded-full blur-3xl"
              aria-hidden="true"
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OPTIK Experience</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 leading-tight">
                Що входить у ваш візит:
              </h3>

              <div className="space-y-4 sm:space-y-5 text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Компʼютерна діагностика рефракції ока з точністю до 0.01D</span>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Індивідуальний підбір оправи за анатомією та стилем</span>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Тестування поляризації та захисних фільтрів BlueBlocker</span>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Чай, кава та персональна примірка без поспіху (45 хв)</span>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Безкоштовне ультразвукове очищення та посадка оправи</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-brand-400" />
                <span>30–45 хвилин</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>Без черг</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 bg-surface-muted rounded-3xl p-6 sm:p-10 border border-surface-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pre-selected Product Badge (from Quiz/Catalog) */}
              {selectedProduct && (
                <div className="bg-brand-50 border border-brand-200 rounded-2xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Glasses className="w-4 h-4 text-brand-600" />
                    <span className="text-xs sm:text-sm font-semibold text-brand-900">
                      Обрана оправа: {selectedProduct}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(undefined)}
                    className="p-1 text-brand-600 hover:text-brand-900 rounded-full hover:bg-brand-100 transition-colors"
                    aria-label="Прибрати обрану оправу"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Field 1: Name */}
              <div>
                <label htmlFor="booking-name" className="block text-xs sm:text-sm font-semibold text-dark-900 mb-2">
                  {t.nameLabel}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="booking-name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
                    }}
                    placeholder={t.namePlaceholder}
                    className={cn(
                      'w-full pl-11 pr-4 py-3.5 bg-white rounded-2xl border text-sm text-dark-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all',
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-surface-border hover:border-slate-300'
                    )}
                  />
                </div>
                {errors.name && (
                  <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Field 2: Phone */}
              <div>
                <label htmlFor="booking-phone" className="block text-xs sm:text-sm font-semibold text-dark-900 mb-2">
                  {t.phoneLabel}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="booking-phone"
                    name="tel"
                    autoComplete="tel"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder={t.phonePlaceholder}
                    className={cn(
                      'w-full pl-11 pr-4 py-3.5 bg-white rounded-2xl border font-mono text-sm text-dark-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all',
                      errors.phone
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-surface-border hover:border-slate-300'
                    )}
                  />
                </div>
                {errors.phone && (
                  <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Optional Field: Preferred Specialist */}
              <div>
                <label htmlFor="booking-specialist" className="block text-xs sm:text-sm font-semibold text-dark-900 mb-2">
                  {t.specialistLabel}
                </label>
                <div className="relative">
                  <select
                    id="booking-specialist"
                    name="specialist"
                    value={selectedSpecialist}
                    onChange={(e) => setSelectedSpecialist(e.target.value)}
                    className="w-full pl-4 pr-11 py-3.5 bg-white rounded-2xl border border-surface-border hover:border-slate-300 text-sm text-dark-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all cursor-pointer appearance-none"
                  >
                    <option value="">{t.anySpecialist}</option>
                    {specialists.map((spec) => (
                      <option key={spec.id} value={spec.name[lang]}>
                        {spec.name[lang]} ({spec.role[lang]})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Field 3: Accompanying text / Notes (strictly up to 3000 chars) */}
              <div>
                <div className="flex items-center justify-between mb-2 gap-3">
                  <label htmlFor="booking-message" className="block text-xs sm:text-sm font-semibold text-dark-900 whitespace-nowrap truncate">
                    {t.messageLabel}
                  </label>
                  <span
                    className={cn(
                      'text-xs font-mono font-medium shrink-0',
                      charsRemaining < 100
                        ? 'text-amber-600 font-bold'
                        : 'text-slate-600'
                    )}
                  >
                    {charsRemaining}/3000
                  </span>
                </div>

                <div className="relative">
                  <textarea
                    id="booking-message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={handleMessageChange}
                    placeholder={t.messagePlaceholder}
                    className={cn(
                      'w-full p-4 bg-white rounded-2xl border text-sm text-dark-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none',
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-surface-border hover:border-slate-300'
                    )}
                  />
                </div>
                {errors.message && (
                  <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA Button - 'Відправити' + Arrow in single line without wrapping */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  icon={<ArrowRight className="w-4 h-4 ml-1" />}
                  iconPosition="right"
                  className="w-full justify-center text-center font-bold text-base px-8 py-4 gap-2.5 shadow-md shadow-brand-600/25 whitespace-nowrap"
                >
                  {isSubmitting ? t.submitting : t.submitBtn}
                </Button>

                <p className="text-[11px] text-slate-500 text-center mt-3">
                  {t.privacyNotice}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <BookingSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        bookingData={submittedData}
        lang={lang}
      />
    </section>
  )
}

export default BookingSection
