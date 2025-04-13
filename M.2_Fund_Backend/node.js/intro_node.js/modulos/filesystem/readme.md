# Node.js - Servidor

# Módulo FileSystem

-   Este módulo nos permite trabajar con los archivos del sistema de nuestro ordenador.
-   Para incluirlo simplemente usamos el método `require()`:

```js
const fs = require("fs");
```

## Leyendo Archivos

-   El método `fs.readFile()` se usa para leer archivos.
-   Supongamos que tenemos el siguiente archivo HTML (ubicado en la misma carpeta que `index.js`):

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>Test 1</h1>
    </body>
</html>
```

-   Implementamos el siguiente código en nuestro archivo Node.js que lea el archivo HTML y devuelva el contenido:

```js
const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    fs.readFile("test.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
}).listen(8080);
```
