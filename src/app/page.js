import Footer from '@/components/Footer'
import MakeOrderSection from '@/components/MakeOrderSection'
import PopularCakes from '@/components/PopularCakes'
import ServicesSection from '@/components/ServicesSection'
import WelcomeSection from '@/components/WelcomeSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'

export default function Home() {
  return (
    <div className='w-full h-96 flex flex-col items-center gap-12'>
      <WelcomeSection />
      <ServicesSection />
      <PopularCakes />
      {/* <CounterSection /> */}
      <WhyChooseUsSection />
      <MakeOrderSection />
      <Footer />
    </div>
  )
}
