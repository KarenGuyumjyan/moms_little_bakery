import FooterContactInfo from './FooterContactInfo'
import FooterLogo from './FooterLogo'
import FooterNav from './FooterNav'
import FooterSocialLinks from './FooterSocialLinks'

const Footer = () => {
  return (
    <div className="relative bg-purple-100 w-full px-10 md:px-20 lg:px-40 pt-16 pb-8 text-black">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
        <FooterLogo />
        <div className="flex flex-col md:flex-row md:justify-between mt-8 lg:mt-0 w-full lg:w-auto lg:ml-8 gap-8 md:gap-16">
          <FooterNav />
          <FooterContactInfo />
          <FooterSocialLinks />
        </div>
      </div>
      <div className="mt-8 text-center text-sm md:text-base border-t border-gray-300 pt-4">
        <p>© 2024 Mom's Little Bakery. Все права защищены</p>
      </div>
    </div>
  )
}

export default Footer
