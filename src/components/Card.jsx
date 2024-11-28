'use client'
import Image from 'next/image'

const Card = function ({ cake, openModal }) {
  return (
    <div
      className={
        'relative flex flex-col justify-end items-center gap-2 text-lg font-medium p-4 cursor-pointer'
      }
    >
      <Image
        src={cake.image}
        alt={`${cake.title} - Торт`}
        width={400}
        height={250}
        priority
        className='rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 sm:hover:scale-110 duration-300  h-auto'
      />
      <div className='absolute flex flex-col flex-wrap'>
        <p className='text-center text-base sm:text-lg md:text-xl font-semibold m-auto w-min'>
          {cake.title || 'Название'}
        </p>
        <p className='text-center text-sm sm:text-base md:text-lg hidden sm:block'>
          {cake.price  || '0'}₽
        </p>
        <button
          onClick={() => openModal(cake)}
          className='min-[330px]:px-3 min-[360px]:px-5 min-[420px]:px-8 min-[470px]:px-6 min-[420px]:py-3 py-2 mb-3 bg-white rounded-3xl text-xs sm:text-sm hover:bg-gray-100  transition ease-in-out delay-100 self-center'
        >
          Просмотреть
        </button>
      </div>
    </div>
  )
}

export default Card
