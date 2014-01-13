http = require 'http'

#http.createServer (req, res) ->
#  res.writeHead 200, {'Content-Type': 'text/html'}
#  res.write '<h1>Node.js</h1>'
#  res.end '<p>Hello World</p>'
#  .listen 3000

server = http.createServer (request, res) ->
    res.writeHead 200, {'Content-Type': 'text/html'}
    res.write '<h1>Node.js</h1>'
    res.end '<p>Hello World</p>'
.listen 8080
console.log "Server running at http://127.0.0.1:8080"

#console.log "HTTP server is listening at port 3000."