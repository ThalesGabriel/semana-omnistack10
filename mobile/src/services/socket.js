import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.11:3001', {
  autoConnect: false,
})

function subscribeToNewDevs(subscribeFunction) {
  socket.on('newDev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.connect();   
  
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  }
  socket.connect();

  socket.on('message', text => {

  })
}

function disconnect() {
  if(socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs
}