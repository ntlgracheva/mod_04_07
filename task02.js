'use strict'

const amount = 5;
const n = -10;
const m = -100;

const generatorArray = (arrayLength, n, m) => {

    let max = n > m ? n : m;
    let min = m < n ? m : n;


    let filledArray = new Array(arrayLength).fill(1).map((elem) => {
        return elem * (Math.floor(Math.random() * (max - min + 1)) + min);
    });

    return filledArray;
}

let result = generatorArray(amount, n, m);
console.log(result.join("|"));
