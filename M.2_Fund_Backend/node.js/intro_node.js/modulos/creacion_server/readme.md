# Node.js - Servidor

# Módulo HTTP

-   Con el módulo HTTP podemos crear un servidor http que escucha en el puerto asignado
    y envía respuesta al cliente.
-   Utilizamos `createServer()` para crear el servidor HTTP:

```js
const http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Aprendiendo en The Bridge!");
}).listen(8080);
```
