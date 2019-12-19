const fs = require('fs')



// reading files
const textout = "welcome danny"
const file = fs.writeFileSync('input.txt', 'welcome here my niga', (err, data) => {

   console.log(data('welcome'))
});


// non-blocking asynchronous
fs.readFile('filename', 'utf-8', (err, data) => {
   console.log(data)
})



