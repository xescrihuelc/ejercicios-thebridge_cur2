const estudiante = {
    nombre: "Ana",
    edad: 20,
    ciudad: "Madrid",
    calificaciones: {
        matematicas: 85,
        historia: 90,
        ingles: 75,
    },
};

/*
Ejercicio 1
-
Crear una copia del objeto estudiante utilizando
el operador spread
*/
const estudianteCopia = { ...estudiante };
console.log(estudianteCopia);

/*
Ejercicio 2
-
Extraer el nombre y la edad del estudiante usando
la destructuración y mostrarlos en la consola
*/
const { nombre, edad } = estudiante;
console.log(`Nombre: ${nombre}\nEdad: ${edad}`);

/*
Ejercicio 3
-
Modificar la copia del objeto para
cambiar la ciudad a "Barcelona".
*/
estudianteCopia.ciudad = "Barcelona";
console.log(estudianteCopia);

/*
Ejercicio 4
-
Crear un nuevo objeto de calificaciones con una
nueva asignatura y agregarlo a la copia
del objeto estudiante. 
*/
estudianteCopia.calificaciones = {
    ...estudianteCopia.calificaciones,
    Ciencias: 57,
};

console.log(estudianteCopia);

function sumEveryOther(...p) {
    let sumita = 0;
    for (let i = 0; i < p.length; i++) {
        sumita += p[i];
    }
    return sumita;
}

function sumEveryOther(...p) {
    return p.reduce((n1, n2) => n1 + n2);
}
console.log(sumEveryOther(1, 2, 3, 4, 5));

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        primary: "Overgrow",
        hidden: "Chlorophyll",
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45,
    },
    moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        primary: "Static",
        hidden: "Lightning rod",
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90,
    },
    moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};

const poke1 = { ...pokemon };
const poke2 = { ...pikachu };

const mergedArray = { ...pokemon, ...pikachu };
console.log(mergedArray);

function combineAllArrays(...p) {
    let elArray = [];
    for (let i = 0; i < p.length; i++) {
        elArray = [...elArray, ...p[i]];
    }
    return elArray;
}
console.log(combineAllArrays([1, 2, 3], [4, 5, 6, 7], [8, 9, 10]));

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
// console.log(maximaHoy);
// console.log(maximaManana);

const {
    yesterday,
    today: maximaHoy,
    tomorrow: maximaManana,
} = HIGH_TEMPERATURES;
console.log(`Máximas pa' hoy: ${maximaHoy}`);
console.log(`Máximas pa' mañana: ${maximaManana}`);
