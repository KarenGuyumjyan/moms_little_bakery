'use client'
import { useState } from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import ProductModal from '@/components/ProductModal'
import { cakesList, smallCakes } from '@/utils/constants'
import { togleNewCake } from '@/utils/togleNewCake'
import { useCounter } from '@/utils/CounterContext'

const cakesListSection = () => {
  const { updateCount } = useCounter()
  const [modalData, setModalData] = useState(null)

  const openModal = (product) => {
    setModalData(product)
  }

  const closeModal = () => {
    setModalData(null)
  }

  const handleAddCake = (cake) => {
    togleNewCake(cake)
    updateCount()
  }

  return (
    <>
      <div className='bg-light my-12 py-12'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-lg mx-auto mb-12'>
            <h1 className='text-2xl md:text-4xl font-bold'>
              Изучите категории нашей выпечки
            </h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[...cakesList, ...smallCakes].map((product) => (
              <div
                key={product.id + product.title}
                className='bg-white rounded-lg shadow-md flex flex-col'
              >
                <div
                  className='relative cursor-pointer transition transform hover:scale-105 hover:shadow-lg duration-300 delay-100'
                  onClick={() => openModal(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={400}
                    className='w-full h-auto rounded-t-lg object-cover max-h-64 sm:max-h-max'
                    priority
                  />
                  <div className='absolute bottom-4 left-0 right-0 text-center text-black p-2 rounded-lg mx-4'>
                    <h3 className='text-2xl font-semibold'>{product.title}</h3>
                    <p className='text-primary font-bold text-lg'>
                      {product.price}₽
                    </p>
                  </div>
                </div>
                <div className='p-4 text-center transition transform delay-50 hover:bg-zinc-200 active:bg-zinc-300'>
                  <button
                    onClick={() => handleAddCake(product)}
                    className='bg-primary text-black px-4 py-2 rounded-full hover:bg-primary-dark transition '
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {modalData && (
          <ProductModal modalData={modalData} closeModal={closeModal} />
        )}
      </div>
      <Footer />
    </>
  )
}

export default cakesListSection
