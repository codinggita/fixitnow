import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'iPhone User',
    rating: 5,
    text: 'Incredible service! My phone screen was cracked, and the technician fixed it in just 30 minutes right at my office. Highly recommended!',
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Laptop Owner',
    rating: 5,
    text: "FixItNow saved my work week. My laptop wouldn't start, but the expert diagnosed and fixed the motherboard issue the same day.",
    avatar: 'MC',
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner',
    rating: 4,
    text: 'Very professional AC servicing. The technician was on time and explained everything clearly. Pricing was exactly as quoted.',
    avatar: 'PS',
  },
]

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Join thousands of happy customers who trust FixItNow for their repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100 hover:shadow-lg transition-all">
              <div className="text-primary-200 absolute top-4 right-8">
                <Quote size={48} fill="currentColor" />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#EAB308" className="text-yellow-500" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
