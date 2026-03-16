import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white selection:bg-primary-100 selection:text-primary-700">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
