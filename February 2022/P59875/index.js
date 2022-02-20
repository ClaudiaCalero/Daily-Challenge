/*Write a program that reads two numbers x and y, and prints all numbers between x and y (or between y and x), in decreasing order.

Input

Input consists of two integer numbers x and y.

Output

Print all integer numbers between x and y (or between y and x), in decreasing order. */
/*Input

3 7
Output

7
6
5
4
3
Input

5 -3
Output

5
4
3
2
1
0
-1
-2
-3
Input

-7 -7
Output

-7 */


function decreasing(x, z) {
    // Si la x es mes gran que la z, la x agafa el valor de z i la z agafa el valor de x
    if(x > z) {
       [x, z] = swap(x,z);
    }
    for (let i = z; i >= x; i--) {
        console.log(i);
    } 
}

decreasing(3, 7);
decreasing(5, -3);


function swap(a, b) {
   let auxi = a;
    a = b;
    b = auxi;
    return [a, b]
}