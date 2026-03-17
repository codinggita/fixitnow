import React from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  ArrowUpRight, 
  Download,
  CreditCard,
  History
} from 'lucide-react';

const Earnings = () => {
  const earningsHistory = [
    { id: 1, date: 'Today, Mar 17', job: 'iPhone 13 Screen Repair', amount: 85.00, status: 'Completed', method: 'Stripe' },
    { id: 2, date: 'Yesterday, Mar 16', job: 'Kitchen Sink Leakage', amount: 120.00, status: 'Completed', method: 'Paypal' },
    { id: 3, date: 'Mar 15, 2024', job: 'MacBook Pro SSD Upgrade', amount: 240.00, status: 'Completed', method: 'Stripe' },
    { id: 4, date: 'Mar 14, 2024', job: 'Dishwasher Maintenance', amount: 95.00, status: 'Completed', method: 'Cash' },
    { id: 5, date: 'Mar 12, 2024', job: 'Samsung TV Backlight', amount: 310.00, status: 'Completed', method: 'Bank Transfer' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Earnings</h1>
          <p className="text-slate-500 mt-1">Track your revenue and payment history.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-200 transition-all">
          <Download size={18} />
          Export Report
        </button>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between group">
          <div className="flex justify-between items-start">
            <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 transition-transform group-hover:rotate-12">
              <DollarSign size={24} />
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+12.4%</span>
          </div>
          <div className="mt-8">
            <p className="text-slate-400 font-medium text-sm">Total Revenue</p>
            <h2 className="text-3xl font-black text-slate-800 mt-1">$12,450.80</h2>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between group">
          <div className="flex justify-between items-start">
            <div className="bg-purple-50 p-3 rounded-2xl text-purple-600 transition-transform group-hover:rotate-12">
              <CreditCard size={24} />
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-lg">Last 30 days</span>
          </div>
          <div className="mt-8">
            <p className="text-slate-400 font-medium text-sm">Available Balance</p>
            <h2 className="text-3xl font-black text-slate-800 mt-1">$1,204.50</h2>
          </div>
          <button className="mt-6 text-purple-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
            Withdraw Funds <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="bg-indigo-600 p-8 rounded-[2rem] shadow-xl shadow-indigo-100 flex flex-col justify-between text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-colors" />
          <div className="flex justify-between items-start relative">
            <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl text-white">
              <TrendingUp size={24} />
            </div>
            <Calendar size={20} className="text-white/40" />
          </div>
          <div className="mt-8 relative">
            <p className="text-indigo-100 font-medium text-sm">Projected Earnings</p>
            <h2 className="text-3xl font-black mt-1">$2,250.00</h2>
            <div className="mt-4 w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div className="bg-white w-2/3 h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <h3 className="font-bold text-xl text-slate-800 flex items-center gap-3">
            <History className="text-blue-600" />
            Transaction History
          </h3>
          <div className="flex items-center gap-2 p-1 bg-slate-50 rounded-xl">
            <button className="px-4 py-1.5 rounded-lg text-xs font-bold bg-white shadow-sm text-blue-600">All</button>
            <button className="px-4 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-slate-600">Withdrawals</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                <th className="px-8 py-4">Transaction</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {earningsHistory.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        <DollarSign size={18} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">{item.job}</p>
                        <p className="text-xs text-slate-400">Via {item.method}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-500">{item.date}</td>
                  <td className="px-8 py-6">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 w-fit px-3 py-1 rounded-full border border-emerald-100/50">
                      <div className="w-1 h-1 rounded-full bg-emerald-600" />
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className="font-black text-slate-800">+ ${item.amount.toFixed(2)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-slate-50/50 text-center">
          <button className="text-blue-600 text-sm font-bold hover:underline">Show more activity</button>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
