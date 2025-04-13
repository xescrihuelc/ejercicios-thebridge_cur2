# NPM

# Módulo Nodemon

`nodemon` es una herramienta que ayuda a desarrollar aplicaciones basadas en `node.js` al reiniciar automáticamente la aplicación cuando se detectan cambios en los archivos del directorio.

Definiremos que es una dependencia de desarrollo con la _flag_ "`-D`":

```bash
$ npm install upper-case
```

# Script para Nodemon

Ahora en nuestro package.json creamos un script para ejecutar nodemon.

```json
 "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
```

Para ejecutarlo, abrimos la consola y ejecutamos :

```bash
$ npm run dev
```
