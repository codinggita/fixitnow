import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import Navbar from './components/Navbar';
import NotificationToast from './components/NotificationToast';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import TechnicianProfile from './pages/TechnicianProfile';
import BookingPage from './pages/BookingPage';
import MyBookings from './pages/MyBookings';
import TechDashboard from './pages/TechDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/welcome" replace />;
  return children;
};

const RoleRoute = ({ children, roles }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/welcome" replace />;
  if (!roles.includes(user.role)) {
    // Redirect to their default dashboard if they try to access unauthorized role route
    const redirectPath = user.role === 'technician' ? '/tech-dashboard' : 
                         user.role === 'admin' ? '/admin' : '/home';
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

function AppContent() {
  const { user, loading } = useAuth();
  
  if (loading) return null;

  return (
    <div className="w-full min-h-screen bg-surface">
      <Navbar />
      <div className="w-full h-16 shrink-0" /> {/* Global spacer for fixed navbar */}
      <NotificationToast />
      <Routes>
        <Route path="/" element={
          user ? (
            user.role === 'technician' ? <Navigate to="/tech-dashboard" replace /> :
            user.role === 'admin' ? <Navigate to="/admin" replace /> :
            <Navigate to="/home" replace />
          ) : <Navigate to="/welcome" replace />
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/technician/:techId" element={<TechnicianProfile />} />
        
        {/* User Protected Routes */}
        <Route path="/book/:techId" element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
        <Route path="/bookings" element={<RoleRoute roles={['user', 'admin']}><MyBookings /></RoleRoute>} />
        
        {/* Technician Protected Routes */}
        <Route path="/tech-dashboard" element={<RoleRoute roles={['technician', 'admin']}><TechDashboard /></RoleRoute>} />
        
        {/* Admin Protected Routes */}
        <Route path="/admin" element={<RoleRoute roles={['admin']}><AdminDashboard /></RoleRoute>} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <AppContent />
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}
