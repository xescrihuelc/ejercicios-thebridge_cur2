// Variable para marcar inicialmente posición
// de Array de los chistes y la variable del gráfico inicializada
let numJoke = 0;
let myGraph = null;

// Función para obtener el chiste de la API
const obtainJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => {
            // Al obtener respuesta de la API
            // invocará a estas dos funciones
            renderJoke(data.value); //Añade chíste a la página
            saveJoke(data.value); //Añade chíste a array de localStorage
        })
        .catch((error) => {
            console.error("ERROR:", error);
            alert("ERROR fetching the joke");
        });
};

// Función que añade el chiste en la página
const renderJoke = (joke) => {
    const jokeDiv = document.createElement("div");
    jokeDiv.classList.add("jokeBox");
    jokeDiv.innerHTML = `
    <p class="joke">${joke}</p>
    <button type="button" class="bttnDeleteJoke" onclick="eraseJoke(${numJoke})">Eliminar</button>
    `;
    jokesList.appendChild(jokeDiv);
    numJoke += 1;
};

// Funcion para guardar y actualizar chistes en localStorage
const saveJoke = (phrase) => {
    if (!localStorage.getItem("jokes")) {
        localStorage.jokes = "[]";
    }
    const jokesArray = JSON.parse(localStorage.getItem("jokes"));
    jokesArray.push(phrase);
    localStorage.setItem("jokes", JSON.stringify(jokesArray));
    showCanvas(JSON.parse(localStorage.getItem("jokes")));
};

// Llama una función para actualizar los onclick()
// de los elementos button de clase bttnDeleteJoke
const updateJoke = () => {
    numJoke = 0;

    const jokes = document.querySelectorAll(".bttnDeleteJoke");

    jokes.forEach((joke) => {
        joke.setAttribute("onclick", `eraseJoke(${numJoke})`);
        numJoke += 1;
    });

    showCanvas(JSON.parse(localStorage.getItem("jokes")));
};

// Función para eliminar un chiste de
// la página y del localStorage
const eraseJoke = (number) => {
    // Eliminar chiste de la página
    const divJokes = document.querySelectorAll(".jokeBox");
    const jokeElement = divJokes[number];
    jokeElement.remove();

    // Eliminar chiste del array de chistes del localStorage
    const jokesArray = JSON.parse(localStorage.getItem("jokes"));
    const updatedArray = jokesArray.filter(
        (index) => index !== jokesArray[number]
    );
    localStorage.setItem("jokes", JSON.stringify(updatedArray));

    // Invoca a la función updateJoke
    updateJoke(divJokes);
};

// Función para vaciar la ul 'jokeList'
// y vacía el array de chistes del localStorage
const emptyJokeList = () => {
    jokesList.innerHTML = "";
    let jokesArray = JSON.parse(localStorage.getItem("jokes"));
    jokesArray = new Array();
    localStorage.setItem("jokes", JSON.stringify(jokesArray));
};

const showCanvas = (jokes) => {
    let numJoke = 0;
    const arrayNumJoke = new Array();
    const numCharactJoke = new Array();

    jokes.forEach((joke) => {
        numJoke++;
        arrayNumJoke.push(`Joke ${numJoke}`);
        numCharactJoke.push(joke.length);
    });
    // console.log(arrayNumJoke, numCharactJoke);

    const jokesData = {
        labels: arrayNumJoke,
        datasets: [
            {
                label: "characters",
                data: numCharactJoke,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    const ctx = document.getElementById("myGraph").getContext("2d");

    if (myGraph) {
        myGraph.destroy();
    }

    myGraph = new Chart(ctx, {
        type: "bar",
        data: jokesData,
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                },
            },
        },
    });
};

// Función que carga y muestras los
// chistes almacenado en localStorage
// al cargar la página.
const loadJoke = () => {
    if (!localStorage.getItem("jokes")) {
        localStorage.jokes = "[]";
    } else {
        const jokesArray = JSON.parse(localStorage.getItem("jokes"));
        jokesArray.forEach((joke) => {
            renderJoke(joke);
        });
        showCanvas(JSON.parse(localStorage.getItem("jokes")));
    }
};

// Variable Elements
const getJoke = document.getElementById("fetchJoke");
const jokesList = document.getElementById("jokeList");
const bttnEraseJokes = document.getElementById("eraseJokes");

// Triggers
getJoke.addEventListener("click", obtainJoke);
bttnEraseJokes.addEventListener("click", emptyJokeList);

loadJoke();
