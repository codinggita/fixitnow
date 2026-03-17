import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleBookings } from '../data/mockData';
import BookingStatusTracker from '../components/BookingStatusTracker';
import ReviewForm from '../components/ReviewForm';
import { useNotification } from '../context/NotificationContext';
import {
  Calendar, Clock, Star, MapPin, ChevronDown,
  ChevronUp, MessageSquare
} from 'lucide-react';

export default function MyBookings() {
  const [expandedId, setExpandedId] = useState(null);
  const [showReviewFor, setShowReviewFor] = useState(null);
  const { notify } = useNotification();
  const [bookings] = useState(sampleBookings);

  const statusColors = {
    confirmed: 'badge-primary',
    assigned: 'badge-warning',
    'in-progress': 'badge-warning',
    completed: 'badge-success',
  };

  const handleReview = (bookingId, review) => {
    notify.success('Review Submitted!', `Thank you for your ${review.rating}-star review.`);
    setShowReviewFor(null);
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-text-primary mb-2">My Bookings</h1>
          <p className="text-text-secondary">Track and manage your repair bookings</p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-in-up stagger-1">
          {[
            { label: 'Total', count: bookings.length, color: 'text-primary-400' },
            { label: 'Active', count: bookings.filter(b => b.status !== 'completed').length, color: 'text-warning' },
            { label: 'Completed', count: bookings.filter(b => b.status === 'completed').length, color: 'text-accent-400' },
          ].map(({ label, count, color }) => (
            <div key={label} className="p-4 rounded-xl glass text-center">
              <p className={`text-2xl font-bold ${color}`}>{count}</p>
              <p className="text-xs text-text-muted mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Bookings list */}
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <div
              key={booking.id}
              className={`rounded-2xl glass overflow-hidden animate-fade-in-up stagger-${(index % 3) + 1}`}
            >
              {/* Booking header */}
              <div
                onClick={() => setExpandedId(expandedId === booking.id ? null : booking.id)}
                className="p-5 cursor-pointer hover:bg-surface-lighter/30 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-base font-semibold text-text-primary">{booking.category}</h3>
                      <span className={`badge ${statusColors[booking.status]}`}>
                        {booking.status.replace('-', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mt-1 line-clamp-1">{booking.problemDescription}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {booking.timeSlot}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>👨‍🔧</span>
                        {booking.technicianName}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-accent-400">{booking.estimatedPrice}</span>
                    {expandedId === booking.id ? <ChevronUp size={18} className="text-text-muted" /> : <ChevronDown size={18} className="text-text-muted" />}
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              {expandedId === booking.id && (
                <div className="px-5 pb-5 border-t border-surface-lighter/30 animate-fade-in">
                  {/* Status tracker */}
                  <div className="py-6">
                    <BookingStatusTracker currentStatus={booking.status} />
                  </div>

                  {/* Details */}
                  <div className="p-4 rounded-xl glass-light space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Problem</span>
                      <span className="text-text-secondary text-right max-w-xs">{booking.problemDescription}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Booked on</span>
                      <span className="text-text-secondary">{booking.createdAt}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={`/technician/${booking.technicianId}`}
                      className="btn-secondary text-sm no-underline"
                    >
                      View Technician
                    </Link>
                    {booking.status === 'completed' && (
                      <button
                        onClick={() => setShowReviewFor(showReviewFor === booking.id ? null : booking.id)}
                        className="btn-accent text-sm"
                      >
                        <Star size={14} />
                        {showReviewFor === booking.id ? 'Hide Review' : 'Rate & Review'}
                      </button>
                    )}
                  </div>

                  {/* Review form */}
                  {showReviewFor === booking.id && (
                    <div className="mt-4">
                      <ReviewForm
                        technicianName={booking.technicianName}
                        onSubmit={(review) => handleReview(booking.id, review)}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">📋</p>
            <h3 className="text-xl font-semibold text-text-primary mb-2">No bookings yet</h3>
            <p className="text-text-muted mb-4">Book your first repair service</p>
            <Link to="/" className="btn-primary no-underline">Browse Services</Link>
          </div>
        )}
      </div>
    </div>
  );
}
