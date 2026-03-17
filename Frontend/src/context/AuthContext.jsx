import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: 'u1',
    name: 'Vijay Diwaniya',
    email: 'vijay@example.com',
    role: 'user', // 'user' | 'technician' | 'admin'
    avatar: '👤'
  });

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  const switchRole = (role) => setUser(prev => prev ? { ...prev, role } : null);

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
