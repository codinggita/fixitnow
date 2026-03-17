const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const mongoose = require('mongoose');
const User = require('../models/User');
const Technician = require('../models/Technician');
const Service = require('../models/Service');
const connectDB = require('../config/db');

const categories = [
  {
    categoryId: 'phone-repair',
    name: 'Phone Repair',
    icon: 'Smartphone',
    description: 'Screen replacement, battery issues, water damage & more',
    image: '📱',
    color: '#6366f1',
    avgPrice: '₹500 - ₹3,000',
    price: 500
  },
  {
    categoryId: 'laptop-repair',
    name: 'Laptop Repair',
    icon: 'Laptop',
    description: 'Hardware fixes, software issues, screen & keyboard repair',
    image: '💻',
    color: '#8b5cf6',
    avgPrice: '₹800 - ₹5,000',
    price: 800
  },
  {
    categoryId: 'tv-repair',
    name: 'TV Repair',
    icon: 'Tv',
    description: 'LED/LCD panel repair, sound issues, smart TV fixes',
    image: '📺',
    color: '#06b6d4',
    avgPrice: '₹1,000 - ₹8,000',
    price: 1000
  },
  {
    categoryId: 'ac-repair',
    name: 'AC Repair',
    icon: 'Wind',
    description: 'Gas refill, compressor repair, installation & servicing',
    image: '❄️',
    color: '#0ea5e9',
    avgPrice: '₹500 - ₹4,000',
    price: 500
  },
  {
    categoryId: 'washing-machine',
    name: 'Washing Machine',
    icon: 'WashingMachine',
    description: 'Drum repair, motor issues, water leakage fixes',
    image: '🫧',
    color: '#10b981',
    avgPrice: '₹600 - ₹3,500',
    price: 600
  },
  {
    categoryId: 'appliance-repair',
    name: 'Appliance Repair',
    icon: 'Wrench',
    description: 'Refrigerator, microwave, mixer & other home appliances',
    image: '🔧',
    color: '#f59e0b',
    avgPrice: '₹400 - ₹5,000',
    price: 400
  }
];

const firstNames = ['Rajesh', 'Priya', 'Amit', 'Anjali', 'Vikram', 'Sonal', 'Deepak', 'Megha', 'Sanjay', 'Ritu', 'Vijay', 'Kavita', 'Arjun', 'Sneha', 'Rahul', 'Pooja', 'Manoj', 'Asha', 'Kiran', 'Shanti'];
const lastNames = ['Kumar', 'Sharma', 'Singh', 'Patel', 'Verma', 'Gupta', 'Mehta', 'Joshi', 'Shah', 'Trivedi', 'Mishra', 'Yadav', 'Pandey', 'Desai'];
const areas = ['Navrangpura', 'Satellite', 'Vastrapur', 'Bodakdev', 'Prahlad Nagar', 'Ellisbridge', 'Ambawadi', 'Memnagar', 'Ghatlodia', 'Naroda'];

const generateTechnicians = (count) => {
  const techs = [];
  for (let i = 0; i < count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`;
    const area = areas[Math.floor(Math.random() * areas.length)];
    const cat = categories[Math.floor(Math.random() * categories.length)];
    
    techs.push({
      name,
      email,
      password: 'password123',
      role: 'technician',
      profile: {
        avatar: Math.random() > 0.5 ? '👨‍🔧' : '👩‍🔧',
        categories: [cat.categoryId],
        rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
        numReviews: Math.floor(Math.random() * 200) + 10,
        availability: Math.random() > 0.2,
        experience: Math.floor(Math.random() * 15) + 2,
        location: `${area}, Ahmedabad`,
        completedJobs: Math.floor(Math.random() * 1000) + 50,
        responseTime: `${Math.floor(Math.random() * 45) + 10} min`,
        bio: `Experienced specialist in ${cat.name.toLowerCase()}. committed to providing high-quality repair services with a focus on customer satisfaction.`,
        priceRange: cat.avgPrice,
        services: [
          { name: `Standard ${cat.name} Fix`, price: `₹${cat.price} - ₹${cat.price * 2}` },
          { name: `Premium ${cat.name} Service`, price: `₹${cat.price * 3} - ₹${cat.price * 5}` }
        ]
      }
    });
  }
  return techs;
};

const seedData = async () => {
  try {
    await connectDB();

    await Service.deleteMany();
    await Technician.deleteMany();
    
    // We only delete users with role technician who were seeded
    await User.deleteMany({ role: 'technician' });

    console.log('Cleared existing data...');

    await Service.insertMany(categories);
    console.log(`${categories.length} services created`);

    const technicians = generateTechnicians(50);

    for (const techData of technicians) {
      const user = await User.create({
        name: techData.name,
        email: techData.email,
        password: techData.password,
        role: techData.role
      });

      await Technician.create({
        user: user._id,
        name: user.name,
        ...techData.profile
      });
    }

    console.log(`${technicians.length} technicians created`);
    console.log('Data Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error with seeding: ${error.message}`);
    process.exit(1);
  }
};

seedData();
