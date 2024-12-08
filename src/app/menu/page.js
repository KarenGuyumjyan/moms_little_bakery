'use client'
import { useState } from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import ProductModal from '@/components/ProductModal'
import { cakesList, pieceCakes, smallCakes } from '@/utils/constants'
import { togleNewCake } from '@/utils/togleNewCake'
import { useCounter } from '@/utils/CounterContext'
import { ShoppingCart } from 'lucide-react'

const cakesListSection = () => {
  const { updateCount } = useCounter()
  const [modalData, setModalData] = useState(null)
  const [selectedSection, setSelectedSection] = useState(1)

  const sectionsList = [
    {
      id: 1,
      name: 'Все',
    },
    {
      id: 2,
      name: 'Торты',
    },
    {
      id: 3,
      name: 'Десерты',
    },
    {
      id: 4,
      name: 'Тортики',
    },
  ]

  const showCakes =
    selectedSection === 1
      ? [...cakesList, ...smallCakes, ...pieceCakes]
      : selectedSection === 2
      ? cakesList
      : selectedSection === 3
      ? smallCakes
      : pieceCakes

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
          <div className='flex items-center justify-between pb-8 flex-col-reverse min-[520px]:flex-row gap-8'>
            <h1 className='text-xl md:text-2xl font-bold'>
              {
                sectionsList.find((section) => section.id === selectedSection)
                  .name 
              }
            </h1>
            <div className='flex justify-center md:justify-end gap-4'>
              {sectionsList.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`min-[330px]:px-3 min-[420px]:px-8 min-[470px]:px-6 min-[420px]:py-3 py-2 ${
                    selectedSection === section.id
                      ? 'bg-pink-400'
                      : 'bg-pink-200'
                  } rounded-3xl text-sm hover:bg-pink-400 transition ease-in-out delay-100 self-center font-base`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {showCakes.map((product) => (
              <div
                key={product.id + product.title}
                className='bg-white rounded-lg shadow-md flex flex-col'
              >
                <div
                  className='cursor-pointer transition transform hover:scale-105 hover:shadow-lg duration-300 delay-100'
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
                  {/* <div className='absolute bottom-4 left-0 right-0 text-center text-black p-2 rounded-lg mx-4'>
                    <h3 className='text-2xl font-semibold'>{product.title}</h3>
                    <p className='text-primary font-bold text-lg'>
                      {product.price}₽
                    </p>
                  </div> */}
                </div>
                <div className='p-4 text-center transition transform delay-50 hover:bg-zinc-200 active:bg-zinc-300'>
                  {/* <button
                    onClick={() => handleAddCake(product)}
                    className='bg-primary text-black px-4 py-2 rounded-full hover:bg-primary-dark transition '
                  >
                    Добавить в корзину
                  </button> */}
                  <button
                    onClick={() => handleAddCake(product)}
                    className='w-full bg-primary font-semibold text-black rounded-full hover:bg-primary-dark transition flex gap-2 items-center justify-center'
                  >
                    {product.title}
                    <ShoppingCart size={20}/>
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
