import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  Phone, 
  User,
  MessageSquare,
  ChevronDown,
  Filter,
  MoreVertical,
  CheckCircle2,
  Play,
  XCircle
} from 'lucide-react';

const MyJobs = () => {
  const [activeTab, setActiveTab] = useState('active');

  const jobs = [
    { 
      id: 1, 
      customer: 'Sarah Miller', 
      service: 'iPhone 13 Pro Screen Repair', 
      type: 'Device',
      location: '123 Downtown St, NY', 
      time: 'Today, 10:30 AM', 
      status: 'In Progress',
      phone: '+1 555-0123',
      priority: 'High'
    },
    { 
      id: 2, 
      customer: 'James Wilson', 
      service: 'MacBook Pro Battery Swap', 
      type: 'Laptop',
      location: '456 Brooklyn Ave, NY', 
      time: 'Today, 02:00 PM', 
      status: 'Pending',
      phone: '+1 555-0124',
      priority: 'Medium'
    },
    { 
      id: 3, 
      customer: 'Emily Chen', 
      service: 'Microwave Oven Repair', 
      type: 'Appliance',
      location: '789 QueensBlvd, NY', 
      time: 'Tomorrow, 09:00 AM', 
      status: 'Pending',
      phone: '+1 555-0125',
      priority: 'Low'
    },
    { 
      id: 4, 
      customer: 'Robert Fox', 
      service: 'Windows 11 Setup', 
      type: 'Desktop',
      location: '321 Bronx Rd, NY', 
      time: 'Yesterday', 
      status: 'Completed',
      phone: '+1 555-0126',
      priority: 'Medium'
    },
  ];

  const filteredJobs = activeTab === 'all' ? jobs : jobs.filter(j => 
    activeTab === 'active' ? (j.status === 'In Progress' || j.status === 'Pending') : j.status === 'Completed'
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">My Jobs</h1>
          <p className="text-slate-500 mt-1 pl-4">Manage and track your service assignments.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search jobs..."
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
            />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 shadow-sm transition-all">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit">
        {['active', 'completed', 'all'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-6 py-2 rounded-xl text-sm font-bold capitalize transition-all
              ${activeTab === tab 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-800'}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-inner
                    ${job.type === 'Device' ? 'bg-blue-50 text-blue-600' : 
                      job.type === 'Laptop' ? 'bg-purple-50 text-purple-600' : 
                      'bg-orange-50 text-orange-600'}
                  `}>
                    {job.type === 'Device' ? '📱' : job.type === 'Laptop' ? '💻' : '🔌'}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{job.service}</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      ID: #FIX-{1000 + job.id}
                    </p>
                  </div>
                </div>
                <span className={`
                  px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border
                  ${job.status === 'Completed' ? 'bg-green-50 text-green-700 border-green-100' : 
                    job.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border-blue-100 animate-pulse' : 
                    'bg-amber-50 text-amber-700 border-amber-100'}
                `}>
                  {job.status}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-600">
                  <User size={18} className="text-slate-400" />
                  <span className="text-sm font-medium">{job.customer}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin size={18} className="text-slate-400" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Clock size={18} className="text-slate-400" />
                  <span className="text-sm">{job.time}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors">
                    <Phone size={18} />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-600 transition-colors">
                    <MessageSquare size={18} />
                  </button>
                </div>

                <div className="flex gap-2">
                  {job.status === 'Pending' && (
                    <>
                      <button className="px-4 py-2 bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 rounded-xl text-sm font-bold transition-all flex items-center gap-2 group/btn">
                        <XCircle size={16} />
                        Reject
                      </button>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-200 transition-all flex items-center gap-2 group/btn">
                        <Play size={16} className="group-hover/btn:translate-x-0.5" />
                        Start Job
                      </button>
                    </>
                  )}
                  {job.status === 'In Progress' && (
                    <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-green-200 transition-all flex items-center gap-2">
                      <CheckCircle2 size={16} />
                      Mark Completed
                    </button>
                  )}
                  {job.status === 'Completed' && (
                    <button className="px-4 py-2 bg-slate-50 text-slate-500 rounded-xl text-sm font-bold cursor-default flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500" />
                      Details Viewed
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyJobs;
