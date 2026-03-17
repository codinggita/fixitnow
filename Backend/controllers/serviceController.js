const Service = require('../models/Service');

// @desc    Get all services
// @route   GET /api/services
// @access  Public
const getServices = async (req, res) => {
  const services = await Service.find({});
  res.json(services);
};

// @desc    Create a new service
// @route   POST /api/services
// @access  Private/Admin
const createService = async (req, res) => {
  const { name, description, price } = req.body;

  const service = new Service({
    name,
    description,
    price,
  });

  const createdService = await service.save();
  res.status(201).json(createdService);
};

module.exports = { getServices, createService };
