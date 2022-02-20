/*Write a program that reads a sequence of numbers and prints their average.

Input

Input consists of a non-empty sequence of strictly positive real numbers.

Output

Print the average of the numbers with 2 digits after the decimal point. */

/*
INPUT
1 4 9
7.4

OUTPUT
4.67
7.40
*/



//An array of numbers that we want to get
//the average of.


function PrintAverage(arr) {
    let acc = 0;
    for(let i = 0; i < arr.length; i++) {
        acc = acc + arr[i];
    }
    return acc / arr.length;
}

let result = PrintAverage([1,2,3,4,5]);
console.log(result);