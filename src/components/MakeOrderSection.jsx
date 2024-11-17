import Image from 'next/image'

const MakeOrderSection = () => {
  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-32 pb-12 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-14'>
      <p className='text-3xl sm:text-4xl lg:text-5xl lg:hidden'>
        Закажите Свой Торт Сегодня!
      </p>
      <div className='flex justify-center '>
        <Image
          src='/MakeOrder.png'
          alt='Services'
          width={650}
          height={300}
          priority
          className='rounded-xl'
        />
      </div>
      <div className='pt-4 flex flex-col gap-4 lg:w-1/2'>
        <p className='text-3xl sm:text-4xl lg:text-5xl hidden lg:block'>
          Закажите Свой Торт Сегодня!
        </p>
        <p className='text-base sm:text-lg'>
          Не упустите возможность порадовать себя и своих близких вкусным и
          уникальным тортом! Мы предлагаем широкий выбор тортов на любой вкус и
          под любое событие. Просто свяжитесь с нами, выберите желаемый вид и
          оформление, и мы с радостью приготовим ваш идеальный торт. Сделайте
          ваш праздник незабываемым – закажите свой торт уже сегодня!
        </p>
      </div>
    </div>
  )
}

export default MakeOrderSection
