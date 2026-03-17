import { Link } from 'react-router-dom';
import { Wrench, ArrowRight, Star, Shield, Zap, CheckCircle } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-surface-dark overflow-hidden relative">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6 group">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-ping" />
              <span className="text-xs font-semibold text-primary-300 tracking-wider uppercase">India's Premium Repair Service</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Expert Repairs, <br />
              <span className="gradient-text">Delivered to You.</span>
            </h1>
            
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From cracked screens to complex appliance fixes, our certified professionals handle it all. 
              Join thousands of happy customers today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/signup" className="btn-primary px-8 py-4 rounded-2xl text-lg flex items-center gap-2 w-full sm:w-auto justify-center group shadow-xl shadow-primary-500/20">
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/login" className="px-8 py-4 rounded-2xl text-lg font-semibold text-white bg-surface-lighter/10 border border-white/10 hover:bg-surface-lighter/20 transition-all w-full sm:w-auto text-center backdrop-blur-md">
                Welcome Back
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-70">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-accent-400" />
                <span className="text-sm text-text-muted">Certified Techs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-accent-400" />
                <span className="text-sm text-text-muted">45 Min Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-accent-400" />
                <span className="text-sm text-text-muted">Quality Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Cards/Features */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up stagger-1">
            <div className="p-6 rounded-3xl glass-light border border-white/5 card-hover">
              <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center mb-4 text-primary-400">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Booking</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Book a technician in less than 60 seconds from your phone.</p>
            </div>

            <div className="p-6 rounded-3xl glass-light border border-white/5 card-hover mt-4 sm:mt-8">
              <div className="w-12 h-12 rounded-2xl bg-accent-500/20 flex items-center justify-center mb-4 text-accent-400">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Top Rated</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Only the best, background-verified technicians make it to our platform.</p>
            </div>

            <div className="p-6 rounded-3xl glass-light border border-white/5 card-hover">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 text-primary-300">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Safe & Secure</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Fully transparent pricing and secure digital payments.</p>
            </div>

            <div className="p-6 rounded-3xl glass border border-primary-500/30 card-hover mt-4 sm:mt-8 flex flex-col items-center justify-center text-center bg-primary-500/10">
               <div className="flex items-center gap-1 text-warning mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-warning" />)}
               </div>
               <p className="text-sm font-semibold text-white">"Fastest service ever!"</p>
               <span className="text-xs text-text-muted mt-2">- Happy Customer</span>
            </div>
          </div>
        </div>

        {/* Home Link */}
        <div className="mt-20 text-center animate-fade-in stagger-3">
          <Link to="/" className="text-text-muted hover:text-primary-300 transition-colors text-sm font-medium border-b border-text-muted/30 pb-1">
            Just want to browse services? Click here
          </Link>
        </div>
      </div>
    </div>
  );
}
