import { ICONS } from '@/assets/icons'
import Link from 'next/link'

const contactInfoContent = [
  {
    title: '33 Tumanyan St',
    icon: <ICONS.PositionIcon />,
    href: 'https://maps.app.goo.gl/b4zcFBe4E3Cm84iX9',
  },
  {
    title: '+374 77 303030',
    icon: <ICONS.PhoneIcon />,
    tag: 'tel',
  },
  {
    title: 'contact@momslittlebakery.am',
    icon: <ICONS.MailIcon />,
    tag: 'mailto',
  },
]

const FooterContactInfo = () => (
  <div className='mb-5 md:mb-0'>
    <h4 className='text-lg font-semibold uppercase mb-4 tracking-wide'>
      Контакты
    </h4>
    {contactInfoContent.map((item) => (
      <div key={item.title} className='flex items-center mb-2'>
        {item.icon}
        <Link
          href={item.href ? item.href : `${item.tag}:${item.title}`}
          target='_blank'
          className='ml-2'
        >
          {item.title}
        </Link>
      </div>
    ))}
  </div>
)

export default FooterContactInfo
