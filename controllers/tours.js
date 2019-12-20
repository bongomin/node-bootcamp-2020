const fs = require('fs');

const tours = JSON.parse(
   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);


// getting tour data from the tours file in dev-data/data/tours-SVGFEDisplacementMapElement.json
exports.getTours = (req, res) => {
   res.status(200).json({
      status: 'success',
      data: {
         tours: tours
      }
   })
}