import { useParams, Link, useNavigate } from 'react-router-dom';
import { technicians, sampleReviews } from '../data/mockData';
import {
  ArrowLeft, Star, CheckCircle, Clock, MapPin,
  Briefcase, Calendar, MessageSquare, Shield
} from 'lucide-react';

export default function TechnicianProfile() {
  const { techId } = useParams();
  const navigate = useNavigate();
  const tech = technicians.find(t => t.id === techId);
  const reviews = sampleReviews.filter(r => r.technicianId === techId);

  if (!tech) {
    return (
      <div className="min-h-screen pt-24 text-center">
        <h2 className="text-2xl font-bold text-text-primary">Technician not found</h2>
        <Link to="/" className="btn-primary mt-4 inline-flex no-underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-6 cursor-pointer bg-transparent border-none"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Profile header */}
        <div className="p-6 lg:p-8 rounded-2xl glass animate-fade-in">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-surface-lighter flex items-center justify-center text-5xl shrink-0">
              {tech.avatar}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl font-bold text-text-primary">{tech.name}</h1>
                {tech.verified && (
                  <span className="inline-flex items-center gap-1 text-xs text-accent-500 font-semibold">
                    <CheckCircle size={16} /> Verified
                  </span>
                )}
                {tech.available ? (
                  <span className="badge badge-success">Available Now</span>
                ) : (
                  <span className="badge badge-warning">Currently Busy</span>
                )}
              </div>

              <p className="text-text-secondary mt-2 max-w-xl">{tech.bio}</p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-5 mt-4">
                <div className="flex items-center gap-1.5">
                  <Star size={16} className="text-warning fill-warning" />
                  <span className="font-semibold text-text-primary">{tech.rating}</span>
                  <span className="text-sm text-text-muted">({tech.totalReviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                  <Briefcase size={14} />
                  {tech.experience}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                  <MapPin size={14} />
                  {tech.location.area}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-text-secondary">
                  <Clock size={14} />
                  {tech.responseTime} response
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {tech.skills.map(skill => (
                  <span key={skill} className="badge badge-primary">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 pt-6 border-t border-surface-lighter/30 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to={`/book/${tech.id}`}
              className="btn-primary w-full sm:w-auto justify-center no-underline"
            >
              <Calendar size={18} />
              Book This Technician
            </Link>
            <div className="text-center sm:text-left">
              <span className="text-sm text-text-muted">Price range: </span>
              <span className="text-lg font-semibold text-primary-400">{tech.priceRange}</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-8 animate-fade-in-up stagger-1">
          <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
            <Shield size={20} className="text-primary-400" />
            Services & Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tech.services.map(service => (
              <div key={service.name} className="p-4 rounded-xl glass-light flex items-center justify-between">
                <span className="text-sm font-medium text-text-primary">{service.name}</span>
                <span className="text-sm font-semibold text-accent-400">{service.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Completed jobs */}
        <div className="mt-8 p-6 rounded-2xl glass animate-fade-in-up stagger-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Jobs Completed', value: tech.completedJobs.toLocaleString() },
              { label: 'Rating', value: tech.rating },
              { label: 'Reviews', value: tech.totalReviews },
              { label: 'Response Time', value: tech.responseTime },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-primary-400">{value}</p>
                <p className="text-xs text-text-muted mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8 animate-fade-in-up stagger-3">
          <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
            <MessageSquare size={20} className="text-primary-400" />
            Reviews ({reviews.length})
          </h2>

          {reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map(review => (
                <div key={review.id} className="p-5 rounded-xl glass-light">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-lighter flex items-center justify-center text-sm">
                        {review.userName.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-text-primary">{review.userName}</span>
                    </div>
                    <span className="text-xs text-text-muted">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < review.rating ? 'text-warning fill-warning' : 'text-surface-lighter'}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-text-muted py-8">No reviews yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
