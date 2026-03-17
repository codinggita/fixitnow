import { Wrench, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-500 text-white p-1.5 rounded-lg">
                <Wrench size={20} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                FixIt<span className="text-primary-500">Now</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner for all device and appliance repairs. Professional technicians at your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Phone Repair</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Laptop Repair</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Home Appliances</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">AC Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary-500 mt-1">📍</span>
                <span>123 Repair Street, Tech City, 560001</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-500">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary-500">📧</span>
                <span>support@fixitnow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} FixItNow. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
