/*Write a program that reads a number and prints its number of digits.

Input

Input consists of a natural number n.

Output

Print the number of digits of n.

/*Input
7
12345
0

Output
The number of digits of 7 is 1.
The number of digits of 12345 is 5.
The number of digits of 0 is 1.
*/

const num = 7;
const count = 0;
function digits(num, count) {
    while (num > 0) {
        count++;
        num= parseInt(num / 10);
    }
    return count;
}
let result = digits(num, count);

console.log(result);


const num1 = 12345;
const count1 = 0;
function digits1(num1, count1) {
    while (num1 > 0) {
        count1++;
        //Converts a string to an integer.
        num1 = parseInt(num1 / 10);
    }
    return count1;
}
let result1 = digits1(num1, count1);

console.log(result1);


const num2 = 0;
const count2 = 0;
function digits2(num2, count2) {
    while (num2 > 0) {
        count2++;
        num2 = parseInt(num2 / 10);
    }
    return count2;
}
let result2 = digits2(num2, count2);

console.log(result2);