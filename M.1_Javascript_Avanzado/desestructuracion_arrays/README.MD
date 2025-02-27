# Desesructurando el Array | Operadores Rest y Array

## ¿Qué es desestructurar?

La sintaxis de **desestructuración** es una expresión de JavaScript que permite desempacar valores de arrays o propiedades de objetos en distintas variables sin necesidad de acceder a las propiedades de forma explícita.

Para desestructurar objetos hemos de:

-   Utilizar llavas "`{}`" delante de la variable para realizar la desestructuración
-   Da igual el orden, mientras se llame a una propiedad existente en el objeto.

**Ejemplo básico de desestructuración:**

```js
const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

// Desestructuración de objeto
const { nombre, edad, ciudad } = persona;

console.log(nombre); // Juan
console.log(edad); // 30
console.log(ciudad); // Madrid
```

En este caso, estamos extrayendo las propiedades `nombre`, `edad` y `ciudad` del objeto `persona` y asignándolas a las variables con los mismos nombres.

**Si ponemos elementos que no existen en el array serán `undefined`**

### Saltos de posiciones

No hace falta darles nombre a todas las posiciones, podemos saltarnoslas con “ , ” y darle nombre a la posición que nos interese:

```js
const personas = ["Juan", "Laura", "Patricia", "María", "Paula"];

const [, , nombre_persona] = personas;
```

## Desestructuración en Objetos

-   Utilizamos las **llaves `{}`** delante de la variable para realizar la desestructuración.
-   No importa el orden, mientras llames a una propiedad que exista en el objeto.

```js
const { nombre, seguidores, registrado } = Usuario;

console.log(seguidores);
```

-   Podemos renombrar cualquier propiedad utilizando los “`:`” :

```js
const { nombre, seguidores, registrado, email: correo } = Usuario;

console.log(correo);
```

-   La desestructuración también permite asignar valores por defecto a las variables en caso de que las propiedades o elementos correspondientes no estén definidos:

```js
const { nombre, seguidores, registrado, email: correo, edad = 38 } = Usuario;

console.log(correo);
```

## Operador Spread (`...`)

El operador de propagación spread operator permite descomponer una expresión iterable (como un array o un objeto iterable) en elementos individuales. Se denota con tres puntos consecutivos: **`...`**

Sus usos son:

-   Para pasar un array a funciones que normalmente requieren una lista de muchos argumentos.

```js
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result);
```

-   Concatenar Arrays

```js
const array1 = ["patata", "tomate", "lechuga"];
const array2 = [1, true, "chocolate"];

// Fusionamos las dos arrays en 1
const concatenarArray = [...array1, ...array2];
console.log(concatenarArray);
```

-   Mergear Objetos

```js
const objeto1 = {
    a: 10,
    b: "caracola",
};
const objeto2 = {
    c: 2,
    d: "cocacola",
};

// Fusionamos los dos objetos en 1
const mergearObjeto = { ...objeto1, ...objeto2 };
console.log(mergearObjeto);
```

## Operador Rest (`...rest`)

El operador Rest es exactamente igual a la sintaxis del operador de Spread, y se utiliza para desestructurar arrays y objetos. En cierto modo, Rest es lo contrario de spread. Spread 'expande' un array en sus elementos, y Rest recoge múltiples elementos y los 'condensa' en uno solo.

Tiene viarios usos:

-   Coger el resto de elementos y condensarlo en uno solo, el operador rest siempre se tiene que colocar al final

```js
const Usuario2 = {
    nombre: "Laura",
    email: "laura@gmail.com",
    edad: 31,
    registrado: false,
    seguidores: ["Ger", "Gabriel", "Angela"],
};

const { edad, registrado, ...rest } = Usuario2;
console.log(rest);
```

-   Crear funciones que acepten cualquier número de argumentos

```js
function listarArticulos(...articulos) {
    console.log(articulos);
}
listarArticulos("Hola", 2, true, { a: 3, c: 17 }, [1, 2, 3, 4]);
listarArticulos("Tarjeta de credito", "Paragüas", "Mochila");
listarArticulos(2);
```
