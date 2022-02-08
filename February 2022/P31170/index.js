/*Write a program that reads a number n and prints the “multiplication table” of n.

Input

Input consists of a natural number n between 1 and 9.

Output

Print the “multiplication table” of n. */

function tablaMultiplicar(tabla) {
    for( let i = 1; i < 11; i++) {
        document.write("<li>");
        //document.write para escibir 
        document.write(tabla + " x " + i + " = " + (tabla * i));
        document.write("</li>");
     }
}
tablaMultiplicar(2);

tablaMultiplicar(7);

