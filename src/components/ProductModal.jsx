'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useCounter } from '@/utils/CounterContext'
import { togleNewCake } from '@/utils/togleNewCake'
import { ArrowBigLeft, ArrowBigRight, Plus } from 'lucide-react'

const ProductModal = ({ modalData, closeModal }) => {
  const [size, setSize] = useState('small')
  const [currentImage, setCurrentImage] = useState('first')
  const [animating, setAnimating] = useState(false)
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

  const toggleImage = () => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrentImage((prev) => (prev === 'first' ? 'second' : 'first'))
      setAnimating(false)
    }, 300) // Animation duration
  }

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
        <div className='relative w-full h-72 sm:h-96 rounded-lg overflow-hidden'>
          <div className='relative w-full h-full '>
            <Image
              src={modalData.image}
              alt={modalData.title}
              layout='fill'
              objectFit='cover'
              objectPosition='center 35%'
              className={`absolute inset-0 transition-all duration-500 ${
                currentImage === 'first'
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            />
            {modalData.secondImage && (
              <Image
                src={modalData.secondImage}
                alt={modalData.title}
                layout='fill'
                objectFit='cover'
                objectPosition='center 10%'
                className={`absolute inset-0 transition-all duration-500 ${
                  currentImage === 'second'
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                } top-10`}
              />
            )}
          </div>
          {modalData.secondImage && (
            <div>
              <button
                onClick={toggleImage}
                disabled={currentImage === 'second'}
                className='absolute top-1/2 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-75 transition right-2'
              >
                <ArrowBigRight
                  size={20}
                  color={currentImage === 'first' ? 'white' : 'gray'}
                />
              </button>
              <button
                onClick={toggleImage}
                disabled={currentImage === 'first'}
                className='absolute top-1/2 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-75 transition left-2'
              >
                <ArrowBigLeft
                  size={20}
                  color={currentImage === 'second' ? 'white' : 'gray'}
                />
              </button>
            </div>
          )}
        </div>
        <h3 className='text-3xl font-semibold mt-4 text-center'>
          {modalData.title}
        </h3>
        <div className='w-full text-primary text-sm mt-4 border-t border-b border-gray-400 text-gray-500'>
          <div className='flex justify-around'>
            <div className='flex flex-col items-center'>
              <p>вес</p>
              <p>{modalData.weight}</p>
            </div>
            <div className='flex flex-col items-center'>
              <p>порция</p>
              <p>{modalData.portion}</p>
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
    </div>
  )
}

export default ProductModal
