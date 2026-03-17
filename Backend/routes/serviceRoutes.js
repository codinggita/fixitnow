const express = require('express');
const router = express.Router();
const { getServices, createService } = require('../controllers/serviceController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
  .get(getServices)
  .post(protect, authorize('admin'), createService);

module.exports = router;
