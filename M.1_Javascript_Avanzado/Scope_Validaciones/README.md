# **JS - Scope y Validaciones**

## JS Scope

El Scope determina la accesibilidad de las variables que pongamos en el script.

Hay de tres tipos: `Bloque/Local`, `Función` y `Global`.

### Scope | `Bloque/Local`

El Scope en bloque las varibles declaradas dentro de un bloque `{}`, no pueden utilizarse fuera de este.

```js
{
    let x = 2;
    // x PODRÁ utilizarse DENTRO del bloque
}
// x NO podrá utilizarse fuera del bloque
```

Las variables tipo `var` PUEDEN UTILIZARSE incluso como variables `GLOBALES` y pueden ser invocadas incluso FUERA DEL BLOQUE.

**NO SE RECOMIENDA UTILIZAR NÚNCA VARIABLES tipo `var` TENIENDO variables tipo `let` o `const`**, esto es para tener buenas prácticas en programación.

### Scope | `Función`

El Scope en bloque las variables declaradas dentro de funciones, no pueden utilizarse fuera de las mísmas.

```js
function myFunction() {
    let coche = "Volvo";
    // La variable 'coche' podrá utilizarse dentro de la función
}

console.log(coche);
// La variable 'coche' NO podrá utilizarse fuera de la función
```

### Scope | `Global`

El Scope en Global son accesibles en cualquier parte del script

```js
var x = 1; // Global scope
let y = 2; // Global scope
const z = 3; // Global scope

function myFunction() {
    console.log(x, y, z);
    // Las variables `x`, `y` y `z` son accesibles desde la función
}

console.log(x, y, z);
// Las variables `x`, `y` y `z` son accesibles dentro, fuera... En cualquier parte del script
```

# JS Validaciones

-   Se utiliza para asegurarnos que los datos y su tipo de datos sean únicamente de la forma en la que deseamos.
-   Es comúnmente usado para formularios HTML.

```js
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Se ha de inroducir un nombre en el campo");
        return false;
    }
}
```
