import { Review } from '../types'

export const reviews: Review[] = [
  {
    id: 'rev-1',
    author: {
      uk: 'Валерій Дорошенко',
      en: 'Valerii Doroshenko',
      ru: 'Валерий Дорошенко',
    },
    city: {
      uk: 'Київ',
      en: 'Kyiv',
      ru: 'Киев',
    },
    rating: 5,
    date: '14.08.2026',
    text: {
      uk: 'Неймовірний рівень сервісу! Раніше соромився носити окуляри на роботі, але модель Kuro Titanium настільки елегантна і невагома, що тепер це мій улюблений аксесуар.',
      en: 'Unmatched level of craftsmanship! I used to avoid wearing glasses in public, but the Kuro Titanium model is so featherlight and sharp that it became my favorite accessory.',
      ru: 'Невероятный уровень сервиса! Раньше стеснялся очков, но оправа Kuro Titanium настолько легкая и стильная, что теперь ношу с удовольствием.',
    },
    verified: true,
    purchasedModel: 'OPTIK Kuro Titanium 01',
  },
  {
    id: 'rev-2',
    author: {
      uk: 'Катерина Сидоренко',
      en: 'Kateryna Sydorenko',
      ru: 'Екатерина Сидоренко',
    },
    city: {
      uk: 'Львів',
      en: 'Lviv',
      ru: 'Львов',
    },
    rating: 5,
    date: '28.07.2026',
    text: {
      uk: 'Пройшла тест на сайті, приїхала на примірку — і рекомендація квізу виявилась 100% точною! Олена провела діагностику 0.01D, лінзи виготовили за 2 дні. Дякую!',
      en: 'Took the quiz online, visited for fitting — and the recommendation matched 100%! Olena did the 0.01D check, lenses ready in 2 days. Super happy!',
      ru: 'Прошла квиз, приехала на примерку — и подбор оказался идеальным! Диагностика 0.01D на высоте. Спасибо!',
    },
    verified: true,
    purchasedModel: 'OPTIK Aero Slate 02',
  },
  {
    id: 'rev-3',
    author: {
      uk: 'Дмитро Кравчук',
      en: 'Dmytro Kravchuk',
      ru: 'Дмитрий Кравчук',
    },
    city: {
      uk: 'Одеса',
      en: 'Odesa',
      ru: 'Одесса',
    },
    rating: 5,
    date: '02.08.2026',
    text: {
      uk: 'Японський титан вартий кожної гривні. Окуляри взагалі не відчуваються на голові. Жодного тиску за вухами навіть після 12 годин за компʼютером.',
      en: 'Japanese titanium is worth every cent. You literally forget you are wearing glasses. Zero pressure behind ears even after 12-hour coding sprints.',
      ru: 'Японский титан стоит каждой гривны. Очки вообще не ощущаются. Никакого давления за ушами после 12 часов за монитором.',
    },
    verified: true,
    purchasedModel: 'OPTIK Ready Pro Vision',
  },
  {
    id: 'rev-4',
    author: {
      uk: 'Ірина Мельниченко',
      en: 'Iryna Melnychenko',
      ru: 'Ирина Мельниченко',
    },
    city: {
      uk: 'Дніпро',
      en: 'Dnipro',
      ru: 'Днепр',
    },
    rating: 5,
    date: '19.08.2026',
    text: {
      uk: 'Приємно вражена атмосферою шоуруму та уважністю до деталей. Підібрали сонцезахисні поляризаційні лінзи під мою оцифровану діоптрію. Ідеально!',
      en: 'Impressed by the studio atmosphere and attention to craft. Fitted custom prescription polarized sun lenses. Perfection!',
      ru: 'Впечатлена атмосферой шоурума и вниманием к деталям. Подобрали поляризационные солнцезащитные линзы с диоптриями.',
    },
    verified: true,
    purchasedModel: 'OPTIK Urban Polarized Sun',
  },
]
