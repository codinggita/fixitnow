import { useState } from 'react';
import { sampleBookings, technicians } from '../data/mockData';
import BookingStatusTracker from '../components/BookingStatusTracker';
import { useNotification } from '../context/NotificationContext';
import {
  Wrench, CheckCircle, XCircle, Clock, DollarSign,
  Star, TrendingUp, Calendar, ChevronRight
} from 'lucide-react';

export default function TechDashboard() {
  const { notify } = useNotification();
  const currentTech = technicians[0]; // Demo as first technician

  const [bookings, setBookings] = useState([
    {
      id: 'tb1',
      userName: 'Ankit Shah',
      category: 'Phone Repair',
      problem: 'iPhone screen cracked, touch not responding on left side',
      status: 'confirmed',
      timeSlot: 'Tomorrow, 10:00 AM - 11:00 AM',
      estimatedPrice: '₹2,200',
      date: '2026-03-14'
    },
    {
      id: 'tb2',
      userName: 'Meera Jain',
      category: 'Laptop Repair',
      problem: 'Laptop keyboard keys stuck, need full keyboard replacement',
      status: 'in-progress',
      timeSlot: 'Today, 2:00 PM - 3:00 PM',
      estimatedPrice: '₹1,800',
      date: '2026-03-14'
    },
    {
      id: 'tb3',
      userName: 'Pooja Patel',
      category: 'Phone Repair',
      problem: 'Battery draining fast, phone gets very hot',
      status: 'confirmed',
      timeSlot: 'Tomorrow, 3:00 PM - 4:00 PM',
      estimatedPrice: '₹900',
      date: '2026-03-14'
    },
  ]);

  const handleAccept = (id) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'assigned' } : b));
    notify.success('Booking Accepted', 'The customer has been notified.');
  };

  const handleReject = (id) => {
    setBookings(prev => prev.filter(b => b.id !== id));
    notify.info('Booking Declined', 'The booking has been removed.');
  };

  const updateStatus = (id, newStatus) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
    notify.success('Status Updated', `Booking status changed to ${newStatus.replace('-', ' ')}.`);
  };

  const stats = [
    { label: 'Active Jobs', value: bookings.filter(b => b.status !== 'completed').length, icon: Wrench, color: 'text-primary-400' },
    { label: 'Completed', value: currentTech.completedJobs, icon: CheckCircle, color: 'text-accent-400' },
    { label: 'Rating', value: currentTech.rating, icon: Star, color: 'text-warning' },
    { label: 'Earnings (Today)', value: '₹4,900', icon: DollarSign, color: 'text-accent-400' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-surface-lighter flex items-center justify-center text-3xl">
              {currentTech.avatar}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Technician Dashboard</h1>
              <p className="text-text-secondary text-sm">Welcome back, {currentTech.name}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, value, icon: Icon, color }, index) => (
            <div key={label} className={`p-5 rounded-2xl glass card-hover animate-fade-in-up stagger-${index + 1}`}>
              <div className="flex items-center justify-between mb-3">
                <Icon size={22} className={color} />
                <TrendingUp size={14} className="text-accent-400" />
              </div>
              <p className="text-2xl font-bold text-text-primary">{value}</p>
              <p className="text-xs text-text-muted mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Booking requests */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
            <Calendar size={20} className="text-primary-400" />
            Booking Requests
          </h2>

          <div className="space-y-4">
            {bookings.map((booking, index) => (
              <div key={booking.id} className={`p-5 rounded-2xl glass animate-fade-in-up stagger-${(index % 3) + 1}`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="text-base font-semibold text-text-primary">{booking.userName}</h3>
                      <span className={`badge ${
                        booking.status === 'confirmed' ? 'badge-primary' :
                        booking.status === 'assigned' ? 'badge-warning' :
                        booking.status === 'in-progress' ? 'badge-warning' :
                        'badge-success'
                      }`}>
                        {booking.status.replace('-', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mb-2">{booking.problem}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <Wrench size={12} />
                        {booking.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {booking.timeSlot}
                      </span>
                      <span className="font-semibold text-accent-400">{booking.estimatedPrice}</span>
                    </div>

                    {/* Status tracker for active jobs */}
                    {booking.status !== 'confirmed' && (
                      <div className="mt-4">
                        <BookingStatusTracker currentStatus={booking.status} />
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 shrink-0">
                    {booking.status === 'confirmed' && (
                      <>
                        <button onClick={() => handleAccept(booking.id)} className="btn-accent text-sm">
                          <CheckCircle size={14} />
                          Accept
                        </button>
                        <button onClick={() => handleReject(booking.id)} className="btn-secondary text-sm">
                          <XCircle size={14} />
                          Decline
                        </button>
                      </>
                    )}
                    {booking.status === 'assigned' && (
                      <button onClick={() => updateStatus(booking.id, 'in-progress')} className="btn-primary text-sm">
                        Start Repair <ChevronRight size={14} />
                      </button>
                    )}
                    {booking.status === 'in-progress' && (
                      <button onClick={() => updateStatus(booking.id, 'completed')} className="btn-accent text-sm">
                        <CheckCircle size={14} />
                        Mark Complete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {bookings.length === 0 && (
            <div className="text-center py-12 glass rounded-2xl">
              <p className="text-4xl mb-3">🔧</p>
              <h3 className="text-lg font-semibold text-text-primary">No active bookings</h3>
              <p className="text-sm text-text-muted mt-1">New booking requests will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
