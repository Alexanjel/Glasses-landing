import React, { useEffect } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  Sparkles,
  Glasses,
  Info,
  Users,
  Grid,
  HeartHandshake,
  HelpCircle,
  MessageSquareHeart,
  CalendarCheck,
  ChevronRight,
  Phone,
  MapPin,
} from 'lucide-react'
import { Language } from '../../types'
import { translations } from '../../data/translations'
import { Button } from '../ui/Button'
import { cn } from '../../utils/cn'

export interface MobileMenuModalProps {
  isOpen: boolean
  onClose: () => void
  lang: Language
  onLanguageChange?: (lang: Language) => void
  onBookClick?: () => void
}

interface NavItemConfig {
  id: string
  href: string
  key: keyof typeof translations['uk']['nav']
  icon: React.ComponentType<{ className?: string }>
  badge?: string
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: '01', href: '#hero', key: 'hero', icon: Sparkles },
  { id: '02', href: '#models', key: 'models', icon: Glasses },
  { id: '03', href: '#about', key: 'about', icon: Info },
  { id: '04', href: '#experts', key: 'experts', icon: Users },
  { id: '05', href: '#catalog', key: 'catalog', icon: Grid },
  { id: '06', href: '#cases', key: 'cases', icon: HeartHandshake },
  { id: '07', href: '#quiz', key: 'quiz', icon: Sparkles, badge: 'Smart' },
  { id: '08', href: '#reviews', key: 'reviews', icon: MessageSquareHeart },
  { id: '09', href: '#booking', key: 'booking', icon: CalendarCheck },
  { id: '10', href: '#faq', key: 'faq', icon: HelpCircle },
]

export const MobileMenuModal: React.FC<MobileMenuModalProps> = ({
  isOpen,
  onClose,
  lang,
  onBookClick,
}) => {
  const t = translations[lang]

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

  const handleNavClick = (href: string) => {
    onClose()
    // Small timeout to allow drawer exit animation to start smoothly
    setTimeout(() => {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }, 80)
  }

  const handleCtaClick = () => {
    onClose()
    if (onBookClick) {
      onBookClick()
    } else {
      setTimeout(() => {
        const target = document.querySelector('#booking')
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }, 80)
    }
  }

  // Animation variants following Emil Kowalski spring motion
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const drawerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 350,
        damping: 30,
        staggerChildren: 0.035,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 26,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-start">
          {/* Backdrop Blur */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-dark-950/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container - Slides down smoothly from underneath the fixed header */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'relative w-full max-h-[85vh] sm:max-h-[80vh] flex flex-col bg-white z-10',
              'pt-[62px] sm:pt-[72px]',
              'rounded-b-3xl border-b border-slate-200/90 overflow-hidden'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Quick studio intro header badge inside menu */}
            <div className="px-6 pt-3 pb-2 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                {lang === 'uk' ? 'Навігація по студії' : lang === 'en' ? 'Studio Navigation' : 'Навигация по студии'}
              </span>
              <span className="text-[11px] font-mono text-slate-400">10 розділів</span>
            </div>

            {/* Navigation List - Scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar">
              <nav className="flex flex-col gap-1.5" aria-label="Головна навігація">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon
                  const label = t.nav[item.key] || item.key
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      variants={itemVariants}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={cn(
                        'flex items-center justify-between px-4 py-3 rounded-2xl group select-none',
                        'bg-slate-50/70 hover:bg-brand-50/70 text-dark-900 hover:text-brand-700',
                        'border border-slate-100 hover:border-brand-200/60 transition-all duration-150'
                      )}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-brand-500 transition-colors">
                          {item.id}
                        </span>
                        <div className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-600 group-hover:text-brand-600 group-hover:scale-105 transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-dark-900 group-hover:text-brand-900 transition-colors">
                          {label}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-brand-100 text-brand-700">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition-all" />
                    </motion.a>
                  )
                })}
              </nav>
            </div>

            {/* Footer Quick Actions */}
            <div className="px-6 py-5 bg-slate-50/90 border-t border-slate-200/80 flex flex-col gap-3.5">
              <Button
                variant="primary"
                size="md"
                className="w-full font-semibold"
                onClick={handleCtaClick}
                icon={<CalendarCheck className="w-4 h-4" />}
              >
                {t.hero.ctaBooking}
              </Button>

              {/* Minimal contacts info */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 pt-1">
                <a
                  href="tel:+380443302211"
                  className="flex items-center gap-1.5 hover:text-dark-900 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                  <span>+380 (44) 330-22-11</span>
                </a>
                <span className="hidden sm:inline text-slate-300">•</span>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Київ, вул. Володимирська, 42</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
