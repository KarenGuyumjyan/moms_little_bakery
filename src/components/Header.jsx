'use client'
import { NAV_LINKS } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Animate scroll to top on page load/refresh
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scroll effect
      })
    }, 100) // Slight delay to ensure the page has fully loaded before scrolling

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 w-full z-10 py-4 flex justify-between items-center font-greatVibes px-4 sm:px-8 md:justify-around transition-all duration-500 ${
        isScrolled ? 'bg-purple-50 opacity-100' : 'bg-transparent opacity-80'
      }`}
    >
      <Image
        src='/moms_logo.png'
        alt="Mom's Little Bakery"
        width={50}
        height={32}
        priority
        className='cursor-pointer'
        onClick={() => router.push('/')}
      />
      <div className='flex flex-grow justify-center'>
        <div className='flex gap-5 sm:gap-7 md:gap-10 lg:gap-14 text-xl sm:text-2xl lg:text-4xl font-bold'>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`pb-2 ${
                pathname === href
                  ? 'border-b-2 border-pink-400 text-pink-400'
                  : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <Image
        src='/bask.svg'
        alt='Basket'
        width={36}
        height={36}
        priority
        className='cursor-pointer'
      />
    </div>
  )
}

export default Header
