const fs = require('fs')
const http = require('http')

// Files //////
// const textout = "welcome danny"
// const file = fs.writeFileSync('input.txt', 'welcome here my niga', (err, data) => {

//    console.log(data('welcome'))
// });


// Server////
const server = http.createServer((req, res) => {
   console.log(req);
   res.end('Hello from the server from Daniel !')
});


server.listen(3000, () => {
   console.log('the application is running on port 3000');
})

