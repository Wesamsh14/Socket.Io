var express = require('express');
const socket = require('socket.io')
const app = express(); 
const PORT = process.env.PORT || 7000;


const server = app.listen(PORT, () => 
console.log(`server now is working on port ${PORT}`));


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