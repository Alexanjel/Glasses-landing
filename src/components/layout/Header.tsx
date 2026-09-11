import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, Calendar, X } from 'lucide-react'
import { Language } from '../../types'
import { translations } from '../../data/translations'
import { LanguageSelect } from './LanguageSelect'
import { MobileMenuModal } from './MobileMenuModal'
import { Button } from '../ui/Button'
import { cn } from '../../utils/cn'

export interface HeaderProps {
  lang: Language
  onLanguageChange: (lang: Language) => void
  onBookClick: () => void
  className?: string
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onBookClick,
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleQuickNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          'bg-white/90 backdrop-blur-md border-b border-slate-200/80',
          isScrolled ? 'shadow-sm shadow-slate-900/5 py-2.5' : 'py-3.5 sm:py-4',
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Language selector & Desktop quick shortcuts */}
          <div className="flex items-center gap-3 sm:gap-6 flex-1 justify-start">
            <LanguageSelect
              value={lang}
              onChange={onLanguageChange}
              align="left"
            />

            {/* Desktop Nav Links (lg screens) */}
            <nav className="hidden xl:flex items-center gap-5 text-xs font-medium text-slate-600">
              <button
                type="button"
                onClick={() => handleQuickNavClick('#models')}
                className="hover:text-dark-900 transition-colors cursor-pointer"
              >
                {t.nav.models}
              </button>
              <button
                type="button"
                onClick={() => handleQuickNavClick('#about')}
                className="hover:text-dark-900 transition-colors cursor-pointer"
              >
                {t.nav.about}
              </button>
              <button
                type="button"
                onClick={() => handleQuickNavClick('#experts')}
                className="hover:text-dark-900 transition-colors cursor-pointer"
              >
                {t.nav.experts}
              </button>
              <button
                type="button"
                onClick={() => handleQuickNavClick('#catalog')}
                className="hover:text-dark-900 transition-colors cursor-pointer"
              >
                {t.nav.catalog}
              </button>
              <button
                type="button"
                onClick={() => handleQuickNavClick('#quiz')}
                className="hover:text-brand-600 font-semibold text-brand-600 transition-colors cursor-pointer"
              >
                <span>{t.nav.quiz}</span>
              </button>
            </nav>
          </div>

          {/* Center: Brand Logo */}
          <div className="flex flex-col items-center text-center justify-center shrink-0 px-2">
            <a
              href="#hero"
              onClick={handleLogoClick}
              className="flex flex-col items-center group select-none"
              aria-label="OPTIK Studio Home"
            >
              <span className="text-xl sm:text-2xl font-black tracking-widest text-dark-900 leading-none group-hover:opacity-90 transition-opacity">
                OPTIK<span className="text-brand-600">.</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-slate-500 group-hover:text-dark-900 transition-colors mt-0.5">
                {lang === 'uk' ? 'Студія Оптики' : lang === 'en' ? 'Eyewear Studio' : 'Студия Оптики'}
              </span>
            </a>
          </div>

          {/* Right: CTA & Burger Menu */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-end">
            {/* Desktop CTA Button */}
            <Button
              variant="dark"
              size="sm"
              onClick={onBookClick}
              icon={<Calendar className="w-3.5 h-3.5" />}
              className="hidden md:inline-flex shadow-sm hover:shadow text-xs px-4 py-2"
            >
              {t.nav.booking}
            </Button>

            {/* Burger / Close Toggle Button */}
            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.94 }}
              className={cn(
                'flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-full text-xs font-semibold select-none cursor-pointer',
                isMobileMenuOpen
                  ? 'bg-dark-900 text-white border border-dark-900'
                  : 'bg-slate-100/90 hover:bg-slate-200/90 text-dark-900 border border-slate-200/80',
                'transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'
              )}
              aria-label={isMobileMenuOpen ? 'Закрити меню навігації' : 'Відкрити меню навігації'}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-white" />
              ) : (
                <Menu className="w-4 h-4 text-dark-900" />
              )}
              <span className={cn('hidden sm:inline text-xs font-medium', isMobileMenuOpen ? 'text-white' : 'text-slate-700')}>
                {isMobileMenuOpen
                  ? (lang === 'uk' ? 'Закрити' : lang === 'en' ? 'Close' : 'Закрыть')
                  : (lang === 'uk' ? 'Меню' : lang === 'en' ? 'Menu' : 'Меню')}
              </span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile & Full Nav Drawer Modal */}
      <MobileMenuModal
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        lang={lang}
        onLanguageChange={onLanguageChange}
        onBookClick={onBookClick}
      />
    </>
  )
}
