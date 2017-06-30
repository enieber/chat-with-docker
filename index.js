const express = require('express')
const socket = require('socket.io')

const app = express()
const io = socket.listen(app.listen(3000))
console.log('App listening on 3000')




io.sockets.on('connection', (sock) => {
  console.log('connected to socket')
  sock.on('client emit', (msg) => {
    io.emit('server emit', msg)
  })
})

app.use(express.static(__dirname + "/public"))
