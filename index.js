var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/index', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.broadcast.emit('hi');
  socket.on('chat message', function(msg){
       io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

io.emit('some event', { for: 'everyone' });


http.listen(process.env.PORT, function(){
  console.log('listening on *:process.env.PORT');
});

