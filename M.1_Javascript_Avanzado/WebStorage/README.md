# Web Storage

Hay dos mecanismos en el almacenamiento web

-   LocalStorage
-   SessionStorage

Usos y limitaciones:

-   5-10Mb según navegador
-   Almacenamiento local(lectura/escritura cliente)
-   Sin caducidad
-   Funcionamiento clave/valor
-   La info. de ambas puede ser eliminada si se limpia la info. guardada en el navegador

**La diferencia entre `LocalStorage` y `SessionStorage`**

Session Storage solo es válida para la ventana acual en la que estamos navegando y solo son accesibles para el dominio actual.
Cuando cierre la ventana se perdenrán todos los datos. Siendo `LocalStorage` permanente.

## Escribir datos

Tenemos **dos formas diferentes** de guardar datos en `LocalStorage`:

-   Utilizando el método `setItem` de `LocalStorage`.
-   Utilizando el '**.**' como si estuviéramos creando una nueva propiedad de `LocalStorage`.

```js
localStorage.setItem("name", "Sofía");
//
localStorage.surname = "La Profe";
```

## Leer datos

Tenemos **dos formas diferentes** de leer datos en `LocalStorage`:

-   Utilizando el método `getItem` de `LocalStorage`.
-   Utilizando el '**.**' como si estuviéramos accediendo a una propiedad de `LocalStorage`.

```js
let firstName = localStorage.getItem("name");
//
let lastName = localStorage.surname;
```

## Borrar datos

Para eliminar datos concretos en `LocalStorage` debemos indicar **la clave** que queremos borrar.

En el caso de que queramos **borrar todo** lo que hay en `LocalStorage` utilizaremos el método
`clear`.

```js
localStorage.removeItem("name");
//
localStorage.clear();
```

Pero ¿Como vamos para guardar todo esto?, pues... en JSON.

# ¿Que es JSON?

Para responder qué es JSON, debemos empezar por decir que sus siglas en inglés son **JavaScript Object Notation**. Se trata de un formato para guardar e intercambiar información que cualquier persona pueda leer. **Los archivos json contienen solo texto y usan la extensión `.json`**.

## Escribir/Leer Objetos en `LocalStorage`

Debemos transformar el objeto a formato JSON para poder guardarlo en nuestro LocalStorage y realizar el proceso inverso para poder obtener de nuevo nuestro objeto.

Al igual que en los objetos debemos utilizar los métodos **`JSON.stringify()`** y **`JSON.parse()`** para poder escribir y leer arrays en nuestro `LocalStorage`.

```js
let personajesAnime = ["Levi", "Mikasa", "Zoro", "Luffy", "Tanjiro", "Nezuko"];
localStorage.setItem("anime", JSON.stringify(personajesAnime));
let data = JSON.parse(localStorage.getItem("anime"));
console.log("Mi array", data);
```
