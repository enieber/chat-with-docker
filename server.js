const express = require('express')
const socket = require('socket.io')
const r = require('rethinkdb')

const app = express()
const io = socket.listen(app.listen(3000))
console.log('App listening on 3000')

const confDB = {
  db: 'test',
  port: 32770,
  host: 'localhost'
}

let connection = null;
/*r.connect(confDB, function(err, conn) {
  if (err) throw err;
  connection = conn;
})
*/

io.sockets.on('connection', (sock) => {
  console.log('connected to socket')
  sock.on('client emit', (msg) => {
    io.emit('server emit', msg)
  /*  r.connect(confDB)
      .then(conn => {
        r.table('messages')
          .insert(msg)
          .run(connection, function(err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result, null, 2));
            io.emit('server emit', msg)
          })
      })*/
  })
})

app.use(express.static(__dirname + "/public"))
