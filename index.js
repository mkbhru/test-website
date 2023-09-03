const http = require('http');
const path = require('path');
const fs = require('fs');


const home = fs.readFileSync('./index.html', 'utf-8')
const PORT = 3000
const hostname = 'localhost'
//these parameters are just only variables they can be a, b, c also

console.log(__filename);
console.log(__dirname);
const server = http.createServer((req, res) => {
    // res.end("<h1>work like hell</h1>")
    console.log(req.url);
    if (req.url === '/')
        res.end(home)
    else if (req.url === '/about')
        res.end("<h1>About Page</h1>")
    else if (req.url === '/contact')
        res.end("<h1>Contact Pae</h1>")
    else if (req.url === '/service')
        res.end("<h1>Service Page</h1>")
    else 
        res.end("<h1> ! 404 not found </h1>")

})

server.listen(PORT, "localhost", () => {
    console.log(`server is listening at http://${hostname}:${PORT}`);
})