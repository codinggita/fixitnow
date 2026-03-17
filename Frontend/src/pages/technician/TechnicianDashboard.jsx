import React from 'react';
import { 
  CheckCircle, 
  Clock, 
  MessageSquare, 
  TrendingUp,
  ArrowUpRight,
  ChevronRight,
  MoreVertical
} from 'lucide-react';
import SummaryCard from '../../components/technician/SummaryCard';

const TechnicianDashboard = () => {
  const stats = [
    { label: 'Total Jobs Completed', value: '142', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', trend: '+12%' },
    { label: 'Active Jobs', value: '3', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', trend: 'Live' },
    { label: 'Pending Requests', value: '5', icon: MessageSquare, color: 'text-amber-600', bg: 'bg-amber-50', trend: 'New' },
    { label: 'Total Earnings', value: '$4,520', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50', trend: '+8.5%' },
  ];

  const recentJobs = [
    { id: 1, customer: 'Sarah Miller', service: 'iPhone Screen Repair', status: 'In Progress', time: '10:30 AM', price: '$85' },
    { id: 2, customer: 'James Wilson', service: 'Laptop Battery Replacement', status: 'Pending', time: 'Tomorrow, 2:00 PM', price: '$120' },
    { id: 3, customer: 'Emily Chen', service: 'AC Maintenance', status: 'Completed', time: 'Yesterday', price: '$150' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Welcome back, Alex! 👋</h1>
        <p className="text-slate-500 mt-1">Here's what's happening with your repairs today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <SummaryCard 
            key={stat.label}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
            bg={stat.bg}
            trend={stat.trend}
          />
        ))}
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Jobs */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <h3 className="font-bold text-xl text-slate-800">Recent Assignments</h3>
            <button className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Time</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                {recentJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 font-semibold text-slate-800">{job.customer}</td>
                    <td className="px-6 py-4 text-slate-600">{job.service}</td>
                    <td className="px-6 py-4">
                      <span className={`
                        px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide
                        ${job.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                          job.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 
                          'bg-amber-100 text-amber-700'}
                      `}>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">{job.time}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions / Earnings Summary */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-200 flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700" />
          
          <div className="relative">
            <p className="text-blue-100 font-medium">Monthly Target</p>
            <h3 className="text-3xl font-bold mt-2">$6,000.00</h3>
            
            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm text-blue-100">Progress</span>
                <span className="text-sm font-bold">75%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-3/4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </div>
            </div>
          </div>

          <div className="relative mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <ArrowUpRight size={18} />
              Quick Performance
            </h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-[10px] uppercase text-blue-200 tracking-wider">Rating</p>
                <p className="text-lg font-bold">4.9/5</p>
              </div>
              <div className="border-l border-white/10">
                <p className="text-[10px] uppercase text-blue-200 tracking-wider">Tasks</p>
                <p className="text-lg font-bold">12/15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicianDashboard;
