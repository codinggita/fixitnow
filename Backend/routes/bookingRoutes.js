const express = require('express');
const router = express.Router();
const { createBooking, getMyBookings, updateBookingStatus } = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createBooking)
  .get(protect, getMyBookings);

router.route('/:id/status')
  .put(protect, authorize('technician'), updateBookingStatus);

module.exports = router;
