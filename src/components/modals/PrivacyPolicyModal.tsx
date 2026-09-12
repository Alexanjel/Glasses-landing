import React from 'react'
import { Language } from '../../types'
import { ModalWrapper } from '../ui/ModalWrapper'
import { Button } from '../ui/Button'
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react'

export interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
  lang: Language
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const content = {
    uk: {
      title: 'Політика конфіденційності',
      intro:
        'Студія OPTIK з особливою відповідальністю ставиться до захисту ваших персональних даних. Ця політика розроблена відповідно до Закону України «Про захист персональних даних» та Загального регламенту захисту даних (GDPR).',
      sections: [
        {
          icon: <FileText className="w-4 h-4 text-brand-600" />,
          title: '1. Які дані ми збираємо',
          text: 'Під час запису на консультацію або використання форми підбору ми збираємо лише необхідні контактні відомості: ваше імʼя, номер мобільного телефону, побажання щодо стилю або інформацію з вашого оптичного рецепта (діоптрії, міжосьова відстань).',
        },
        {
          icon: <Eye className="w-4 h-4 text-brand-600" />,
          title: '2. Мета використання даних',
          text: 'Всі надані дані використовуються виключно для організації індивідуального візиту до оптометриста, бронювання обраних оправ у шоурумі, виготовлення індивідуальних лінз та звʼязку з вами щодо деталей замовлення.',
        },
        {
          icon: <Lock className="w-4 h-4 text-brand-600" />,
          title: '3. Безпека та нерозголошення',
          text: 'Ми застосовуємо сучасні цифрові протоколи шифрування. Ваші персональні дані ні за яких умов не передаються, не продаються та не надаються третім особам чи комерційним базам даних.',
        },
        {
          icon: <ShieldCheck className="w-4 h-4 text-brand-600" />,
          title: '4. Ваші права',
          text: 'Ви маєте повне право в будь-який момент отримати копію своїх збережених даних, оновити їх або вимагати повного видалення з нашої системи, звернувшись на пошту hello@optik-studio.ua.',
        },
      ],
      closeBtn: 'Зрозуміло',
    },
    en: {
      title: 'Privacy Policy',
      intro:
        'OPTIK Studio is deeply committed to protecting your personal information. This Privacy Policy is compliant with the General Data Protection Regulation (GDPR) and Ukrainian privacy laws.',
      sections: [
        {
          icon: <FileText className="w-4 h-4 text-brand-600" />,
          title: '1. Data We Collect',
          text: 'When you book an appointment, we only collect essential contact information: your name, telephone number, style preferences, and optional optical prescription data.',
        },
        {
          icon: <Eye className="w-4 h-4 text-brand-600" />,
          title: '2. How We Use Your Data',
          text: 'Your details are strictly used to schedule visits with our optometrists, reserve eyewear frames in our showroom, craft custom lenses, and follow up on your order status.',
        },
        {
          icon: <Lock className="w-4 h-4 text-brand-600" />,
          title: '3. Confidentiality & Security',
          text: 'We apply modern industry-standard encryption. Your personal records are never shared, sold, or disclosed to any third-party marketing entities.',
        },
        {
          icon: <ShieldCheck className="w-4 h-4 text-brand-600" />,
          title: '4. Your Rights',
          text: 'You maintain the right to inspect, update, or request the permanent deletion of your stored records at any time by emailing us at hello@optik-studio.ua.',
        },
      ],
      closeBtn: 'Understood',
    },
    ru: {
      title: 'Политика конфиденциальности',
      intro:
        'Студия OPTIK ответственно относится к защите ваших персональных данных. Данная политика соответствует требованиям закона Украины «О защите персональных данных» и европейского регламента GDPR.',
      sections: [
        {
          icon: <FileText className="w-4 h-4 text-brand-600" />,
          title: '1. Какие данные мы собираем',
          text: 'При записи на консультацию мы собираем только необходимые сведения: ваше имя, контактный номер телефона, пожелания по стилю либо параметры оптического рецепта.',
        },
        {
          icon: <Eye className="w-4 h-4 text-brand-600" />,
          title: '2. Цели использования данных',
          text: 'Данные используются исключительно для согласования времени консультации, бронирования оправ в шоуруме, изготовления индивидуальных линз и сервисной связи.',
        },
        {
          icon: <Lock className="w-4 h-4 text-brand-600" />,
          title: '3. Безопасность и неразглашение',
          text: 'Мы используем надежные стандарты защиты данных. Персональная информация никогда не передается и не продается третьим лицам или рекламным сетям.',
        },
        {
          icon: <ShieldCheck className="w-4 h-4 text-brand-600" />,
          title: '4. Ваши права',
          text: 'Вы имеете право запросить актуальную копию ваших данных, обновить их либо потребовать полного удаления из базы, написав на hello@optik-studio.ua.',
        },
      ],
      closeBtn: 'Понятно',
    },
  }[lang]

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={content.title}
      maxWidth="lg"
    >
      <div className="text-slate-600 text-sm space-y-5 max-h-[65vh] overflow-y-auto pr-2 no-scrollbar">
        <p className="text-slate-700 leading-relaxed font-normal bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
          {content.intro}
        </p>

        <div className="space-y-4">
          {content.sections.map((section, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-surface-border space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-lg bg-brand-50 shrink-0">
                  {section.icon}
                </span>
                <h4 className="font-bold text-dark-900 text-sm">
                  {section.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <Button
            variant="dark"
            size="sm"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 font-semibold"
          >
            {content.closeBtn}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default PrivacyPolicyModal
