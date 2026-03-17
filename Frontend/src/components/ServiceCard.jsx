import { Link } from 'react-router-dom';
import { iconMap } from '../data/mockData';

export default function ServiceCard({ category, index }) {
  const IconComponent = iconMap[category.icon];

  return (
    <Link
      to={`/category/${category.id}`}
      className={`group block p-6 rounded-2xl glass card-hover no-underline animate-fade-in-up stagger-${index + 1}`}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{ background: `${category.color}20`, color: category.color }}
        >
          {IconComponent ? <IconComponent size={28} /> : <span>{category.image}</span>}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary-400 transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-text-muted mt-1 leading-relaxed">
            {category.description}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="badge badge-primary">{category.avgPrice}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-surface-lighter/30 flex items-center justify-between">
        <span className="text-xs text-text-muted">Available technicians nearby</span>
        <span className="text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
          Explore →
        </span>
      </div>
    </Link>
  );
}
