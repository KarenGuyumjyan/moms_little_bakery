import Image from 'next/image'

const FooterLogo = () => (
  <div className='text-center flex lg:flex-col'>
    <Image
      src='/moms_logo.png'
      alt="Mom's Little Bakery"
      width={60}
      height={38}
      priority
      className=' sm:min-w-16 md:min-w-28 lg:min-w-0'
    />
    <p className='lg:pt-2 pt-0 max-w-xs mx-auto text-xs sm:text-sm md:text-base md:text-left text-right'>
      Вместе мы создадим торт вашей мечты – уникальный, вкусный и идеально
      подходящий для вашего особенного события.
    </p>
  </div>
)

export default FooterLogo
