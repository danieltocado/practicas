const express = require('express');

const app = express();

const http = require('http').Server(app);

const io = require('socket.io')(http);

app.get('/', (req, res) => res.send('Hola, Geeks!'));

const server = http.listen(8080, () => console.log('El Servidor está funcionando en el puerto 8080'));