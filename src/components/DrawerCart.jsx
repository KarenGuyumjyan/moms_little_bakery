'use client'
import { cakesList } from '@/utils/constants'
import { useCounter } from '@/utils/CounterContext'
import { removeCake } from '@/utils/removeCake'
import { useEffect, useState } from 'react'
import DrawerCartList from './DrawerCartList'
import DrawerHeader from './DrawerHeader'

const DrawerCart = ({ handleOpenDrawer }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const { updateCount } = useCounter()

  const getTotalPrice = () => {
    if (localStorage.getItem('cakes')) {
      setTotalPrice(
        JSON.parse(localStorage.cakes).reduce((totalSum, cake) => {
          return (totalSum +=
            Number(
              cakesList[cake.id + 1][
                cake.size === 'big' ? 'priceBig' : 'price'
              ],
            ) * Number(cake.count))
        }, 0),
      )
    }
  }

  const removeCakeFromBag = (id, size) => {
    removeCake(id, size)
    updateCount()
    getTotalPrice()
  }

  useEffect(() => {
    setIsVisible(true)
    getTotalPrice()
    return () => setIsVisible(false)
  }, [])

  const togleDrawer = () => {
    setIsVisible(false)
    setTimeout(() => {
      handleOpenDrawer()
    }, 300)
  }

  return (
    <>
      <div
        className='fixed top-0 left-0 w-screen h-full bg-black z-10 opacity-70 transition-opacity duration-300'
        style={{ opacity: isVisible ? 0.7 : 0 }}
        onClick={togleDrawer}
      ></div>

      <div
        className={`fixed top-0 right-0 w-full min-[470px]:w-96 h-full bg-purple-50 z-20 px-8 overflow-scroll transform transition-transform duration-500 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <DrawerHeader handleOpenDrawer={togleDrawer} />

        <DrawerCartList removeCakeFromBag={removeCakeFromBag} getTotalPrice={getTotalPrice}/>

        <div className='flex flex-col gap-3 pb-8 pt-4 bg-purple-50 sticky bottom-0'>
          <div className='flex gap-2'>
            <span>Общая цена:</span>
            <div className='flex-1 border-b border-dashed'></div>
            <b>{totalPrice}₽</b>
          </div>
          <button
            disabled={false}
            className='w-full py-4 rounded-2xl mt-3 transition text-white bg-pink-300 hover:bg-pink-400 active:bg-pink-500 disabled:bg-slate-300 cursor-pointer'
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </>
  )
}

export default DrawerCart
