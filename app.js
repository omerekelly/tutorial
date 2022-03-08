const http = require('http')

const server = http.createServer((req,res)=> {
if (req.url==='/') {
res.write('Welcome to HomePage')
}
else if (req.url==='/about') {
res.write('Welcome to About Page') 
}
res.write(`Oops Page not Found`)
})

server.listen(5522)