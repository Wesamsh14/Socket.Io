var express = require('express');
const socket = require('socket.io')
const app = express(); 

const server = app.listen(4000, () => 
console.log('server now is working on port 4000'));


app.use(express.static('public'));

//Socket setup
const io = socket(server);

io.on('connection', function(socket){
    console.log('Socket connected', socket.id)

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
        
    }),

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    });

    
})