import { useState } from 'react'
import { Language } from './types'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { GlassesMarqueeSection } from './components/sections/GlassesMarqueeSection'
import { AboutSection } from './components/sections/AboutSection'
import { SpecialistsSection } from './components/sections/SpecialistsSection'
import { CatalogSection } from './components/sections/CatalogSection'
import { CaseStudiesSection } from './components/sections/CaseStudiesSection'
import { QuizSection } from './components/sections/QuizSection'
import { ReviewsSection } from './components/sections/ReviewsSection'
import { BookingSection } from './components/sections/BookingSection'
import { FaqSection } from './components/sections/FaqSection'
import { ScrollToTopButton } from './components/ui/ScrollToTopButton'
import { ToasterProvider } from './components/ui/ToasterProvider'
import { translations } from './data/translations'

export function App() {
  const [lang, setLang] = useState<Language>('uk')
  const [selectedSpecialist, setSelectedSpecialist] = useState<string | undefined>(undefined)
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined)

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleQuizClick = () => {
    scrollToSection('quiz')
  }

  const handleBookingClick = () => {
    scrollToSection('booking')
  }

  const handleTryOnClick = (_productCode?: string) => {
    scrollToSection('booking')
  }

  const handleViewCatalogClick = () => {
    scrollToSection('catalog')
  }

  const handleBookWithSpecialist = (specialistName: string) => {
    setSelectedSpecialist(specialistName)
    scrollToSection('booking')
  }

  const handleBookTryOn = (productName: string) => {
    setSelectedProduct(productName)
    scrollToSection('booking')
  }

  const handleBookCaseConsultation = (modelName: string) => {
    setSelectedProduct(modelName)
    scrollToSection('booking')
  }

  const handleQuizComplete = (recommendedModel: string) => {
    setSelectedProduct(recommendedModel)
    scrollToSection('booking')
  }

  const t = translations[lang]

  return (
    <div className="min-h-screen bg-white text-dark-900 flex flex-col antialiased selection:bg-brand-500 selection:text-white">
      {/* 1. Fixed Floating Header & Burger Navigation */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        onBookClick={handleBookingClick}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Block 1: Hero Section with Dimmed Video Background */}
        <HeroSection
          lang={lang}
          onQuizClick={handleQuizClick}
          onBookingClick={handleBookingClick}
        />

        {/* 3. Block 2: Infinite Glasses Marquee / Showcase */}
        <GlassesMarqueeSection
          lang={lang}
          onTryOnClick={handleTryOnClick}
          onViewCatalogClick={handleViewCatalogClick}
        />

        {/* 4. Block 3: About Company & Core Values (Як ми працюємо) */}
        <AboutSection
          lang={lang}
          onConsultationClick={handleBookingClick}
        />

        {/* 5. Blocks 4-6: Our Specialists (Артем, Олена, Софія) */}
        <SpecialistsSection
          lang={lang}
          onBookWithSpecialist={handleBookWithSpecialist}
        />

        {/* 6. Block 7: Product Catalog / Electronic Showcase */}
        <CatalogSection
          lang={lang}
          onBookTryOn={handleBookTryOn}
        />

        {/* 7. Block 8: Real Customer Case Studies & Results */}
        <CaseStudiesSection
          lang={lang}
          onBookCaseConsultation={handleBookCaseConsultation}
        />

        {/* 8. Block 9: Smart Frame Matcher Quiz */}
        <QuizSection
          lang={lang}
          onQuizComplete={handleQuizComplete}
        />

        {/* 9. Block 10: Client Reviews Marquee */}
        <ReviewsSection
          lang={lang}
        />

        {/* 10. Block 11: Smart Booking Form with Validation & Modal */}
        <BookingSection
          lang={lang}
          initialSpecialist={selectedSpecialist}
          initialProduct={selectedProduct}
        />

        {/* 11. Block 12: Frequently Asked Questions (FAQ) */}
        <FaqSection
          lang={lang}
        />
      </main>

      {/* 12. Block 13: Footer with Kyiv showroom contacts & legal modals */}
      <Footer
        lang={lang}
      />

      {/* Floating Back to Top Button */}
      <ScrollToTopButton label={t.backToTop} />

      {/* Toast Notification Provider */}
      <ToasterProvider />
    </div>
  )
}

export default App
