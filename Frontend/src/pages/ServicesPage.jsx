import { useState } from 'react'
import { 
  Smartphone, Laptop, Wind, Tv, Refrigerator, 
  WashingMachine, Filter, Search, X, CheckCircle2, 
  Clock, DollarSign, ArrowRight 
} from 'lucide-react'

const allServices = [
  {
    id: 'phone',
    icon: <Smartphone size={32} />,
    name: 'Phone Repair',
    category: 'Mobile',
    desc: 'Expert screen replacement and motherboard repairs for all smartphone brands.',
    price: 'From $49',
    duration: '30-90 mins',
    problems: ['Cracked Screen', 'Battery Replacement', 'Water Damage', 'Charging Port Fix'],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'laptop',
    icon: <Laptop size={32} />,
    name: 'Laptop Repair',
    category: 'Computers',
    desc: 'Hardware upgrades, virus removal, and physical damage repair for PCs & Macs.',
    price: 'From $79',
    duration: '2-4 hours',
    problems: ['Slow Performance', 'Keyboard Issues', 'Screen Replacement', 'Data Recovery'],
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: 'ac',
    icon: <Wind size={32} />,
    name: 'AC Service',
    category: 'Appliances',
    desc: 'Professional AC servicing, gas recharge, and installation by certified experts.',
    price: 'From $39',
    duration: '1-2 hours',
    problems: ['Not Cooling', 'Odd Noises', 'Gas Leakage', 'General Service'],
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    id: 'washing',
    icon: <WashingMachine size={32} />,
    name: 'Washing Machine',
    category: 'Appliances',
    desc: 'Fixing all front-load and top-load washing machine issues at your doorstep.',
    price: 'From $55',
    duration: '1-2 hours',
    problems: ['Drainage Issues', 'Spinning Problems', 'Water Leakage', 'Noisy Operation'],
    color: 'bg-sky-50 text-sky-600',
  },
  {
    id: 'fridge',
    icon: <Refrigerator size={32} />,
    name: 'Refrigerator Repair',
    category: 'Appliances',
    desc: 'Affordable cooling solutions and gas recharge for single/double door fridges.',
    price: 'From $60',
    duration: '1-3 hours',
    problems: ['Not Cooling', 'Compressor Issue', 'Door Seal Replacement', 'Gas Leakage'],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'tv',
    icon: <Tv size={32} />,
    name: 'TV Repair',
    category: 'Electronics',
    desc: 'On-site repair for LED/LCD screens and internal circuit board replacements.',
    price: 'From $65',
    duration: '2-4 hours',
    problems: ['Display Panel Fix', 'No Sound', 'Power Board Issues', 'Backlight Replacement'],
    color: 'bg-indigo-50 text-indigo-600',
  },
]

const ServicesPage = () => {
  const [filter, setFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedService, setSelectedService] = useState(null)

  const categories = ['All', 'Mobile', 'Computers', 'Appliances', 'Electronics']

  const filteredServices = allServices.filter(service => {
    const matchesCategory = filter === 'All' || service.category === filter
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6"> Our Repair Services </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Book verified technicians for your home and personal devices. Transparent pricing and fast same-day services guaranteed.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  filter === cat
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-500 transition-colors">
                {service.name}
              </h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{service.desc}</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div>
                  <span className="text-xs text-slate-400 block uppercase font-bold">Starts from</span>
                  <span className="text-lg font-bold text-slate-900">{service.price}</span>
                </div>
                <button className="bg-primary-50 text-primary-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary-500 hover:text-white transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Service Details */}
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
              onClick={() => setSelectedService(null)}
            />
            <div className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-fade-in-up">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
              >
                <X size={24} />
              </button>
              
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${selectedService.color}`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{selectedService.name}</h2>
                    <span className="text-sm font-medium text-slate-500">{selectedService.category}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-3">
                    <Clock className="text-primary-500" size={20} />
                    <div>
                      <span className="text-xs text-slate-400 block font-bold uppercase">Duration</span>
                      <span className="font-bold text-slate-900">{selectedService.duration}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-3">
                    <DollarSign className="text-primary-500" size={20} />
                    <div>
                      <span className="text-xs text-slate-400 block font-bold uppercase">Estimated Price</span>
                      <span className="font-bold text-slate-900">{selectedService.price}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    Common Problems Fixed
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.problems.map((problem, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm italic">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                  Confirm Booking <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6"> Don't wait until it breaks completely </h2>
          <p className="text-primary-100 mb-10 max-w-xl mx-auto">
            Our expert technicians are available 24/7 to help you with any device repair. Book your slot now!
          </p>
          <button className="bg-white text-primary-600 hover:bg-primary-50 px-10 py-4 rounded-xl font-bold shadow-lg transition-all active:scale-[0.98]">
            Chat with Support
          </button>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
