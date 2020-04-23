const socket = io();

// Elementos HTML
let mensaje = document.getElementById('mensaje');
let usuario = document.getElementById('usuario');
let boton = document.getElementById('enviar');
let salida = document.getElementById('salida');
let acciones = document.getElementById('acciones');

// Emitir
boton.addEventListener('click', function() {
    socket.emit('chat:mensaje', {
        mensaje: mensaje.value,
        usuario: usuario.value,
    }); 
});

//Escuchar
socket.on('chat:mensaje',function (data) {
    acciones.innerHTML = '';
    salida.innerHTML += `<p>
    <strong>${data.usuario}</strong>: ${data.mensaje}
    </p>`
});


