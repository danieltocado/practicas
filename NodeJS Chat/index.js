const path = require('path');
const express = require('express');
const app = express();

//Puerto
app.set('port', 8080);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Iniciar server en puerto
const server = app.listen(app.get('port'), () => {
    console.log('El servidor está funcionando en el puerto', app.get('port'));
});

//Websockets
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket) => {
    console.log('new connection', socket.id);

    socket.on('chat:mensaje',(data) => {
        io.sockets.emit('chat:mensaje', data)
    });

});