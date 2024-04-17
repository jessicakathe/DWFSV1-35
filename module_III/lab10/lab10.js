/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Callbacks
 *     @licence BSD 3-Clause License
 */

/**
 * A Callback in JS is a function, which for
 * parameter is sent another function, and the function that
 * receives, waits for that function to be executed
 */

// Callback create
function useACallback(myCallback) {
  myCallback();
}

// Callback use
useACallback(function () {
  console.log("Creando el primer Callback en JS");
});

// Callback with a parameter
function otherCallback(myOtherCallback) {
  myOtherCallback("Un argumento para esta función");
}

// Use other Callback
otherCallback(function (oneParameter) {
  console.log('Lo que recibo como parametro es: ' + oneParameter);
});

// Multiple callbacks called in certain cases
function multipleCallbacks(callback1, callback2, callback3) {

  callback1('Primer paso');

  callback2('Segundo paso');

  callback3('Ultimo paso');
}

// Use of multiple callbacks
multipleCallbacks(
  function (step1) {
    console.log("El callback1 me envia por parametro el: " + step1);
  },

  function (step2) {
    console.log("El callback2 me envia por parametro el: " + step2);
  },

  function (step3) {
    console.log("El callback3 me envia por parametro el: " + step3);
  }
);