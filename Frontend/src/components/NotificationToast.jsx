import { useNotification } from '../context/NotificationContext';
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const colors = {
  success: { bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.3)', text: '#34d399' },
  error: { bg: 'rgba(239, 68, 68, 0.15)', border: 'rgba(239, 68, 68, 0.3)', text: '#f87171' },
  warning: { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.3)', text: '#fbbf24' },
  info: { bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.3)', text: '#a5b4fc' },
};

export default function NotificationToast() {
  const { notifications, removeNotification } = useNotification();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-[100] flex flex-col gap-3 w-80">
      {notifications.map(notif => {
        const Icon = icons[notif.type] || Info;
        const color = colors[notif.type] || colors.info;

        return (
          <div
            key={notif.id}
            className="toast-enter rounded-xl p-4 backdrop-blur-lg"
            style={{
              background: color.bg,
              border: `1px solid ${color.border}`,
            }}
          >
            <div className="flex items-start gap-3">
              <Icon size={20} style={{ color: color.text }} className="shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold" style={{ color: color.text }}>
                  {notif.title}
                </p>
                {notif.message && (
                  <p className="text-xs text-text-secondary mt-0.5">{notif.message}</p>
                )}
              </div>
              <button
                onClick={() => removeNotification(notif.id)}
                className="text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
