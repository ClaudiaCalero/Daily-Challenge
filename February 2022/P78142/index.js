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
let array = [1, 4, 9];
let list = [7.4];

function PrintAverage (array) {


    let total = 0;
    let count = 0;

// A function for count the total number of elements in an array +
//by calculating the sum of these elements and then dividing the obtained by the total number of values to get the average
    array.forEach(function(num){ 
        total += num;
        count++;
         });

         return total / count;
}

console.log(PrintAverage(array));
console.log(PrintAverage(list));