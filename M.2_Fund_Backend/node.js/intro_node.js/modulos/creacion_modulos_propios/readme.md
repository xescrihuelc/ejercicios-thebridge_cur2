# Node.js - Modulos

# Módulos propios

## Creación de módulos propios

-   Podemos crear nuestros propios módulos e incluirlos fácilmente en nuestro código.
-   En el siguiente ejemplo creamos un módulo que devuelve una función suma.
-   Utilizamos la palabra clave `exports` para que las propiedades y los métodos estén disponibles fuera del archivo del módulo.

```js
exports.sum = (a, b) => {
    return a + b;
};
```

## Importación de módulos propios

-   Podemos incluir y usar el módulo en cualquiera de nuestros archivos Node.js.
-   Para probarlo escribimos el siguiente código en nuestro `index.js`

```js
const math = require("./math");

console.log(math.sum(1, 2));
```
