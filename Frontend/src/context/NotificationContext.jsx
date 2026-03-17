import { createContext, useContext, useState, useCallback } from 'react';

const NotificationContext = createContext(null);

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = Date.now() + Math.random();
    const newNotif = { id, ...notification, createdAt: new Date() };
    setNotifications(prev => [newNotif, ...prev]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
    
    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const notify = {
    success: (title, message) => addNotification({ type: 'success', title, message }),
    error: (title, message) => addNotification({ type: 'error', title, message }),
    warning: (title, message) => addNotification({ type: 'warning', title, message }),
    info: (title, message) => addNotification({ type: 'info', title, message }),
  };

  return (
    <NotificationContext.Provider value={{ notifications, notify, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotification = () => useContext(NotificationContext);
