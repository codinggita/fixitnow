import { useParams, Link } from 'react-router-dom';
import { categories, technicians } from '../data/mockData';
import TechnicianCard from '../components/TechnicianCard';
import { ArrowLeft, Filter, MapPin, SortDesc } from 'lucide-react';
import { useState } from 'react';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [sortBy, setSortBy] = useState('rating');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const category = categories.find(c => c.id === categoryId);
  let filteredTechs = technicians.filter(t => t.categories.includes(categoryId));

  if (showAvailableOnly) {
    filteredTechs = filteredTechs.filter(t => t.available);
  }

  filteredTechs.sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'reviews') return b.totalReviews - a.totalReviews;
    if (sortBy === 'experience') return parseInt(b.experience) - parseInt(a.experience);
    return 0;
  });

  if (!category) {
    return (
      <div className="min-h-screen pt-24 text-center">
        <h2 className="text-2xl font-bold text-text-primary">Category not found</h2>
        <Link to="/" className="btn-primary mt-4 inline-flex no-underline">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors no-underline mb-4">
            <ArrowLeft size={16} />
            Back to Categories
          </Link>

          <div className="flex items-start gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
              style={{ background: `${category.color}20` }}
            >
              {category.image}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-text-primary">{category.name}</h1>
              <p className="text-text-secondary mt-1">{category.description}</p>
              <p className="text-sm text-text-muted mt-1">
                {filteredTechs.length} technician{filteredTechs.length !== 1 ? 's' : ''} available
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6 p-4 rounded-xl glass animate-fade-in-up stagger-1">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Filter size={16} />
            <span>Filters:</span>
          </div>

          <div className="flex items-center gap-2">
            <SortDesc size={14} className="text-text-muted" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-surface-lighter text-text-primary text-sm rounded-lg px-3 py-1.5 border border-surface-lighter/50 focus:outline-none focus:border-primary-500"
            >
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviews</option>
              <option value="experience">Most Experienced</option>
            </select>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showAvailableOnly}
              onChange={(e) => setShowAvailableOnly(e.target.checked)}
              className="w-4 h-4 rounded accent-primary-500"
            />
            <span className="text-sm text-text-secondary">Available only</span>
          </label>

          <div className="ml-auto flex items-center gap-1 text-xs text-text-muted">
            <MapPin size={12} />
            Ahmedabad
          </div>
        </div>

        {/* Technician list */}
        {filteredTechs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredTechs.map((tech, index) => (
              <TechnicianCard key={tech.id} technician={tech} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">🔍</p>
            <h3 className="text-xl font-semibold text-text-primary mb-2">No technicians found</h3>
            <p className="text-text-muted">Try adjusting your filters or check back later</p>
          </div>
        )}
      </div>
    </div>
  );
}
