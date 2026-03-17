import {
  Smartphone, Laptop, Tv, Wind, WashingMachine, Wrench,
  Monitor, Headphones, Camera, Printer, Gamepad2, Refrigerator
} from 'lucide-react';

export const categories = [
  {
    id: 'phone-repair',
    name: 'Phone Repair',
    icon: 'Smartphone',
    description: 'Screen replacement, battery issues, water damage & more',
    image: '📱',
    color: '#6366f1',
    avgPrice: '₹500 - ₹3,000'
  },
  {
    id: 'laptop-repair',
    name: 'Laptop Repair',
    icon: 'Laptop',
    description: 'Hardware fixes, software issues, screen & keyboard repair',
    image: '💻',
    color: '#8b5cf6',
    avgPrice: '₹800 - ₹5,000'
  },
  {
    id: 'tv-repair',
    name: 'TV Repair',
    icon: 'Tv',
    description: 'LED/LCD panel repair, sound issues, smart TV fixes',
    image: '📺',
    color: '#06b6d4',
    avgPrice: '₹1,000 - ₹8,000'
  },
  {
    id: 'ac-repair',
    name: 'AC Repair',
    icon: 'Wind',
    description: 'Gas refill, compressor repair, installation & servicing',
    image: '❄️',
    color: '#0ea5e9',
    avgPrice: '₹500 - ₹4,000'
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine',
    icon: 'WashingMachine',
    description: 'Drum repair, motor issues, water leakage fixes',
    image: '🫧',
    color: '#10b981',
    avgPrice: '₹600 - ₹3,500'
  },
  {
    id: 'appliance-repair',
    name: 'Appliance Repair',
    icon: 'Wrench',
    description: 'Refrigerator, microwave, mixer & other home appliances',
    image: '🔧',
    color: '#f59e0b',
    avgPrice: '₹400 - ₹5,000'
  }
];

export const technicians = [
  {
    id: 't1',
    name: 'Rajesh Kumar',
    avatar: '👨‍🔧',
    skills: ['Phone Repair', 'Laptop Repair'],
    categories: ['phone-repair', 'laptop-repair'],
    rating: 4.8,
    totalReviews: 234,
    experience: '8 years',
    priceRange: '₹500 - ₹3,000',
    location: { lat: 23.0225, lng: 72.5714, area: 'Navrangpura, Ahmedabad' },
    verified: true,
    available: true,
    completedJobs: 1250,
    responseTime: '15 min',
    bio: 'Expert in smartphone and laptop repairs. Certified by Samsung and Apple for screen repairs.',
    services: [
      { name: 'Screen Replacement', price: '₹1,500 - ₹2,500' },
      { name: 'Battery Replacement', price: '₹500 - ₹1,200' },
      { name: 'Water Damage Repair', price: '₹800 - ₹2,000' },
      { name: 'Software Fix', price: '₹300 - ₹800' }
    ]
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    avatar: '👩‍🔧',
    skills: ['AC Repair', 'Appliance Repair'],
    categories: ['ac-repair', 'appliance-repair'],
    rating: 4.9,
    totalReviews: 189,
    experience: '6 years',
    priceRange: '₹600 - ₹4,000',
    location: { lat: 23.0300, lng: 72.5800, area: 'Satellite, Ahmedabad' },
    verified: true,
    available: true,
    completedJobs: 980,
    responseTime: '10 min',
    bio: 'Specialist in AC servicing and home appliance repairs. Quick and reliable service guaranteed.',
    services: [
      { name: 'AC Gas Refill', price: '₹1,200 - ₹2,000' },
      { name: 'AC Servicing', price: '₹500 - ₹800' },
      { name: 'Compressor Repair', price: '₹2,000 - ₹4,000' },
      { name: 'Installation', price: '₹1,000 - ₹1,500' }
    ]
  },
  {
    id: 't3',
    name: 'Amit Patel',
    avatar: '🧑‍🔧',
    skills: ['TV Repair', 'Laptop Repair'],
    categories: ['tv-repair', 'laptop-repair'],
    rating: 4.7,
    totalReviews: 156,
    experience: '10 years',
    priceRange: '₹800 - ₹6,000',
    location: { lat: 23.0150, lng: 72.5560, area: 'Paldi, Ahmedabad' },
    verified: true,
    available: true,
    completedJobs: 2100,
    responseTime: '20 min',
    bio: 'Veteran technician specializing in TV panel repairs and laptop hardware. Available for on-site visits.',
    services: [
      { name: 'LED Panel Repair', price: '₹2,000 - ₹6,000' },
      { name: 'Motherboard Repair', price: '₹1,500 - ₹4,000' },
      { name: 'Speaker Repair', price: '₹500 - ₹1,500' },
      { name: 'Power Supply Fix', price: '₹800 - ₹2,000' }
    ]
  },
  {
    id: 't4',
    name: 'Sunita Verma',
    avatar: '👩‍💼',
    skills: ['Phone Repair', 'Washing Machine'],
    categories: ['phone-repair', 'washing-machine'],
    rating: 4.6,
    totalReviews: 312,
    experience: '5 years',
    priceRange: '₹400 - ₹3,000',
    location: { lat: 23.0400, lng: 72.5500, area: 'Vastrapur, Ahmedabad' },
    verified: true,
    available: false,
    completedJobs: 870,
    responseTime: '25 min',
    bio: 'Specialized in phone screen repairs and washing machine fixes. Known for affordable pricing.',
    services: [
      { name: 'Screen Repair', price: '₹1,000 - ₹2,000' },
      { name: 'Drum Replacement', price: '₹1,500 - ₹3,000' },
      { name: 'Motor Repair', price: '₹800 - ₹2,500' },
      { name: 'Water Leak Fix', price: '₹400 - ₹1,000' }
    ]
  },
  {
    id: 't5',
    name: 'Vikram Singh',
    avatar: '👨‍🔧',
    skills: ['AC Repair', 'TV Repair', 'Appliance Repair'],
    categories: ['ac-repair', 'tv-repair', 'appliance-repair'],
    rating: 4.5,
    totalReviews: 178,
    experience: '12 years',
    priceRange: '₹500 - ₹5,000',
    location: { lat: 23.0100, lng: 72.5650, area: 'Maninagar, Ahmedabad' },
    verified: true,
    available: true,
    completedJobs: 3200,
    responseTime: '30 min',
    bio: 'Multi-skilled technician with over a decade of experience. Expert in AC, TV, and all home appliances.',
    services: [
      { name: 'AC Complete Service', price: '₹600 - ₹1,200' },
      { name: 'TV Screen Fix', price: '₹1,500 - ₹5,000' },
      { name: 'Refrigerator Repair', price: '₹800 - ₹3,000' },
      { name: 'Microwave Fix', price: '₹500 - ₹1,500' }
    ]
  },
  {
    id: 't6',
    name: 'Neha Gupta',
    avatar: '👩‍🔧',
    skills: ['Laptop Repair', 'Phone Repair'],
    categories: ['laptop-repair', 'phone-repair'],
    rating: 4.9,
    totalReviews: 421,
    experience: '7 years',
    priceRange: '₹600 - ₹4,500',
    location: { lat: 23.0350, lng: 72.5900, area: 'SG Highway, Ahmedabad' },
    verified: true,
    available: true,
    completedJobs: 1680,
    responseTime: '12 min',
    bio: 'Top-rated laptop and phone repair specialist. Certified in data recovery and hardware diagnostics.',
    services: [
      { name: 'Data Recovery', price: '₹1,000 - ₹3,000' },
      { name: 'Keyboard Replacement', price: '₹1,200 - ₹2,500' },
      { name: 'Charging Port Fix', price: '₹400 - ₹1,000' },
      { name: 'Full Diagnostic', price: '₹200 - ₹500' }
    ]
  },
  {
    id: 't7',
    name: 'Ravi Joshi',
    avatar: '🧑‍🔧',
    skills: ['Washing Machine', 'Appliance Repair'],
    categories: ['washing-machine', 'appliance-repair'],
    rating: 4.4,
    totalReviews: 95,
    experience: '4 years',
    priceRange: '₹400 - ₹2,500',
    location: { lat: 23.0500, lng: 72.5300, area: 'Bopal, Ahmedabad' },
    verified: false,
    available: true,
    completedJobs: 420,
    responseTime: '35 min',
    bio: 'Affordable appliance repair services. Specializing in washing machines and kitchen appliances.',
    services: [
      { name: 'Full Machine Service', price: '₹500 - ₹1,000' },
      { name: 'Belt Replacement', price: '₹300 - ₹800' },
      { name: 'Timer/Control Fix', price: '₹600 - ₹1,500' },
      { name: 'Door Lock Repair', price: '₹400 - ₹900' }
    ]
  },
  {
    id: 't8',
    name: 'Deepak Mehta',
    avatar: '👨‍🔧',
    skills: ['Phone Repair', 'TV Repair', 'Laptop Repair'],
    categories: ['phone-repair', 'tv-repair', 'laptop-repair'],
    rating: 4.8,
    totalReviews: 267,
    experience: '9 years',
    priceRange: '₹500 - ₹5,000',
    location: { lat: 23.0250, lng: 72.5450, area: 'Ellisbridge, Ahmedabad' },
    verified: true,
    available: true,
    completedJobs: 1950,
    responseTime: '18 min',
    bio: 'All-rounder electronics expert. Handles everything from phone screens to TV panels with precision.',
    services: [
      { name: 'Phone Screen', price: '₹800 - ₹2,500' },
      { name: 'Laptop Fan/Cooling', price: '₹600 - ₹1,500' },
      { name: 'TV Backlight Repair', price: '₹1,200 - ₹3,000' },
      { name: 'Chip-level Repair', price: '₹1,500 - ₹5,000' }
    ]
  }
];

export const sampleBookings = [
  {
    id: 'b1',
    userId: 'u1',
    technicianId: 't1',
    technicianName: 'Rajesh Kumar',
    category: 'Phone Repair',
    problemDescription: 'iPhone 14 screen cracked after a fall. Touch not working on the left side.',
    status: 'completed',
    timeSlot: '2026-03-13 10:00 AM',
    estimatedPrice: '₹2,200',
    createdAt: '2026-03-12',
    images: []
  },
  {
    id: 'b2',
    userId: 'u1',
    technicianId: 't2',
    technicianName: 'Priya Sharma',
    category: 'AC Repair',
    problemDescription: 'AC not cooling properly. Makes noise when starting.',
    status: 'in-progress',
    timeSlot: '2026-03-14 2:00 PM',
    estimatedPrice: '₹1,500',
    createdAt: '2026-03-14',
    images: []
  },
  {
    id: 'b3',
    userId: 'u1',
    technicianId: 't6',
    technicianName: 'Neha Gupta',
    category: 'Laptop Repair',
    problemDescription: 'Laptop keyboard some keys not working. Need replacement.',
    status: 'confirmed',
    timeSlot: '2026-03-15 11:00 AM',
    estimatedPrice: '₹1,800',
    createdAt: '2026-03-14',
    images: []
  }
];

export const sampleReviews = [
  { id: 'r1', technicianId: 't1', userName: 'Ankit Shah', rating: 5, comment: 'Excellent work! Fixed my phone screen in 30 minutes. Very professional.', date: '2026-03-10' },
  { id: 'r2', technicianId: 't1', userName: 'Meera Jain', rating: 4, comment: 'Good service but took a bit longer than expected. Quality work though.', date: '2026-03-08' },
  { id: 'r3', technicianId: 't2', userName: 'Kiran Desai', rating: 5, comment: 'AC is cooling like new! Great service at a fair price.', date: '2026-03-11' },
  { id: 'r4', technicianId: 't6', userName: 'Pooja Patel', rating: 5, comment: 'Recovered all my data when I thought it was lost. Absolute lifesaver!', date: '2026-03-09' },
  { id: 'r5', technicianId: 't3', userName: 'Rahul Trivedi', rating: 4, comment: 'Fixed my TV panel issue quickly. Reasonable pricing.', date: '2026-03-07' },
  { id: 'r6', technicianId: 't8', userName: 'Sneha Modi', rating: 5, comment: 'Best chip-level repair in Ahmedabad! Highly recommend Deepak.', date: '2026-03-12' },
  { id: 'r7', technicianId: 't5', userName: 'Vishal Yadav', rating: 4, comment: 'Good AC service. On time and professional behavior.', date: '2026-03-06' },
  { id: 'r8', technicianId: 't4', userName: 'Divya Rao', rating: 5, comment: 'Very affordable washing machine repair. Will call again!', date: '2026-03-05' }
];

export const timeSlots = [
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
  '05:00 PM - 06:00 PM'
];

export const statusSteps = [
  { key: 'confirmed', label: 'Booking Confirmed', icon: '✅' },
  { key: 'assigned', label: 'Technician Assigned', icon: '👨‍🔧' },
  { key: 'in-progress', label: 'Repair In Progress', icon: '🔧' },
  { key: 'completed', label: 'Repair Completed', icon: '🎉' }
];

export const iconMap = {
  Smartphone, Laptop, Tv, Wind, WashingMachine, Wrench,
  Monitor, Headphones, Camera, Printer, Gamepad2, Refrigerator
};
