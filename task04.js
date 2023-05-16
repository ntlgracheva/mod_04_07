'use strict'


const n = 1972;
const m = 2022;


const leapYears = (n, m) => {

    let end = n > m ? n : m;
    let start = m < n ? m : n;


    let yearsArray = [];

    for (; start <= end; start++) {
        let year = start;

        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
            yearsArray.push(year);
        }
    }


    return yearsArray;
}

let result = leapYears(n, m);
console.log(result.join("|"));
