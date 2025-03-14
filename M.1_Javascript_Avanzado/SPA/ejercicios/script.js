const arrQuestions = new Array();
const options = new Array();
const correctAnswers = new Array();
let correctAnswersCounter = 0;
let goodAnswers = 0;
let numQuestion = 0;

function shuffleArray(array) {
    let currentIndex = array.length;

    // Mientras hayan elemntentos restantes para mezclar
    while (currentIndex != 0) {
        // Agarrar un elemento restante...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Cambiarlo con el actual elemento.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
}

// Función para decodificar elementos HTML (SIN ETIQUETAS)
function decodeHTMLEntities(text) {
    const prevText = document.createElement("div");
    prevText.innerHTML = text;
    const newText = prevText.innerText;
    prevText.remove;
    return newText;
}

const getQuestions = async () => {
    await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then((response) => response.json())
        .then((data) => {
            // Ocultar boton para mostrar preguntas
            showQuestionsBttn.hidden = true;
            // declarar variable questions, su valor: los
            // datos que nos interesan
            const questions = data.results;
            questions.forEach((quest) => {
                const arrOptions = new Array();
                arrQuestions.push(decodeHTMLEntities(quest.question));
                correctAnswers.push(decodeHTMLEntities(quest.correct_answer));
                arrOptions.push(
                    decodeHTMLEntities(quest.correct_answer),
                    decodeHTMLEntities(quest.incorrect_answers[0]),
                    decodeHTMLEntities(quest.incorrect_answers[1]),
                    decodeHTMLEntities(quest.incorrect_answers[2])
                );
                // Randomizar posiciones de array 'arrOptions'
                shuffleArray(arrOptions);
                //
                options.push(arrOptions);
            });
            showQuestions(numQuestion);
            questionsBox.hidden = false;
        })
        .catch((error) => {
            console.error("ERROR OBTENCION DATOS API", error);
            alert("Error al obtener datos de la API");
            showQuestionsBttn.hidden = false;
        });
};

const showQuestions = (question) => {
    const questionPhrase = document.getElementById("question");
    const option1 = document.getElementById("question1");
    const option2 = document.getElementById("question2");
    const option3 = document.getElementById("question3");
    const option4 = document.getElementById("question4");
    questionPhrase.innerText = arrQuestions[question];
    option1.innerText = options[question][0];
    option1.setAttribute("value", options[question][0]);
    option2.innerText = options[question][1];
    option2.setAttribute("value", options[question][1]);
    option3.innerText = options[question][2];
    option3.setAttribute("value", options[question][2]);
    option4.innerText = options[question][3];
    option4.setAttribute("value", options[question][3]);
    numQuestion += 1;
};

const answer = (param) => {
    const labels = document.querySelectorAll(".option");
    const trueAnswer = correctAnswers[correctAnswersCounter];
    // Poner condición IF
    console.log(labels[param].innerText);

    correctAnswersCounter++;
    // numQuestion++
};

// Tag Elements
const showQuestionsBttn = document.getElementById("startQuizBttn");
const questionsBox = document.getElementById("questionsBox");

// Trigger
showQuestionsBttn.addEventListener("click", getQuestions);

questionsBox.hidden = true;
