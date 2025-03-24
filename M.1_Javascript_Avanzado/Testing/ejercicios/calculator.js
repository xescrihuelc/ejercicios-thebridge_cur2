const sum = (a, b) => {
    return a + b;
};
const substract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    if (b == 0) {
        return `NO SE PUEDE DIVIDIR ENTRE CERO`;
    } else {
        return a / b;
    }
};

function operate() {
    // Variables de control para el switch
    const number1 = Number(num1.value);
    const number2 = Number(num2.value);
    let resultOperation = null;

    //
    switch (numOperation) {
        case 1:
            resultOperation = sum(Number(num1.value), Number(num2.value));
            break;
        case 2:
            resultOperation = substract(Number(num1.value), Number(num2.value));
            break;
        case 3:
            resultOperation = multiply(Number(num1.value), Number(num2.value));
            break;
        case 4:
            if (Number(num2.value) == 0) {
                resultOperation = 0;
            } else {
                resultOperation = divide(
                    Number(num1.value),
                    Number(num2.value)
                );
            }
            break;

        default:
            console.error("ERROR | NO HAS SELECCIONADO UNA OPERACIÓN");
            alert("ERROR | NO HAS SELECCIONADO UNA OPERACIÓN");
            break;
    }

    if (isNaN(resultOperation)) {
        document.getElementById(
            "resultado"
        ).innerHTML = `En algúno de los campos para intruducir números no hay ningún número. INTRUDUCE EN LOS DOS CAMPOS UN NÚMERO`;
        return;
    }

    document.getElementById(
        "resultado"
    ).innerHTML = `El resultado de la operación es: ${resultOperation}`;

    return resultOperation;
}

// Función para que al cargar la página,
// los campos de selección de operación
// y valores de los campos de número estén vacíos.
function onload() {
    const inputs = document.querySelectorAll(".inptOption");
    inputs.forEach((option) => {
        option.checked = false;
    });
    num1.value = "";
    num2.value = "";
}

let numOperation = null;

// Variables que apuntan a objetos del HTML
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

onload();
