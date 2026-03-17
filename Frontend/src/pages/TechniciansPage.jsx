import { useState, useMemo } from 'react'
import { Search, MapPin, Star, Filter, ShieldCheck, X, Briefcase, CalendarCheck, Clock, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

// Mock Data
const TECHNICIANS = [
  {
    id: 1,
    name: 'Michael Carter',
    role: 'Appliance Expert',
    rating: 4.9,
    jobs: 320,
    experience: 8,
    location: 'Downtown',
    price: 49,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    skills: ['AC Repair', 'Washing Machine', 'Refrigerator'],
    deviceTypes: ['Appliance'],
    about: 'Certified appliance repair specialist with over 8 years of experience in fixing all major brand home appliances fast and effectively.',
    servicesOffered: ['AC Servicing & Repair', 'Washing Machine Installation', 'Refrigerator Gas Refill'],
  },
  {
    id: 2,
    name: 'David Wilson',
    role: 'Master Technician',
    rating: 5.0,
    jobs: 500,
    experience: 12,
    location: 'Northside',
    price: 35,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    skills: ['Smartphone', 'Tablet', 'Laptop'],
    deviceTypes: ['Phone', 'Laptop'],
    about: 'Expert in micro-soldering and motherboard repairs for all kinds of mobile devices and laptops. Fast turnaround guaranteed.',
    servicesOffered: ['Screen Replacement', 'Battery Replacement', 'Motherboard Repair', 'Data Recovery'],
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Electronics Specialist',
    rating: 4.8,
    jobs: 250,
    experience: 5,
    location: 'West End',
    price: 45,
    status: 'Busy',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    skills: ['TV Repair', 'Smart Home', 'Console'],
    deviceTypes: ['Appliance'],
    about: 'Passionate about smart home integrations and complex electronic repairs, from flat-screen TVs to modern gaming consoles.',
    servicesOffered: ['TV Wall Mounting', 'Smart Home Setup', 'Console Cleaning & Repair'],
  },
  {
    id: 4,
    name: 'James Smith',
    role: 'IT & Network Expert',
    rating: 4.7,
    jobs: 410,
    experience: 7,
    location: 'Eastside',
    price: 40,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    skills: ['PC Build', 'Networking', 'Laptop'],
    deviceTypes: ['Laptop'],
    about: 'Specializes in custom PC builds, home networking setups, and comprehensive laptop hardware diagnostics.',
    servicesOffered: ['Custom PC Assembly', 'Wi-Fi Troubleshooting', 'Hardware Upgrade'],
  },
  {
    id: 5,
    name: 'Emily Davis',
    role: 'Mobile Repair Tech',
    rating: 4.9,
    jobs: 180,
    experience: 4,
    location: 'Downtown',
    price: 30,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    skills: ['Smartphone', 'Tablet', 'Smartwatch'],
    deviceTypes: ['Phone'],
    about: 'Quick and reliable mobile phone technician. Can fix most common issues at your location in under 30 minutes.',
    servicesOffered: ['Screen Repair', 'Battery Replacement', 'Water Damage Diagnostic'],
  },
  {
    id: 6,
    name: 'Robert Chen',
    role: 'Senior Tech',
    rating: 4.6,
    jobs: 620,
    experience: 15,
    location: 'Southside',
    price: 55,
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    skills: ['Microwave', 'Oven', 'AC Repair'],
    deviceTypes: ['Appliance'],
    about: 'Veteran appliance repairman who has seen it all. Focuses on high-end kitchen appliances and central AC systems.',
    servicesOffered: ['Oven Repair', 'Microwave Fixing', 'Central AC Servicing'],
  }
]

const TechniciansPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterDevice, setFilterDevice] = useState('All')
  const [filterLocation, setFilterLocation] = useState('All')
  const [filterRating, setFilterRating] = useState('All')
  const [filterExperience, setFilterExperience] = useState('All')
  const [sortBy, setSortBy] = useState('Top Rated')
  
  const [selectedTech, setSelectedTech] = useState(null)

  // Unique values for dropdowns
  const locations = ['All', ...new Set(TECHNICIANS.map(t => t.location))]
  
  const filteredAndSortedTechs = useMemo(() => {
    let result = TECHNICIANS.filter(tech => {
      // Search
      const searchMatch = tech.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tech.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
      // Filters
      const deviceMatch = filterDevice === 'All' || tech.deviceTypes.includes(filterDevice)
      const locationMatch = filterLocation === 'All' || tech.location === filterLocation
      const ratingMatch = filterRating === 'All' || 
                          (filterRating === '4+' && tech.rating >= 4.0) || 
                          (filterRating === '4.5+' && tech.rating >= 4.5)
      const expMatch = filterExperience === 'All' || 
                       (filterExperience === '0-5' && tech.experience <= 5) || 
                       (filterExperience === '5-10' && tech.experience > 5 && tech.experience <= 10) || 
                       (filterExperience === '10+' && tech.experience > 10)

      return searchMatch && deviceMatch && locationMatch && ratingMatch && expMatch
    })

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'Top Rated') return b.rating - a.rating
      if (sortBy === 'Price (Low to High)') return a.price - b.price
      if (sortBy === 'Price (High to Low)') return b.price - a.price
      if (sortBy === 'Most Experienced') return b.experience - a.experience
      return 0
    })

    return result
  }, [searchTerm, filterDevice, filterLocation, filterRating, filterExperience, sortBy])

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-primary-600 text-white py-16 -mt-24 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Find Verified Technicians Near You</h1>
          <p className="text-primary-100 text-lg md:text-xl max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Browse and book skilled professionals for your phone, laptop, and home appliances based on ratings, price, and real-time availability.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Filter Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-10">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by name or service (e.g. Mobile Repair)" 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 lg:w-48">
              <span className="text-slate-500 text-sm font-medium whitespace-nowrap">Sort by:</span>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Top Rated</option>
                <option>Most Experienced</option>
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Device Type</label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={filterDevice}
                onChange={(e) => setFilterDevice(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Phone">Phone</option>
                <option value="Laptop">Laptop</option>
                <option value="Appliance">Home Appliance</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Location</label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Min Rating</label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
              >
                <option value="All">Any Rating</option>
                <option value="4+">4.0 & Above</option>
                <option value="4.5+">4.5 & Above</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Experience</label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={filterExperience}
                onChange={(e) => setFilterExperience(e.target.value)}
              >
                <option value="All">Any Experience</option>
                <option value="0-5">0-5 Years</option>
                <option value="5-10">5-10 Years</option>
                <option value="10+">10+ Years</option>
              </select>
            </div>
          </div>
        </div>

        {/* Technician Cards */}
        {filteredAndSortedTechs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedTechs.map(tech => (
              <div 
                key={tech.id} 
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col hover:-translate-y-1"
              >
                <div className="p-6 pb-0 flex gap-5">
                  <div className="relative shrink-0">
                    <img src={tech.image} alt={tech.name} className="w-20 h-20 rounded-2xl object-cover border border-slate-100 shadow-sm" />
                    <div className={`absolute -bottom-2 -right-2 w-5 h-5 rounded-full border-2 border-white ${tech.status === 'Available' ? 'bg-green-500' : 'bg-amber-500'}`} title={tech.status}></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors flex items-center gap-1.5">
                          {tech.name}
                          <ShieldCheck className="text-blue-500 shrink-0" size={18} />
                        </h3>
                        <p className="text-slate-500 text-sm font-medium">{tech.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-2 bg-amber-50 text-amber-700 w-fit px-2 py-0.5 rounded-md text-sm font-bold border border-amber-100">
                      <Star fill="currentColor" size={14} className="text-amber-500" />
                      {tech.rating} <span className="text-amber-600/70 font-normal ml-1">({tech.jobs})</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tech.skills.map((skill, idx) => (
                      <span key={idx} className="bg-slate-50 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-md text-xs font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-slate-600 mb-6">
                    <div className="flex items-center gap-2">
                       <MapPin size={16} className="text-slate-400" />
                       <span className="truncate">{tech.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Briefcase size={16} className="text-slate-400" />
                       <span>{tech.experience} Yrs Exp</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                       <span className="font-semibold text-slate-900">Starts at ${tech.price}</span>
                    </div>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                    <button 
                      onClick={() => setSelectedTech(tech)}
                      className="bg-white border-2 border-primary-100 text-primary-600 hover:bg-primary-50 hover:border-primary-200 font-semibold py-2.5 rounded-xl transition-colors text-sm"
                    >
                      View Profile
                    </button>
                    <Link 
                      to="/services" 
                      className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2.5 rounded-xl transition-all shadow-sm shadow-primary-500/20 text-center flex items-center justify-center text-sm tracking-wide"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
              <Search className="text-slate-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No technicians found</h3>
            <p className="text-slate-500 mb-6 max-w-md mx-auto">
              We couldn't find any technicians matching your current filters. Try selecting a different location or clearing the search.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('')
                setFilterDevice('All')
                setFilterLocation('All')
                setFilterRating('All')
                setFilterExperience('All')
              }}
              className="bg-primary-50 text-primary-600 hover:bg-primary-100 font-semibold px-6 py-2.5 rounded-xl transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>

      {/* Profile Preview Modal */}
      {selectedTech && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative animate-scale-up">
            
            <button 
              onClick={() => setSelectedTech(null)}
              className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto flex-1 p-0">
              {/* Modal Cover Area */}
              <div className="h-32 bg-primary-600 relative">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
              </div>
              
              <div className="px-6 sm:px-10 pb-10">
                <div className="flex flex-col sm:flex-row gap-6 items-start -mt-16 mb-8 relative z-10">
                  <img src={selectedTech.image} alt={selectedTech.name} className="w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-lg bg-white" />
                  <div className="flex-1 pt-2 sm:pt-16">
                    <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2 mb-1">
                      {selectedTech.name}
                      <ShieldCheck className="text-blue-500" size={24} />
                    </h2>
                    <p className="text-primary-600 font-medium text-lg mb-2">{selectedTech.role}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Star className="text-amber-400 fill-amber-400" size={16} />
                        <span className="text-slate-900">{selectedTech.rating}</span> ({selectedTech.jobs} reviews)
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="text-slate-400" size={16} />
                        {selectedTech.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="text-slate-400" size={16} />
                        {selectedTech.experience} Yrs
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                       <CalendarCheck className="text-primary-500" size={20} />
                       About Professional
                    </h3>
                    <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {selectedTech.about}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                       <CheckCircle className="text-primary-500" size={20} />
                       Services Offered
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedTech.servicesOffered.map((service, idx) => (
                         <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 flex-1">
                            <div className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                            <span className="text-slate-700 font-medium text-sm">{service}</span>
                         </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
               <div>
                  <p className="text-slate-500 text-sm font-medium mb-0.5">Starting from</p>
                  <p className="text-2xl font-black text-slate-900">${selectedTech.price}</p>
               </div>
               <Link 
                  to="/services" 
                  className="w-full sm:w-auto px-8 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2 hover:-translate-y-0.5"
               >
                  Book This Technician
               </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
         <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Need a fix fast?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg relative z-10">
               Book a trusted technician in minutes. All our professionals are background-checked and rated by customers like you.
            </p>
            <Link 
               to="/services" 
               className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-primary-500/20 relative z-10 text-lg"
            >
               Book Now
            </Link>
         </div>
      </div>
    </div>
  )
}

export default TechniciansPage
