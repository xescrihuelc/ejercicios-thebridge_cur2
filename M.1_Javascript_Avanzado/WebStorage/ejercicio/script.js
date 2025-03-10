// Ejercicio 1
localStorage.setItem("Nombre", "Alex");
localStorage.setItem("Edad", "33");
localStorage.setItem("Profesión", "Architect");
localStorage.setItem("CP", "44440");
localStorage.setItem("Ciudad", "Badalona");
localStorage.setItem("Teléfono", "660000006");

// Ejercicio 2
const name = localStorage.getItem("Nombre");
const age = localStorage.getItem("Edad");
const profession = localStorage.getItem("Profesión");
const cp = localStorage.getItem("CP");
const city = localStorage.getItem("Ciudad");
const phone = localStorage.getItem("Teléfono");
console.log(`Hola, mi nombre es ${name}, tengo ${age} años,
vivo en ${cp} ${city}, soy ${profession} y mi teléfono es ${phone}.`);

// Ejercicio 3
localStorage.setItem("Ciudad", "Londres");

// Ejercicio 4
localStorage.removeItem("CP");
localStorage.removeItem("Teléfono");
