const http = require('http')
const { emitWarning } = require('process')

const server = http.createServer(function(req,res) {
    res.end();

})
const port= 3000

server.listen(port, function() {
    console.log(`Test ${port}`)
})