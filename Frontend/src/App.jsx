import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
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

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="w-full min-h-screen bg-surface">
            <Navbar />
            <div className="w-full h-16 shrink-0" /> {/* Global spacer for fixed navbar */}
            <NotificationToast />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/technician/:techId" element={<TechnicianProfile />} />
              <Route path="/book/:techId" element={<BookingPage />} />
              <Route path="/bookings" element={<MyBookings />} />
              <Route path="/tech-dashboard" element={<TechDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
