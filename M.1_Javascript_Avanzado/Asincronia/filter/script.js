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

function getResponseAPI(p) {
    let url = "";
    if (p !== "" && p !== "prev" && p !== "next") {
        console.error("Parametro no válido pasado");
        alert("Parametro no válido pasado");
        return;
    };

    if (url === "") {
        url = "https://dragonball-api.com/api/characters?page=1&limit=10";
    };
    if (p == "prev") {
        url = prevPageLink;
    };
    if (p == "next") {
        url = nextPageLink;
    };

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Ocultar controles
            searchBar.hidden = true;
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
                prevBttn.hidden = false;
                nxtBttn.hidden = false;
                searchBar.hidden = false;
            }, 5000);
        })
        .catch((error) => {
            console.error(`ERROR, ${error}`);
        });
}

const filterBox = document.getElementById("filterBox");
filterBox.style.display = "none";
getResponseAPI("");

//Triggers
const searchBar = document.getElementById("searchBar");
const prevBttn = document.getElementById("prevPage");
const nxtBttn = document.getElementById("nextPage");

// EventListeners
searchBar.addEventListener("change", () => getResponseAPI());
prevBttn.addEventListener("click", () => getResponseAPI("prev"));
nxtBttn.addEventListener("click", () => getResponseAPI("next"));
