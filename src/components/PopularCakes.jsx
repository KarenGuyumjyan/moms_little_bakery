'use client'
import Card from '@/components/Card'
import ProductModal from './ProductModal'
import { useState } from 'react'
import { cakesList } from '@/utils/constants'

const PopularCakes = () => {
  const [modalData, setModalData] = useState(null)

  const openModal = (product) => {
    setModalData(product)
  }

  const closeModal = () => {
    setModalData(null)
  }

  return (
    <>
      <p className='text-3xl sm:text-4xl lg:text-5xl'>Популярные Торты</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  sm:gap-6 lg:gap-8 px-4 sm:px-8 pb-12'>
        {cakesList.map((cake, index) => (
          <Card key={index} cake={cake} openModal={openModal} />
        ))}
      </div>
      {modalData && (
        <ProductModal modalData={modalData} closeModal={closeModal} />
      )}
    </>
  )
}

export default PopularCakes
