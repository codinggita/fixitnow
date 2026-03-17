const Booking = require('../models/Booking');

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private
const createBooking = async (req, res) => {
  const { technicianId, serviceId, date } = req.body;

  const booking = new Booking({
    user: req.user._id,
    technician: technicianId,
    service: serviceId,
    date,
  });

  const createdBooking = await booking.save();
  res.status(201).json(createdBooking);
};

// @desc    Get logged in user or technician bookings
// @route   GET /api/bookings
// @access  Private
const getMyBookings = async (req, res) => {
  let bookings;
  if (req.user.role === 'technician') {
    // Find technician profile first
    const Technician = require('../models/Technician');
    const tech = await Technician.findOne({ user: req.user._id });
    bookings = await Booking.find({ technician: tech._id })
      .populate('user', 'name email')
      .populate('service', 'name price');
  } else {
    bookings = await Booking.find({ user: req.user._id })
      .populate('technician', 'name location skills')
      .populate('service', 'name price');
  }
  res.json(bookings);
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id/status
// @access  Private (Technician only)
const updateBookingStatus = async (req, res) => {
  const { status } = req.body;
  const booking = await Booking.findById(req.params.id);

  if (booking) {
    // Check if the current user is the technician for this booking
    const Technician = require('../models/Technician');
    const tech = await Technician.findOne({ user: req.user._id });
    
    if (booking.technician.toString() !== tech._id.toString()) {
      res.status(403);
      throw new Error('Not authorized to update this bookingStatus');
    }

    booking.status = status;
    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  } else {
    res.status(404);
    throw new Error('Booking not found');
  }
};

module.exports = { createBooking, getMyBookings, updateBookingStatus };
