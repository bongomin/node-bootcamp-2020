const fs = require('fs')


const textout = "welcome danny"
const file = fs.writeFileSync('input.txt', 'welcome here my niga', (err, data) => {

   console.log(data('welcome'))
});
