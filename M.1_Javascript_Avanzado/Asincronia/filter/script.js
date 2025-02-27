// Busqueda
function lowing(txt) {
    return String(txt).toLowerCase();
}

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
                console.log(data);
                document.getElementById("characters").innerHTML = "";
                const characters = getCharacters(data);
                console.log(characters);
                insertCharacters(characters);
            }, 5000);
        });
}

const getCharacters = (p) => {
    const array = new Map();
    p.forEach((i) => {
        array.set(i.id, { name: i.name, image: i.image, desc: i.description });
    });
    console.log(p);
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

const subSection = document.getElementById("searchSection");
subSection.style.display = "none";

fetch(`https://dragonball-api.com/api/characters`)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById(
            "characters"
        ).innerHTML = `<p id="loading">Preparando página...</p>`;
        setTimeout(() => {
            document.getElementById("characters").innerHTML = "";
            const characters = getCharacters(data.items);
            insertCharacters(characters);
            subSection.style.display = "";
        }, 5000);
    })
    .catch((error) => {
        console.error(`ERROR, ${error}`);
    });

//Triggers
const button = document.getElementById("bttnSearch");
button.addEventListener("click", busqueda);
