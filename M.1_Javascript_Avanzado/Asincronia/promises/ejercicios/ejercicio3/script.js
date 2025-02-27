const comprobeNumber = (num) => {
    while (isNaN(num) || num <= -1 || num >= 58) {
        num = prompt(
            "Valor introducido no válido, introduce un NÚMERO HASTA 57"
        );
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
    const array = new Map();
    p.forEach((i) => {
        array.set(i.id, { name: i.name, image: i.image, desc: i.description });
    });
    return array;
};

const insertCharacters = (p) => {
    p.forEach((i) => {
        console.log(i.name, i.image, i.desc);
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

    /* 
    for (let i = 0; i < p.length; i++) {
        // console.log(i);
        // console.log(p[i]);
        const list = document.getElementById("characters");
        const character = document.createElement("div");
        character.classList.add("character");
        console.log(p[i].name);
        character.innerHTML = `
        <p class="name"><b>${p[i].name}</b></p>
        <p class="image"><img src="${p[i].image}" alt="Figura completa de ${p[i].name}"></p>
        <p class="description"><b>${p[i].desc}</b></p>
        `;
        // console.log(character);
        list.appendChild(character);
    }
     */
};

/* 
const insertCharacters = (p) => {
    for (let i = 0; i < p.length; i++) {
        const name = document.getElementsByClassName("name")[i];
        const img = document.getElementsByClassName("image")[i];
        const description = document.getElementsByClassName("description")[i];
        name.innerHTML = `<b>${p[i][0]}</b>`;
        img.innerHTML = `<img src="${p[i][1]}" alt="Figura completa de ${p[i][0]}">`;
        description.innerHTML = `<b>${p[i][2]}</b>`;
    }
};
 */

fetch(`https://dragonball-api.com/api/characters${numCharacters()}`)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById(
            "characters"
        ).innerHTML = `<p id="loading">Preparando página...</p>`;
        setTimeout(() => {
            document.getElementById("characters").innerHTML = "";
            const characters = getCharacters(data.items);
            console.log(characters);
            // addElements(characters);
            insertCharacters(characters);
        }, 5000);
    })
    .catch((error) => {
        console.error(`ERROR, ${error}`);
    });
