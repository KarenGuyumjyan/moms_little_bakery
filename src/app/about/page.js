import Footer from '@/components/Footer'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <>
      <div className='bg-light my-12 py-12'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-lg mx-auto mb-12'>
            <h1 className='text-2xl md:text-4xl font-bold'>Наша история </h1>
          </div>

          <div className='flex flex-col lg:flex-row gap-8 items-center'>
            <div className='relative'>
              <Image
                src='/Order.png'
                alt='About Us'
                width={400}
                height={250}
                className='rounded-lg object-cover'
                priority
              />
            </div>
            <div className='lg:w-6/12'>
              <h4 className='text-lg md:text-xl font-semibold text-gray-700 mb-4'>
                Мы знаем, каким вкусным бывает счастье. Mom’s Little Bakery —
                это о Вас и для Вас.
              </h4>
              <p className='text-gray-600 mb-6'>
                Наш путь начался в солнечном Ереване, где искусство выпечки
                передаётся из поколения в поколение. Где торты — это не просто
                десерт, а символ семьи и гостеприимства. Сегодня мы дарим эти
                ценности и Вам, здесь, в России. Для нас десерт — это не просто
                еда. Это способ сказать «я люблю тебя», способ поделиться теплом
                и уютом с близкими. Почему нас выбирают? Потому что: мы печём с
                любовью, как для своей семьи. Используем только натуральные
                продукты, чтобы каждая ложка была вкусной и полезной. Создаём не
                просто десерты, а моменты счастья. Каждый торт — это маленький
                праздник. Каждая коробка — это Ваш повод порадовать себя и
                близких. Mom’s Little Bakery: тепло, забота и вкус, которые Вы
                почувствуете с первого кусочка.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
