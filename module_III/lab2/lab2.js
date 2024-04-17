/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use data types in JS
 *     @licence BSD 3-Clause License
 */

// Numbers
let length = 16;
let weight = 7.5;

// Strings
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object
const person = {
    firstName: "John",
    lastName: "Doe"
};

// Array
const fruits = ["apple", "banana", "orange"];

// Null
const a = null;

// Undefined
let b;

// Symbol
const uniqueId = Symbol("id");

// Function
function sayHello(name) {
    console.log("Hello, " + name);
}

// Display the variables
console.log("Numbers:", length, weight);
console.log("Strings:", color, lastName);
console.log("Booleans:", x, y);
console.log("Object:", person);
console.log("Array:", fruits);
console.log("Null:", a);
console.log("Undefined:", b);
console.log("Symbol:", uniqueId);
sayHello("Bootcamp 2024");

// TypeOf variables
// Display the variables
console.log("TypeOf Numbers:", typeof length, typeof weight);
console.log("TypeOf Strings:", typeof color, typeof lastName);
console.log("TypeOf Booleans:", typeof x, typeof y);
console.log("TypeOf Object:", typeof person);
console.log("TypeOf Array:",typeof fruits);
console.log("TypeOf Null:", a);
console.log("TypeOf Undefined:", typeof b);
console.log("TypeOf Symbol:", typeof uniqueId);
console.log("TypeOf Symbol:", typeof sayHello);
