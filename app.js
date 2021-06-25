//TIMING OUT
function sayHello() {
    console.log('Hello my name is Ellie');
};
sayHello();

setTimeout(() => {
    console.log('whats up dudes?');
}, 2000);

function getWords() {
    console.log('instant');
    setTimeout(() => {
        console.log('pizza');
    }, 3000);
    setTimeout(() => {
        console.log('meow');
    }, 5000);
    setTimeout(() => {
        console.log('last');
    }, 6000);
}

getWords();

//CALLBACKS AND RECURSION
function done() {
    console.log("Job's Done!");
}
function countdown(num, callback) {
    setTimeout(() => {
        if (num > 0) {
            console.log(num);
            countdown(num - 1, callback);
        } else {
            callback();
        }
    }, 1000);
}
countdown(6, done);

//PROMISES
let lunchtime = true;

const orderMeSomeFood = new Promise(function (resolve, reject) {
    if (lunchtime === true) {
        let food = { lunch: "pb&j", drink: "Sprite" };
        resolve(food);
    } else {
        let err = new Error("You're not hungry anymore!");
        reject(err);
    }
});

function orderFood() {
    orderMeSomeFood
        .then(food => {
            console.log(food);
        })
        .catch(err => {
            console.log(err);
        })
};

orderFood();
