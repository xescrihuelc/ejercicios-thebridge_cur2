# ASINCRONÍA

Son tareas que tienen que esperar a que ocurra un determinado suceso

## Promesas

Se utiliza para resolver los problemas de la sincronía

```js
const myPromise = new Promise((resolve, reject) => {
    console.log();
    setTimeout(() => {
        resolve("Hola");
    }, 3000);
});
```

`.then`
La forma general de **consumir una promesa** utilizando el `.then` con un solo paramentro.

`.all`
Recibe una array con varias promesas y se resuelve una vez hechas las promesas

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values); // [3, 1337, "foo"]
});
```
