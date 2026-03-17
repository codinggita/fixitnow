import { Link } from 'react-router-dom';
import { categories, technicians } from '../data/mockData';
import ServiceCard from '../components/ServiceCard';
import TechnicianCard from '../components/TechnicianCard';
import {
  Search, ArrowRight, Shield, Clock, Star,
  Zap, Users, ThumbsUp, MapPin, ChevronRight
} from 'lucide-react';

export default function Home() {
  const topTechnicians = technicians
    .filter(t => t.verified && t.available)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="w-full relative z-10 flex flex-col">
      {/* Hero */}
      <section className="relative w-full py-20 lg:py-32 min-h-[600px] flex flex-col justify-center">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl animate-orb-float" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-500/10 blur-3xl animate-orb-float" style={{ animationDelay: '4s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-600/5 blur-3xl pointer-events-none animate-orb-float" style={{ animationDelay: '8s' }} />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8 animate-fade-in shrink-0">
              <Zap size={16} className="text-accent-400" />
              <span className="text-sm text-text-secondary">Trusted by 10,000+ users in Ahmedabad</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up shrink-0">
              Fix Any Device,{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">Anytime,{' '}</span>
              <span className="gradient-text-accent">Anywhere</span>
            </h1>

            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-12 animate-fade-in-up stagger-2 shrink-0">
              Connect with verified local technicians for fast, reliable repairs.
              From smartphones to home appliances — get it fixed in hours.
            </p>

            {/* Search bar */}
            <div className="w-full max-w-xl mx-auto animate-fade-in-up stagger-3 mb-16 px-4 sm:px-0 shrink-0">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="relative flex-1 group">
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary-400 transition-colors" />
                  <input
                    type="text"
                    placeholder="Describe your device issue..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl glass text-base focus:outline-none focus:ring-2 focus:ring-primary-500/40 text-text-primary placeholder:text-text-muted/60 transition-all"
                  />
                </div>
                <Link
                  to="/category/phone-repair"
                  className="btn-primary py-4 px-8 rounded-xl no-underline justify-center shadow-lg shadow-primary-500/20 whitespace-nowrap shrink-0 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Find Technicians
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="w-full flex w-full flex-wrap items-center justify-center gap-6 sm:gap-12 animate-fade-in-up stagger-4 pt-12 border-t border-white/5 shrink-0">
              {[
                { icon: Users, value: '500+', label: 'Verified Techs' },
                { icon: Star, value: '4.8/5', label: 'User Rating' },
                { icon: Clock, value: '30min', label: 'Response' },
                { icon: ThumbsUp, value: '100%', label: 'Guarantee' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-primary-400 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-bold text-text-primary leading-tight">{value}</p>
                    <p className="text-[11px] uppercase tracking-wider text-text-muted font-medium">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full py-20 lg:py-32 relative border-t border-white/5 bg-surface-lighter/5">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              What needs <span className="gradient-text">repair?</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto text-lg">
              Choose a category and find the best technicians near you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((cat, index) => (
              <ServiceCard key={cat.id} category={cat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="w-full py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-orb-float pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-orb-float pointer-events-none" style={{ animationDelay: '6s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-600/5 to-transparent pointer-events-none" />
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              How it <span className="gradient-text-accent">works</span>
            </h2>
            <p className="text-text-secondary text-lg">Get your device fixed in 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Select Service', desc: 'Choose the type of repair you need', emoji: '🔍' },
              { step: '02', title: 'Describe Problem', desc: 'Tell us what\'s wrong with your device', emoji: '📝' },
              { step: '03', title: 'Book Technician', desc: 'Pick a verified technician and time slot', emoji: '📅' },
              { step: '04', title: 'Get It Fixed', desc: 'Track repair progress in real-time', emoji: '✅' },
            ].map((item, index) => (
              <div
                key={item.step}
                className={`relative p-8 rounded-3xl glass card-hover text-center flex flex-col items-center animate-fade-in-up stagger-${index + 1}`}
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <div className="text-xs font-bold text-primary-400 mb-2">{item.step}</div>
                <h3 className="text-base font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top technicians */}
      <section className="w-full py-20 lg:py-32 bg-surface-lighter/5">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Top <span className="gradient-text">technicians</span>
              </h2>
              <p className="text-text-secondary text-lg">Highest rated professionals in your area</p>
            </div>
            <Link to="/category/phone-repair" className="btn-secondary text-sm no-underline self-start whitespace-nowrap hover:scale-[1.02] active:scale-95 transition-all">
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {topTechnicians.map((tech, index) => (
              <TechnicianCard key={tech.id} technician={tech} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="w-full py-20 lg:py-32 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16 rounded-[2rem] glass relative overflow-hidden text-center lg:text-left shadow-xl shadow-surface-lighter/5">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2 animate-orb-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/2 animate-orb-float" style={{ animationDelay: '5s' }} />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Verified Technicians',
                  desc: 'Every technician is background verified and skill-certified before joining our platform.'
                },
                {
                  icon: Clock,
                  title: 'Quick Service',
                  desc: 'Average response time of 30 minutes. Get your device fixed the same day.'
                },
                {
                  icon: ThumbsUp,
                  title: 'Satisfaction Guarantee',
                  desc: '30-day warranty on all repairs. Not satisfied? We\'ll make it right.'
                }
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center mb-4 shrink-0">
                    <Icon size={24} className="text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-surface-lighter/30 bg-surface">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold gradient-text">FixItNow</span>
              <span className="text-sm text-text-muted">© 2026. All rights reserved.</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
              <a href="#" className="hover:text-text-primary transition-colors no-underline">Privacy</a>
              <a href="#" className="hover:text-text-primary transition-colors no-underline">Terms</a>
              <a href="#" className="hover:text-text-primary transition-colors no-underline">Support</a>
              <span className="flex items-center gap-1">
                <MapPin size={14} /> Ahmedabad, India
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
