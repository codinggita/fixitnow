import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Wallet, 
  Star, 
  User as UserIcon, 
  LogOut, 
  Bell, 
  ChevronRight,
  Menu,
  X,
  Circle
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/technician' },
    { name: 'My Jobs', icon: Briefcase, path: '/technician/jobs' },
    { name: 'Earnings', icon: Wallet, path: '/technician/earnings' },
    { name: 'Reviews', icon: Star, path: '/technician/reviews' },
    { name: 'Profile', icon: UserIcon, path: '/technician/profile' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full bg-white border-r border-slate-200 z-50 transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-0 lg:w-20'} overflow-hidden lg:overflow-visible
      `}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className={`font-bold text-xl text-slate-800 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 lg:hidden'}`}>
              FixItNow
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-3 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/technician'}
                className={({ isActive }) => `
                  flex items-center gap-3 p-3 rounded-xl transition-all group
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}
                `}
                onClick={() => window.innerWidth < 1024 && toggleSidebar()}
              >
                {({ isActive }) => (
                  <>
                    <item.icon size={22} className={`transition-transform duration-200 group-hover:scale-110`} />
                    <span className={`font-medium transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 lg:hidden'}`}>
                      {item.name}
                    </span>
                    {isActive && isOpen && (
                      <div className="ml-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      </div>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Logout Section */}
          <div className="p-3 border-t border-slate-100">
            <button className="flex items-center gap-3 w-full p-3 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors group">
              <LogOut size={22} className="transition-transform group-hover:translate-x-1" />
              <span className={`font-medium transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 lg:hidden'}`}>
                Logout
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

const Navbar = ({ toggleSidebar, isOnline, setIsOnline }) => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-30 lg:pl-20">
      <div className="h-16 flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-slate-100 rounded-lg lg:hidden"
          >
            <Menu size={24} className="text-slate-600" />
          </button>
          <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-500">
            <span>Pages</span>
            <ChevronRight size={14} />
            <span className="text-slate-800">Dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:gap-6">
          {/* Online Toggle */}
          <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-full pr-3 border border-slate-200">
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none
                ${isOnline ? 'bg-green-500' : 'bg-slate-300'}
              `}
            >
              <span
                className={`
                  inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                  ${isOnline ? 'translate-x-6' : 'translate-x-1'}
                `}
              />
            </button>
            <span className={`text-xs font-bold uppercase tracking-wider ${isOnline ? 'text-green-600' : 'text-slate-500'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-slate-100 rounded-full transition-colors group text-slate-500 hover:text-blue-600">
            <Bell size={22} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 border-l border-slate-200 pl-3 lg:pl-6 ml-1 lg:ml-2">
            <div className="hidden lg:block text-right">
              <p className="text-sm font-bold text-slate-800">Alex Johnson</p>
              <p className="text-xs text-slate-500">Master Technician</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white shadow-sm overflow-hidden group cursor-pointer ring-2 ring-transparent hover:ring-blue-500 transition-all">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const TechnicianLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:pl-64' : 'lg:pl-20'}`}>
        <Navbar toggleSidebar={toggleSidebar} isOnline={isOnline} setIsOnline={setIsOnline} />
        
        <main className="pt-24 pb-12 px-4 lg:px-8 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default TechnicianLayout;
