import React from 'react';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Camera, 
  Award, 
  ShieldCheck,
  Edit,
  Globe,
  Settings,
  ChevronRight
} from 'lucide-react';

const Profile = () => {
  const skills = ['iPhone Repair', 'Laptop Hardware', 'Networking', 'Software Installation', 'Android Specialist'];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 leading-tight">Technician Profile</h1>
        <p className="text-slate-500 mt-1">Manage your professional information and settings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-600 to-indigo-600" />
            
            <div className="relative pt-12 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-[2rem] border-4 border-white shadow-xl overflow-hidden ring-4 ring-blue-50">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                    alt="Alex Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 p-2.5 bg-white shadow-xl rounded-2xl text-blue-600 border border-slate-100 hover:scale-110 transition-transform active:scale-95">
                  <Camera size={20} />
                </button>
              </div>
              
              <h2 className="text-2xl font-black text-slate-800">Alex Johnson</h2>
              <div className="flex items-center gap-1 text-slate-400 mt-1 font-medium">
                <Award size={16} className="text-blue-500" />
                Master Technician
              </div>

              <div className="flex items-center justify-center gap-4 mt-8 w-full border-t border-slate-100 pt-8">
                <div>
                  <p className="text-xl font-bold text-slate-800">1.2k</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Jobs</p>
                </div>
                <div className="w-px h-8 bg-slate-100" />
                <div>
                  <p className="text-xl font-bold text-slate-800">4.9</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Rating</p>
                </div>
                <div className="w-px h-8 bg-slate-100" />
                <div>
                  <p className="text-xl font-bold text-slate-800">3yr</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Exp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center justify-between">
              Verification
              <ShieldCheck className="text-green-500" size={20} />
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-sm font-bold text-slate-600">ID Verified</span>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-sm font-bold text-slate-600">Background Check</span>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Tabs/Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-slate-100 relative">
            <button className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-100 transition-colors">
              <Edit size={16} />
              Edit Profile
            </button>

            <h3 className="font-black text-2xl text-slate-800 mb-8">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Mail size={12} className="text-blue-500" />
                  Email Address
                </label>
                <p className="text-slate-800 font-bold group-hover:text-blue-600 transition-colors">alex.johnson@fixitnow.com</p>
              </div>
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Phone size={12} className="text-blue-500" />
                  Phone Number
                </label>
                <p className="text-slate-800 font-bold group-hover:text-blue-600 transition-colors">+1 555-901-2345</p>
              </div>
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={12} className="text-blue-500" />
                  Service Location
                </label>
                <p className="text-slate-800 font-bold group-hover:text-blue-600 transition-colors">Brooklyn, New York</p>
              </div>
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Globe size={12} className="text-blue-500" />
                  Language
                </label>
                <p className="text-slate-800 font-bold group-hover:text-blue-600 transition-colors">English, Spanish</p>
              </div>
            </div>

            <h3 className="font-black text-2xl text-slate-800 mb-8">Professional Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-6 py-3 bg-slate-50 text-slate-600 rounded-2xl text-sm font-bold border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-600 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
              <button className="px-6 py-3 border-2 border-dashed border-slate-100 text-slate-400 rounded-2xl text-sm font-bold hover:border-blue-200 hover:text-blue-500 transition-all">
                + Add Skill
              </button>
            </div>

            <div className="mt-12 flex items-center gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                <Settings size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Account Settings</h4>
                <p className="text-sm text-slate-500">Manage your notifications, security, and privacy.</p>
              </div>
              <button className="ml-auto p-4 hover:bg-white rounded-2xl text-slate-400 hover:text-slate-600 transition-all shadow-sm">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
