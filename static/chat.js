var socket = io();

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

function repetirCadaSegundo() {
  navigator.geolocation.getCurrentPosition(success, error) 
}

setInterval('repetirCadaSegundo()',1000);

socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  console.log(msg)
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

function success(pos) {
  var crd = pos.coords; 
  let posicion = [crd.latitude,crd.longitude]  
  socket.emit('chat message', posicion );; 
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};