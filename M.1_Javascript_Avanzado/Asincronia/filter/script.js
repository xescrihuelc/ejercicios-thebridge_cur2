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
    if (url === "") {
        url = "https://dragonball-api.com/api/characters?page=1&limit=10";
    } else if (p == "prev") {
        url = prevPageLink;
    } else if (p == "next") {
        url = nextPageLink;
    } else {
        console.error("Parametro no válido pasado");
        alert("Parametro no válido pasado");
        return;
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById(
                "characters"
            ).innerHTML = `<p id="loading">Preparando página...</p>`;
            prevPageLink = data.links.previous;
            nextPageLink = data.links.next;
            setTimeout(() => {
                document.getElementById("characters").innerHTML = "";
                const characters = getCharacters(data.items);
                insertCharacters(characters);
                subSection.style.display = "";
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
            }, 5000);
        })
        .catch((error) => {
            console.error(`ERROR, ${error}`);
        });
}

const subSection = document.getElementById("searchSection");
subSection.style.display = "none";
getResponseAPI("");

//Triggers
const searchBar = document.getElementById("searchBar");
const prevBttn = document.getElementById("prevPage");
const nxtBttn = document.getElementById("nextPage");
searchBar.addEventListener("change", busqueda);
prevBttn.addEventListener("click", () => getResponseAPI("prev"));
nxtBttn.addEventListener("click", () => getResponseAPI("next"));
