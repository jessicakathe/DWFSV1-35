/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Control Statements
 *     @licence BSD 3-Clause License
 */

// declaration of variables
let x = 10;

// if statement
if (x > 5) {
    console.log('x is greater than 5');
}

// else if statement
if (x > 15) {
    console.log('x is greater than 15');
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than or equal to 10');
}

// switch statement
switch (x) {
    case 5:
        console.log('x is 5');
        break;
    case 10:
        console.log('x is 10');
        break;
    default:
        console.log('x is neither 5 nor 10');
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(`i is ${i}`);
}

// while loop
let i = 0;
while (i < 5) {
    console.log(`i is ${i}`);
    i++;
}

// do-while loop
i = 0;
do {
    console.log(`i is ${i}`);
    i++;
} while (i < 5);


// for loop with continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // skip even numbers
    }
    console.log(`i is ${i}`);
}

// while loop with continue
let valueContinue = 0;
while (valueContinue < 10) {
    valueContinue++;
    if (valueContinue % 3 === 0) {
        continue; // skip multiples of 3
    }
    console.log(`valueContinue is ${valueContinue}`);
}

// do-while loop with continue
valueContinue = 0;
do {
    valueContinue++;
    if (valueContinue % 5 === 0) {
        continue; // skip multiples of 5
    }
    console.log(`valueContinue is ${valueContinue}`);
} while (valueContinue < 10);