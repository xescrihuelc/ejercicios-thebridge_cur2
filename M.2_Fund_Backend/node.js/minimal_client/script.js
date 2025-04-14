const endpoint = prompt("Ingresar una URL");
const elh1 = document.getElementById("elh1");

fetch(`http://127.0.0.1:8080/${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        elh1.innerHTML = `
        <h2>${data.url}</h2>
        <h2>${data.method}</h2>
        <h2>${data.httpVersion}</h2>
        <h2>${data.message}</h2>`;
    });
