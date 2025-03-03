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
    searchBar = document.getElementById("searchBar");
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

const subSection = document.getElementById("searchSection");
subSection.style.display = "none";

function getResponseAPI() {
    fetch(`https://dragonball-api.com/api/characters`)
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

const nxtPage = () => {
    fetch(nextPageLink)
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
                    // prevBttn.removeAttribute("disabled");
                }
                if (nextPageLink === "") {
                    nxtBttn.disabled = true;
                } else {
                    nxtBttn.disabled = false;
                    // nxtBttn.removeAttribute("disabled");
                }
            }, 5000);
        })
        .catch((error) => {
            console.error(`ERROR, ${error}`);
        });
};

const prevPage = () => {
    fetch(prevPageLink)
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
};

getResponseAPI();

//Triggers
const button = document.getElementById("bttnSearch");
button.addEventListener("click", busqueda);
const prevBttn = document.getElementById("prevPage");
prevBttn.addEventListener("click", prevPage);
const nxtBttn = document.getElementById("nextPage");
nxtBttn.addEventListener("click", nxtPage);
