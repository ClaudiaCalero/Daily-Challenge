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

/*let number = 12345, 
    digits = [],
   stringNumber = number.toString();

    for (let i = 0, length = stringNumber.length; i < length; i += 1) {
        digits.push(+stringNumber.charAt(i));
    }

console.log(digits);*/



let num = 7;
let count = 0;
function digits(num, count) {
    while (num > 0) {
        count++;
        num= parseInt(num / 10);
    }
    return count;
}
let result = digits(num, count);

console.log(result);

let num1 = 12345;
let count1 = 0;
function digits1(num1, count1) {
    while (num1 > 0) {
        count1++;
        num1 = parseInt(num1 / 10);
    }
    return count1;
}
let result1 = digits1(num1, count1);

console.log(result1);

let num2 = 0;
let count2 = 0;
function digits2(num2, count2) {
    while (num2 > 0) {
        count2++;
        num2 = parseInt(num2 / 10);
    }
    return count2;
}
let result2 = digits2(num2, count2);

console.log(result2);