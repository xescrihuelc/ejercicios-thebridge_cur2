fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    .then((response) => response.json())
    .then((data) => {
        const questions = data.results;
        console.log(questions);
    })
    .catch();
