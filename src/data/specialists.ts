import { Specialist } from '../types'

export const specialists: Specialist[] = [
  {
    id: 'expert-founder',
    name: {
      uk: 'Артем Мельник',
      en: 'Artem Melnyk',
      ru: 'Артем Мельник',
    },
    role: {
      uk: 'Засновник студії & Головний оптометрист-стиліст',
      en: 'Founder & Head Optometrist-Stylist',
      ru: 'Основатель студии & Главный оптометрист-стилист',
    },
    experience: {
      uk: '14 років практики',
      en: '14 years of practice',
      ru: '14 лет практики',
    },
    qualifications: {
      uk: [
        'Сертифікація Carl Zeiss Vision Academy (Німеччина)',
        'Спеціалізація на складній корекції астигматизму та прогресивних лінзах',
        'Понад 5 000 успішно підібраних оправ',
      ],
      en: [
        'Certified by Carl Zeiss Vision Academy (Germany)',
        'Specialized in complex astigmatism and progressive lenses',
        'Over 5,000 customized frame fittings',
      ],
      ru: [
        'Сертификация Carl Zeiss Vision Academy (Германия)',
        'Специализация на сложной коррекции астигматизма и прогрессивных линзах',
        'Более 5 000 подобранных оправ',
      ],
    },
    description: {
      uk: '«Окуляри — це перше, на що дивиться ваш співрозмовник. Ми підбираємо оправи не за шаблонами, а за геометрією ліній обличчя, колірним типом та вашим стилем життя.»',
      en: '“Eyewear is the first thing people notice about you. We select frames based on precise facial geometry, personal color tones, and lifestyle.”',
      ru: '«Очки — это первое, на что обращает внимание собеседник. Мы подбираем оправы по геометрии лица и вашему ритму жизни.»',
    },
    image: '/assets/images/expert-1.jpg',
    align: 'right',
  },
  {
    id: 'expert-optometrist',
    name: {
      uk: 'Олена Ковальчук',
      en: 'Olena Kovalchuk',
      ru: 'Елена Ковальчук',
    },
    role: {
      uk: 'Провідний лікар-офтальмолог & Діагност 0.01D',
      en: 'Lead Ophthalmologist & 0.01D Vision Specialist',
      ru: 'Ведущий врач-офтальмолог & Диагност 0.01D',
    },
    experience: {
      uk: '10 років досвіду',
      en: '10 years of experience',
      ru: '10 лет опыта',
    },
    qualifications: {
      uk: [
        'Експерт комп’ютерної абераційного аналізу ока Wavefront',
        'Підбір компʼютерних та офісних лінз для IT-спеціалістів',
        'Член Європейської асоціації оптометрії (EAOO)',
      ],
      en: [
        'Wavefront wavefront aberration eye analysis expert',
        'Digital & office blue-filter lens specialist for IT professionals',
        'Member of European Academy of Optometry and Optics (EAOO)',
      ],
      ru: [
        'Эксперт компьютерного волнового анализа зрения Wavefront',
        'Подбор компьютерных и офисных линз для IT-специалистов',
        'Член Европейской ассоциации оптометрии (EAOO)',
      ],
    },
    description: {
      uk: '«Сучасна діагностика дає змогу виявити мікропорушення фокусу, які викликають втому ввечері. Ми усуваємо напругу з очей на 100%.»',
      en: '“Modern diagnostics identify micro-focus distortions causing evening eye fatigue. We eliminate eye strain completely.”',
      ru: '«Современная диагностика позволяет устранить микронарушения фокуса и вечернюю усталость глаз на 100%.»',
    },
    image: '/assets/images/expert-2.jpg',
    align: 'left',
  },
  {
    id: 'expert-stylist',
    name: {
      uk: 'Софія Гнатюк',
      en: 'Sofia Hnatiuk',
      ru: 'София Гнатюк',
    },
    role: {
      uk: 'Fashion-стиліст оптики & Консультант з матеріалів',
      en: 'Eyewear Fashion Stylist & Materials Consultant',
      ru: 'Fashion-стилист оптики & Консультант по материалам',
    },
    experience: {
      uk: '8 років у fashion-індустрії',
      en: '8 years in fashion industry',
      ru: '8 лет в fashion-индустрии',
    },
    qualifications: {
      uk: [
        'Підбір капсульного гардеробу аксесуарів та іміджевих оправ',
        'Експертиза рідкісних ацетатів та ручного японського гравіювання',
        'Спікер семінарів з оптичного стилю',
      ],
      en: [
        'Capsule accessory and statement eyewear wardrobe styling',
        'Expertise in rare vintage acetates and Japanese hand engraving',
        'Speaker at modern optical styling workshops',
      ],
      ru: [
        'Подбор капсульного гардероба аксессуаров и имиджевых оправ',
        'Экспертиза редких ацетатов и ручной японской гравировки',
        'Спикер семинаров по оптическому стилю',
      ],
    },
    description: {
      uk: '«Оправа може змінити сприйняття людини за одну секунду: додати авторитетності, легкості або творчого шарму. Знайдемо вашу ідеальну форму.»',
      en: '“A frame can transform how people perceive you in one second: adding authority, lightness, or creative flair.”',
      ru: '«Оправа меняет восприятие за секунду: добавляет авторитетности, легкости или творческого шарма.»',
    },
    image: '/assets/images/expert-3.jpg',
    align: 'right',
  },
]
