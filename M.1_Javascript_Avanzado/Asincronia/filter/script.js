// Busqueda
let prevPageLink = "";
let nextPageLink = "";

function lowing(txt) {
    return String(txt).toLowerCase();
}

const getCharacters = (p) => {
    const array = new Map();
    p.forEach((i) => {
        array.set(i.id, { name: i.name, image: i.image, desc: i.description });
    });
    return array;
};

const insertCharacters = (p) => {
    p.forEach((i) => {
        const list = document.getElementById("characters");
        const character = document.createElement("div");
        character.classList.add("character");
        character.innerHTML = `
        <p class="name"><b>${i.name}</b></p>
        <p class="image"><img src="${i.image}" alt="Figura completa de ${i.name}"></p>
        <p class="description"><b>${i.desc}</b></p>
        `;
        list.appendChild(character);
    });
};

const aplyFilters = () => {
    const searchBar = document.getElementById("searchBar");
    const chrGender = document.getElementById("characterGender");
    const chrRace = document.getElementById("characterRace");
    const chrAffiliation = document.getElementById("characterAffiliation");
    let phraseFilter = "?"

    // Reset filters
    if (searchBar.value == "" && chrGender.value == "" && chrRace.value == "" && chrAffiliation.value == "") {
        getResponseAPI("");
        return
    }

    // IF NAME
    if (searchBar.value !== "") {
        phraseFilter = phraseFilter + 'name=' + lowing(searchBar.value)
    };
    
    // IF GENDER
    if (chrGender.value !== "") {
        if (searchBar.value !== "") {
            phraseFilter = phraseFilter + '&gender=' + lowing(chrGender.value)
        } else {
            phraseFilter = phraseFilter + 'gender=' + lowing(chrGender.value)
        }
    }
    
    // IF RACE
    if (chrRace !== "") {
        if (searchBar.value !== "" || chrGender.value !== "") {
            phraseFilter = phraseFilter + '&race=' + lowing(chrRace.value)
        } else {
            phraseFilter = phraseFilter + 'race=' + lowing(chrRace.value)
        }
    }
    
    // IF AFFILIATION
    if (chrAffiliation !== "") {
        if (searchBar.value !== "" || chrGender.value !== "" || chrRace.value !== "") {
            phraseFilter = phraseFilter + '&affiliation=' + lowing(chrAffiliation.value)
        } else {
            phraseFilter = phraseFilter + 'affiliation=' + lowing(chrAffiliation.value)
        }
    };
    console.log("URL:", encodeURI(phraseFilter))
    return phraseFilter
}

const rsetFilters = () => {
    const searchBar = document.getElementById("searchBar");
    const chrGender = document.getElementById("characterGender");
    const chrRace = document.getElementById("characterRace");
    const chrAffiliation = document.getElementById("characterAffiliation");
    searchBar.value = ""
    chrGender.value = ""
    chrRace.value = ""
    chrAffiliation.value = ""
    getResponseAPI("");
}

/* 
function busqueda() {
    document.getElementById("characters").innerHTML = "";

    fetch(
        `https://dragonball-api.com/api/characters?name=${lowing(
            searchBar.value
        )}`
    )
        .then((response) => response.json())
        .then((data) => {
            document.getElementById(
                "characters"
            ).innerHTML = `<p id="loading">Preparando página...</p>`;
            setTimeout(() => {
                document.getElementById("characters").innerHTML = "";
                const characters = getCharacters(data);
                insertCharacters(characters);
            }, 5000);
        });
}
 */

function getResponseAPI(p) {
    let url = "";
    switch (p) {
        case "":
            url = "https://dragonball-api.com/api/characters?page=1&limit=10";
            break;

        case "prev":
            url = prevPageLink;
            break;

        case "next":
            url = nextPageLink;
            break;

        case "filter":
            filterURL = () => aplyFilters();
            break;
    
        default:
            console.error("Parametro no válido pasado");
            alert("Parametro no válido pasado");
            return;
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Ocultar controles
            filterBox.style.display = 'none'
            prevBttn.hidden = true;
            nxtBttn.hidden = true;

            // Mostrar página de carga
            document.getElementById(
                "characters"
            ).innerHTML = `<p id="loading">Preparando página...</p>`;

            // Variables de URLs
            prevPageLink = data.links.previous;
            nextPageLink = data.links.next;

            // 
            setTimeout(() => {
                document.getElementById("characters").innerHTML = "";
                const characters = getCharacters(data.items);
                insertCharacters(characters);
                filterBox.style.display = "";

                // Condiciones que muestran/ocultan botones de prevPage o nextPage en
                // función de si exísten URLs o no.
                if (prevPageLink === "") {
                    prevBttn.disabled = true;
                } else {
                    prevBttn.disabled = false;
                }
                
                if (nextPageLink === "") {
                    nxtBttn.disabled = true;
                } else {
                    nxtBttn.disabled = false;
                }

                // Mostrar botones de control
                filterBox.style.display = ''
                prevBttn.hidden = false;
                nxtBttn.hidden = false;
            }, 5000);
        })
        .catch((error) => {
            console.error(`ERROR, ${error}`);
        });
}

const filterBox = document.getElementById("filterBox");
filterBox.style.display = 'none';
getResponseAPI("");


// Variable HTML elements
const prevBttn = document.getElementById("prevPage");
const nxtBttn = document.getElementById("nextPage");
const restoreFilters = document.getElementById("restoreFilters");
const applyFilters = document.getElementById("applyFilters");

// Triggers
prevBttn.addEventListener("click", () => getResponseAPI("prev"));
nxtBttn.addEventListener("click", () => getResponseAPI("next"));
restoreFilters.addEventListener("click", rsetFilters);
// applyFilters.addEventListener("click", () => getResponseAPI("filter"));
applyFilters.addEventListener("click", aplyFilters);
