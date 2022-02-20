// SOurce: https://github.com/SoftUni/Programming-Basics-Book-JS-EN/blob/master/chapter-02-simple-calculations.md


/*Problem: Calculate Square Area
The first exercise from this topic is the following: write a function that receives an integer a and calculates the area of a square with side a. 
The problem is trivially easy: inputs a number as an argument of the function, multiply it by itself, and prints a result on the console. */

function calculateSquareArea([arg1]) {
    let a = parseInt(arg1);
    let area = a * a;
    console.log('Square area = ' + area); 
}

calculateSquareArea([5]);


/*Problem: From Inches to Centimeters
Write a function that accepts a number (not necessarily an integer) and converts the number from inches to centimeters. 
For this purpose, it multiplies the inches by 2.54 (because 1 inch = 2.54 centimeters). */

function convertsInchesToCentimeters([arg1]) {
    let inches = parseFloat(arg1);
    let centimeters = inches * 2.54;
    console.log('Centimeters = ' + centimeters); 
}

convertsInchesToCentimeters([2]);
convertsInchesToCentimeters([4.5]);


/*Problem: Greeting by Name
Write a function, which takes as an argument a human name and prints Hello, <name>!, 
where <name> is the name entered earlier. */

function sayHello([arg1]) {
    let name = arg1;
    console.log(`Hello, ${name}!`, ); 
}

sayHello(['Clàudia']);

/*Problem: Concatenating Text and Numbers
Write a function that receives as an argument the name, surname, age and city and print a message of the following type: 
You are <firstName> <lastName>, a <age>-years old person from <town>. */

function printInfo([firstName, lastName, age, town]) {
    console.log(`My name is ${firstName} ${lastName}, I'm ${age} and I'm from ${town}` ); 
}

printInfo(['Clàudia','Calero', '25', 'Barcelona']);

/*Problem: Trapezoid Area
Write a function that receives three arguments b1, b2, and h and calculate the trapezoid area with bases b1 and b2 and height h. 
The formula for trapezoid area is (b1 + b2) * h / 2. 
The figure below shows a trapezoid with bases 8 and 13 and height 7. 
It has an area (8 + 13) * 7 / 2 = 73.5.*/

function calculateTrapezoideArea([arg1, arg2, arg3]){
    let b1 = parseFloat(arg1);
    let b2 = parseFloat(arg2);
    let h = parseFloat(arg3);
    let area = (b1 + b2) * h / 2;
    console.log("Trapezoide area = " + area); 
}
calculateTrapezoideArea([8, 13, 7]);


/*Problem: Circle Perimeter and Area
Write a function, that receives an argument 
number r and calculates and prints the area and perimeter of a circle with radius r. */

function calculatePerimeterArea(r){
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;
    console.log("Circle Perimetre area = " + area, perimeter); 
}
calculatePerimeterArea(3);  
calculatePerimeterArea(4.5); 

/*Problem: Rectangle Area
A Rectangle is defined by the coordinates of both of its opposite corners (x1, y1) – (x2, y2).
 Calculate its area and perimeter. The input is taken as a function argument. The numbers x1, y1, x2, and y2 are given one per line. 
 The output is printed on the console and it has to contain two lines, 
each with one number – the area and the perimeter. */

function calculateRectangleArea([x1, y1, x2, y2]){
    let area = x1 * y2;
    let perimeter =  2 * (x2 + y1);
    console.log("Rectangle area = " + area, perimeter); 
}
calculateRectangleArea([60, 20, 10, 50]);  
calculateRectangleArea([30, 40, 70, -10]);  
calculateRectangleArea([600.25, 500.75, 100.50, -200.5]);  
//no dona igual


/*Problem: Triangle Area
Write a function that receives arguments which are a side and a height of a triangle and calculates its area.
 Use the formula for triangle area: area = a * h / 2.
 Round the result to 2 digits after the decimal point using area.toFixed(2). */

 function calculateTriangleArea([a, h]){
    let area = a * h /2;
    console.log("Triangle area = " + area.toFixed(2)); 
}
calculateTriangleArea([20, 30]);  
calculateTriangleArea([15, 35]);  
calculateTriangleArea([7.75, 8.45]);  
calculateTriangleArea([1.23456, 4.56789]);  

/*Problem: Converter – from °C Degrees to °F Degrees
Write a function that reads degrees on the Celsius scale (°C) and converts them to degrees on the Fahrenheit scale (°F). 
Look on the Internet for a proper formula to do the calculations. 
Round the result to 2 digits after the decimal point. Here are a few examples: */


function converterDegrees(c) {
let celsius = c * (9/5) + 32;
console.log("Degrees converted = " + celsius);
}
converterDegrees(25);
converterDegrees(0);
converterDegrees(-5.5);
converterDegrees(32.3);

/*Problem: Converter - Radians to Degrees
Write a function that reads an angle in radians (rad) and converts it in degrees (deg). 
Look for a proper formula on the Internet. The number π in JavaScript programs is available through Math.PI. 
Round the result to the nearest integer using the Math.round(…) method. */

function converterRadians(rad) {
    let deg = rad * (180/Math.PI);
    console.log("Radians converted to degrees = " + Math.round(deg));
    }
    converterRadians(3.1416);
    converterRadians(6.2832);
    converterRadians(0.7854);
    converterRadians(0.5236);

/*Problem: Converter - USD to BGN
Write a function for conversion of US dollars (USD) into Bulgarian levs (BGN). 
Round the result to 2 digits after the decimal point. Use a fixed rate between a dollar and lev: 1 USD = 1.79549 BGN. */

function convertMoney(usd) {
let currency = usd * 1.79549; 
    console.log("Dollars converted in Bulgarian levs = " + currency.toFixed(2));
    }
    convertMoney(20);
    convertMoney(100);
    convertMoney(12.5);
    
/*Problem: * Currency Converter
Write a function for the conversion of money from one currency into another. 
It has to support the following currencies: BGN, USD, EUR, GBP. Use the following fixed currency rates: */

function currencyConverter([usd, eur, gbp]) {
//no se fer això
}


/*Problem: ** Date Calculations – 1000 Days on the Earth
Write a function that reads a birth date in format dd-MM-yyyy and calculates the date 
on which 1000 days are turned since this birth date and prints it in the same format. */



function dateCalculations
