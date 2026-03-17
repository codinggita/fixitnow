import { CalendarCheck, Truck, Star } from 'lucide-react'

const steps = [
  {
    icon: <CalendarCheck size={40} />,
    title: 'Book a Service',
    desc: 'Choose your device and describe the problem to schedule a visit.',
  },
  {
    icon: <Truck size={40} />,
    title: 'Technician Visits',
    desc: 'A verified expert arrives at your doorstep with all necessary tools.',
  },
  {
    icon: <Star size={40} />,
    title: 'Pay & Rate',
    desc: 'Pay after repair completion and rate your technician experience.',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Booking a repair is now as easy as ordering food. Follow these three simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mb-8 relative border-4 border-white shadow-xl shadow-primary-500/5 transition-transform hover:scale-110">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
