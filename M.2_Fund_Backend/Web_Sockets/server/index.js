import { Server } from "socket.io";
const PORT = 3000;
const io = new Server(PORT, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("ESTABLECIDA CONNEXION", socket.id);

    // Escuchar del cliente:
    socket.on("mensaje", (arg) => {
        console.log(arg);

        /*
        // Enviar mensaje al cliente que envió el mensaje
        io.emit("respuesta", `${socket.id}: ${arg}`);
        */

        // Enviar mensaje a todos los clientes, incluido el que envió el mensaje
        io.emit("respuesta", `${socket.id}: ${arg}`);
    });
});

console.log(`ESCUCHANDO POR PUERTO: ${PORT}`);
