import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import {
  Mail, Lock, Eye, EyeOff, UserPlus, Wrench,
  User, Phone, CheckCircle
} from 'lucide-react';
import api from '../utils/api';

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { notify } = useNotification();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (step === 1) {
      if (!formData.name.trim()) errs.name = 'Full name is required';
      if (!formData.email.trim()) errs.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email';
      if (!formData.phone.trim()) errs.phone = 'Phone number is required';
      else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) errs.phone = 'Enter a valid 10-digit number';
    }
    if (step === 2) {
      if (!formData.password) errs.password = 'Password is required';
      else if (formData.password.length < 6) errs.password = 'Minimum 6 characters';
      if (formData.password !== formData.confirmPassword) errs.confirmPassword = 'Passwords do not match';
      if (!formData.agreeTerms) errs.agreeTerms = 'You must agree to the terms';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validate()) setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const { data } = await api.post('/auth/register', formData);
      login(data);
      notify.success('Account Created!', `Welcome to FixItNow, ${formData.name.split(' ')[0]}!`);
      navigate('/');
    } catch (error) {
      notify.error(
        'Account Creation Failed', 
        error.response?.data?.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  // Password strength
  const getPasswordStrength = () => {
    const p = formData.password;
    if (!p) return { level: 0, label: '', color: '' };
    let score = 0;
    if (p.length >= 6) score++;
    if (p.length >= 10) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/\d/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    if (score <= 2) return { level: score, label: 'Weak', color: '#ef4444' };
    if (score <= 3) return { level: score, label: 'Fair', color: '#f59e0b' };
    return { level: score, label: 'Strong', color: '#10b981' };
  };

  const strength = getPasswordStrength();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent-500/8 blur-3xl" />

      <div className="w-full max-w-md relative animate-fade-in-up">
        {/* Logo */}
        <div className="flex flex-col items-center text-center mb-8">
          <Link to="/" className="flex items-center gap-2 no-underline mb-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}>
              <Wrench size={22} color="white" />
            </div>
            <span className="text-2xl font-bold gradient-text">FixItNow</span>
          </Link>
          <h1 className="text-2xl font-bold text-text-primary">Create your account</h1>
          <p className="text-text-secondary text-sm mt-1">Join thousands of users & technicians</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`flex-1 h-1 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-primary-500' : 'bg-surface-lighter'}`} />
          <div className={`flex-1 h-1 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-primary-500' : 'bg-surface-lighter'}`} />
        </div>

        {/* Form card */}
        <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass">
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-lg font-semibold text-text-primary mb-5">Personal Information</h2>

              {/* Role selector */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {[
                  { value: 'user', label: 'I need repairs', icon: '👤', desc: 'Book technicians' },
                  { value: 'technician', label: 'I\'m a technician', icon: '🧑‍🔧', desc: 'Offer services' },
                ].map(option => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleChange('role', option.value)}
                    className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                      formData.role === option.value
                        ? 'bg-primary-500/15 border-primary-500/50'
                        : 'bg-surface-lighter/30 border-surface-lighter/30 hover:border-primary-500/30'
                    }`}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <p className="text-sm font-medium text-text-primary mt-2">{option.label}</p>
                    <p className="text-xs text-text-muted">{option.desc}</p>
                  </button>
                ))}
              </div>

              {/* Full name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Vijay Diwaniya"
                    className={`input-field input-with-icon ${errors.name ? 'border-danger' : ''}`}
                  />
                </div>
                {errors.name && <p className="text-xs text-danger mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@example.com"
                    className={`input-field input-with-icon ${errors.email ? 'border-danger' : ''}`}
                  />
                </div>
                {errors.email && <p className="text-xs text-danger mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-text-secondary mb-2">Phone Number</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="9876543210"
                    className={`input-field input-with-icon ${errors.phone ? 'border-danger' : ''}`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-danger mt-1">{errors.phone}</p>}
              </div>

              <button type="button" onClick={handleNext} className="btn-primary w-full justify-center text-base py-3">
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-text-primary">Set Password</h2>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-primary-400 hover:text-primary-300 cursor-pointer bg-transparent border-none"
                >
                  ← Back
                </button>
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-secondary mb-2">Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    placeholder="Create a strong password"
                    className={`input-field input-with-icon input-with-icon-right ${errors.password ? 'border-danger' : ''}`}
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

                {/* Strength meter */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div
                          key={i}
                          className="flex-1 h-1 rounded-full transition-all duration-300"
                          style={{
                            background: i <= strength.level ? strength.color : 'rgb(51, 65, 85)',
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-xs" style={{ color: strength.color }}>{strength.label}</p>
                  </div>
                )}
              </div>

              {/* Confirm password */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-text-secondary mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    placeholder="Re-enter your password"
                    className={`input-field input-with-icon ${errors.confirmPassword ? 'border-danger' : ''}`}
                  />
                  {formData.confirmPassword && formData.password === formData.confirmPassword && (
                    <CheckCircle size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-accent-500" />
                  )}
                </div>
                {errors.confirmPassword && <p className="text-xs text-danger mt-1">{errors.confirmPassword}</p>}
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 mb-6">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreeTerms}
                  onChange={(e) => handleChange('agreeTerms', e.target.checked)}
                  className="w-4 h-4 rounded accent-primary-500 mt-0.5"
                />
                <label htmlFor="terms" className="text-sm text-text-secondary cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="text-primary-400 hover:text-primary-300">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-primary-400 hover:text-primary-300">Privacy Policy</a>
                </label>
              </div>
              {errors.agreeTerms && <p className="text-xs text-danger -mt-4 mb-4">{errors.agreeTerms}</p>}

              <button
                type="submit"
                disabled={loading}
                className={`btn-primary w-full justify-center text-base py-3 ${loading ? 'opacity-70 cursor-wait' : ''}`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating account...
                  </span>
                ) : (
                  <>
                    <UserPlus size={18} />
                    Create Account
                  </>
                )}
              </button>
            </div>
          )}

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-surface-lighter" />
            <span className="text-xs text-text-muted">or sign up with</span>
            <div className="flex-1 h-px bg-surface-lighter" />
          </div>

          {/* Social signup */}
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

        {/* Login link */}
        <p className="text-center text-sm text-text-secondary mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
