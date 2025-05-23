// --- Elementos del DOM ---
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsInfo = document.getElementById("attempts");
const playAgainButton = document.getElementById("playAgainButton");
const guessesList = document.getElementById("guessesList");
const selectDifficultyBox = document.getElementById("selectDifficulty");
const selectDifficultyOption = document.getElementById("selectOption");
const gameDiv = document.getElementsByClassName("container")[0];
const phraseGame = document.getElementById("phrase");
const highScore = localStorage.getItem("highScore");
const highScorePhrase = document.getElementById("highScore");

// --- Variables del Juego ---
let secretNumber;
let attempts;
let MAX_NUMBER = Number();
const MIN_NUMBER = 1;
let lastAttempt = Number();
let distLastAttempt = Number();
let distAttempt = Number();

// --- Funciones ---

// Función para iniciar o reiniciar el juego
function startGame() {
    // Comprueba si exíste un localStorage
    if (!highScore) {
        localStorage.highScore = "";
    }

    // Genera un número secreto entre MIN_NUMBER y MAX_NUMBER
    secretNumber = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
    attempts = 0; // Reinicia los intentos

    // Mensajes iniciales y estado de la UI
    message.textContent = "";
    message.className = "message"; // Quita clases de color
    attemptsInfo.textContent = "";
    guessInput.value = ""; // Limpia el input
    guessInput.disabled = false; // Habilita el input
    guessButton.disabled = false; // Habilita el botón de adivinar
    playAgainButton.style.display = "none"; // Oculta el botón de jugar de nuevo
    guessInput.focus(); // Pone el foco en el input
    guessesList.innerHTML = "";
    phraseGame.innerText = `He pensado en un número entre 1 y ${MAX_NUMBER}. ¿Puedes adivinar cuál es?`;

    console.log(`Pssst... el número secreto es ${secretNumber}`); // Ayuda para depurar
}

// Función para que cuando quede seleccionada el nivel de dificultad empieze el juego
function selectedDifficulty() {
    selectDifficultyBox.style.display = "none";
    difficulty(selectDifficultyOption.value);
    gameDiv.style.display = "";
    startGame();
}

function clue(actual, last, user) {
    if (actual < last) {
        setMessage("¡Más caliente! 🔥", "wrong");
        lastAttempt = user;
    } else {
        setMessage("¡Más frío! 🥶", "wrong");
        lastAttempt = user;
    }
}

// Función para manejar el intento del usuario
function handleGuess() {
    const userGuessText = guessInput.value;

    // Validar si la entrada está vacía
    if (userGuessText === "") {
        setMessage("Por favor, introduce un número.", "info");
        return;
    }

    const userGuess = parseInt(userGuessText);

    // Validar si la entrada es un número válido y está en el rango
    if (isNaN(userGuess) || userGuess < MIN_NUMBER || userGuess > MAX_NUMBER) {
        setMessage(
            `Introduce un número válido entre ${MIN_NUMBER} y ${MAX_NUMBER}.`,
            "info"
        );
        guessInput.value = ""; // Limpiar el input inválido
        guessInput.focus();
        return;
    }

    // Incrementar el contador de intentos
    attempts++;
    attemptsInfo.textContent = `Intentos: ${attempts} / 10`;

    const listItem = document.createElement("li"); // Crea un elemento <li>
    listItem.textContent = userGuess; // Pone el número dentro del <li>
    guessesList.appendChild(listItem); // Añade el <li> a la lista <ul>
    distAttempt = Math.abs(userGuess - secretNumber);
    distLastAttempt = Math.abs(lastAttempt - secretNumber);

    // Comparar el intento con el número secreto
    if (userGuess === secretNumber) {
        setMessage(
            `¡Correcto! 🎉 El número era ${secretNumber}. Lo adivinaste en ${attempts} intentos.`,
            "correct"
        );
        endGame();
    } else if (userGuess < secretNumber) {
        //
        clue(distAttempt, distLastAttempt, userGuess);
    } else {
        clue(distAttempt, distLastAttempt, userGuess);
    }

    // Limpiar el input para el siguiente intento (si no ha ganado)
    if (userGuess !== secretNumber) {
        // Si ha alcanzado los diez intentos sin adivinatr el número secreto
        if (attempts == 10) {
            endGame();
            setMessage(
                `¡Has perdido!\nEl número correcto era: ${secretNumber}`
            );
        } else {
            guessInput.value = "";
            guessInput.focus();
        }
    }
}

// Función para mostrar mensajes al usuario
function setMessage(msg, type) {
    message.textContent = msg;
    message.className = `message ${type}`; // Añade clase para el color (correct, wrong, info)
}

// Función para terminar el juego (cuando se adivina el número)
function endGame() {
    guessInput.disabled = true; // Deshabilita el input
    guessButton.disabled = true; // Deshabilita el botón de adivinar
    playAgainButton.style.display = "inline-block"; // Muestra el botón de jugar de nuevo
    highScorePhrase.innerText = `El record se quedó en ${highScore}`;
    if (attempts < highScore || highScore == "") {
        localStorage.highScore = attempts;
    }
    highScorePhrase.removeAttribute("hidden");
}

// Función para elejir la dificultad del juego
function difficulty(difficult) {
    if (difficult == "easy") {
        MAX_NUMBER = 50;
    } else if (difficult == "medium") {
        MAX_NUMBER = 100;
    } else {
        MAX_NUMBER = 200;
    }
}

// Función que oculta el div del juego para
// seleccionar primero su dificultad
function onload() {
    gameDiv.style.display = "none";
    selectDifficultyOption.value = "";
}

// --- Event Listeners ---

// Escuchar clics en el botón "Adivinar"
guessButton.addEventListener("click", handleGuess);

// Escuchar la tecla "Enter" en el campo de entrada
guessInput.addEventListener("keyup", function (event) {
    // Si la tecla presionada es Enter (código 13)
    if (event.key === "Enter") {
        event.preventDefault(); // Evita comportamiento por defecto (si estuviera en un form)
        handleGuess(); // Llama a la función de adivinar
    }
});

// Escuchar clics en el botón "Jugar de Nuevo"
playAgainButton.addEventListener("click", startGame);

// Escuchar cambios en la opción de la lista.
selectDifficultyOption.addEventListener("change", selectedDifficulty);

// --- Iniciar la selección de la dificultad al cargar la página ---
onload();
