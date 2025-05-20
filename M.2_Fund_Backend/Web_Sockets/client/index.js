const PORT = 3000;
let socket = io(`http://localhost:${PORT}/`);

// Cuando se presione el boton hago algo
const button = document.getElementById("bttnSend");
const message = document.getElementById("inputMessage");
const listMessages = document.getElementById("listMessages");
const user = prompt("Introduzca su usuario");

const sendMessage = () => {
    console.log(message.value);
    socket.emit(
        "mensaje",
        `<b style="color:red;">${user}</b> sended -->   ${message.value}`
    );
    message.value = "";
};

const listenMessages = (message) => {
    console.log(message);
    listMessages.innerHTML += `
        <li>${message}</li>
    `;
};

socket.on("respuesta", listenMessages);
button.addEventListener("click", sendMessage);

// Conectar al servidor
// Emitir mensaje con lo que el usuario escribio en el input
