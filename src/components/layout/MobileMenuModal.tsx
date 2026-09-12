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
    requestAnimationFrame(() => {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

  const handleCtaClick = () => {
    onClose()
    if (onBookClick) {
      onBookClick()
    } else {
      requestAnimationFrame(() => {
        const target = document.querySelector('#booking')
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  }

  // High-performance GPU animations: zero CLS, zero backdrop-blur cost, instant 60fps
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.18, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.14, ease: 'easeIn' },
    },
  }

  const drawerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 420,
        damping: 34,
        mass: 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.16,
        ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-start">
          {/* Backdrop: Clean high-performance dark overlay without heavy GPU blur */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-dark-950/60 will-change-opacity cursor-pointer"
            onClick={onClose}
          />

          {/* Modal Container: Slides down smoothly with hardware acceleration */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              'relative w-full max-h-[85vh] sm:max-h-[80vh] flex flex-col bg-white z-10',
              'pt-[62px] sm:pt-[72px]',
              'rounded-b-3xl border-b border-slate-200/90 overflow-hidden',
              'transform-gpu will-change-transform touch-manipulation'
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

            {/* Navigation List - High performance scrollable list */}
            <div className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar overscroll-contain">
              <nav className="flex flex-col gap-1.5" aria-label="Головна навігація">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon
                  const label = t.nav[item.key] || item.key
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={cn(
                        'flex items-center justify-between px-4 py-3 rounded-2xl group select-none cursor-pointer',
                        'bg-slate-50/70 active:bg-brand-50/80 hover:bg-brand-50/70 text-dark-900 hover:text-brand-700',
                        'border border-slate-100 hover:border-brand-200/60 active:scale-[0.99] transition-all duration-150',
                        'touch-manipulation'
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
                    </a>
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
