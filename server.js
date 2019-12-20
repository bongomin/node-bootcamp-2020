
const express = require('express');
const fs = require('fs');

const app = express();

// routes importation
const ToursRouter = require('./routes/tours');


// use of the routers imported
app.use(ToursRouter);










// setup of port
const PORT = process.env.NODE_ENV || 5000
app.listen(PORT, () => {
   console.log(`the application is running on port${PORT}`);
})



