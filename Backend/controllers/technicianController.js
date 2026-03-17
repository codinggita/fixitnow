const Technician = require('../models/Technician');

// @desc    Get all technicians (with optional filtering)
// @route   GET /api/technicians
// @access  Public
const getTechnicians = async (req, res) => {
  const { skill, location, rating } = req.query;
  const query = {};

  if (skill) {
    query.categories = { $in: [skill] };
  }

  if (location) {
    query.location = { $regex: location, $options: 'i' };
  }

  if (rating) {
    query.rating = { $gte: Number(rating) };
  }

  const technicians = await Technician.find(query).populate('user', 'name email');
  res.json(technicians);
};

// @desc    Get technician by ID
// @route   GET /api/technicians/:id
// @access  Public
const getTechnicianById = async (req, res) => {
  const technician = await Technician.findById(req.params.id).populate('user', 'name email');

  if (technician) {
    res.json(technician);
  } else {
    res.status(404);
    throw new Error('Technician not found');
  }
};

module.exports = { getTechnicians, getTechnicianById };
