const http = require('http')
const { emitWarning } = require('process')

const server = http.createServer(function(req,res) {

    if (req.url === "/OK") {
        console.log("Inbound 'OK' request being processed...");
        res.writeHead(200);
    }
    else if (req.url === "/Bad-Request")  {
        console.log()
        res.writeHead(400)
    }
    else if (req.url === "/Created")  {
        console.log('201')
        res.writeHead(201)
    }
    else if (req.url === "/Forbidden")  {
        console.log('403')
        res.writeHead(403)
    }
    else if (req.url === "/Found")  {
        console.log('302')
        res.writeHead(302)
    }
    else if (req.url === "/Gateway-Timeout")  {
        console.log('504')
        res.writeHead(504)
    }
    else {
        console.log("request unable to process")
        res.writeHead(404)

    }
    res.end();
})
const port= 3000

server.listen(port, function() {
    console.log(`Test ${port}`)
})
