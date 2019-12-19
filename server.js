
const express = require('express');
const fs = require('fs');

const app = express();


const ToursRouter = require('./routes/tours');



app.use(ToursRouter);


const PORT = process.env.NODE_ENV || 5000
app.listen(PORT, () => {
   console.log(`the application is running on port${PORT}`);
})



