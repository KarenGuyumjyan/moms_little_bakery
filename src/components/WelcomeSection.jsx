import Image from 'next/image'

const WelcomeSection = () => {
  return (
    <div className="w-full relative md:pb-12 pb-0 ">
      <Image
        src="/Welcome.jpeg"
        alt="Home"
        width={1200}
        height={400}
        priority
        className="w-full object-cover h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh]"
      />
      {/* <p className=" text-cyan-900 absolute md:top-1/3 top-2/3  left-5 sm:left-10 md:left-20 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl tracking-wide font-greatVibes">
        Welcome to Mom's Little Bakery
      </p> */}
    </div>
  )
}

export default WelcomeSection
