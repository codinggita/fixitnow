import { ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-primary-600 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary-500/30 py-16 px-8 md:px-16 text-center text-white">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Need a Fast Device Repair Today?
            </h2>
            <p className="text-primary-100 text-lg md:text-xl mb-10 leading-relaxed opacity-90">
              Join more than 50,000+ satisfied customers. Our technicians are ready to visit your location and fix your device within hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-white text-primary-600 hover:bg-primary-50 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2">
                Book a Technician Now <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto bg-primary-700 hover:bg-primary-800 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all border border-primary-500/30">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
