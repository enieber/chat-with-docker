const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
  console.log('Client connected ')

  socket.on('disconnect', function() {
    console.log('Client disconneted')
  })

  socket.on('client emit', function(msg) {
    io.emit('server emit', msg)
  })

})

http.listen(3000, function() {
  console.log('listener in localhost:3000')
})
