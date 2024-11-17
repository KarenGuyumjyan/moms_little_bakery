import Link from 'next/link'
import { ICONS } from '@/assets/icons'

const contactNavLinks = [
  {
    title: 'Instagram',
    icon: <ICONS.InstagramIcon />,
    href: 'https://www.instagram.com/momslittlebakery_/',
  },
  {
    title: 'Facebook',
    icon: <ICONS.FacebookIcon />,
    href: 'https://www.facebook.com/momslittlebakery4/',
  },
  {
    title: 'WhatsApp',
    icon: <ICONS.WhatsAppIcon />,
    href: 'https://api.whatsapp.com/send?phone=37477303030',
  },
]

const FooterSocialLinks = () => (
  <div className='mb-5 md:mb-0'>
    <h4 className='text-lg font-semibold uppercase mb-4 tracking-wide'>
      Подпишись на нас
    </h4>
    <p className='mb-4'>Оставайтесь на связи через наши социальные каналы</p>
    <div className='flex gap-2'>
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
