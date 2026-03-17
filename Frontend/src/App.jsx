import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import TechniciansPage from './pages/TechniciansPage'
import TechnicianLayout from './components/technician/TechnicianLayout'
import TechnicianDashboard from './pages/technician/TechnicianDashboard'
import MyJobs from './pages/technician/MyJobs'
import Earnings from './pages/technician/Earnings'
import Reviews from './pages/technician/Reviews'
import Profile from './pages/technician/Profile'
import './App.css'
import { useLocation } from 'react-router-dom'

const AppContent = () => {
  const location = useLocation();
  const isTechnicianPath = location.pathname === '/technician' || location.pathname.startsWith('/technician/');

  if (isTechnicianPath) {
    return (
      <TechnicianLayout>
        <Routes>
          <Route path="/technician" element={<TechnicianDashboard />} />
          <Route path="/technician/jobs" element={<MyJobs />} />
          <Route path="/technician/earnings" element={<Earnings />} />
          <Route path="/technician/reviews" element={<Reviews />} />
          <Route path="/technician/profile" element={<Profile />} />
        </Routes>
      </TechnicianLayout>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white selection:bg-primary-100 selection:text-primary-700">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/technicians" element={<TechniciansPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
