const http = require('http')
const { emitWarning } = require('process')

const server = http.createServer(function(req,res) {

    if (req.url === "/OK") {
        console.log("Inbound 'OK' request being processed...");
        res.writeHead(200);
    } else {
        // console.log(req.url)
        console.log("request unable to process")
        res.writeHead(404)

    }
    res.end();
})
const port= 3000

server.listen(port, function() {
    console.log(`Test ${port}`)
})
