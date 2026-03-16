import { Smartphone, Laptop, Wind, Tv, Refrigerator, WashingMachine } from 'lucide-react'

const serviceList = [
  {
    icon: <Smartphone size={32} />,
    name: 'Phone Repair',
    desc: 'Screen replacement, battery issues, and water damage repair for all brands.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <Laptop size={32} />,
    name: 'Laptop Repair',
    desc: 'Hardware upgrades, OS installation, and motherboard repairs for PCs and Macs.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: <Wind size={32} />,
    name: 'AC Repair',
    desc: 'Installation, gas filling, and deep cleaning services for split and window ACs.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: <WashingMachine size={32} />,
    name: 'Washing Machine',
    desc: 'Repairing front-load and top-load machines. Fixed pricing and original parts.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    icon: <Refrigerator size={32} />,
    name: 'Refrigerator Repair',
    desc: 'Fixing cooling issues, compressor repair, and gas recharge for all models.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <Tv size={32} />,
    name: 'TV Repair',
    desc: 'LED/LCD screen repair, power board issues, and sound problems fixed.',
    color: 'bg-indigo-50 text-indigo-600',
  },
]

const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Popular Repair Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Broad range of repair services delivered at your doorstep by verified experts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2 cursor-pointer"
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-500 transition-colors">
                {service.name}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="flex items-center text-primary-500 font-semibold group-hover:gap-2 transition-all">
                Book Now <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
