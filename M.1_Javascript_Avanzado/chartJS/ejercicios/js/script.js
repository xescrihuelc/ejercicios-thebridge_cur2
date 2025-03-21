// Función para obtener el chiste de la API
const obtainJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => {
            // Al obtener respuesta de la API
            // invocará a estas dos funciones
            renderJoke(data.value); //Añade chíste a la página
        })
        .catch((error) => {
            console.error("ERROR:", error);
            alert("ERROR fetching the joke");
        });
};

// Función que añade el chiste en la página
const renderJoke = (joke) => {
    const jokeDiv = document.createElement("p");
    jokeDiv.classList.add("jokeBox");
    jokeDiv.innerHTML = joke;
    jokesList.appendChild(jokeDiv);
    addToGraph(joke);
};

const addToGraph = (joke) => {
    //
};

// Variable Elements
const getJoke = document.getElementById("fetchJoke");
const jokesList = document.getElementById("jokeList");
const graph = document.getElementById("myGraph").getContext("2d");

// Triggers
getJoke.addEventListener("click", obtainJoke);
