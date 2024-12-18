'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useCounter } from '@/utils/CounterContext'
import { togleNewCake } from '@/utils/togleNewCake'
import { Plus, ShoppingCart } from 'lucide-react'

const ProductModal = ({ modalData, closeModal }) => {
  // const [count, setCount] = useState(1)
  const [size, setSize] = useState('small')
  const modalRef = useRef(null)
  const { updateCount } = useCounter()

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal()
    }
  }

  const handleAddCake = () => {
    togleNewCake(modalData, size)
    updateCount()
    closeModal()
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div
        ref={modalRef}
        className='bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative sm:max-w-md'
      >
        <button
          onClick={closeModal}
          className='absolute top-4 right-6 text-black-500 hover:text-gray-800 transition text-5xl z-10'
        >
          &times;
        </button>
        <div className='w-full h-64 sm:h-96 rounded-lg overflow-hidden relative'>
          <Image
            src={modalData.image}
            alt={modalData.title}
            layout='intrinsic'
            width={500}
            height={500}
            objectFit='cover'
            className='w-full h-full object-cover absolute sm:-top-10 -top-24'
          />
        </div>
        <h3 className='text-3xl font-semibold mt-4 text-center'>
          {modalData.title}
        </h3>
        <div className='w-full text-primary text-sm mt-4 border-t border-b border-gray-400 text-gray-500'>
          <div className='flex justify-around'>
            <div className='flex flex-col items-center'>
              <p>вес</p>
              <p>230 г</p>
            </div>
            <div className='flex flex-col items-center'>
              <p>куски</p>
              <p>12</p>
            </div>
            <div className='flex flex-col items-center'>
              <p>ккал</p>
              <p>120</p>
            </div>
          </div>
        </div>
        <p className='text-sm text-gray-600 mt-4 text-center sm:text-left'>
          {modalData.description}
        </p>
        <div
          className={`mt-6 text-center flex gap-4 flex-col sm:flex-row ${
            modalData.priceBig ? 'justify-between' : 'justify-center'
          } items-center`}
        >
          {modalData.priceBig && (
            <div className='text-xs flex '>
              <button
                className={`${
                  size === 'small' ? 'bg-pink-400 ' : 'bg-pink-100 '
                } p-2 rounded-l-lg min-w-24`}
                onClick={() => setSize('small')}
              >
                Стандартный
              </button>
              <button
                className={`${
                  size === 'big' ? 'bg-pink-400' : 'bg-pink-100'
                } p-2 rounded-r-lg min-w-24`}
                onClick={() => setSize('big')}
              >
                Большой
              </button>
            </div>
          )}
          <button
            onClick={handleAddCake}
            className='p-2 px-4 bg-gray-200 text-primary font-bold text-center sm:text-left bg-primary text-base text-black px-4z py-2 rounded-md hover:bg-primary-dark transition active:bg-zinc-300 flex items-center gap-2'
          >
            {size === 'big' ? modalData.priceBig : modalData.price}₽
            <Plus size={16} />
          </button>
        </div>
      </div>
      <div className='absolute top-10 left-0 right-0 z-40 sm:hidden'></div>
    </div>
  )
}

export default ProductModal
