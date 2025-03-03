# Axios

Se trata de una librería de JS para hacer un `fetch` de forma diferente (o más sencilla)

Para poder utilizar Axios en nuestro documentos HTML, hemos de insertar su libreria en el documento con `script`:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

```js
const axios = require("axios");

// Making a GET request
axios
    .get("https://api.example.com/data")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
```
