# Ejercicio: Calculadora sencilla con Vanilla JS y Tests Unitarios

## 🔍 Objetivo del ejercicio

Crear una aplicación básica de calculadora web utilizando HTML, CSS (opcional) y JavaScript puro. La calculadora debe permitir realizar cuatro operaciones aritméticas básicas: suma, resta, multiplicación y división. Además, implementarás pruebas unitarias sencillas para validar que cada operación funciona correctamente.

---

## 🎯 Requisitos

La aplicación debe tener:

- **Dos inputs** donde el usuario pueda ingresar números.
- **Radio buttons** para seleccionar la operación a realizar: suma (+), resta (-), multiplicación (×), división (÷).
- Un **botón** para ejecutar la operación seleccionada.
- Mostrar claramente el **resultado** en la misma página.

Además, es necesario crear:
- Un archivo JavaScript independiente para las funciones.
- Otro archivo JavaScript con tests unitarios para las funciones implementadas.

---

## 📂 Estructura del proyecto

```
calculadora/
│
├── index.html
├── calculator.js
└── test.js
```

- **`index.html`**: Archivo principal con la interfaz gráfica.
- **`calculator.js`**: Contiene todas las funciones necesarias (suma, resta, multiplicación, división y lógica general).
- **`test.js`**: Contiene los tests unitarios para asegurar que cada función funciona correctamente.

---

## 🛠️ Consejos para construir el código

- Empieza definiendo las funciones por separado y asegúrate de que funcionan correctamente en la consola antes de integrarlas en la interfaz.
- Mantén la lógica separada del DOM: Primero crea las funciones de JavaScript puro y luego conéctalas con tu interfaz HTML.
- Escribe tests sencillos utilizando una función de prueba básica como la que hemos visto en clase (`assertEquals`).

- Intenta cubrir casos interesantes en tus tests, como por ejemplo la división entre cero o números negativos.

El resultado tiene que ser algo asi: 

```javascript 
✅ sum(4,2) debería ser 6: PASSED
✅ sum(-1,-1) debería ser -2: PASSED
✅ subtract(10,5) debería ser 5: PASSED
✅ subtract(-5,-5) debería ser 0: PASSED
✅ multiply(3,2) debería ser 6: PASSED
✅ multiply(-2,4) debería ser -8: PASSED
✅ divide(10,2) debería ser 5: PASSED
✅ divide(5,0) debería manejar división por cero: PASSED
```

---

## ✅ Entrega esperada

Debes entregar:

- El proyecto funcionando correctamente.
- Las funciones bien aisladas y testeadas.
- Resultado claro y legible para el usuario.
- Los tests ejecutándose correctamente y pasando todos los casos definidos.


## 🚀 Ejercicio Extra

Amplía la calculadora añadiendo dos funciones adicionales:

1. **Elevar a la enésima potencia**:
    - Debe permitir ingresar un número base y un exponente.
    - Realiza la operación base^exponente.

2. **Raíz cuadrada**:
    - Debe permitir ingresar un único número.
    - Realiza la operación raíz cuadrada sobre ese número.

### Tareas adicionales:
- Añade nuevos radio buttons o inputs en tu interfaz para elegir estas operaciones adicionales.
- Implementa pruebas unitarias específicas para estas nuevas funciones.
- Asegúrate de manejar casos especiales...

¡Ánimo! 🚀





