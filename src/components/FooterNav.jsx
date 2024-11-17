import { NAV_LINKS } from '@/utils/constants'
import Link from 'next/link'

const FooterNav = () => (
  <div className='text-base flex gap-2 flex-col'>
    <p className='font-semibold mb-1 text-lg'>Наш Магазин</p>
    {NAV_LINKS.map(({ href, label }) => (
      <Link key={href} href={href}>
        {label}
      </Link>
    ))}
  </div>
)

export default FooterNav
