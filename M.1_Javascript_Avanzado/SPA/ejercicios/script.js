fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then((response) => response.json())
    .then((data) => {
        const questions = data.results;
        questions.forEach((quest) => {
            console.log(quest.question);
            console.log("Correct ans:", quest.correct_answer);
            console.log("FAIL 1:", quest.incorrect_answers[0]);
            console.log("FAIL 2:", quest.incorrect_answers[1]);
            console.log("FAIL 3:", quest.incorrect_answers[2]);
        });
    })
    .catch((error) => {
        console.error("ERROR OBTENCION DATOS API", error);
        alert("Error al obtener datos de la API");
    });
