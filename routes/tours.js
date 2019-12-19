const express = require('express')
const router = express.Router();

const fs = require('fs');
const tours = JSON.parse(
   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

router.get('/api/v1/tours', (req, res) => {
   res.status.json({
      status: 'success',
      data: {
         tours: tours
      }
   })
})

module.exports = router;