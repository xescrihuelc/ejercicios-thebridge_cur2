# Node.js - Básico

Una vez instalado Node.js en nuestro equipo, podemos empezar para explorar creando en un archivo llamado **"[index.js](index.js)"** y agregamos el siguiente código:

```js
const reyesCatolicos = ["Isabel de Castilla", "Cristobal Colon"];

for (let i = 0; i < reyesCatolicos.length; i++) {
    console.log("Rey Católico:", reyesCatolicos[i]);
}
```

Con el nuevo archivo creado siendo su contenido el código que hemos pasado, pondremos en la terminal:

```sh
node index.js
```

Nos saldrá como resultado en la terminal:

```txt
Rey Católico: Isabel de Castilla
Rey Católico: Cristobal Colon
```
