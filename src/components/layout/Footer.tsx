import React, { useState } from 'react'
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  Glasses,
} from 'lucide-react'
import { Language } from '../../types'
import { translations } from '../../data/translations'
import { ModalWrapper } from '../ui/ModalWrapper'
import { Button } from '../ui/Button'

export interface FooterProps {
  lang: Language
}

// Crisp SVG social icons
const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)

  const t = translations[lang].footer
  const navT = translations[lang].nav

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: navT.hero, id: 'hero' },
    { label: navT.models, id: 'models' },
    { label: navT.about, id: 'about' },
    { label: navT.experts, id: 'experts' },
    { label: navT.catalog, id: 'catalog' },
    { label: navT.cases, id: 'cases' },
    { label: navT.quiz, id: 'quiz' },
    { label: navT.reviews, id: 'reviews' },
    { label: navT.booking, id: 'booking' },
    { label: navT.faq, id: 'faq' },
  ]

  return (
    <footer className="bg-dark-950 text-white pt-20 pb-12 border-t border-dark-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-900/10 rounded-full blur-3xl -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-dark-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/30">
                  <Glasses className="w-6 h-6" />
                </div>
                <span className="text-2xl font-black tracking-wider text-white">
                  OPTIK
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                {t.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram OPTIK"
                className="w-10 h-10 rounded-full bg-dark-800 text-slate-300 hover:text-white hover:bg-brand-600 transition-colors flex items-center justify-center border border-dark-700"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram OPTIK"
                className="w-10 h-10 rounded-full bg-dark-800 text-slate-300 hover:text-white hover:bg-brand-600 transition-colors flex items-center justify-center border border-dark-700"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube OPTIK"
                className="w-10 h-10 rounded-full bg-dark-800 text-slate-300 hover:text-white hover:bg-brand-600 transition-colors flex items-center justify-center border border-dark-700"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
              Навігація сайтом
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-brand-400 transition-colors cursor-pointer text-left focus:outline-none focus:text-brand-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Col */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
              Контакти & Шоурум
            </h4>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                <span>{t.address}</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                <span>{t.hours}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`tel:${t.phone.replace(/[^\d+]/g, '')}`}
                  className="hover:text-brand-400 transition-colors font-mono"
                >
                  {t.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`mailto:${t.email}`}
                  className="hover:text-brand-400 transition-colors"
                >
                  {t.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright & Legal Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} OPTIK. {t.rights}</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer focus:outline-none"
            >
              {t.privacy}
            </button>
            <button
              type="button"
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer focus:outline-none"
            >
              {t.terms}
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <ModalWrapper
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title={t.privacy}
        maxWidth="lg"
      >
        <div className="text-slate-600 text-sm space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          <p>
            Студія <strong>OPTIK</strong> з повагою ставиться до конфіденційності ваших персональних даних та гарантує їх повний захист відповідно до чинного законодавства України та регламенту GDPR.
          </p>
          <h4 className="font-bold text-dark-900">1. Збір інформації</h4>
          <p>
            Ми збираємо лише ті дані, які ви добровільно надаєте під час заповнення онлайн-форми запису на візит (імʼя, номер телефону, побажання або дані оптичного рецепта).
          </p>
          <h4 className="font-bold text-dark-900">2. Використання даних</h4>
          <p>
            Отримані дані використовуються виключно для узгодження часу консультації, бронювання моделей оправ у шоурумі та виготовлення індивідуальних лінз за вашим рецептом.
          </p>
          <h4 className="font-bold text-dark-900">3. Безпека</h4>
          <p>
            Ваші персональні дані ні за яких обставин не передаються третім особам або стороннім комерційним організаціям.
          </p>
          <div className="pt-4">
            <Button
              variant="dark"
              size="sm"
              onClick={() => setIsPrivacyOpen(false)}
              className="w-full sm:w-auto"
            >
              Зрозуміло
            </Button>
          </div>
        </div>
      </ModalWrapper>

      {/* Terms of Service Modal */}
      <ModalWrapper
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title={t.terms}
        maxWidth="lg"
      >
        <div className="text-slate-600 text-sm space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          <p>
            Ласкаво просимо до студії <strong>OPTIK</strong>. Користуючись послугами нашого сайту та шоуруму, ви погоджуєтесь із цими умовами сервісу:
          </p>
          <h4 className="font-bold text-dark-900">1. Запис та бронювання примірки</h4>
          <p>
            Онлайн-запис гарантує резервування обраних моделей оправ на 48 годин та закріплення персонального оптометриста у визначений час.
          </p>
          <h4 className="font-bold text-dark-900">2. Гарантійні зобовʼязання</h4>
          <p>
            На всі оправи з японського титану та ацетату Mazzucchelli надається 2 роки офіційної гарантії. На лінзи з мультипокриттями HMC діє гарантія 1 рік.
          </p>
          <h4 className="font-bold text-dark-900">3. Індивідуальне виготовлення</h4>
          <p>
            Виготовлення оптичних окулярів за складними рецептами здійснюється у власній лабораторії протягом 1–4 робочих днів.
          </p>
          <div className="pt-4">
            <Button
              variant="dark"
              size="sm"
              onClick={() => setIsTermsOpen(false)}
              className="w-full sm:w-auto"
            >
              Зрозуміло
            </Button>
          </div>
        </div>
      </ModalWrapper>
    </footer>
  )
}

export default Footer
