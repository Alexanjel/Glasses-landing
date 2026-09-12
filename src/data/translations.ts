import { Language } from '../types'

export const translations: Record<Language, {
  brand: string
  tagline: string
  nav: {
    hero: string
    models: string
    about: string
    experts: string
    catalog: string
    cases: string
    quiz: string
    reviews: string
    booking: string
    faq: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    ctaQuiz: string
    ctaBooking: string
    stats: {
      precision: string
      precisionLabel: string
      warranty: string
      warrantyLabel: string
      clients: string
      clientsLabel: string
    }
  }
  modelsMarquee: {
    badge: string
    title: string
    description: string
    quickTry: string
    viewAll: string
  }
  about: {
    badge: string
    title: string
    paragraph1: string
    paragraph2: string
    points: {
      title: string
      desc: string
    }[]
  }
  experts: {
    badge: string
    title: string
    subtitle: string
    bookWithExpert: string
    experience: string
    specialization: string
  }
  catalog: {
    badge: string
    title: string
    tabs: {
      all: string
      frames: string
      ready: string
      lenses: string
    }
    detailsBtn: string
    tryOnBtn: string
    specs: {
      material: string
      weight: string
      dimensions: string
    }
    modalTitle: string
    selectColor: string
    bookTryOn: string
  }
  cases: {
    badge: string
    title: string
    subtitle: string
    problemLabel: string
    solutionLabel: string
    resultLabel: string
    modelUsed: string
  }
  quiz: {
    badge: string
    title: string
    subtitle: string
    step: string
    of: string
    prevBtn: string
    nextBtn: string
    resultTitle: string
    resultSubtitle: string
    recommendedModel: string
    bookChosen: string
    restart: string
  }
  reviews: {
    badge: string
    title: string
    subtitle: string
    verifiedClient: string
  }
  booking: {
    badge: string
    title: string
    subtitle: string
    nameLabel: string
    namePlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    charsRemaining: string
    charsMax: string
    specialistLabel: string
    anySpecialist: string
    submitBtn: string
    submitting: string
    privacyNotice: string
    successModal: {
      title: string
      message: string
      closeBtn: string
    }
    validation: {
      nameRequired: string
      phoneRequired: string
      phoneInvalid: string
      messageRequired: string
      messageTooLong: string
      policyRequired: string
    }
  }
  faq: {
    badge: string
    title: string
    subtitle: string
  }
  footer: {
    description: string
    address: string
    hours: string
    phone: string
    email: string
    rights: string
    privacy: string
    terms: string
  }
  backToTop: string
}> = {
  uk: {
    brand: 'OPTIK',
    tagline: 'Студія індивідуального підбору окулярів',
    nav: {
      hero: 'Головна',
      models: 'Колекція',
      about: 'Про нас',
      experts: 'Експерти',
      catalog: 'Каталог',
      cases: 'Наші роботи',
      quiz: 'Підбір оправи',
      reviews: 'Відгуки',
      booking: 'Запис на візит',
      faq: 'Часті запитання',
    },
    hero: {
      badge: 'Преміальна оптика та індивідуальний стиль',
      title: 'Не соромся! Сформуй власний стиль!',
      subtitle: 'Окуляри, що підкреслюють вашу індивідуальність. Поєднання японського титану, італійського ацетату та точної компʼютерної діагностики зору 0.01D.',
      ctaQuiz: 'Підібрати стиль',
      ctaBooking: 'Записатись на візит',
      stats: {
        precision: '0.01D',
        precisionLabel: 'Точність комп’ютерної діагностики',
        warranty: '2 роки',
        warrantyLabel: 'Офіційна гарантія на оправи та лінзи',
        clients: '4 800+',
        clientsLabel: 'Задоволених клієнтів в Україні',
      },
    },
    modelsMarquee: {
      badge: 'Флагманська лінійка',
      title: 'Оправи, створені бути продовженням вашого погляду',
      description: 'Кожна оправа проходить 48 етапів ручної обробки та полірування. Ультралегка вага від 12 грамів, яка не тисне на перенісся та забезпечує абсолютний комфорт протягом усього дня.',
      quickTry: 'Швидка примірка',
      viewAll: 'Дивитися всі моделі',
    },
    about: {
      badge: 'Філософія бренду',
      title: 'Ми створюємо не просто окуляри — ми відкриваємо новий рівень впевненості',
      paragraph1: 'OPTIK — це симбіоз сучасного скандинавсько-японського мінімалізму та високих медичних стандартів оптометрії. Ми відмовились від мас-маркету на користь бездоганної ергономіки та перевірених часом матеріалів.',
      paragraph2: 'Наша місія — допомогти вам подолати будь-які комплекси та зробити окуляри вашим найстильнішим і найкомфортнішим аксесуаром.',
      points: [
        {
          title: 'Японський бета-титан',
          desc: 'Неймовірна гнучкість, гіпоалергенність та невагома міцність.',
        },
        {
          title: 'Ацетат Mazzucchelli 1849',
          desc: 'Органічний італійський ацетат з унікальною глибиною кольору.',
        },
        {
          title: 'Лінзи з мультипокриттям HMC',
          desc: 'Захист від синього світла моніторів, антиблік та гідрофобний шар.',
        },
      ],
    },
    experts: {
      badge: 'Наша команда',
      title: 'Експерти, які дбають про ваше бачення світу',
      subtitle: 'Кожен спеціаліст студії OPTIK має понад 8 років досвіду та міжнародну сертифікацію.',
      bookWithExpert: 'Записатися до експерта',
      experience: 'Досвід роботи',
      specialization: 'Спеціалізація',
    },
    catalog: {
      badge: 'Асортимент продукції',
      title: 'У нашому електронному каталозі представлені:',
      tabs: {
        all: 'Усі категорії',
        frames: 'Оправи',
        ready: 'Готові окуляри',
        lenses: 'Лінзи',
      },
      detailsBtn: 'Характеристики',
      tryOnBtn: 'Приміряти',
      specs: {
        material: 'Матеріал',
        weight: 'Вага',
        dimensions: 'Розміри',
      },
      modalTitle: 'Деталі моделі',
      selectColor: 'Оберіть колір оправи:',
      bookTryOn: 'Забронювати безкоштовну примірку',
    },
    cases: {
      badge: 'Реальні історії',
      title: 'Як ми допомогли нашим клієнтам знайти свій стиль',
      subtitle: 'Кожен кейс — це індивідуальна історія трансформації та ідеальної посадки.',
      problemLabel: 'Запит клієнта:',
      solutionLabel: 'Рішення OPTIK:',
      resultLabel: 'Результат:',
      modelUsed: 'Обрана модель:',
    },
    quiz: {
      badge: 'Smart Frame Matcher',
      title: 'Пройдіть короткий тест та знайдіть свою ідеальну оправу',
      subtitle: 'Всього 3 кроки для точного підбору під вашу форму обличчя та спосіб життя.',
      step: 'Крок',
      of: 'з',
      prevBtn: 'Назад',
      nextBtn: 'Далі',
      resultTitle: 'Ваш персональний результат підбору',
      resultSubtitle: 'На основі ваших відповідей ми підібрали найкращу флагманську модель:',
      recommendedModel: 'Рекомендована модель',
      bookChosen: 'Записатись на примірку цієї оправи',
      restart: 'Пройти тест спочатку',
    },
    reviews: {
      badge: 'Відгуки клієнтів',
      title: 'Що говорять ті, хто вже обрав OPTIK',
      subtitle: 'Чесні оцінки та враження від наших клієнтів з усієї України.',
      verifiedClient: 'Перевірений клієнт',
    },
    booking: {
      badge: 'Онлайн-запис',
      title: 'Запишіться на індивідуальний підбір та перевірку зору',
      subtitle: 'Без черг, у зручний для вас час із персональним лікарем-оптометристом.',
      nameLabel: 'Ваше повне імʼя *',
      namePlaceholder: 'Олександр Шевченко',
      phoneLabel: 'Номер телефону *',
      phonePlaceholder: '+380 (97) 000-00-00',
      messageLabel: 'Ваші побажання або рецепт *',
      messagePlaceholder: 'Опишіть ваші побажання щодо стилю, попередній досвід носіння окулярів або наявність рецепта...',
      charsRemaining: 'Залишилось',
      charsMax: 'з 3000 символів',
      specialistLabel: 'Бажаний спеціаліст (опціонально)',
      anySpecialist: 'Будь-який вільний спеціаліст',
      submitBtn: 'Відправити',
      submitting: 'Відправка...',
      privacyNotice: 'Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності студії OPTIK.',
      successModal: {
        title: 'Заявку успішно прийнято!',
        message: 'Дякуємо! Наш консультант звʼяжеться з вами протягом 15 хвилин для підтвердження деталей візиту.',
        closeBtn: 'Зрозуміло',
      },
      validation: {
        nameRequired: 'Будь ласка, введіть ваше імʼя',
        phoneRequired: 'Номер телефону є обовʼязковим',
        phoneInvalid: 'Введіть коректний номер у форматі +380XXXXXXXXX',
        messageRequired: 'Будь ласка, напишіть супутній текст або побажання',
        messageTooLong: 'Текст не може перевищувати 3000 символів',
        policyRequired: 'Необхідно погодитися з політикою конфіденційності',
      },
    },
    faq: {
      badge: 'FAQ',
      title: 'Часті запитання',
      subtitle: 'Відповідаємо на все, що вас цікавить перед першим візитом.',
    },
    footer: {
      description: 'Преміальна оптика та студія персонального підбору окулярів. Формуйте власний неповторний стиль разом з нами.',
      address: 'м. Київ, вул. Володимирська, 42 (Шоурум & Лабораторія)',
      hours: 'Пн-Нд: 10:00 — 20:00 (за попереднім записом)',
      phone: '+380 (44) 330-22-11',
      email: 'hello@optik-studio.ua',
      rights: 'Всі права захищено.',
      privacy: 'Політика конфіденційності',
      terms: 'Умови сервісу',
    },
    backToTop: 'Вгору',
  },
  en: {
    brand: 'OPTIK',
    tagline: 'Custom Eyewear & Optics Studio',
    nav: {
      hero: 'Home',
      models: 'Collection',
      about: 'About',
      experts: 'Experts',
      catalog: 'Catalog',
      cases: 'Cases',
      quiz: 'Frame Matcher',
      reviews: 'Reviews',
      booking: 'Book Visit',
      faq: 'FAQ',
    },
    hero: {
      badge: 'Premium Optics & Custom Style',
      title: 'Don’t be shy! Shape your own style!',
      subtitle: 'Eyewear that enhances your identity. Japanese titanium, Italian acetate, and precise 0.01D computerized vision diagnostics.',
      ctaQuiz: 'Match My Style',
      ctaBooking: 'Book an Appointment',
      stats: {
        precision: '0.01D',
        precisionLabel: 'Diagnostic computer accuracy',
        warranty: '2 Years',
        warrantyLabel: 'Official warranty on all frames',
        clients: '4,800+',
        clientsLabel: 'Happy clients across Europe',
      },
    },
    modelsMarquee: {
      badge: 'Flagship Series',
      title: 'Frames crafted to be an extension of your glance',
      description: 'Each frame goes through 48 steps of hand polishing. Featherlight weight from 12g ensuring zero pressure and total all-day comfort.',
      quickTry: 'Quick Try-On',
      viewAll: 'Explore All Models',
    },
    about: {
      badge: 'Our Philosophy',
      title: 'We craft more than glasses — we unlock a new level of confidence',
      paragraph1: 'OPTIK is a blend of Scandinavian-Japanese minimalism and advanced medical optometry. We replaced mass production with bespoke ergonomics and timeless materials.',
      paragraph2: 'Our mission is to help you leave any self-doubt behind and make eyewear your most stylish, empowering accessory.',
      points: [
        {
          title: 'Japanese Beta-Titanium',
          desc: 'Extraordinary flexibility, hypoallergenic, and weightless strength.',
        },
        {
          title: 'Mazzucchelli 1849 Acetate',
          desc: 'Organic Italian cellulose acetate with unmatched color depth.',
        },
        {
          title: 'HMC Multi-coated Lenses',
          desc: 'Blue-light screen filter, anti-glare, and oleophobic protection.',
        },
      ],
    },
    experts: {
      badge: 'Our Team',
      title: 'Experts dedicated to how you see the world',
      subtitle: 'Every optometrist and stylist at OPTIK has over 8 years of clinical experience.',
      bookWithExpert: 'Book with this Expert',
      experience: 'Experience',
      specialization: 'Specialty',
    },
    catalog: {
      badge: 'Product Range',
      title: 'In our electronic catalog we feature:',
      tabs: {
        all: 'All Categories',
        frames: 'Frames',
        ready: 'Ready Eyewear',
        lenses: 'Lenses',
      },
      detailsBtn: 'Specifications',
      tryOnBtn: 'Try-On',
      specs: {
        material: 'Material',
        weight: 'Weight',
        dimensions: 'Dimensions',
      },
      modalTitle: 'Model Specifications',
      selectColor: 'Choose frame color:',
      bookTryOn: 'Reserve Free Fitting',
    },
    cases: {
      badge: 'Client Stories',
      title: 'How we helped real clients discover their signature look',
      subtitle: 'Each case study represents a personalized journey of comfort and aesthetics.',
      problemLabel: 'Client Request:',
      solutionLabel: 'OPTIK Solution:',
      resultLabel: 'Outcome:',
      modelUsed: 'Selected Model:',
    },
    quiz: {
      badge: 'Smart Frame Matcher',
      title: 'Take a short quiz to find your ideal frame',
      subtitle: 'Just 3 quick steps tailored to your face anatomy and lifestyle.',
      step: 'Step',
      of: 'of',
      prevBtn: 'Back',
      nextBtn: 'Next',
      resultTitle: 'Your Tailored Match Result',
      resultSubtitle: 'Based on your preferences, here is our top recommended frame:',
      recommendedModel: 'Recommended Frame',
      bookChosen: 'Book a Fitting for this Model',
      restart: 'Restart Quiz',
    },
    reviews: {
      badge: 'Client Reviews',
      title: 'Words from those who chose OPTIK',
      subtitle: 'Genuine feedback from verified customers.',
      verifiedClient: 'Verified Client',
    },
    booking: {
      badge: 'Online Booking',
      title: 'Schedule your bespoke consultation & eye check',
      subtitle: 'No waiting lines, at your convenient time with a dedicated specialist.',
      nameLabel: 'Your Full Name *',
      namePlaceholder: 'Alexander Smith',
      phoneLabel: 'Phone Number *',
      phonePlaceholder: '+380 (97) 000-00-00',
      messageLabel: 'Your preferences or prescription *',
      messagePlaceholder: 'Describe your style preferences, previous prescription or specific requests...',
      charsRemaining: 'Remaining',
      charsMax: 'of 3000 characters',
      specialistLabel: 'Preferred Specialist (Optional)',
      anySpecialist: 'Any available specialist',
      submitBtn: 'Send',
      submitting: 'Sending...',
      privacyNotice: 'By submitting, you agree to OPTIK Studio privacy policy.',
      successModal: {
        title: 'Appointment Request Received!',
        message: 'Thank you! Our specialist will reach out within 15 minutes to confirm the appointment.',
        closeBtn: 'Got it',
      },
      validation: {
        nameRequired: 'Please enter your name',
        phoneRequired: 'Phone number is required',
        phoneInvalid: 'Please enter a valid phone number (+380...)',
        messageRequired: 'Please enter accompanying notes',
        messageTooLong: 'Message must not exceed 3000 characters',
        policyRequired: 'You must agree to the privacy policy',
      },
    },
    faq: {
      badge: 'FAQ',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know before your appointment.',
    },
    footer: {
      description: 'Premium optics and bespoke eyewear studio. Define your unique style with confidence.',
      address: '42 Volodymyrska St, Kyiv (Showroom & Lab)',
      hours: 'Mon-Sun: 10:00 — 20:00 (by appointment)',
      phone: '+380 (44) 330-22-11',
      email: 'hello@optik-studio.ua',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    backToTop: 'Back to Top',
  },
  ru: {
    brand: 'OPTIK',
    tagline: 'Студия индивидуального подбора очков',
    nav: {
      hero: 'Главная',
      models: 'Коллекция',
      about: 'О нас',
      experts: 'Эксперты',
      catalog: 'Каталог',
      cases: 'Наши работы',
      quiz: 'Подбор оправы',
      reviews: 'Отзывы',
      booking: 'Запись на визит',
      faq: 'Частые вопросы',
    },
    hero: {
      badge: 'Премиальная оптика и индивидуальный стиль',
      title: 'Не стесняйся! Сформируй собственный стиль!',
      subtitle: 'Очки, подчеркивающие вашу индивидуальность. Сочетание японского титана, итальянского ацетата и точной компьютерной диагностики 0.01D.',
      ctaQuiz: 'Подобрать стиль',
      ctaBooking: 'Записаться на визит',
      stats: {
        precision: '0.01D',
        precisionLabel: 'Точность компьютерной диагностики',
        warranty: '2 года',
        warrantyLabel: 'Официальная гарантия на все оправы',
        clients: '4 800+',
        clientsLabel: 'Довольных клиентов по всей стране',
      },
    },
    modelsMarquee: {
      badge: 'Флагманская линейка',
      title: 'Оправы, созданные быть продолжением вашего взгляда',
      description: 'Каждая оправа проходит 48 этапов ручной полировки. Ультралегкий вес от 12 грамм для максимального комфорта на протяжении всего дня.',
      quickTry: 'Быстрая примерка',
      viewAll: 'Смотреть все модели',
    },
    about: {
      badge: 'Философия бренда',
      title: 'Мы создаем не просто очки — мы открываем новый уровень уверенности',
      paragraph1: 'OPTIK — это симбиоз скандинавско-японского минимализма и высоких медицинских стандартов оптометрии.',
      paragraph2: 'Наша миссия — помочь вам преодолеть любые сомнения и сделать очки вашим самым стильным аксессуаром.',
      points: [
        {
          title: 'Японский бета-титан',
          desc: 'Гибкость, гипоаллергенность и невесомая прочность.',
        },
        {
          title: 'Ацетат Mazzucchelli 1849',
          desc: 'Органический итальянский ацетат с уникальной глубиной цвета.',
        },
        {
          title: 'Линзы с мультипокрытием HMC',
          desc: 'Защита от синего спектра экранов, антиблик и гидрофобный слой.',
        },
      ],
    },
    experts: {
      badge: 'Наша команда',
      title: 'Эксперты, заботящиеся о вашем видении мира',
      subtitle: 'Каждый специалист студии OPTIK имеет опыт от 8 лет и международную сертификацию.',
      bookWithExpert: 'Записаться к эксперту',
      experience: 'Опыт работы',
      specialization: 'Специализация',
    },
    catalog: {
      badge: 'Ассортимент продукции',
      title: 'В нашем электронном каталоге представлены:',
      tabs: {
        all: 'Все категории',
        frames: 'Оправы',
        ready: 'Готовые очки',
        lenses: 'Линзы',
      },
      detailsBtn: 'Характеристики',
      tryOnBtn: 'Примерить',
      specs: {
        material: 'Материал',
        weight: 'Вес',
        dimensions: 'Размеры',
      },
      modalTitle: 'Детали модели',
      selectColor: 'Выберите цвет оправы:',
      bookTryOn: 'Забронировать бесплатную примерку',
    },
    cases: {
      badge: 'Реальные истории',
      title: 'Как мы помогли клиентам найти свой идеальный образ',
      subtitle: 'Каждый кейс — это индивидуальная история идеальной посадки.',
      problemLabel: 'Запрос клиента:',
      solutionLabel: 'Решение OPTIK:',
      resultLabel: 'Результат:',
      modelUsed: 'Выбранная модель:',
    },
    quiz: {
      badge: 'Smart Frame Matcher',
      title: 'Пройдите короткий тест и найдите свою идеальную оправу',
      subtitle: 'Всего 3 шага для точного подбора под вашу форму лица и образ жизни.',
      step: 'Шаг',
      of: 'из',
      prevBtn: 'Назад',
      nextBtn: 'Далее',
      resultTitle: 'Ваш персональный результат подбора',
      resultSubtitle: 'На основе ваших ответов мы подобрали лучшую флагманскую модель:',
      recommendedModel: 'Рекомендованная модель',
      bookChosen: 'Записаться на примерку этой оправы',
      restart: 'Пройти тест заново',
    },
    reviews: {
      badge: 'Отзывы клиентов',
      title: 'Что говорят те, кто уже выбрал OPTIK',
      subtitle: 'Честные отзывы и оценки от наших клиентов.',
      verifiedClient: 'Проверенный клиент',
    },
    booking: {
      badge: 'Онлайн-запись',
      title: 'Запишитесь на подбор и проверку зрения',
      subtitle: 'Без очередей, в удобное время с персональным оптометристом.',
      nameLabel: 'Ваше полное имя *',
      namePlaceholder: 'Александр Шевченко',
      phoneLabel: 'Номер телефона *',
      phonePlaceholder: '+380 (97) 000-00-00',
      messageLabel: 'Ваши пожелания или рецепт *',
      messagePlaceholder: 'Опишите ваши пожелания по стилю, рецепт или особенности посадки...',
      charsRemaining: 'Осталось',
      charsMax: 'из 3000 символов',
      specialistLabel: 'Желаемый специалист (опционально)',
      anySpecialist: 'Любой свободный специалист',
      submitBtn: 'Отправить',
      submitting: 'Отправка...',
      privacyNotice: 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности студии OPTIK.',
      successModal: {
        title: 'Заявка успешно принята!',
        message: 'Спасибо! Наш консультант свяжется с вами в течение 15 минут для подтверждения деталей визита.',
        closeBtn: 'Понятно',
      },
      validation: {
        nameRequired: 'Пожалуйста, введите ваше имя',
        phoneRequired: 'Номер телефона обязателен',
        phoneInvalid: 'Введите корректный номер (+380...)',
        messageRequired: 'Пожалуйста, напишите сопутствующий текст',
        messageTooLong: 'Текст не может превышать 3000 символов',
        policyRequired: 'Необходимо согласиться с политикой конфиденциальности',
      },
    },
    faq: {
      badge: 'FAQ',
      title: 'Частые вопросы',
      subtitle: 'Отвечаем на всё, что важно знать перед визитом.',
    },
    footer: {
      description: 'Премиальная оптика и студия персонального подбора очков. Формируйте собственный стиль вместе с нами.',
      address: 'г. Киев, ул. Владимирская, 42 (Шоурум & Лаборатория)',
      hours: 'Пн-Вс: 10:00 — 20:00 (по предварительной записи)',
      phone: '+380 (44) 330-22-11',
      email: 'hello@optik-studio.ua',
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия сервиса',
    },
    backToTop: 'Вверх',
  },
}
