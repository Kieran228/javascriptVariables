//todo DATA TYPES
var hello = "world"; //? String
var num = 7; //? Number
var bool = true; //? Bool
var undef = undefined //? undefined
var none = null; //? none


console.log(5);

console.log("world");

console.log(hello);

console.log(num);

num = 'Hello my Name is Kieran';

// Changed variable information here!
console.log(num);

//? MATH VARIABLES

var foo;

console.log(foo) //? currently undefined

foo = 19;

console.log(foo + 4); //? = 23

//? Concat

var textOne = "Hello";

console.log(textOne + " " + 'World!');

//! TEMPERATURE CONVERTER

//todo Fareinheit = Celsius * 9/5 + 32
//? CONSOLE.LOG(ANSWER)


var celsius = 30;
var Fareinheit = celsius * 9/5 + 32;
console.log(Fareinheit);

//! Age Calculator

var currentYear = 2024;
var birthYear = 1996;
var age = currentYear - birthYear;

console.log(age);

// Bool Variables
// const 
// let
// escape the character
// wrap with the opposite quote
// addition "+"
// subraction "-"
// division "/"
// multiplication "*"
// increment "++"
// decrement "--"
// modules "%"

//? const == IMMUTABLE
// Cant change information
const bar = 'You can not change me!';

// bar = 8;

console.log(bar);

//? let = its accesible based on its scope;
let bar2 = "You can change me!"

bar2 = 10

console.log(bar2);

//? Dealing with quotes in strings
let stringQuote = "You aren't special";
console.log(stringQuote);

//? Escaping the quote
let escapeQuote = 'You aren\'t special'
console.log(escapeQuote);

//? increments
let num3 = 0;
num3++;
console.log(num3);
//? decrements
num3--;
console.log(num3);

//? setting multi-varibales
let baz, baz2, baz3;

baz3 = 8;
console.log("I'm Baz3!" + " " + baz3);

//? Template Literals
console.log(`Hello Baz2 ${baz3}`)

//todo Personal Greeting
//? Input the user's name.
//* console out a personalized greeting message.

var username = 'Kieran'
var greeting = "Hi how are you doing?"

console.log(greeting + username);

//todo Tip Calculator
//? Ask the user to input the bill amount and the tip percentage.
//* Calcualate the tip amount and console the total bill. 

var billAmount = 150.54;
var tipPercentage = .25;
var tipAmount = billAmount * tipPercentage

var answer = billAmount + tipAmount;
console.log(answer);

// .tofixed() amount of decimal places
console.log(answer.toFixed(2) + "$")

//todo Age Calculator in days
//? Ask the user to input their age in years
//* console the total days

let input = 10;

var yearsOld = 28;
var days = 365;

console.log(yearsOld * days);