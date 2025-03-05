// Variables iniciales
let prevPageLink = "";
let nextPageLink = "";

// Funcion para que todos los carácteres pasados sean minúsculas
function lowing(txt) {
    return String(txt).toLowerCase();
}

// Funcion para obtener info. del planeta del personaje
const getPlanetInfo = (chrID) => {
    // Consulta a API sobre el planeta del personaje
    fetch(`https://dragonball-api.com/api/characters/${chrID}`)
        .then((response) => response.json())
        .then((data) => {
            // Variables elementos HTML
            const namePlanetBox = document.getElementById("namePlanet");
            const imgPlanetBox = document.getElementById("imgPlanet");
            const descriptionPlanetBox =
                document.getElementById("descriptionPlanet");

            // Variables resultado API
            const planetName = data.originPlanet.name;
            const planetImage = data.originPlanet.image;
            const planetDesc = data.originPlanet.description;

            // Modificación elementos del <span id="planetInfoBox">
            namePlanetBox.innerText = planetName;
            imgPlanetBox.innerHTML = `<img src="${planetImage}" alt="Imagen del planeta ${planetName}" id="imgPlnt">`;
            descriptionPlanetBox.innerText = planetDesc;
            planetBox.style.display = "";
        })
        .catch((error) => {
            console.error(`ERROR, ${error}`);
        });
};

// Función simple para cerrar el cuadro de la info. de los planetas.
const closePlanetInfo = () => {
    planetBox.style.display = "none";
};

// Función para almmacenar la info de los personajes en un Map() y
// hacer más accesible los datos necesarios
const getCharacters = (p) => {
    const array = new Map();
    p.forEach((i) => {
        array.set(i.id, {
            id: i.id,
            name: i.name,
            image: i.image,
            desc: i.description,
        });
    });
    return array;
};

// Función para insertar los personajes en los
const insertCharacters = (p) => {
    p.forEach((i) => {
        const list = document.getElementById("characters");
        const character = document.createElement("div");
        character.classList.add("character");
        character.innerHTML = `
        <p class="name"><b>${i.name}</b></p>
        <p class="image"><img src="${i.image}" alt="Figura completa de ${i.name}" onclick="getPlanetInfo(${i.id})"></p>
        <p class="description"><b>${i.desc}</b></p>
        `;
        list.appendChild(character);
    });
};

// Función para aplicar los filtros, y tenerlos en cuenta para la consulta a la API
const aplyFilters = () => {
    const searchBar = document.getElementById("searchBar");
    const chrGender = document.getElementById("characterGender");
    const chrRace = document.getElementById("characterRace");
    const chrAffiliation = document.getElementById("characterAffiliation");
    let phraseFilter = "?";

    // Reset filters
    if (
        searchBar.value == "" &&
        chrGender.value == "" &&
        chrRace.value == "" &&
        chrAffiliation.value == ""
    ) {
        getResponseAPI("");
        return;
    }

    // IF NAME
    if (searchBar.value !== "") {
        phraseFilter = phraseFilter + "name=" + lowing(searchBar.value);
    }

    // IF GENDER
    if (chrGender.value !== "") {
        if (searchBar.value !== "") {
            phraseFilter = phraseFilter + "&gender=" + lowing(chrGender.value);
        } else {
            phraseFilter = phraseFilter + "gender=" + lowing(chrGender.value);
        }
    }

    // IF RACE
    if (chrRace.value !== "") {
        if (searchBar.value !== "" || chrGender.value !== "") {
            phraseFilter = phraseFilter + "&race=" + lowing(chrRace.value);
        } else {
            phraseFilter = phraseFilter + "race=" + lowing(chrRace.value);
        }
    }

    // IF AFFILIATION
    if (chrAffiliation.value !== "") {
        if (
            searchBar.value !== "" ||
            chrGender.value !== "" ||
            chrRace.value !== ""
        ) {
            phraseFilter =
                phraseFilter + "&affiliation=" + lowing(chrAffiliation.value);
        } else {
            phraseFilter =
                phraseFilter + "affiliation=" + lowing(chrAffiliation.value);
        }
    }
    getResponseAPI("filter", encodeURI(phraseFilter));
};

// Función para reiniciar los filtros y ejecutar la consulta inicial.
const rsetFilters = () => {
    const searchBar = document.getElementById("searchBar");
    const chrGender = document.getElementById("characterGender");
    const chrRace = document.getElementById("characterRace");
    const chrAffiliation = document.getElementById("characterAffiliation");
    searchBar.value = "";
    chrGender.value = "";
    chrRace.value = "";
    chrAffiliation.value = "";
    getResponseAPI("");
};

function getResponseAPI(p, filter) {
    let url = "https://dragonball-api.com/api/characters";

    // Switch de comprobación para saber para que se ejecutó
    switch (p) {
        case "":
            url = url + "?page=1&limit=10";
            break;

        case "prev":
            url = prevPageLink;
            break;

        case "next":
            url = nextPageLink;
            break;

        case "filter":
            url = url + filter;
            break;

        default:
            console.error("Parametro no válido pasado");
            alert("Parametro no válido pasado");
            return;
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Ocultar controles y estilos
            const main = document.getElementsByTagName("main")[0];
            main.style.setProperty("justify-content", "center");
            filterBox.style.display = "none";
            planetBox.style.display = "none";
            prevBttn.hidden = true;
            nxtBttn.hidden = true;

            // Mostrar página de carga
            document.getElementById(
                "characters"
            ).innerHTML = `<p id="loading">Preparando página...</p>`;

            // Variables de URLs a ejecutar en función
            // del motivo de la ejecucion de la función
            if (p !== "filter") {
                prevPageLink = data.links.previous;
                nextPageLink = data.links.next;
            }

            //
            setTimeout(() => {
                document.getElementById("characters").innerHTML = "";
                let characters = "";
                // Condicional de valor de datos recibidos en caso de
                // ser ejecutada la función por filtro o no.
                if (p == "filter") {
                    characters = getCharacters(data);
                } else {
                    characters = getCharacters(data.items);
                }
                insertCharacters(characters);
                filterBox.style.display = "";

                // Condiciones que muestran/ocultan botones de
                // prevPage o nextPage en función de si exísten URLs o no.
                if (p !== "filter") {
                    if (prevPageLink === "" || !data.links) {
                        prevBttn.disabled = true;
                    } else {
                        prevBttn.disabled = false;
                    }

                    if (nextPageLink === "" || !data.links) {
                        nxtBttn.disabled = true;
                    } else {
                        nxtBttn.disabled = false;
                    }
                } else {
                    prevBttn.disabled = true;
                    nxtBttn.disabled = true;
                }

                // Mostrar botones de control y estilos
                filterBox.style.display = "";
                main.style.setProperty("justify-content", "space-between");
                prevBttn.hidden = false;
                nxtBttn.hidden = false;
            }, 2000);
        })
        .catch((error) => {
            console.error(`ERROR, ${error}`);
        });
}

// Variable HTML elements
const prevBttn = document.getElementById("prevPage");
const nxtBttn = document.getElementById("nextPage");
const restoreFilters = document.getElementById("restoreFilters");
const applyFilters = document.getElementById("applyFilters");
const filterBox = document.getElementById("filterBox");
const planetBox = document.getElementById("planetInfoBox");

// Eventos de ejecución inmediata
filterBox.style.display = "none";
planetBox.style.display = "none";
getResponseAPI("");

// Triggers
prevBttn.addEventListener("click", () => getResponseAPI("prev"));
nxtBttn.addEventListener("click", () => getResponseAPI("next"));
restoreFilters.addEventListener("click", rsetFilters);
applyFilters.addEventListener("click", aplyFilters);
