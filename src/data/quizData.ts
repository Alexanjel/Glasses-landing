import { QuizStep } from '../types'

export const quizSteps: QuizStep[] = [
  {
    id: 1,
    question: {
      uk: 'Яка у вас приблизна форма обличчя?',
      en: 'What is your general face shape?',
      ru: 'Какая у вас форма лица?',
    },
    subtitle: {
      uk: 'Це дозволить визначити ідеальну пропорцію та геометрію ліній оправи.',
      en: 'This helps determine the optimal proportions and frame geometry.',
      ru: 'Это поможет определить идеальную геометрию линий оправы.',
    },
    options: [
      {
        id: 'oval',
        value: 'oval',
        label: { uk: 'Овальне', en: 'Oval', ru: 'Овальное' },
        description: {
          uk: 'Гармонійні плавні контури, збалансовані пропорції',
          en: 'Balanced proportions with gentle curves',
          ru: 'Гармоничные плавные контуры',
        },
      },
      {
        id: 'square',
        value: 'square',
        label: { uk: 'Квадратне / Прямокутне', en: 'Square / Rectangular', ru: 'Квадратное / Прямоугольное' },
        description: {
          uk: 'Виразна лінія щелепи, чітка структура ліній',
          en: 'Strong jawline and distinct angles',
          ru: 'Выразительная линия челюсти и углы',
        },
      },
      {
        id: 'round',
        value: 'round',
        label: { uk: 'Кругле', en: 'Round', ru: 'Круглое' },
        description: {
          uk: 'М’які плавні лінії приблизно однакової ширини та довжини',
          en: 'Soft curves with similar width and length',
          ru: 'Мягкие округлые линии',
        },
      },
      {
        id: 'heart',
        value: 'heart',
        label: { uk: 'Серцеподібне / Ромбоподібне', en: 'Heart / Diamond', ru: 'Сердцевидное / Ромбовидное' },
        description: {
          uk: 'Ширше чоло та виразні вилиці, звужене підборіддя',
          en: 'Broader forehead and cheekbones with tapered chin',
          ru: 'Широкий лоб и выраженные скулы',
        },
      },
    ],
  },
  {
    id: 2,
    question: {
      uk: 'Для чого вам насамперед потрібні окуляри?',
      en: 'What is your primary use case for eyewear?',
      ru: 'Для чего вам в первую очередь нужны очки?',
    },
    subtitle: {
      uk: 'Ми підберемо лінзи з відповідним захистом та призначенням.',
      en: 'We will match lenses with appropriate protective coatings and index.',
      ru: 'Мы подберем линзы с правильной защитой и назначением.',
    },
    options: [
      {
        id: 'pc-work',
        value: 'pc-work',
        label: { uk: 'Робота за монітором та смартфоном', en: 'Computer & Screen Work', ru: 'Работа за компьютером и экранами' },
        description: {
          uk: 'Захист від синього світла (BlueBlocker) та зняття напруги очей',
          en: 'BlueBlocker filter to eliminate digital eye fatigue',
          ru: 'Защита от синего спектра BlueBlocker',
        },
      },
      {
        id: 'daily-vision',
        value: 'daily-vision',
        label: { uk: 'Щоденне постійне носіння з діоптріями', en: 'Everyday Prescription Wear', ru: 'Постоянное ношение с диоптриями' },
        description: {
          uk: 'Ультралегка посадка без тиску на ніс на весь день',
          en: 'Ultralight weight with zero pressure for 14+ hours daily',
          ru: 'Ультралегкий вес без давления на переносицу',
        },
      },
      {
        id: 'driving-sun',
        value: 'driving-sun',
        label: { uk: 'За кермом, подорожі та активне сонце', en: 'Driving & Sunny Outdoors', ru: 'За рулем и активное солнце' },
        description: {
          uk: 'Поляризація, захист від відблисків та 100% UV400',
          en: 'Polarization, anti-glare, and complete UV400 shield',
          ru: 'Поляризация, антиблик и защита UV400',
        },
      },
      {
        id: 'image-style',
        value: 'image-style',
        label: { uk: 'Іміджевий аксесуар та підкреслення статусу', en: 'Statement Style & Image', ru: 'Имиджевый аксессуар и статус' },
        description: {
          uk: 'Акцентна преміальна оправа з прозорими нульовими лінзами',
          en: 'Signature luxury frame with zero-power crystal lenses',
          ru: 'Премиальная оправа с нулевыми линзами для стиля',
        },
      },
    ],
  },
  {
    id: 3,
    question: {
      uk: 'Яким матеріалам та тактильним відчуттям ви віддаєте перевагу?',
      en: 'Which materials and tactile feel do you prefer?',
      ru: 'Каким материалам вы отдаете предпочтение?',
    },
    subtitle: {
      uk: 'Виберіть акцент на матеріалі оправи для максимального комфорту.',
      en: 'Choose the frame material for ultimate personal comfort.',
      ru: 'Выберите материал оправы для вашего комфорта.',
    },
    options: [
      {
        id: 'titanium',
        value: 'titanium',
        label: { uk: 'Невагомий японський титан (12 г)', en: 'Weightless Japanese Titanium (12g)', ru: 'Невесомый японский титан (12 г)' },
        description: {
          uk: 'Абсолютна легкість, гнучкість, гіпоалергенність',
          en: 'Absolute featherlight comfort, flexible, hypoallergenic',
          ru: 'Абсолютная легкость, гибкость, гипоаллергенно',
        },
      },
      {
        id: 'acetate',
        value: 'acetate',
        label: { uk: 'Італійський ацетат Mazzucchelli', en: 'Italian Mazzucchelli Acetate', ru: 'Итальянский ацетат Mazzucchelli' },
        description: {
          uk: 'Глибока виразна фактура, шляхетний глянець або матовість',
          en: 'Rich tactile texture, elegant gloss or matte finish',
          ru: 'Глубокая фактура, благородный глянец или мат',
        },
      },
      {
        id: 'combo',
        value: 'combo',
        label: { uk: 'Комбінований баланс (Титан + Ацетат)', en: 'Hybrid Combo (Titanium + Acetate)', ru: 'Комбинация (Титан + Ацетат)' },
        description: {
          uk: 'Поєднання міцності титанової дужки та стильного ацетатного фасаду',
          en: 'Strong titanium temples with bold acetate front',
          ru: 'Сочетание титановых дужек и ацетатного фасада',
        },
      },
    ],
  },
]
