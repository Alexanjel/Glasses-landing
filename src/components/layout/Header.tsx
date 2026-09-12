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
  const [activeSection, setActiveSection] = useState<string>('hero')

  const t = translations[lang]

  const navItems = [
    { id: 'hero', href: '#hero', label: t.nav.hero },
    { id: 'models', href: '#models', label: t.nav.models },
    { id: 'about', href: '#about', label: t.nav.about },
    { id: 'experts', href: '#experts', label: t.nav.experts },
    { id: 'catalog', href: '#catalog', label: t.nav.catalog },
    { id: 'cases', href: '#cases', label: t.nav.cases },
    { id: 'quiz', href: '#quiz', label: t.nav.quiz },
    { id: 'reviews', href: '#reviews', label: t.nav.reviews },
    { id: 'faq', href: '#faq', label: t.nav.faq },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Scroll-Spy detection
      const scrollPosition = window.scrollY + 140
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i]
        const section = document.getElementById(item.id)
        if (section) {
          const top = section.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lang])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setActiveSection('hero')
  }

  const handleQuickNavClick = (href: string, id: string) => {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          'bg-white/95 border-b border-slate-200/80',
          isScrolled ? 'py-2.5' : 'py-3 sm:py-3.5',
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* MOBILE HEADER (visible on screens < lg) */}
          <div className="flex lg:hidden items-center justify-between">
            {/* Left: Language selector */}
            <div className="flex items-center justify-start flex-1">
              <LanguageSelect
                value={lang}
                onChange={onLanguageChange}
                align="left"
              />
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

            {/* Right: Burger Menu */}
            <div className="flex items-center justify-end flex-1">
              <motion.button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                whileTap={{ scale: 0.94 }}
                className={cn(
                  'flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-full text-xs font-semibold select-none cursor-pointer touch-manipulation',
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

          {/* DESKTOP HEADER (visible on screens >= lg) */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            {/* Left: Brand Logo + Left-aligned Subtitle */}
            <div className="flex items-center shrink-0">
              <a
                href="#hero"
                onClick={handleLogoClick}
                className="flex flex-col items-start group select-none"
                aria-label="OPTIK Studio Home"
              >
                <span className="text-2xl font-black tracking-widest text-dark-900 leading-none group-hover:opacity-90 transition-opacity">
                  OPTIK<span className="text-brand-600">.</span>
                </span>
                <span className="text-[9.5px] tracking-[0.2em] uppercase font-semibold text-slate-500 group-hover:text-dark-900 transition-colors mt-0.5 text-left">
                  {lang === 'uk' ? 'Студія Оптики' : lang === 'en' ? 'Eyewear Studio' : 'Студия Оптики'}
                </span>
              </a>
            </div>

            {/* Center: Dynamic Scroll-Spy Navigation Links */}
            <nav className="flex items-center justify-center gap-1 xl:gap-2 text-xs xl:text-sm font-medium">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleQuickNavClick(item.href, item.id)}
                    className={cn(
                      'relative px-3 xl:px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap',
                      isActive
                        ? 'text-brand-600 font-bold bg-brand-50/90'
                        : 'text-slate-600 hover:text-dark-900 hover:bg-slate-100/70'
                    )}
                  >
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>

            {/* Right: CTA Button + Language Select */}
            <div className="flex items-center gap-3 shrink-0">
              <Button
                variant="dark"
                size="sm"
                onClick={onBookClick}
                icon={<Calendar className="w-3.5 h-3.5" />}
                className="text-xs px-4 py-2 font-semibold whitespace-nowrap"
              >
                {t.nav.booking}
              </Button>

              <LanguageSelect
                value={lang}
                onChange={onLanguageChange}
                align="right"
              />
            </div>
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

export default Header
