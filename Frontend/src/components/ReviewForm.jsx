import { useState } from 'react';
import { Star } from 'lucide-react';

export default function ReviewForm({ onSubmit, technicianName }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;
    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-2xl glass">
      <h3 className="text-lg font-semibold text-text-primary mb-1">
        Rate {technicianName}
      </h3>
      <p className="text-sm text-text-muted mb-4">Share your experience to help others</p>

      {/* Star rating */}
      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            className="p-1 cursor-pointer transition-transform hover:scale-110"
          >
            <Star
              size={28}
              className={`transition-colors ${
                star <= (hoveredRating || rating)
                  ? 'text-warning fill-warning'
                  : 'text-surface-lighter'
              }`}
            />
          </button>
        ))}
        {rating > 0 && (
          <span className="ml-2 text-sm text-text-secondary">
            {rating === 1 ? 'Poor' : rating === 2 ? 'Fair' : rating === 3 ? 'Good' : rating === 4 ? 'Very Good' : 'Excellent'}
          </span>
        )}
      </div>

      {/* Comment */}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Tell us about your experience..."
        className="input-field min-h-[100px] resize-none mb-4"
        rows={4}
      />

      <button
        type="submit"
        disabled={rating === 0}
        className={`btn-primary w-full justify-center ${rating === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Submit Review
      </button>
    </form>
  );
}
