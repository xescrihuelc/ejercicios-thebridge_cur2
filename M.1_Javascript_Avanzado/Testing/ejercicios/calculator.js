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
const elevPoten = (a, b) => {
    return a ** b;
};
const squareRoot = (a, b) => {
    if (a && b) {
        return "Debe haber solo un número para calcular la raíz cuadrada";
    } else if (b != null) {
        return "Pon el número en el otro campo";
    } else {
        return Math.sqrt(a);
    }
};

function operate() {
    // Variables de control para el switch
    let resultOperation = null;
    const resultParagraf = document.getElementById("resultado");

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
        case 5:
            resultOperation = elevPoten(Number(num1.value), Number(num2.value));
            break;
        case 6:
            if (Number(num2.value) == "") {
                resultOperation = squareRoot(Number(num1.value));
            } else if (Number(num1.value) == "") {
                resultOperation = squareRoot(null, Number(num2.value));
            } else {
                resultOperation = squareRoot(
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

    if ((numOperation = 6)) {
        resultParagraf.innerHTML = `El resultado de la operación es: ${resultOperation}`;
    } else if (isNaN(resultOperation)) {
        resultParagraf.innerHTML = `En algúno de los campos para intruducir números no hay ningún número. INTRUDUCE EN LOS DOS CAMPOS UN NÚMERO`;
        return;
    } else {
        resultParagraf.innerHTML = `El resultado de la operación es: ${resultOperation}`;
    }
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
