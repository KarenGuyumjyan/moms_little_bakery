import { ICONS } from '@/assets/icons'
import Image from 'next/image'

const ServicesSection = () => {
  const cakeOptions = [
    'Торты на день рождения',
    'Свадебные торты',
    'Юбилейные торты',
    'Торты по индивидуальному дизайну',
  ]

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-32 pb-12 flex flex-col lg:flex-row justify-between gap-8 lg:gap-14'>
      <div className='flex flex-col gap-4 lg:w-1/2'>
        <p className='text-3xl sm:text-4xl lg:text-5xl'>Наши Услуги</p>
        <p className='text-base sm:text-lg'>
          Мы добавляем сладости в каждое событие, предлагая ассортимент вкусных,
          красиво оформленных тортов, созданных по вашим предпочтениям. Мы
          гордимся использованием высококачественных ингредиентов и предлагаем
          возможность индивидуального дизайна, чтобы каждый торт был уникальным,
          как и ваше торжество.
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
          src='/Services.png'
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
