'use client'
import Image from 'next/image'
import { ICONS } from '@/assets/icons'
import { useState } from 'react'
import { togleNewCake } from '@/utils/togleNewCake'
import { useCounter } from '@/utils/CounterContext'

const DrawerCartItem = ({
  cake,
  count,
  size,
  removeCakeFromBag,
  getTotalPrice,
}) => {
  const [counter, setCounter] = useState(count)
  const { updateCount } = useCounter()

  const addCake = () => {
    setCounter(counter + 1)
    togleNewCake(cake, size)
    getTotalPrice()
    updateCount()
  }

  const renoveCake = () => {
    if (counter > 1) {
      setCounter(counter - 1)
      togleNewCake(cake, size, false)
      getTotalPrice()
      updateCount()
    }
  }

  return (
    <div className='w-full h-fit border rounded-[20px] p-4 flex items-center justify-between relative'>
      <div
        className='absolute top-2 right-2 cursor-pointer'
        onClick={() => removeCakeFromBag(cake.id, size)}
      >
        <ICONS.CloseIcon />
      </div>
      <div className='w-20 h-20 rounded-lg overflow-hidden relative'>
        <Image
          src={cake.image ?? '/Cake_2.jpg'}
          alt={cake.title}
          layout='intrinsic'
          width={500}
          height={500}
          objectFit='cover'
          className='w-20 h-20 object-cover absolute -top-2'
        />
      </div>

      <div className='flex flex-col justify-between'>
        <p className='2xs:w-[150px] xs:w-fit text-right text-xs leading-4'>
          {cake.title}
          {cake.priceBig && (
            <span className='font-bold'>
              {size === 'big' ? ' - Большой' : ' - Маленький'}
            </span>
          )}
        </p>
        <div className='flex text-sm justify-end items-center gap-3'>
          <span className='font-bold text-base '>
            {size === 'big' ? cake.priceBig : cake.price}₽
          </span>
          <button
            className='px-[9px] rounded-full bg-gray-300 cursor-pointer'
            onClick={renoveCake}
          >
            -
          </button>
          <span className='text-base'>{counter}</span>
          <button
            className='px-2 rounded-full bg-gray-300 cursor-pointer'
            onClick={addCake}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default DrawerCartItem
