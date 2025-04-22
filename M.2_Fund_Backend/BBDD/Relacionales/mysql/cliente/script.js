const inputAnimal = document.getElementById("inputAnimal");
const inputStrength = document.getElementById("inputStrength");
const btnCreate = document.getElementById("btnCreate");
const base_url = "http://127.0.0.1:8080";

const alerter = (phrase, inner) => {
    alert(phrase);
    const listAnimals = document.getElementById("listAnimals");
    listAnimals.innerText = inner;
};

const showUpdateWindows = () => {
    if (confirm("¿Eealmente deseas actualizar este animal?")) {
        const newName = prompt("Indica el nuevo nombre");
        if (isNaN(newName) == false || !newName) {
            alert("Introduce un nombre SIN NÚMEROS");
            return false;
        }
        const newStrength = prompt("Ahora el número de fuerza");
        if (isNaN(newStrength) || !newStrength) {
            alert(
                "O no intruduciste nada, o pusisteste algo QUE NO ERA UN NÚMERO\nINTRODUCE UN NÚMERO PARA LA FUERZA"
            );
            return false;
        }
        return [newName, Number(newStrength)];
    } else {
        return false;
    }
};

async function updateAnimal(idAnimal) {
    const wantUpdate = await showUpdateWindows();
    if (wantUpdate == false) {
        return;
    }
    const newName = wantUpdate[0];
    const newStrength = wantUpdate[1];
    fetch(base_url + `/animals/${idAnimal}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
            name: newName,
            strength: Number(newStrength),
        }),
    }).then(() => {
        getAnimals();
    });
}

function eraseAnimal(idAnimal) {
    fetch(base_url + `/animals/${idAnimal}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify({
            id: idAnimal,
        }),
    }).then(() => {
        getAnimals();
    });
}

function createAnimal() {
    const animalToCreate = inputAnimal.value;
    const strengthToCreate = inputStrength.value;

    if (animalToCreate == "") {
        alerter(
            "INTRODUCE ALGÚN VALOR, FALTAN DATOS",
            "Introduce un valor en el campo del nombre de los animales"
        );
        return;
    }

    fetch(base_url + "/animals", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            name: animalToCreate,
            strength: Number(strengthToCreate),
        }),
    }).then(() => {
        inputAnimal.value = "";
        inputStrength.value = "";
        getAnimals();
    });
}

function getAnimals() {
    fetch(base_url + "/animals")
        .then((res) => res.json())
        .then((animals) => {
            console.log(animals);
            const listAnimals = document.getElementById("listAnimals");
            listAnimals.innerHTML = "";
            animals.forEach((animal) => {
                listAnimals.innerHTML += `
                <h2>
                A: ${animal.name} - F: ${animal.strength}
                <button type="button" onclick="eraseAnimal(${animal.id})">DELETE</button>
                <button type="button" onclick="updateAnimal(${animal.id})">UPDATE (PUT)</button>
                </h2>
                `;
            });
        });
}

btnCreate.addEventListener("click", () => createAnimal());
getAnimals();
