import { useState } from 'react';
import { technicians, categories, sampleBookings } from '../data/mockData';
import { useNotification } from '../context/NotificationContext';
import {
  Shield, Users, Wrench, BarChart3, CheckCircle,
  XCircle, Search, Filter, TrendingUp, Eye,
  UserCheck, Layers, AlertTriangle, Plus
} from 'lucide-react';

export default function AdminDashboard() {
  const { notify } = useNotification();
  const [activeTab, setActiveTab] = useState('overview');
  const [techList, setTechList] = useState(technicians);
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Total Users', value: '10,248', change: '+12%', icon: Users, color: '#6366f1' },
    { label: 'Technicians', value: techList.length, change: '+3', icon: Wrench, color: '#10b981' },
    { label: 'Active Bookings', value: sampleBookings.filter(b => b.status !== 'completed').length, change: '+5', icon: Layers, color: '#f59e0b' },
    { label: 'Revenue (Month)', value: '₹2.4L', change: '+18%', icon: BarChart3, color: '#8b5cf6' },
  ];

  const handleVerify = (techId) => {
    setTechList(prev => prev.map(t => t.id === techId ? { ...t, verified: true } : t));
    notify.success('Technician Verified', 'The technician has been verified successfully.');
  };

  const handleRemove = (techId) => {
    setTechList(prev => prev.filter(t => t.id !== techId));
    notify.info('Technician Removed', 'The technician has been removed from the platform.');
  };

  const filteredTechs = techList.filter(t =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'technicians', label: 'Technicians', icon: UserCheck },
    { id: 'categories', label: 'Categories', icon: Layers },
    { id: 'users', label: 'Users', icon: Users },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <Shield size={24} color="white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Admin Dashboard</h1>
              <p className="text-sm text-text-secondary">Manage your platform</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeTab === id
                  ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                  : 'glass-light text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map(({ label, value, change, icon: Icon, color }, index) => (
                <div key={label} className={`p-5 rounded-2xl glass card-hover animate-fade-in-up stagger-${index + 1}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${color}20` }}>
                      <Icon size={20} style={{ color }} />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-medium text-accent-400">
                      <TrendingUp size={12} />
                      {change}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-text-primary">{value}</p>
                  <p className="text-xs text-text-muted mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Recent activity */}
            <div className="p-6 rounded-2xl glass">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { icon: '🔧', text: 'Rajesh Kumar completed a Phone Repair job', time: '2 hours ago', type: 'success' },
                  { icon: '👤', text: 'New user registration: Kiran Desai', time: '3 hours ago', type: 'info' },
                  { icon: '⚠️', text: 'Ravi Joshi pending verification', time: '5 hours ago', type: 'warning' },
                  { icon: '📋', text: 'New booking: AC Repair by Ankit Shah', time: '6 hours ago', type: 'info' },
                  { icon: '⭐', text: 'New 5-star review for Neha Gupta', time: '8 hours ago', type: 'success' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-lighter/30 transition-colors">
                    <span className="text-lg">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm text-text-primary">{activity.text}</p>
                      <p className="text-xs text-text-muted">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Technicians Tab */}
        {activeTab === 'technicians' && (
          <div>
            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search technicians by name or skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <Filter size={14} />
                {filteredTechs.length} technicians
              </div>
            </div>

            {/* Unverified alert */}
            {techList.some(t => !t.verified) && (
              <div className="flex items-center gap-3 p-4 rounded-xl mb-6" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <AlertTriangle size={18} className="text-warning shrink-0" />
                <p className="text-sm text-warning">
                  {techList.filter(t => !t.verified).length} technician(s) pending verification
                </p>
              </div>
            )}

            {/* Technician table */}
            <div className="rounded-2xl glass overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-surface-lighter/30">
                      <th className="text-left px-5 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Technician</th>
                      <th className="text-left px-5 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Skills</th>
                      <th className="text-left px-5 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Rating</th>
                      <th className="text-left px-5 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Status</th>
                      <th className="text-right px-5 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTechs.map(tech => (
                      <tr key={tech.id} className="border-b border-surface-lighter/20 hover:bg-surface-lighter/20 transition-colors">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{tech.avatar}</span>
                            <div>
                              <p className="text-sm font-medium text-text-primary">{tech.name}</p>
                              <p className="text-xs text-text-muted">{tech.location.area}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex flex-wrap gap-1">
                            {tech.skills.map(s => (
                              <span key={s} className="px-2 py-0.5 text-xs rounded-md bg-surface-lighter text-text-secondary">{s}</span>
                            ))}
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1">
                            <span className="text-warning">★</span>
                            <span className="text-sm font-medium text-text-primary">{tech.rating}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          {tech.verified ? (
                            <span className="badge badge-success">Verified</span>
                          ) : (
                            <span className="badge badge-warning">Pending</span>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2 justify-end">
                            {!tech.verified && (
                              <button onClick={() => handleVerify(tech.id)} className="p-2 rounded-lg hover:bg-accent-500/20 text-accent-400 transition-colors cursor-pointer" title="Verify">
                                <CheckCircle size={16} />
                              </button>
                            )}
                            <button className="p-2 rounded-lg hover:bg-primary-500/20 text-primary-400 transition-colors cursor-pointer" title="View">
                              <Eye size={16} />
                            </button>
                            <button onClick={() => handleRemove(tech.id)} className="p-2 rounded-lg hover:bg-danger/20 text-danger transition-colors cursor-pointer" title="Remove">
                              <XCircle size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-text-primary">Service Categories</h3>
              <button className="btn-primary text-sm">
                <Plus size={14} />
                Add Category
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat, index) => (
                <div key={cat.id} className={`p-5 rounded-2xl glass card-hover animate-fade-in-up stagger-${index + 1}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${cat.color}20` }}>
                      {cat.image}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-text-primary">{cat.name}</h4>
                      <p className="text-xs text-text-muted">{cat.avgPrice}</p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{cat.description}</p>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>{technicians.filter(t => t.categories.includes(cat.id)).length} technicians</span>
                    <button className="text-primary-400 hover:text-primary-300 cursor-pointer font-medium">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div>
            <div className="rounded-2xl glass overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-surface-lighter/30">
                      <th className="text-left px-5 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">User</th>
                      <th className="text-left px-5 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Email</th>
                      <th className="text-left px-5 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Bookings</th>
                      <th className="text-left px-5 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Joined</th>
                      <th className="text-right px-5 py-4 text-xs font-semibold text-text-muted uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Vijay Diwaniya', email: 'vijay@example.com', bookings: 3, joined: 'Mar 2026' },
                      { name: 'Ankit Shah', email: 'ankit@example.com', bookings: 7, joined: 'Feb 2026' },
                      { name: 'Meera Jain', email: 'meera@example.com', bookings: 2, joined: 'Mar 2026' },
                      { name: 'Kiran Desai', email: 'kiran@example.com', bookings: 5, joined: 'Jan 2026' },
                      { name: 'Pooja Patel', email: 'pooja@example.com', bookings: 1, joined: 'Mar 2026' },
                    ].map(user => (
                      <tr key={user.email} className="border-b border-surface-lighter/20 hover:bg-surface-lighter/20 transition-colors">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-sm font-semibold text-primary-300">
                              {user.name.charAt(0)}
                            </div>
                            <span className="text-sm font-medium text-text-primary">{user.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-sm text-text-secondary">{user.email}</td>
                        <td className="px-5 py-4 text-sm text-text-primary font-medium">{user.bookings}</td>
                        <td className="px-5 py-4 text-sm text-text-muted">{user.joined}</td>
                        <td className="px-5 py-4 text-right">
                          <button className="p-2 rounded-lg hover:bg-primary-500/20 text-primary-400 transition-colors cursor-pointer">
                            <Eye size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
