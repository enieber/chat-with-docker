const express = require('express')
const socket = require('socket.io')

const app = express()
const io = socket.listen(app.listen(80))
console.log('App listening on 80')




io.sockets.on('connection', (sock) => {
  console.log('connected to socket')
  sock.on('client emit', (msg) => {
    io.emit('server emit', msg)
  })
})

app.use(express.static(__dirname + "/public"))
