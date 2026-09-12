import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Sparkles,
  Check,
  Ruler,
  Layers,
  Feather,
  Shapes,
  CalendarCheck,
} from 'lucide-react'
import { Language, Product } from '../../types'
import { translations } from '../../data/translations'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { cn } from '../../utils/cn'

export interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  lang: Language
  onBookTryOn: (productName: string) => void
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  lang,
  onBookTryOn,
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)

  // Reset selected color when product changes
  useEffect(() => {
    setSelectedColorIndex(0)
  }, [product?.id])

  // Body scroll lock & escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!product) return null

  const t = translations[lang].catalog
  const activeColor = product.colors[selectedColorIndex] || product.colors[0]
  const currentImage = activeColor?.image || product.image

  const hasDimensions =
    product.specs &&
    (product.specs.lensWidth > 0 ||
      product.specs.bridgeWidth > 0 ||
      product.specs.templeLength > 0 ||
      product.specs.frameWidth > 0)

  const handleBooking = () => {
    const colorSuffix = activeColor ? ` (${activeColor.name})` : ''
    onBookTryOn(`${product.name}${colorSuffix}`)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed inset-0 bg-dark-950/75 will-change-opacity"
            onClick={onClose}
          />

          {/* Modal Content Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            className={cn(
              'relative w-full max-w-3xl bg-white rounded-3xl border border-surface-border',
              'overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-white sticky top-0 z-20">
              <div className="flex items-center gap-2.5">
                <Badge variant="brand" className="text-[10px] sm:text-xs">
                  {t.modalTitle}
                </Badge>
                <span className="text-xs font-mono font-medium text-slate-500 bg-surface-subtle px-2 py-0.5 rounded border border-surface-border">
                  {product.code}
                </span>
              </div>

              <motion.button
                type="button"
                whileTap={{ scale: 0.92 }}
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-dark-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-label="Закрити"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8">
              {/* Top Section: Image & Main Product Info */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Left: Product Image Box */}
                <div className="md:col-span-6">
                  <div className="relative aspect-[4/3] rounded-2xl bg-surface-subtle p-6 flex items-center justify-center border border-surface-border overflow-hidden">
                    <motion.img
                      key={currentImage}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      src={currentImage}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />

                    {/* Old Price Discount Badge */}
                    {product.oldPrice && (
                      <div className="absolute top-3 left-3 bg-brand-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                        -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                      </div>
                    )}
                  </div>

                  {/* Color Selector */}
                  {product.colors.length > 0 && (
                    <div className="mt-4 p-3.5 rounded-xl bg-surface-muted border border-surface-border/80">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-slate-700">
                          {t.selectColor}
                        </span>
                        <span className="text-xs font-medium text-brand-600">
                          {activeColor.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        {product.colors.map((color, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedColorIndex(idx)}
                            className={cn(
                              'relative w-7 h-7 rounded-full transition-transform focus:outline-none flex items-center justify-center',
                              selectedColorIndex === idx
                                ? 'ring-2 ring-brand-500 ring-offset-2 scale-110'
                                : 'hover:scale-105 opacity-85'
                            )}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                            aria-label={color.name}
                          >
                            {selectedColorIndex === idx && (
                              <Check
                                className={cn(
                                  'w-3.5 h-3.5',
                                  color.hex.toLowerCase() === '#ffffff' ||
                                    color.hex.toLowerCase() === '#e2e8f0'
                                    ? 'text-dark-900'
                                    : 'text-white'
                                )}
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: Summary & Price */}
                <div className="md:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      {product.tags[lang].map((tag, idx) => (
                        <span
                          key={idx}
                          className={cn(
                            'text-[11px] font-semibold px-2.5 py-0.5 rounded-full border',
                            idx === 0
                              ? 'bg-brand-50 text-brand-700 border-brand-200/60'
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Product Name */}
                    <h2 className="text-2xl font-bold tracking-tight text-dark-900 mb-2">
                      {product.name}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {product.description[lang]}
                    </p>

                    {/* Specifications List */}
                    <div className="grid grid-cols-1 gap-2.5 py-3 border-y border-surface-border/80 text-xs sm:text-sm">
                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-brand-600" />
                          <span>{t.specs.material}</span>
                        </span>
                        <span className="font-semibold text-dark-900 text-right">
                          {product.material}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-2">
                          <Shapes className="w-4 h-4 text-brand-600" />
                          <span>Форма</span>
                        </span>
                        <span className="font-semibold text-dark-900 text-right">
                          {product.shape}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-slate-600">
                        <span className="flex items-center gap-2">
                          <Feather className="w-4 h-4 text-brand-600" />
                          <span>{t.specs.weight}</span>
                        </span>
                        <span className="font-semibold text-dark-900">
                          {product.weight}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-dark-900 tracking-tight">
                      {product.price.toLocaleString('uk-UA')} ₴
                    </span>
                    {product.oldPrice && (
                      <span className="text-base text-slate-400 line-through">
                        {product.oldPrice.toLocaleString('uk-UA')} ₴
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Technical Dimensions Breakdown */}
              {hasDimensions && (
                <div className="p-4 sm:p-5 rounded-2xl bg-surface-muted border border-surface-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Ruler className="w-4 h-4 text-brand-600" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-dark-900">
                      Технічні розміри оправи (мм)
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-white p-3 rounded-xl border border-surface-border text-center">
                      <span className="text-[11px] text-slate-500 block">Ширина лінзи</span>
                      <span className="text-base font-extrabold text-dark-900">
                        {product.specs.lensWidth} мм
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-surface-border text-center">
                      <span className="text-[11px] text-slate-500 block">Міст перенісся</span>
                      <span className="text-base font-extrabold text-dark-900">
                        {product.specs.bridgeWidth} мм
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-surface-border text-center">
                      <span className="text-[11px] text-slate-500 block">Довжина завушника</span>
                      <span className="text-base font-extrabold text-dark-900">
                        {product.specs.templeLength} мм
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-surface-border text-center">
                      <span className="text-[11px] text-slate-500 block">Загальна ширина</span>
                      <span className="text-base font-extrabold text-dark-900">
                        {product.specs.frameWidth} мм
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer / Action CTA */}
            <div className="px-6 py-4 border-t border-surface-border bg-white sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 hidden sm:flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>Безкоштовна примірка в шоурумі OPTIK</span>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={handleBooking}
                icon={<CalendarCheck className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                {t.bookTryOn}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProductModal
