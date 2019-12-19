
const express = require('express');

const app = express();

// get root route router
app.get('/', (req, res) => {
   res.status(200).json({ message: 'this is the root page' })
})


// post request router to the router
app.post('/', (req, res) => {
   res.status(200).json({ message: 'this is the post endpoint' });
})


const PORT = process.env.NODE_ENV || 5000
app.listen(PORT, () => {
   console.log(`the application is running on port${PORT}`);
})



