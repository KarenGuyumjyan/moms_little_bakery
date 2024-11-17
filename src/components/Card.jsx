'use client'
import Image from 'next/image'

const Card = function ({ number, title, price, cookieStore }) {
  const handleAddCake = () => {
    const existingCookie = cookieStore.has('bag')
    let array = existingCookie ? JSON.parse(existingCookie.value) : []

    if (typeof newCake === number) {
      if (!array.find((cake) => cake.id === newCake)) {
        array.push({ id: newItem, count: 1, size: 'big' })
      }
    } else {
      array.push(newItem)
    }

    cookieStore.set('bag', JSON.stringify(array), { path: '/', httpOnly: true })
  }

  return (
    <div
      className={
        'relative flex flex-col justify-end items-center gap-2 text-lg font-medium p-4 cursor-pointer'
      }
    >
      <Image
        src={`/Cake_${number}.jpg`}
        alt={`${title} - Торт`}
        width={400}
        height={250}
        priority
        className='rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 sm:hover:scale-110 duration-300  h-auto'
      />
      <div className='absolute'>
        <p className='text-center text-base sm:text-lg md:text-xl font-semibold'>
          {title || 'Название'}
        </p>
        <p className='text-center text-sm sm:text-base md:text-lg'>
          {price || '0₽'}
        </p>
        <button
          onClick={handleAddCake}
          className='min-[360px]:px-5 min-[420px]:px-8 min-[470px]:px-6 py-3 min-[470px]:mb-3 bg-white min-[470px]:rounded-3xl text-xs sm:text-sm hover:bg-gray-100  transition ease-in-out delay-100'
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  )
}

export default Card
