
const express = require('express')
const port = process.env.PORT || 8080;
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });

server.listen(port);
const path = require('path')
app.use(express.static(path.join(__dirname, 'assets')));
app.get('/', function(req, res){
  res.render('index')
})

var players= {}
var unmatched;
var match=0;



io.on('connection', socket =>{
  socket.on('disconnect', () =>{ 
    if (players[socket.id]!=null) {
      if(getOpponent(socket)!=null){
        socket.to(socket.roomid).emit("opponent.left");
      } else{
        unmatched = null
      }
    }
  })
  
  socket.on('joinMatch', () =>{
    matchMaking(socket);
    
    if (getOpponent(socket)) {
      socket.emit("matchStart", {
        color: players[socket.id].color,
        match: match,
      });
      socket.to(match).emit("matchStart", {
        color: players[getOpponent(socket)].color,
        match: match,
      });
      match=match+1;
    }
    
  
  });
  socket.on('joinMatch', () =>{
    socket.roomid=match;
  });
  socket.on('gameEnd', match =>{
    socket.to(match).emit('GameEND')
  });


  socket.on('turnMove', (matchid, oldLocation, newLocation, checkerId) =>{
    socket.to(matchid).emit('nextTurn', {oldLocation, newLocation, checkerId});
  });
  socket.on('turnCross', (matchid, oldLocation, newLocation, opponentChecker, checkerId) =>{
    socket.to(matchid).emit('nextTurnCross', {oldLocation, newLocation, opponentChecker, checkerId});
  });
  socket.on('turnEnd', (matchid) =>{
    socket.to(matchid).emit('TurnEnd');
  });

});

function matchMaking(socket){
  players[socket.id] = {
    opponent: unmatched,  
    color: 'white',
    socket: socket.id,
  }
  if(unmatched){
    players[socket.id].color = 'black';
    players[unmatched].opponent = socket.id;
    unmatched = null;
    socket.join(match);
    
  } else {
    unmatched = socket.id;
    socket.join(match);
    
  }
}
function getOpponent(socket) {
  if (!players[socket.id].opponent) {
    return;
  }
  return players[players[socket.id].opponent].socket;
}