import { ICONS } from '@/assets/icons'
import Image from 'next/image'

const ServicesSection = () => {
  const cakeOptions = [
    'Торты на день рождения',
    'Свадебные торты',
    'Юбилейные торты',
    'Торты по индивидуальному дизайну',
    'Праздничные торты',
  ]

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-32 pb-12 flex flex-col lg:flex-row justify-between gap-8 lg:gap-14'>
      <div className='flex flex-col gap-4 lg:w-1/2'>
        <p className='text-3xl sm:text-4xl lg:text-5xl'>Наш Ассортимент</p>
        <p className='text-base sm:text-lg'>
          Мы создаём идеальное сочетание вкуса и удобства для любого события. В
          нашем ассортименте — не только изысканные торты и десерты, но и
          полуфабрикаты, которые помогут Вам легко и быстро приготовить вкусные
          угощения.
        </p>
        <p className='text-base sm:text-lg'>
          Мы используем только качественные ингредиенты, а также предлагаем
          возможность индивидуального дизайна, чтобы каждый заказ соответствовал
          вашему событию и настроению.
        </p>
        <div className='space-y-2'>
          {cakeOptions.map((cake) => (
            <div key={cake} className='pl-4 flex items-center gap-2'>
              <ICONS.SignIcon />
              <p className='text-sm sm:text-base'>{cake}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center lg:w-1/2'>
        <Image
          src='/Home.jpg'
          alt='Services'
          width={550}
          height={300}
          priority
          className='rounded-xl '
        />
      </div>
    </div>
  )
}

export default ServicesSection
