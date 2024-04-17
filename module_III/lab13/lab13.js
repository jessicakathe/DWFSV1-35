/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use nested Promises
 *     @licence BSD 3-Clause License
 */

function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 2000);
  });
}

function promise2(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message + ' -> Promise 2 resolved');
    }, 2000);
  });
}

promise1()
  .then(result => {
    return promise2(result);
  }).then(finalResult => {
  console.log(finalResult);  // Will print "Promise 1 resolved -> Promise 2 resolved"
}).catch(error => {
  console.error('Error:', error);
});
