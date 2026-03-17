import Hero from '../components/Hero'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import TechniciansSection from '../components/TechniciansSection'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <TechniciansSection />
      <Testimonials />
      <CTASection />
    </>
  )
}

export default Home
