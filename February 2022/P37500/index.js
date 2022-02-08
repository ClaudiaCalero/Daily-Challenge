/*Write a program that reads a number n, and prints all numbers between 0 and n.

Input

Input consists of a natural number n.

Output

Print in order all natural numbers between 0 and n. */

/*Input

5
Output
0
1
2
3
4
5 
*/


const x = 0;
const n = 5;
let list = [];

for (let i = x; i <= n; i++) {
    list.push(i);
}
console.log(list);