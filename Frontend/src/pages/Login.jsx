import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { Mail, Lock, Eye, EyeOff, LogIn, Wrench } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { notify } = useNotification();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email';
    if (!formData.password) errs.password = 'Password is required';
    else if (formData.password.length < 6) errs.password = 'Minimum 6 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      login({
        id: 'u1',
        name: formData.email.split('@')[0],
        email: formData.email,
        role: 'user',
        avatar: '👤',
      });
      notify.success('Welcome back!', 'You have logged in successfully.');
      setLoading(false);
      navigate('/');
    }, 800);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-accent-500/8 blur-3xl" />

      <div className="w-full max-w-md relative animate-fade-in-up">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 no-underline mb-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}>
              <Wrench size={22} color="white" />
            </div>
            <span className="text-2xl font-bold gradient-text">FixItNow</span>
          </Link>
          <h1 className="text-2xl font-bold text-text-primary mt-4">Welcome back</h1>
          <p className="text-text-secondary text-sm mt-1">Sign in to your account to continue</p>
        </div>

        {/* Form card */}
        <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass">
          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="you@example.com"
                className={`input-field pl-10 ${errors.email ? 'border-danger' : ''}`}
              />
            </div>
            {errors.email && <p className="text-xs text-danger mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-text-secondary">Password</label>
              <a href="#" className="text-xs text-primary-400 hover:text-primary-300 transition-colors">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="Enter your password"
                className={`input-field pl-10 pr-10 ${errors.password ? 'border-danger' : ''}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors cursor-pointer bg-transparent border-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-danger mt-1">{errors.password}</p>}
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" id="remember" className="w-4 h-4 rounded accent-primary-500" />
            <label htmlFor="remember" className="text-sm text-text-secondary cursor-pointer">Remember me</label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`btn-primary w-full justify-center text-base py-3 ${loading ? 'opacity-70 cursor-wait' : ''}`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              <>
                <LogIn size={18} />
                Sign In
              </>
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-surface-lighter" />
            <span className="text-xs text-text-muted">or continue with</span>
            <div className="flex-1 h-px bg-surface-lighter" />
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="btn-secondary justify-center text-sm py-2.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button type="button" className="btn-secondary justify-center text-sm py-2.5">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </button>
          </div>
        </form>

        {/* Sign up link */}
        <p className="text-center text-sm text-text-secondary mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
