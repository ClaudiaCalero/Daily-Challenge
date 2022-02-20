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

function digits(num) {
    let a = 0;
    while (num > 0) {
        a++;
        num = parseInt(num / 10);
    }
    return a;
}

let result = digits(7);
let result1 = digits(12345);
let result2 = digits(0);

console.log(result);
console.log(result1);
console.log(result2);