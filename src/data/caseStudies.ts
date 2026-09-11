import { CaseStudy } from '../types'

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-maxim-it',
    title: {
      uk: 'Кейс 1: Зняття хронічної втоми очей та новий діловий образ для Tech Lead',
      en: 'Case 1: Relieving chronic eye fatigue & new executive look for Tech Lead',
      ru: 'Кейс 1: Снятие хронической усталости глаз и новый образ для Tech Lead',
    },
    client: {
      uk: 'Максим, 31 рік — Senior Software Engineer',
      en: 'Maksym, 31 y.o. — Senior Software Engineer',
      ru: 'Максим, 31 год — Senior Software Engineer',
    },
    problem: {
      uk: '10–12 годин за монітором щодня, відчуття піску в очах до вечора. Попередня масивна оправа залишала сліди на переніссі та викликала головний біль.',
      en: '10–12 hours of screen time daily, dry eyes and fatigue. Previous heavy frame pressed uncomfortably on the nose bridge.',
      ru: '10–12 часов перед экраном ежедневно, сухость глаз к вечеру. Прошлая оправа давила на переносицу.',
    },
    solution: {
      uk: 'Виконано комп’ютерну діагностику 0.01D, встановлено лінзи з фільтром синього світла BlueBlocker та підібрано невагому титанову оправу Kuro Titanium.',
      en: 'Executed 0.01D computerized diagnostic, fitted custom BlueBlocker lenses, and paired with featherweight Kuro Titanium frame.',
      ru: 'Провели диагностику 0.01D, установили линзы BlueBlocker и подобрали невесомую титановую оправу Kuro Titanium.',
    },
    result: {
      uk: 'Втома очей повністю зникла. Окуляри важать лише 12 грамів і зовсім не відчуваються протягом усього робочого дня, додаючи впевненості на відеодзвінках.',
      en: 'Eye fatigue eliminated. The 12g frame feels weightless all day while providing a sharp aesthetic on executive calls.',
      ru: 'Усталость глаз полностью исчезла. Оправа 12 грамм совершенно не ощущается во время работы.',
    },
    modelChosen: 'OPTIK Kuro Titanium 01 (Matte Obsidian)',
    image: '/assets/images/product-2.webp',
  },
  {
    id: 'case-anna-art',
    title: {
      uk: 'Кейс 2: Поєднання складної корекції зору з яскравим персональним стилем',
      en: 'Case 2: Pairing complex prescription with bold creative styling',
      ru: 'Кейс 2: Сочетание сложной коррекции зрения с ярким персональным стилем',
    },
    client: {
      uk: 'Анна, 27 років — Арт-директорка студії дизайну',
      en: 'Anna, 27 y.o. — Creative Art Director',
      ru: 'Анна, 27 лет — Арт-директор студии дизайна',
    },
    problem: {
      uk: 'Астигматизм високого ступеня. Не вдавалося знайти оправу, яка б тримала тонкі естетичні лінзи і при цьому підкреслювала творчий характер.',
      en: 'High astigmatism prescription. Struggled to find a stylish frame capable of holding tailored ultra-thin lenses without looking bulky.',
      ru: 'Высокая степень астигматизма. Было сложно найти стильную оправу под индивидуальные тонкие линзы.',
    },
    solution: {
      uk: 'Підібрано геометричну оправу з італійського ацетату Mazzucchelli та виготовлено індивідуальні асферичні японські лінзи Index 1.67.',
      en: 'Selected geometric Italian Mazzucchelli acetate frame fitted with custom Index 1.67 aspheric Japanese optics.',
      ru: 'Подобрали геометричную оправу из итальянского ацетата Mazzucchelli с индивидуальными японскими линзами Index 1.67.',
    },
    result: {
      uk: '100% чіткість зору без спотворень по краях. Оправа стала головним компліментом у колі колег та друзів.',
      en: '100% crisp visual acuity with zero peripheral distortion. The frame became her signature creative statement piece.',
      ru: '100% четкость зрения без искажений. Оправа стала главным акцентом персонального стиля.',
    },
    modelChosen: 'OPTIK Aero Slate 02 (Carbon Black)',
    image: '/assets/images/product-1.webp',
  },
]
