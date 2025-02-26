//Aquí tu código
/* Ahora hacerlo con promises */
const showJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?lang=es")
        .then((response) => response.json())
        .then((data) => {
            // Manipulación de las datos recuperados
            const joke = document.getElementById("chiste");
            const newJoke = document.createElement("ul");
            newJoke.classList.add("joke");
            joke.appendChild(newJoke);
            newJoke.innerHTML = "Loading";
            if (data.type == "twopart") {
                setTimeout(() => {
                    newJoke.innerHTML = `
                    ${data.setup}<br/>${data.delivery}
                    `;
                }, 2000);
            } else {
                setTimeout(() => {
                    newJoke.innerText = `
                    ${data.joke}
                    `;
                }, 2000);
            }
        })
        .catch((error) => {
            newJoke.innerHTML = "Loading";
            //Manejo de errores en el solicitud
            setTimeout(() => {
                console.error("Error en la solicitud:", error);
            }, 2000);
            newJoke.innerHTML = "EEROR al cargar chiste";
        });
};

/* TRIGGERS */
const p = document.getElementById("obtenerChiste");
p.addEventListener("click", showJoke);
