const comprobeNumber = (num) => {
    while (isNaN(num) || num <= -1 || num >= 11) {
        num = prompt("Valor introducido no válido, introduce un NÚMERO HASTA 10");
    }
    if (!num == 0) {
        return `?limit=${num}`;
    } else {
        return "";
    }
};

const numCharacters = () => {
    const num = prompt("¿Cuantos personajes deseas ver?");
    return comprobeNumber(num);
};

const getCharacters = (p) => {
    const array = [];
    p.forEach((i) => {
        array.push([i.name, i.image, i.description]);
    });
    return array;
};

const addElements = (p) => {
    for (let i = 0; i < p.length; i++) {
        const list = document.getElementById("characters");
        const character = document.createElement("div");
        character.classList.add("character");
        character.innerHTML = `
        <p class="name"></p>
        <p class="image"></p>
        <p class="description"></p>
        `;
        list.appendChild(character);
    }
};

const insertCharacters = (p) => {
    // Centrarse en este script
};


fetch(`https://dragonball-api.com/api/characters${numCharacters()}`)
.then((response) => response.json())
.then((data) => {
    document.getElementById("characters").innerHTML = `<p id="loading">Preparando página...</p>`;
        setTimeout(() => {
            document.getElementById("characters").innerHTML = "";
            const characters = getCharacters(data.items);
            addElements(characters)
            // insertCharacters(characters);
        }, 5000);
    })
    .catch((error) => {
        console.error(`ERROR, ${error}`);
    });
