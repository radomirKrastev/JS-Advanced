"use strict";

function aggregate(data) {

    let sum = 0;
    let sumInverse = 0;
    let concatenatedValue = "";

    data.forEach(element => {

        sum += element;
        sumInverse += 1 / element;
        concatenatedValue += element;
    });

    console.log(sum)
    console.log(sumInverse)
    console.log(concatenatedValue)
}

aggregate([2, 4, 8, 16])