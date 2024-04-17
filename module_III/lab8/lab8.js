/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Function & Scopes in JS
 *     @licence BSD 3-Clause License
 */

// declaration of variables
// Function Declaration
function sayHelloOne(name) {
    return `Hello, ${name}!`;
}
console.log(`Function Declaration sayHello: ${sayHelloOne("Bootcamp 2024")}`);

// Function Expression
const sayHelloTwo = function(name) {
    return `Hello, ${name}!`;
};
console.log(`Function Expression sayHello: ${sayHelloTwo("Bootcamp 2024")}`);

// Arrow Function
const sayHello = (name) => {
    return `Hello, ${name}!`;
};
console.log(`Arrow Function sayHello: ${sayHello("Bootcamp 2024")}`);

// Shorter Arrow Function
const sayHelloThree = name => `Hello, ${name}!`;

console.log(`Shorter Arrow Function sayHello: ${sayHelloThree("Bootcamp 2024")}`);

// Function with Default Parameters
function sayHelloFour(name = 'World') {
    return `Hello, ${name}!`;
}
console.log(`Function with Default Parameters sayHello: ${sayHelloFour("Bootcamp 2024")}`);

// Function with Rest Parameters
function sayHelloFive(...names) {
    return `Hello, ${names.join(', ')}!`;
}
console.log(`Function with Rest Parameters sayHello: ${sayHelloFive(["Bootcamp 2024", "JS", "HTML5","CSS3"])}`);
