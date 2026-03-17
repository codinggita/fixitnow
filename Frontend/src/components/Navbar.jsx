import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import {
  Wrench, Menu, X, Bell, User, ChevronDown,
  Home, Calendar, Settings, Shield, LogOut
} from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, switchRole, logout } = useAuth();
  const { notifications } = useNotification();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/bookings', label: 'My Bookings', icon: Calendar },
    { to: '/tech-dashboard', label: 'Tech Panel', icon: Wrench },
    { to: '/admin', label: 'Admin', icon: Shield },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass" style={{ borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}>
              <Wrench size={20} color="white" />
            </div>
            <span className="text-xl font-bold gradient-text">FixItNow</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                  isActive(to)
                    ? 'bg-primary-500/20 text-primary-300'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-lighter/50'
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <button className="relative p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-lighter/50 transition-all">
              <Bell size={20} />
              {notifications.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full" />
              )}
            </button>

            {/* Role switcher + Profile */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass-light hover:bg-surface-lighter/70 transition-all cursor-pointer"
              >
                <span className="text-lg">{user?.avatar}</span>
                <span className="hidden sm:block text-sm font-medium text-text-primary">{user?.name?.split(' ')[0]}</span>
                <ChevronDown size={14} className="text-text-muted" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl glass py-2 animate-fade-in" style={{ border: '1px solid rgba(99,102,241,0.2)' }}>
                  <div className="px-4 py-2 border-b border-surface-lighter/50">
                    <p className="text-sm font-medium text-text-primary">{user?.name}</p>
                    <p className="text-xs text-text-muted">{user?.email}</p>
                  </div>
                  <div className="px-2 py-2">
                    <p className="px-2 py-1 text-xs text-text-muted uppercase tracking-wider">Switch Role</p>
                    {['user', 'technician', 'admin'].map(role => (
                      <button
                        key={role}
                        onClick={() => { switchRole(role); setProfileOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all cursor-pointer ${
                          user?.role === role
                            ? 'bg-primary-500/20 text-primary-300'
                            : 'text-text-secondary hover:text-text-primary hover:bg-surface-lighter/50'
                        }`}
                      >
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </button>
                    ))}
                  </div>
                  <div className="border-t border-surface-lighter/50 px-2 pt-2">
                    <button
                      onClick={() => { logout(); setProfileOpen(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-danger hover:bg-danger/10 transition-all cursor-pointer"
                    >
                      <LogOut size={14} />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-lighter/50 transition-all cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass animate-fade-in border-t border-surface-lighter/30">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all no-underline ${
                  isActive(to)
                    ? 'bg-primary-500/20 text-primary-300'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-lighter/50'
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
