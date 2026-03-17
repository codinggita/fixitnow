import { Star, ShieldCheck, MapPin } from 'lucide-react'

const technicians = [
  {
    name: 'Michael Carter',
    role: 'Appliance Expert',
    rating: 4.9,
    jobs: '320+',
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    skills: ['AC Repair', 'Washing Machine', 'Refrigerator']
  },
  {
    name: 'David Wilson',
    role: 'Master Technician',
    rating: 5.0,
    jobs: '500+',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    skills: ['Smartphone', 'Tablet', 'Laptop']
  },
  {
    name: 'Sarah Johnson',
    role: 'Electronics Specialist',
    rating: 4.8,
    jobs: '250+',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    skills: ['TV Repair', 'Smart Home', 'Console']
  },
  {
    name: 'James Smith',
    role: 'Plumbing Expert',
    rating: 4.9,
    jobs: '410+',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    skills: ['Pipe Fixing', 'Water Heater', 'Leakage']
  }
]

const TechniciansSection = () => {
  return (
    <section id="technicians" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Meet Our Top Technicians
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Our certified and background-checked professionals are ready to provide top-notch service right at your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technicians.map((tech, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tech.image} 
                  alt={tech.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Star className="text-amber-400" fill="currentColor" size={16} />
                  <span className="font-bold text-sm text-slate-900">{tech.rating}</span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-slate-900">{tech.name}</h3>
                  <ShieldCheck className="text-blue-500" size={18} />
                </div>
                <p className="text-primary-600 font-medium mb-4">{tech.role}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {tech.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={16} />
                    <span>Local Area</span>
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {tech.jobs} Jobs
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechniciansSection
