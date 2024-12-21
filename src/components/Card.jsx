'use client'
import { useCounter } from '@/utils/CounterContext'
import { togleNewCake } from '@/utils/togleNewCake'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

const Card = function ({ cake, openModal }) {
  const { updateCount } = useCounter()

  const handleAddCake = (cake) => {
    togleNewCake(cake)
    updateCount()
  }

  const handleOpenModal = (e) => {
    e.stopPropagation()
    openModal(cake)
  }

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
        onClick={handleOpenModal}
        className='rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 sm:hover:scale-110 duration-300  h-auto'
      />
      <div className='absolute flex flex-col flex-wrap'>
        {/* <p className='text-center text-base sm:text-lg md:text-xl font-semibold m-auto w-min'>
          {cake.title || 'Название'}
        </p>
        <p className='text-center text-sm sm:text-base md:text-lg hidden sm:block'>
          {cake.price || '0'}₽
        </p> */}

        <button
          onClick={() => handleAddCake(cake)}
          className='min-[330px]:px-3 min-[360px]:px-5 min-[420px]:px-8 min-[470px]:px-6 min-[420px]:py-3 py-2 mb-3 lg:mb-5 w-min lg:w-fit bg-white rounded-3xl text-xs sm:text-sm hover:bg-gray-100 active:bg-zinc-300 transition ease-in-out delay-100 self-center flex gap-2'
        >
          {cake.title}
        </button>
        {/* <button className='min-[330px]:px-3 min-[360px]:px-5 min-[420px]:px-8 min-[470px]:px-6 min-[420px]:py-3 py-2 mb-3 bg-white rounded-3xl text-xs sm:text-sm hover:bg-gray-100  transition ease-in-out delay-100 self-center'>
          Просмотреть
        </button> */}

        {/* <button className='min-[330px]:px-3 min-[360px]:px-5 min-[420px]:px-8 min-[470px]:px-6 min-[420px]:py-3 py-2 mb-3 bg-white rounded-3xl text-xs sm:text-sm hover:bg-gray-100  transition ease-in-out delay-100 self-center flex items-center gap-2'>
          {cake.title}
          <ShoppingCart size={20}/>
        </button> */}
      </div>
    </div>
  )
}

export default Card
