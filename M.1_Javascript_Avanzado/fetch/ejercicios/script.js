//Aquí tu código
const showJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?lang=es")
        .then((response) => response.json())
        .then((data) => {
            // Manipulación de las datos recuperados
            const joke = document.getElementById("chiste");
            if (data.joke === undefined) {
                joke.innerHTML = `
                ${data.setup}<br/>${data.delivery}
                `;
            } else {
                joke.innerText = `
                ${data.joke}
                `;
            }
        })
        .catch((error) => {
            //Manejo de errores en el solicitud
            console.error("Error en la solicitud:", error);
        });
};

/* TRIGGERS */
const p = document.getElementById("obtenerChiste");
p.addEventListener("click", showJoke);
