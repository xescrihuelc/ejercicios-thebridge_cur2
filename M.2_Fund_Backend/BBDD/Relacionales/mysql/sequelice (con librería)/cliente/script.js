const inputCity = document.getElementById("inputCity");
const inputStrength = document.getElementById("inputStrength");
const btnCreate = document.getElementById("btnCreate");
const PORT = 8000;
const base_url = `http://127.0.0.1:${PORT}`;

const alerter = (phrase, inner) => {
    alert(phrase);
    const listCities = document.getElementById("listCities");
    listCities.innerText = inner;
};

const showUpdateWindows = () => {
    if (confirm("¿Realmente deseas actualizar esta ciudad?")) {
        const newName = prompt("Indica el nuevo nombre");
        if (!newName) {
            return false;
        }
        if (isNaN(newName) == false) {
            alert("Una ciudad NO TIENE NÚMEROS!!!!!");
            return false;
        }
        return newName;
    } else {
        return false;
    }
};

async function updateCity(idCity) {
    const wantUpdate = await showUpdateWindows();
    if (wantUpdate == false) {
        return;
    }
    const nowName = wantUpdate;

    fetch(base_url + `/cities`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
            id: idCity,
            newName: nowName,
        }),
    }).then(() => {
        getCities();
    });
}

function eraseCity(idCity) {
    fetch(base_url + `/cities/${idCity}`, {
        method: "DELETE",
    }).then(() => {
        getCities();
    });
}

function createCity() {
    const cityToCreate = inputCity.value;
    const cityCountryToCreate = inputCountry.value;
    console.log(cityToCreate, cityCountryToCreate);

    if (!cityToCreate || !cityCountryToCreate) {
        alerter(
            "INTRODUCE ALGÚN VALOR, FALTAN DATOS",
            "Introduce un valor en el campo del nombre de la ciudad y el del pais"
        );
        return;
    }

    fetch(base_url + "/cities", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            name: cityToCreate,
            country: cityCountryToCreate,
        }),
    }).then(() => {
        inputCity.value = "";
        inputCountry.value = "";
        getCities();
    });
}

function getCities() {
    fetch(base_url + "/cities")
        .then((res) => res.json())
        .then((cities) => {
            console.log(cities);
            const listCities = document.getElementById("listCities");
            listCities.innerHTML = "";
            cities.forEach((city) => {
                listCities.innerHTML += `
                <h2>
                City: <span id="city${city.id}">${city.name}</span>
                <br/>
                Country: ${city.country}
                <button type="button" onclick="eraseCity(${city.id})">DELETE</button>
                <button type="button" onclick="updateCity(${city.id})">UPDATE (CITY ONLY) [PUT]</button>
                </h2>
                `;
            });
        });
}

btnCreate.addEventListener("click", () => createCity());
getCities();
