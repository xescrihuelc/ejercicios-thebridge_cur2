# NPM

`NPM` es un administrador de paquetes para paquetes de `Node.js`.

[www.npmjs.com](https://www.npmjs.com/) alberga miles de paquetes gratuitos para descargar y usar.

El programa `NPM` se instala en nuestro equipo cuando instalamos `Node.js`.

## `package.json`

La manera de trabajar es utilizar el package.json que contiene toda la información de nuestro proyecto.

Además es donde se registran las dependencias que vamos instalando.

Para crearlo ejecutamos el comando:

```bash
$ npm init -y
```

## Instalación de paquetes local

Un paquete instalado con el siguiente comando se descarga y se guarda en la carpeta **node_modules/package-name:**

```bash
$ npm install package-name
```

Además de registra en el `package.json` de `dependencies`.

Para instalar un paquete sin registrarlo, usamos la marca `--no-save`.

## Otras instrucciones de NPM

Para desinstalar paquetes instalados usamos:

```bash
 $ npm uninstall nombre_del_paquete
```

Para actualizar (todos los paquetes instalados.):

```bash
$ npm update
```

Para actualizar un paquete determinado.

```bash
$ npm update nombre_del_paquete
```

## Scripts

Otras de las posibilidades que nos brinda NPM es la definición de scripts en el `package.json` que podemos lanzar desde la consola.

```json
"scripts": {
    "start": "node index.js"
  },
```

## Paquetes

### Descargando un paquete

Abrimos la consola y con NPM descargamos el paquete que queremos instalar. En este caso un paquete llamado "_upper-case_":

```bash
$ npm install upper-case
```

### Usando el paquete

-   Incluimos el paquete "_upper-case_" de la misma manera que incluimos cualquier otro módulo (en este caso 'http').
-   Creamos un archivo Node.js que convertirá la salida "¡Hola The Bridge!" en mayúsculas:

```js
const http = require("http");
const uc = require("upper-case");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(uc.upperCase("¡Hola The Bridge!"));
    res.end();
}).listen(8080);
```
