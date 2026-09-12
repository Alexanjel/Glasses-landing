import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export interface ScrollToTopButtonProps {
  label?: string
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ label = 'Вгору' }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 450
          setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev))
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    toggleVisibility()
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-40 p-3.5 sm:p-4 rounded-full bg-dark-900 text-white hover:bg-black border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 flex items-center justify-center group"
          aria-label={label}
        >
          <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
