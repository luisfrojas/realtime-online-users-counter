var express = require('express');
var path = require('path');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

const APP_NAME = process.env.APP_NAME || 'Real-time online users counter';
const HOST = process.env.HOST || '192.168.1.238';
const PORT = process.env.PORT || 8080;

server.listen(PORT, HOST, () => {
    console.log(`${APP_NAME} app listening on http://${HOST}:${PORT}/`);
});
// WARNING: app.listen(80) will NOT work here!

var usersCounter = 0;
io.on('connection', (socket) => {
    usersCounter++;

    io.emit('usersCounter', { counter: usersCounter }); // Send an event to everyone (Broadcast)

    socket.on('disconnect', () => {
        usersCounter--;
        socket.broadcast.emit('usersCounter', { counter: usersCounter });
    });
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/index'))
