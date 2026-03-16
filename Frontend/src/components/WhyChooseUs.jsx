import { ShieldCheck, CircleDollarSign, Zap, Lock, MapPin } from 'lucide-react'

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Verified Technicians',
    desc: 'All our repair experts are background-checked and highly skilled.',
  },
  {
    icon: <CircleDollarSign size={32} />,
    title: 'Transparent Pricing',
    desc: 'No hidden costs. Get upfront estimates before the work begins.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Fast Repairs',
    desc: 'Most repairs are completed on the same day within 90 minutes.',
  },
  {
    icon: <Lock size={32} />,
    title: 'Secure Payments',
    desc: 'Pay safely through our encrypted gateway after the service.',
  },
  {
    icon: <MapPin size={32} />,
    title: 'Real-time Tracking',
    desc: 'Track the status of your repair job and technician in real-time.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Why Choose FixItNow for Your Repairs?
            </h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              We understand how important your devices are to you. That's why we've built a platform that prioritizes trust, speed, and quality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-primary-500 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
             <div className="relative">
                <div className="absolute inset-0 bg-primary-500 rotate-3 rounded-3xl opacity-10" />
                <div className="bg-white p-8 rounded-3xl shadow-xl relative z-10 border border-slate-100">
                   <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                         <div className="flex items-center gap-3">
                            <Zap className="text-primary-600" size={24} />
                            <span className="font-bold text-slate-900">Average Repair Time</span>
                         </div>
                         <span className="font-black text-primary-600">45 Min</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                         <div className="flex items-center gap-3">
                            <ShieldCheck className="text-green-600" size={24} />
                            <span className="font-bold text-slate-900">Verified Experts</span>
                         </div>
                         <span className="font-black text-green-600">500+</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                         <div className="flex items-center gap-3">
                            <Star className="text-blue-600" fill="currentColor" size={24} />
                            <span className="font-bold text-slate-900">Customer Rating</span>
                         </div>
                         <span className="font-black text-blue-600">4.9/5</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Star = ({ className, fill, size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill={fill || "none"} 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export default WhyChooseUs
