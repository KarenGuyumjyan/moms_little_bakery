import Link from 'next/link'
import { ICONS } from '@/assets/icons'

const contactNavLinks = [
  {
    title: 'Instagram',
    icon: <ICONS.InstagramIcon />,
    href: 'https://www.instagram.com/momslittle_bakery_moscow?igsh=MTdlNWJrMjd2bWVlbg==',
  },
  {
    title: 'Facebook',
    icon: <ICONS.FacebookIcon />,
    href: 'https://www.facebook.com/share/TQRqNd24LKoqM5f9/?mibextid=wwXIfr',
  },
  {
    title: 'Telegram',
    icon: <ICONS.TelegramIcon />,
    href: 'https://t.me/+7ZbHSoET6g41M2Uy',
  },
  {
    title: 'WhatsApp',
    icon: <ICONS.WhatsAppIcon />,
    href: 'https://api.whatsapp.com/send?phone=79161113030',
  },
]

const FooterSocialLinks = () => (
  <div className='mb-5 md:mb-0'>
    <h4 className='text-lg font-semibold uppercase mb-4 tracking-wide'>
      Подпишись на нас
    </h4>
    <p className='mb-4'>Оставайтесь на связи через наши социальные каналы</p>
    <div className='flex gap-2 items-center'>
      {contactNavLinks.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className='p-2 bg-white bg-opacity-10 rounded-full text-white'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  </div>
)

export default FooterSocialLinks
