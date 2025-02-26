let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * 10) + 1);
    }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * 10) + 1);
    }, 3000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(Math.floor(Math.random() * 10) + 1);
    }, 5000);
});

Promise.all([promise1, promise2, promise3]).then((value) => {
    let sum = value.reduce(function (prevValue, newValue) {
        return prevValue + newValue;
    });
    console.log(sum);
});
