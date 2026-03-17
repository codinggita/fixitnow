import React from 'react';

const SummaryCard = ({ label, value, icon, color, bg, trend }) => {
  const Icon = icon;
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
      <div className="flex items-start justify-between">
        <div className={`${bg} ${color} p-3 rounded-xl transition-transform group-hover:scale-110`}>
          <Icon size={24} />
        </div>
        {trend && (
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend.includes('+') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
            {trend}
          </span>
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-slate-500 text-sm font-medium">{label}</h2>
        <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
