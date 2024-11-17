'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const ProductModal = ({ modalData, closeModal }) => {
  const modalRef = useRef(null)

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
        <div className='w-full h-72 sm:h-96 rounded-lg overflow-hidden relative'>
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
        <h3 className='text-4xl font-semibold mt-4 text-center sm:text-left'>{modalData.title}</h3>
        <p className='text-primary font-bold text-lg mt-2 text-center sm:text-left'>{modalData.price}</p>
        <p className='text-sm text-gray-600 mt-4 text-center sm:text-left'>{modalData.description}</p>
        <div className='mt-6 text-center'>
          <button className='bg-primary text-black px-6 py-2 rounded-full hover:bg-primary-dark transition'>
            Добавить в корзину
          </button>
        </div>
      </div>
      <div className="absolute top-10 left-0 right-0 z-40 sm:hidden"></div>
    </div>
  )
}

export default ProductModal
