'use strict'

const amount = 5;
const n = 0;
const m = 10;
const str = "even";

const generatorArray = (arrayLength, n, m, str) => {

    let max = n > m ? n : m;
    let min = m < n ? m : n;


    let filledArray = new Array(arrayLength).fill(1).map((elem) => {

        let randomNum = 1;

        if (str === "even") {
            do { randomNum = (Math.floor(Math.random() * (max - min + 1)) + min) }
            while (randomNum % 2 !== 0)
        }
        if (str === "odd") {
            do { randomNum = (Math.floor(Math.random() * (max - min + 1)) + min) }
            while (randomNum % 2 === 0)
        }
        return elem * randomNum;
    });

    return filledArray;
}

let result = generatorArray(amount, n, m, str);
console.log(result.join("|"));
