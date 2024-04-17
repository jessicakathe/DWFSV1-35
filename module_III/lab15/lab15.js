/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use JSON Objects
 *     @licence BSD 3-Clause License
 */

// Create a JSON object
let student1 = {
  "name": "John Doe",
  "age": 20,
  "major": "Computer Science"
};

// Create another JSON object
let student2 = {
  "name": "Jane Doe",
  "age": 22,
  "major": "Electrical Engineering"
};

// Create a third JSON object
let student3 = {
  "name": "Jim Doe",
  "age": 21,
  "major": "Mechanical Engineering"
};

// Log the JSON objects
console.log(student1);
console.log(student2);
console.log(student3);

// Create an array of JSON objects
let students = [
  {
    "name": "John Doe",
    "age": 20,
    "major": "Computer Science"
  },
  {
    "name": "Jane Doe",
    "age": 22,
    "major": "Electrical Engineering"
  },
  {
    "name": "Jim Doe",
    "age": 21,
    "major": "Mechanical Engineering"
  }
];

// Log the array of JSON objects
console.log(students);

// iteration with for loop
for (let i = 0; i < students.length; i++) {
  console.log(`For loop: ${JSON.stringify(students[i])}`);
}

// iteration with forEach
students.forEach((value, index) => {
  console.log(`ForEach loop: ${JSON.stringify(value)}`);
});

// Use map for modify object in new array
const addRandomElement = students.map(value => {
  let element = value;
  element.id = Math.floor(Math.random() * 5);
  return element;
});

// Check the new array
addRandomElement.forEach(value => console.log(value));
