// make connection
const socket = io.connect('http://localhost:2000')
// const sockett = io('/my-name');


const messege = document.getElementById('messege'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');


      // emit event

btn.addEventListener('click', function(){
    socket.emit('chat', {
        messege: messege.value,
        handle: handle.value
    })
});

messege.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
    
})


//listen for event
socket.on('chat', function(data){
    feedback.innerHTML = "";
    output.innerHTML += "<p><strong>" + data.handle + ": </strong>" + data.messege + "</p>"
});

socket.on('typing', function(data){
    feedback.innerHTML = "<p><em>" + data + "is typing ...</em></p>"
});

