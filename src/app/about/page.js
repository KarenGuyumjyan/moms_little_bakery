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
                Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem
                sed stet labore lorem sit clita duo
              </h4>
              <p className='text-gray-600 mb-6'>
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
                lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
                erat amet magna
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {/* Feature 1 */}
                <div className='text-center'>
                  <div className='flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4'>
                    <i className='fa fa-heartbeat fa-2x text-white'></i>
                  </div>
                  <h4 className='text-lg font-semibold text-gray-700 uppercase'>
                    100% Healthy
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </p>
                </div>

                {/* Feature 2 */}
                <div className='text-center'>
                  <div className='flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4'>
                    <i className='fa fa-award fa-2x text-white'></i>
                  </div>
                  <h4 className='text-lg font-semibold text-gray-700 uppercase'>
                    Award Winning
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
