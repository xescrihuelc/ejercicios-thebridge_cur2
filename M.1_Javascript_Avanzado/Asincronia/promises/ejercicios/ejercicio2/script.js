//Aquí tu código
/* Ahora hacerlo con promises */
const showJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?lang=es")
        .then((response) => response.json())
        .then((data) => {
            // Manipulación de las datos recuperados
            const joke = document.getElementById("chiste");
            joke.innerHTML = "Loading";
            if (data.type == "twopart") {
                setTimeout(() => {
                    joke.innerHTML = `
                    ${data.setup}<br/>${data.delivery}
                    `;
                }, 2000);
            } else {
                setTimeout(() => {
                    joke.innerText = `
                    ${data.joke}
                    `;
                }, 2000);
            }
        })
        .catch((error) => {
            joke.innerHTML = "Loading";
            //Manejo de errores en el solicitud
            setTimeout(() => {
                console.error("Error en la solicitud:", error);
            }, 2000);
            joke.innerHTML = "EEROR al cargar chiste";
        });
};

/* TRIGGERS */
const p = document.getElementById("obtenerChiste");
p.addEventListener("click", showJoke);
