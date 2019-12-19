const fs = require('fs')
const http = require('http')

// Files //////
// const textout = "welcome danny"
// const file = fs.writeFileSync('input.txt', 'welcome here my niga', (err, data) => {

//    console.log(data('welcome'))
// });


// Server////
const server = http.createServer((req, res) => {
   console.log(req.url);
   const pathname = req.url;
   if (pathname === '/' || pathname === '/overview') {
      res.end('this is the over view')
   } else if (pathname === '/product') {
      res.end('this is the product ')
   } else {
      res.writeHead(404, {
         'Content-type': 'text/html',
         'my-own-header': 'hello world'
      });
      res.end('<h1>Page not Found</h1>')
   }
});


server.listen(3000, () => {
   console.log('the application is running on port 3000');
})

