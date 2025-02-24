/* Validación filtros JS */

// Const para lista
const pokemons = [
    {
        name: "Pikachu",
        type: "electric",
    },
    {
        name: "Bulbasur",
        type: "grass",
    },
    {
        name: "Eevee",
        type: "normal",
    },
    {
        name: "Mew",
        type: "psy",
    },
    {
        name: "Squirtle",
        type: "water",
    },
    {
        name: "Charmander",
        type: "fire",
    },
    {
        name: "Charizard",
        type: "fire",
    },
];

// Ejecutar al cargar la página
/* Antiguo código
for (let i = 0; i < pokemons.length; i++) {
    const list = document.getElementById("list");
    const elemList = document.createElement("ul");
    list.appendChild(elemList);
    elemList.innerHTML = `<li><b>Pokemon: </b>${pokemons[i].name}</li><li><b>Type: </b>${pokemons[i].type}</li>`;
}
*/

// Código corregido
pokemons.forEach((pokemon) => {
    const list = document.getElementById("list");
    const elemList = document.createElement("ul");
    elemList.innerHTML = `
    <hr/>
    <li><b>Pokemon: </b>${pokemon.name}</li>
    <li><b>Type: </b>${pokemon.type}</li>
    `;
    list.appendChild(elemList);
});
//

// Ejecutar al introducir datos de búsqueda
function busqueda() {
    const result = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(input.value.toLowerCase())
    );

    list.innerHTML = "";
    /* Antiguo código
    for (let i = 0; i < result.length; i++) {
        const elemList = document.createElement("ul");
        list.appendChild(elemList);
        elemList.innerHTML = `
        <hr/>
        <li><b>Pokemon: </b>${result[i].name}</li>
        <li><b>Type: </b>${result[i].type}</li>
        `;
    }
    */

    // Código corregido
    result.forEach((pokemon) => {
        const elemList = document.createElement("ul");
        elemList.innerHTML = `
        <hr/>
        <li><b>Pokemon: </b>${pokemon.name}</li>
        <li><b>Type: </b>${pokemon.type}</li>
        `;
        list.appendChild(elemList);
    });

    // "Nicola".toLowerCase().includes("n");
}

//

// Triggers
const input = document.getElementById("search");
// input.addEventListener("input", busqueda);
input.addEventListener("keyup", busqueda);
