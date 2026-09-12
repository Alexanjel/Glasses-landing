import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Language } from '../../types'
import { cn } from '../../utils/cn'

export interface LanguageOption {
  code: Language
  shortLabel: string
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'uk', shortLabel: 'UA' },
  { code: 'en', shortLabel: 'EN' },
  { code: 'ru', shortLabel: 'RU' },
]

export interface LanguageSelectProps {
  value: Language
  onChange: (lang: Language) => void
  className?: string
  align?: 'left' | 'right'
}

export const LanguageSelect: React.FC<LanguageSelectProps> = ({
  value,
  onChange,
  className,
  align = 'left',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const currentOption = LANGUAGES.find((item) => item.code === value) || LANGUAGES[0]

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('touchstart', handleOutsideClick)
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSelect = (lang: Language) => {
    onChange(lang)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className={cn('relative inline-block text-left', className)}>
      {/* Trigger Button - Just the language code centered */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'flex items-center justify-center w-10 h-8 sm:w-11 sm:h-9 rounded-full text-xs font-bold tracking-wider select-none',
          'bg-slate-100 hover:bg-slate-200 text-dark-900 border border-slate-200/80',
          'transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-900',
          isOpen && 'bg-slate-200 text-dark-900'
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Мова: ${currentOption.shortLabel}`}
      >
        <span>{currentOption.shortLabel}</span>
      </motion.button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ type: 'spring', stiffness: 450, damping: 28 }}
            style={{
              transformOrigin: align === 'left' ? 'top left' : 'top right',
            }}
            role="listbox"
            aria-label="Оберіть мову"
            className={cn(
              'absolute top-full mt-2 w-16 sm:w-18 rounded-2xl bg-white',
              'border border-slate-200 p-1.5 z-50',
              align === 'left' ? 'left-0' : 'right-0'
            )}
          >
            <div className="flex flex-col gap-1">
              {LANGUAGES.map((item) => {
                const isSelected = item.code === value
                return (
                  <button
                    key={item.code}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(item.code)}
                    className={cn(
                      'w-full flex items-center justify-center py-2 text-xs font-bold rounded-xl select-none',
                      'transition-colors duration-150 focus:outline-none',
                      isSelected
                        ? 'bg-dark-900 text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-dark-900'
                    )}
                  >
                    <span>{item.shortLabel}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
