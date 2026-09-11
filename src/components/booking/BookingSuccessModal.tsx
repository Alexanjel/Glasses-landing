import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, MapPin, Phone, User, Glasses, Sparkles } from 'lucide-react'
import { Language, BookingFormData } from '../../types'
import { translations } from '../../data/translations'
import { ModalWrapper } from '../ui/ModalWrapper'
import { Button } from '../ui/Button'

export interface BookingSuccessModalProps {
  isOpen: boolean
  onClose: () => void
  bookingData: BookingFormData | null
  lang: Language
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  isOpen,
  onClose,
  bookingData,
  lang,
}) => {
  const t = translations[lang].booking
  const footerT = translations[lang].footer

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="md"
      showCloseButton={true}
    >
      <div className="text-center">
        {/* Animated Checkmark Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-emerald-50"
        >
          <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
        </motion.div>

        {/* Modal Title & Message */}
        <h3 className="text-xl sm:text-2xl font-bold text-dark-900 tracking-tight">
          {t.successModal.title}
        </h3>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-sm mx-auto">
          {t.successModal.message}
        </p>

        {/* Summary Card */}
        {bookingData && (
          <div className="bg-surface-subtle/80 rounded-2xl p-5 border border-surface-border text-left mt-6 space-y-3">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-dark-900">
              <User className="w-4 h-4 text-brand-600 shrink-0" />
              <span className="font-semibold">{bookingData.name}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
              <Phone className="w-4 h-4 text-brand-600 shrink-0" />
              <span className="font-mono">{bookingData.phone}</span>
            </div>

            {bookingData.selectedSpecialist && (
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <Sparkles className="w-4 h-4 text-brand-600 shrink-0" />
                <span>
                  {t.specialistLabel}: <strong className="text-dark-900">{bookingData.selectedSpecialist}</strong>
                </span>
              </div>
            )}

            {bookingData.selectedProduct && (
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <Glasses className="w-4 h-4 text-brand-600 shrink-0" />
                <span>
                  Оправа для примірки: <strong className="text-brand-700">{bookingData.selectedProduct}</strong>
                </span>
              </div>
            )}

            <div className="pt-2 border-t border-surface-border flex items-start gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span>{footerT.address}</span>
            </div>
          </div>
        )}

        {/* Close CTA Button */}
        <div className="mt-6">
          <Button
            variant="primary"
            size="md"
            onClick={onClose}
            className="w-full"
          >
            {t.successModal.closeBtn}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default BookingSuccessModal
