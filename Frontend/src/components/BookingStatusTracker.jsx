const statusSteps = [
  { key: 'pending', label: 'Pending', icon: '⏳' },
  { key: 'confirmed', label: 'Booking Confirmed', icon: '✅' },
  { key: 'assigned', label: 'Technician Assigned', icon: '👨‍🔧' },
  { key: 'in-progress', label: 'Repair In Progress', icon: '🔧' },
  { key: 'completed', label: 'Repair Completed', icon: '🎉' }
];
import { CheckCircle } from 'lucide-react';

export default function BookingStatusTracker({ currentStatus }) {
  const currentIndex = statusSteps.findIndex(s => s.key === currentStatus);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-6 left-8 right-8 h-0.5 bg-surface-lighter">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-700 ease-out"
            style={{ width: `${(currentIndex / (statusSteps.length - 1)) * 100}%` }}
          />
        </div>

        {statusSteps.map((step, index) => {
          const isCompleted = index <= currentIndex;
          const isCurrent = index === currentIndex;

          return (
            <div key={step.key} className="flex flex-col items-center relative z-10" style={{ flex: 1 }}>
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-500 ${
                  isCompleted
                    ? 'bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg'
                    : 'bg-surface-lighter'
                } ${isCurrent ? 'ring-4 ring-primary-500/30 scale-110' : ''}`}
              >
                {isCompleted && index < currentIndex ? (
                  <CheckCircle size={20} className="text-white" />
                ) : (
                  <span>{step.icon}</span>
                )}
              </div>
              <span className={`mt-2 text-xs text-center font-medium ${
                isCompleted ? 'text-primary-300' : 'text-text-muted'
              }`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
