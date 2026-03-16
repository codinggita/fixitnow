import { Search, MapPin, Smartphone, Laptop, Tv } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Get Your Devices Repaired by <br className="hidden md:block" />
            <span className="text-primary-500">Trusted Local Experts</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Fast, reliable, and affordable repair services for your phones, laptops, and home appliances. Book a verified technician in seconds.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 mb-12 animate-fade-in-up [animation-delay:200ms]">
          <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="w-full md:w-5/12 p-3 flex items-center gap-3">
              <Search className="text-slate-400 min-w-[20px]" size={20} />
              <select className="w-full bg-transparent focus:outline-none text-slate-700 font-medium">
                <option value="">Select Device</option>
                <option value="phone">Smartphone Repair</option>
                <option value="laptop">Laptop Repair</option>
                <option value="appliance">Home Appliance</option>
                <option value="ac">AC Service</option>
              </select>
            </div>
            <div className="w-full md:w-4/12 p-3 flex items-center gap-3">
              <MapPin className="text-slate-400 min-w-[20px]" size={20} />
              <input
                type="text"
                placeholder="Enter Location"
                className="w-full bg-transparent focus:outline-none text-slate-700 font-medium placeholder:text-slate-400"
              />
            </div>
            <div className="w-full md:w-3/12 p-2">
              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-primary-500/20 active:scale-[0.98]">
                Find Technician
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary-500/25 hover:-translate-y-0.5">
            Book a Repair
          </button>
          <button className="bg-white border-2 border-slate-200 hover:border-primary-500 hover:text-primary-500 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg transition-all">
            See All Services
          </button>
        </div>

        {/* Popular Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-slate-500 text-sm font-medium animate-fade-in [animation-delay:600ms]">
          <span className="flex items-center gap-1.5"><Smartphone size={16} /> iPhone Repair</span>
          <span className="flex items-center gap-1.5"><Laptop size={16} /> MacBook Specialist</span>
          <span className="flex items-center gap-1.5"><Tv size={16} /> Samsung TV Repair</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
