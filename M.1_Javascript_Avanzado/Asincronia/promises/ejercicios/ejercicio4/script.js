const userOne = async () => {
    console.info(`Cargando User 1`);
    await fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then((response) => response.json())
        .then((data) => {
            console.log(
                `Usuario 1:\n- Nombre: ${data.name}\n- Email: ${data.email}\n- Ciudad: ${data.address.city}`
            );
        })
        .catch((error) => {
            console.error(`ERROR, ${error}`);
        });
    return;
};
const userTwo = async () => {
    console.info(`Cargando User 2`);
    await fetch(`https://jsonplaceholder.typicode.com/users/2`)
        .then((response) => response.json())
        .then((data) => {
            console.log(
                `Usuario 2:\n- Nombre: ${data.name}\n- Email: ${data.email}\n- Ciudad: ${data.address.city}`
            );
        })
        .catch((error) => {
            console.error(`ERROR, ${error}`);
        });
};
const userThree = async () => {
    console.info(`Cargando User 3`);
    await fetch(`https://jsonplaceholder.typicode.com/users/3`)
        .then((response) => response.json())
        .then((data) => {
            console.log(
                `Usuario 3:\n- Nombre: ${data.name}\n- Email: ${data.email}\n- Ciudad: ${data.address.city}`
            );
        })
        .catch((error) => {
            console.error(`ERROR, ${error}`);
        });
};

async function showUsers() {
    console.warn(`Resolviendo ejercicio de la forma más comlicada`);
    // Forma complicada
    await userOne();
    await userTwo();
    await userThree();

    console.warn(`Resolviendo ejercicio de la forma más corta`);
    // Forma más resumida
    for (let i = 1; i < 3 + 1; i++) {
        console.info(`Cargando User ${i}`);
        const data = await fetch(
            `https://jsonplaceholder.typicode.com/users/${i}`
        ).then((response) => response.json());
        console.log(
            `Usuario ${i}:\n- Nombre: ${data.name}\n- Email: ${data.email}\n- Ciudad: ${data.address.city}`
        );
    }
}

showUsers();
