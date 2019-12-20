const express = require('express')
const router = express.Router();

// importing the AbortControllers
const { getTours } = require('../controllers/tours')

router.get('/api/v1/tours', getTours);

module.exports = router;