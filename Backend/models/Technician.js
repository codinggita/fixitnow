const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '👨‍🔧',
    },
    bio: {
      type: String,
    },
    verifiedData: {
      type: Boolean,
      default: false,
    },
    categories: {
      type: [String], // Array of category IDs like 'phone-repair'
      required: true,
    },
    completedJobs: {
      type: Number,
      default: 0,
    },
    responseTime: {
      type: String,
      default: '30 min',
    },
    priceRange: {
      type: String,
    },
    location: {
      type: String, // Or Object if preferred, String matches simple seed
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    experience: {
      type: Number,
      default: 0,
    },
    services: [
      {
        name: String,
        price: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Technician = mongoose.model('Technician', technicianSchema);
module.exports = Technician;
