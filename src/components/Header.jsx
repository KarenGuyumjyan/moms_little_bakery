'use client'
import { NAV_LINKS } from '@/utils/constants'
import { useCounter } from '@/utils/CounterContext'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import DrawerCart from './DrawerCart'
import SubmitForm from './SubmitForm'

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [modalForm, setModalForm] = useState(false)

  const { updateCount, count } = useCounter()
  const router = useRouter()
  const pathname = usePathname()

  const handleOpenDrawer = (modal) => {
    setOpenDrawer((prev) => !prev)
    if (!openDrawer || !modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  useEffect(() => {
    updateCount()
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }, 100)
  }, [])

  return (
    <>
      <div className='fixed top-0 w-full z-10 py-4 flex justify-between items-center px-4 sm:px-8 md:justify-around transition-all duration-500 opacity-100 bg-purple-50'>
        {openDrawer && (
          <DrawerCart
            handleOpenDrawer={handleOpenDrawer}
            setModalForm={setModalForm}
          />
        )}
        {modalForm && <SubmitForm closeModal={setModalForm} />}
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
          <div className='flex gap-5 sm:gap-7 md:gap-10 lg:gap-14 text-lg sm:text-2xl lg:text-3xl font-bold'>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`pb-2 ${
                  pathname === href
                    ? 'border-b-2 border-pink-400 text-pink-500'
                    : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className='relative cursor-pointer' onClick={handleOpenDrawer}>
          <Image src='/bask.svg' alt='Basket' width={36} height={36} priority />
          <p
            className={` ${
              count < 10 ? 'px-2' : 'px-1'
            } py-1 absolute text-xs left-5 top-4 bg-pink-300 rounded-full`}
          >
            {count}
          </p>
        </div>
      </div>
    </>
  )
}

export default Header
