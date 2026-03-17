import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { technicians, timeSlots, categories } from '../data/mockData';
import { useNotification } from '../context/NotificationContext';
import ImageUpload from '../components/ImageUpload';
import {
  ArrowLeft, Calendar, Clock, FileText, Image,
  CheckCircle, ChevronRight, Zap
} from 'lucide-react';

export default function BookingPage() {
  const { techId } = useParams();
  const navigate = useNavigate();
  const { notify } = useNotification();
  const tech = technicians.find(t => t.id === techId);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    problem: '',
    timeSlot: '',
    images: [],
  });

  if (!tech) {
    return (
      <div className="min-h-screen pt-24 text-center">
        <h2 className="text-2xl font-bold text-text-primary">Technician not found</h2>
        <Link to="/" className="btn-primary mt-4 inline-flex no-underline">Go Home</Link>
      </div>
    );
  }

  const techCategories = categories.filter(c => tech.categories.includes(c.id));
  const estimatedPrice = formData.category
    ? categories.find(c => c.id === formData.category)?.avgPrice || 'Varies'
    : '—';

  const canProceed = () => {
    if (step === 1) return formData.category && formData.problem.trim().length > 5;
    if (step === 2) return true; // images optional
    if (step === 3) return formData.timeSlot;
    return false;
  };

  const handleBook = () => {
    setStep(4);
    notify.success('Booking Confirmed!', `Your repair has been booked with ${tech.name}.`);
  };

  const steps = [
    { num: 1, label: 'Describe', icon: FileText },
    { num: 2, label: 'Upload', icon: Image },
    { num: 3, label: 'Schedule', icon: Calendar },
    { num: 4, label: 'Confirm', icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <button
          onClick={() => step > 1 && step < 4 ? setStep(step - 1) : navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-6 cursor-pointer bg-transparent border-none"
        >
          <ArrowLeft size={16} />
          {step > 1 && step < 4 ? 'Previous Step' : 'Back'}
        </button>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8 p-4 rounded-xl glass">
          {steps.map(({ num, label, icon: Icon }) => (
            <div key={num} className="flex items-center flex-1">
              <div className={`flex items-center gap-2 ${num <= step ? 'text-primary-400' : 'text-text-muted'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  num < step ? 'bg-primary-500 text-white' :
                  num === step ? 'bg-primary-500/20 text-primary-400 ring-2 ring-primary-500/40' :
                  'bg-surface-lighter text-text-muted'
                }`}>
                  {num < step ? <CheckCircle size={16} /> : num}
                </div>
                <span className="hidden sm:block text-xs font-medium">{label}</span>
              </div>
              {num < 4 && <ChevronRight size={14} className="mx-2 text-text-muted flex-shrink-0" />}
            </div>
          ))}
        </div>

        {/* Technician info */}
        <div className="flex items-center gap-3 p-4 rounded-xl glass-light mb-6 animate-fade-in">
          <div className="w-12 h-12 rounded-xl bg-surface-lighter flex items-center justify-center text-2xl">
            {tech.avatar}
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-text-primary">{tech.name}</p>
            <p className="text-xs text-text-muted">{tech.location.area}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-muted">Estimated</p>
            <p className="text-sm font-semibold text-accent-400">{estimatedPrice}</p>
          </div>
        </div>

        {/* Step 1: Describe problem */}
        {step === 1 && (
          <div className="p-6 rounded-2xl glass animate-fade-in-up">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <FileText size={20} className="text-primary-400" />
              Describe the Problem
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-text-secondary mb-2">Service Category</label>
              <div className="grid grid-cols-2 gap-3">
                {techCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setFormData(p => ({ ...p, category: cat.id }))}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                      formData.category === cat.id
                        ? 'bg-primary-500/20 border-primary-500/50'
                        : 'bg-surface-lighter/50 border-surface-lighter/30 hover:border-primary-500/30'
                    }`}
                  >
                    <span className="text-lg">{cat.image}</span>
                    <p className="text-sm font-medium text-text-primary mt-1">{cat.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">What's the problem?</label>
              <textarea
                value={formData.problem}
                onChange={(e) => setFormData(p => ({ ...p, problem: e.target.value }))}
                placeholder="E.g., Phone screen cracked after a fall, touch not working on the left side..."
                className="input-field min-h-[120px] resize-none"
                rows={4}
              />
            </div>
          </div>
        )}

        {/* Step 2: Upload images */}
        {step === 2 && (
          <div className="p-6 rounded-2xl glass animate-fade-in-up">
            <h2 className="text-xl font-bold text-text-primary mb-1 flex items-center gap-2">
              <Image size={20} className="text-primary-400" />
              Upload Photos
            </h2>
            <p className="text-sm text-text-muted mb-4">Optional: Share photos of the damaged device</p>
            <ImageUpload
              images={formData.images}
              setImages={(fn) => setFormData(p => ({
                ...p,
                images: typeof fn === 'function' ? fn(p.images) : fn
              }))}
            />
          </div>
        )}

        {/* Step 3: Select time */}
        {step === 3 && (
          <div className="p-6 rounded-2xl glass animate-fade-in-up">
            <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
              <Clock size={20} className="text-primary-400" />
              Choose Time Slot
            </h2>

            <p className="text-sm text-text-muted mb-4">Tomorrow's available slots for {tech.name}</p>

            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map(slot => (
                <button
                  key={slot}
                  onClick={() => setFormData(p => ({ ...p, timeSlot: slot }))}
                  className={`p-3 rounded-xl text-sm font-medium transition-all cursor-pointer border ${
                    formData.timeSlot === slot
                      ? 'bg-primary-500/20 border-primary-500/50 text-primary-300'
                      : 'bg-surface-lighter/50 border-surface-lighter/30 text-text-secondary hover:border-primary-500/30'
                  }`}
                >
                  <Clock size={14} className="inline mr-2" />
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="p-8 rounded-2xl glass text-center animate-fade-in-up">
            <div className="w-20 h-20 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={40} className="text-accent-400" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">Booking Confirmed!</h2>
            <p className="text-text-secondary mb-6">Your repair has been booked successfully</p>

            <div className="p-4 rounded-xl glass-light text-left space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-sm text-text-muted">Technician</span>
                <span className="text-sm font-medium text-text-primary">{tech.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-muted">Category</span>
                <span className="text-sm font-medium text-text-primary">
                  {categories.find(c => c.id === formData.category)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-muted">Time Slot</span>
                <span className="text-sm font-medium text-text-primary">{formData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-text-muted">Estimated Price</span>
                <span className="text-sm font-semibold text-accent-400">{estimatedPrice}</span>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <Link to="/bookings" className="btn-primary no-underline">
                View My Bookings
              </Link>
              <Link to="/" className="btn-secondary no-underline">
                Back to Home
              </Link>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        {step < 4 && (
          <div className="flex justify-between mt-6">
            <button
              onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}
              className="btn-secondary"
            >
              {step === 1 ? 'Cancel' : 'Previous'}
            </button>
            <button
              onClick={() => step === 3 ? handleBook() : setStep(step + 1)}
              disabled={!canProceed()}
              className={`btn-primary ${!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {step === 3 ? (
                <>
                  <Zap size={16} />
                  Confirm Booking
                </>
              ) : (
                <>
                  Next
                  <ChevronRight size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
