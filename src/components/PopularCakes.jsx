import { cookies } from 'next/headers'
import Card from '@/components/Card'

const PopularCakes = () => {
  const cookieStore = cookies()

  return (
    <>
      <p className='text-3xl sm:text-4xl lg:text-5xl'>Популярные Торты</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8  pb-12'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <Card key={index} number={item} cookieStore={cookieStore}/>
        ))}
      </div>
    </>
  )
}

export default PopularCakes
