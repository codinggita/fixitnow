const Review = require('../models/Review');
const Technician = require('../models/Technician');

// @desc    Create a new review
// @route   POST /api/reviews
// @access  Private
const createReview = async (req, res) => {
  const { technicianId, rating, comment } = req.body;

  const technician = await Technician.findById(technicianId);

  if (technician) {
    const review = new Review({
      technician: technicianId,
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    });

    await review.save();

    // Update technician rating
    const reviews = await Review.find({ technician: technicianId });
    technician.numReviews = reviews.length;
    technician.rating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;

    await technician.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Technician not found');
  }
};

// @desc    Get reviews for a technician
// @route   GET /api/reviews/:technicianId
// @access  Public
const getReviews = async (req, res) => {
  const reviews = await Review.find({ technician: req.params.technicianId }).populate('user', 'name');
  res.json(reviews);
};

module.exports = { createReview, getReviews };
