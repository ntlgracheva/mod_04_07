'use strict'

const amount = 5;

const generatorArray = (arrayLength) => {

    let filledArray = new Array(arrayLength).fill(1).map((elem) => {
        return elem * Math.floor(Math.random() * 101);
    });

    return filledArray;
}

let result = generatorArray(amount);
console.log(result.join("-"));
