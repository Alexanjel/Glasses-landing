export type Language = 'uk' | 'en' | 'ru'

export interface ColorVariant {
  name: string
  hex: string
  image: string
}

export type ProductCategory = 'all' | 'frames' | 'ready' | 'lenses'

export interface Product {
  id: string
  name: string
  code: string
  category: ProductCategory
  price: number
  oldPrice?: number
  material: string
  shape: string
  weight: string
  description: {
    uk: string
    en: string
    ru: string
  }
  image: string
  colors: ColorVariant[]
  tags: {
    uk: string[]
    en: string[]
    ru: string[]
  }
  specs: {
    lensWidth: number // mm
    bridgeWidth: number // mm
    templeLength: number // mm
    frameWidth: number // mm
  }
}

export interface Specialist {
  id: string
  name: {
    uk: string
    en: string
    ru: string
  }
  role: {
    uk: string
    en: string
    ru: string
  }
  experience: {
    uk: string
    en: string
    ru: string
  }
  qualifications: {
    uk: string[]
    en: string[]
    ru: string[]
  }
  description: {
    uk: string
    en: string
    ru: string
  }
  image: string
  align: 'left' | 'right'
}

export interface CaseStudy {
  id: string
  title: {
    uk: string
    en: string
    ru: string
  }
  client: {
    uk: string
    en: string
    ru: string
  }
  problem: {
    uk: string
    en: string
    ru: string
  }
  solution: {
    uk: string
    en: string
    ru: string
  }
  result: {
    uk: string
    en: string
    ru: string
  }
  modelChosen: string
  image: string
}

export interface QuizOption {
  id: string
  label: {
    uk: string
    en: string
    ru: string
  }
  description?: {
    uk: string
    en: string
    ru: string
  }
  iconName?: string
  value: string
}

export interface QuizStep {
  id: number
  question: {
    uk: string
    en: string
    ru: string
  }
  subtitle: {
    uk: string
    en: string
    ru: string
  }
  options: QuizOption[]
}

export interface QuizAnswers {
  faceShape?: string
  purpose?: string
  style?: string
  material?: string
}

export interface Review {
  id: string
  author: {
    uk: string
    en: string
    ru: string
  }
  city: {
    uk: string
    en: string
    ru: string
  }
  rating: number
  date: string
  text: {
    uk: string
    en: string
    ru: string
  }
  verified: boolean
  purchasedModel?: string
}

export interface FAQItem {
  id: string
  question: {
    uk: string
    en: string
    ru: string
  }
  answer: {
    uk: string
    en: string
    ru: string
  }
}

export interface BookingFormData {
  name: string
  phone: string
  message: string
  selectedSpecialist?: string
  selectedProduct?: string
  preferredDate?: string
}
