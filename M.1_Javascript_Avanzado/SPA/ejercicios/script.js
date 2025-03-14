const arrQuestions = new Array();
const options = new Array();
const correctAnswers = new Array();
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
                arrQuestions.push(quest.question);
                correctAnswers.push(quest.correct_answer);
                arrOptions.push(
                    quest.correct_answer,
                    quest.incorrect_answers[0],
                    quest.incorrect_answers[1],
                    quest.incorrect_answers[2]
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
    questionPhrase.innerHTML = arrQuestions[question];
    option1.innerHTML = options[question][0];
    option2.innerHTML = options[question][1];
    option3.innerHTML = options[question][2];
    option4.innerHTML = options[question][3];
    numQuestion += 1;
};

const answer = (param) => {
    console.log(param);
    const parrafResults = document.getElementById("quizResults");
    parrafResults.innerText = param;
};

// Tag Elements
const showQuestionsBttn = document.getElementById("startQuizBttn");
const questionsBox = document.getElementById("questionsBox");

// Trigger
showQuestionsBttn.addEventListener("click", getQuestions);

questionsBox.hidden = true;
