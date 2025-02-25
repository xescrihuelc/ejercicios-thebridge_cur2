Desesructurando el Array | Operadores Rest y Array

-   ¿Qué es desestructurar?
-   La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

Para desestructurar objetos hemos de:

-   Utilizar llavas "{}" delante de la variable para realizar la desestructuración
-   Da igual el orden, mientras se llame a una propiedad existente en el objeto.

```js
const Usuario = {
    nombre: "Javier",
    email: "javi@gmail.com",
    registrado: true,
    seguidores: ["Ger", "Gabriel", "Jorge", "Rebeca", "Xavi"],
};
```

-   Podemos renombrar cualquier propiedad utilizando ":"

```js
const { nombre, seguidores, registrado, email: correo } = Usuario;

console.log(correo);
```

-   Tambien podemos asignar los valores por defecto de las variables en caso de que las propiedades o elementos correspondientes no esten definidos "="

```js
const { nombre, seguidores, registrado, email: correo, edad = 38 } = Usuario;

console.log(edad);
```

Operador Rest

```js
const { nombre, seguidores, registrado, email: correo, edad = 38 } = Usuario;

console.log(edad);
```

Operador Spread

-   Este operador permite descomponer directamente expresiones iterables (como arrays u objetos iterables)
-   Se usa normalmente para descomponer y concatenar arrays, y mergear objetos
-   dskfdsfij

```js
const numbers = [1, 2, 3];
console.log("Array", numbers);
/*Array [ 1, 2, 3 ]*/

console.log("Array descompuesto", ...numbers);
/*Array descompuesto 1 2 3*/
```

```js
const array1 = ['patata', 'tomate', 'lechuga']
const array2 = [1, true, 'chocolate']

const objeto1 = {
    a = 10,
    b = 'caracola'
}
const objeto2 = {
    c = 20,
    d = 'caracola'
}

const concatenarObjeto = [...array1, ...array2]
const mergearObjeto = {...objeto1, ...objeto2}

console.log(concatenarObjeto);
/**/
console.log(mergearObjeto);
/**/
```

Operador REST

-   Este operador es exactamente igual a la sintexis del operador de Spread en JS puediendo se usado para desestructurar arrays y objetos. Hasta cierto punto, Rest es lo contrario de spread. Spread 'expande' un array en sus elementos, y Rest recoge múltiples elementos y los 'condensa' en uno solo.
-   Es para definifir que algo recibirá el resto
-   Crar funciones que reciban x númo de argumentos

```js
const Usuario2 = {
    nombre: 'Laura',
    email: 'laura@gamil.com',
    edad: 31,
    registrado: true,
    seguidores: ['Ger', 'Alex', 'Claudio']
}

cosnt {edad, registrado, ...rest} = Usuario2
console.log(losdemas)
```

```js
function listarArticulos(...articulos) {
    console.log(articulos);
}

listarArticulos("Hola", 2, true, { a: 3, c: 17 }, [1, 2, 3, 4]);
listarArticulos("Tarjeta de credito", "Paragüas", "Mochila");
listarArticulos(2);
```
