const getCharacters = (p) => {
    const array = [];
    p.forEach((i) => {
        array.push([i.name, i.image, i.description]);
    });
    return p;
};

const addStructure = () => {};

fetch("https://dragonball-api.com/api/characters?limit=8")
    .then((response) => response.json())
    .then((data) => {
        const characters = getCharacters(data.items);
        console.log(characters);
    })
    .catch((error) => {
        console.error(`ERROR, ${error}`);
    });
