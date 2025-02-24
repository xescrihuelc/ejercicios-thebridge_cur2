# JS Fetch (WEB APIs)

`Fetch` es una herramienta esencial para realizar peticiones HTTP a servidores remotos y obtener varios tpos de recursos, como datos JSON, archivos HTML, imágenes, entre otros.

Es ampliamente utilizada para interactuar con servicios web, APIs y obtener datos en tiempo real.

Esta con sus características:

-   **Versatilidad**:
-   **Interacción con Servicios Web y APIs**:
-   **Promesas**:

```js
fetch("https://example.com/api/data")
    .then((response) => response.json())
    .then((data) => {
        // Manipulación de las datos recuperados
        console.log(data);
    })
    .catch((error) => {
        //Manejo de errores en el solicitud
        console.error("Error en la solicitud:", error);
    });
```

En este ejemplo podemos ver que realiza una peticion GET a la URL proporcionada, convierte la respuesta a formato `JSON`, y luego permite manipular los datos recuperados en la segunda función `then`. Además, se incluye un bloque `catch` para gestionar posibles errores en la solicitud.

## sdjhf

## sdfjsfs

### sdjifhd

## sud
