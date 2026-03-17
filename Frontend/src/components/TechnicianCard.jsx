import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, CheckCircle, Briefcase } from 'lucide-react';

export default function TechnicianCard({ technician, index = 0 }) {
  return (
    <Link
      to={`/technician/${technician.id}`}
      className={`block p-5 rounded-2xl glass card-hover no-underline animate-fade-in-up stagger-${(index % 6) + 1}`}
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-2xl bg-surface-lighter flex items-center justify-center text-3xl shrink-0">
          {technician.avatar}
        </div>

        <div className="flex-1 min-w-0">
          {/* Name + verification */}
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-semibold text-text-primary">
              {technician.name}
            </h3>
            {technician.verified && (
              <CheckCircle size={16} className="text-accent-500 shrink-0" />
            )}
            {technician.available ? (
              <span className="badge badge-success">Available</span>
            ) : (
              <span className="badge badge-warning">Busy</span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-warning fill-warning" />
              <span className="text-sm font-semibold text-text-primary">{technician.rating}</span>
            </div>
            <span className="text-xs text-text-muted">({technician.totalReviews} reviews)</span>
            <span className="text-text-muted">·</span>
            <div className="flex items-center gap-1 text-xs text-text-muted">
              <Briefcase size={12} />
              {technician.experience}
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {technician.skills.map(skill => (
              <span key={skill} className="px-2 py-0.5 text-xs rounded-md bg-surface-lighter text-text-secondary">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-surface-lighter/30 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {technician.location.area}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {technician.responseTime}
          </span>
        </div>
        <span className="text-sm font-semibold text-primary-400">
          {technician.priceRange}
        </span>
      </div>
    </Link>
  );
}
