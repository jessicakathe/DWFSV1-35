/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Promises
 *     @licence BSD 3-Clause License
 */

// Function that returns a Promise
function myPromiseFunction(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed after ${time} milliseconds`);
    }, time);
  });
}

// Using the Promise
myPromiseFunction(2000)
  .then(result => {
    console.log(result);  // This will log "Completed after 2000 milliseconds"
  })
  .catch(error => {
    console.error(error);
  });

console.log("A message");
console.log("Second message");