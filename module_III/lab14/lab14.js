/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Function & Scopes in JS
 *     @licence BSD 3-Clause License
 */

// declaration vars
let email = null;
let firstname = null;
let lastName = null;
let phone = null;
let password = null;
let user = {};
const COUNTRY_CODE = "+57";

/**
 * @method
 * @param word
 * @returns {string|null}
 * @description this method use for capitalize a word
 */
const wordToCapitalize = word => {
  let toCapitalize = null;
  if (word !== null && word !== undefined && word.length > 0) {
    toCapitalize = word[0].toUpperCase() + word.slice(1);
  }
  debugger
  return toCapitalize;
};

/**
 * @method
 * @param word
 * @returns {string|undefined}
 * @description this method use for encoded a word in base64
 */
const encodeBase64 = word => {
  let encodedStringBtoA = undefined;
  if (word !== null && word !== undefined && word.length > 0) {
    encodedStringBtoA = btoa(word);
  }
  debugger
  return encodedStringBtoA;
};

/**
 * @method
 * @param data
 * @returns {Object|null}
 * @description this method use for build data for send to server
 */
const buildData = data => {
  let buildData = null;

  if (data !== null && data !== undefined) {
    buildData = {
      email: data.email,
      firstname: data.firstname,
      last_name: data.lastName,
      phone: `${COUNTRY_CODE}${data.phone}`,
      password: data.password
    }
  }
  debugger
  return buildData;
};

/**
 * @method
 * @param data
 * @returns {Promise<unknown>}
 * @description this method use promise for sanitize data method
 */
const promiseForSanitizeData = (data) => {
  console.log("this second step for nested promises");
  return new Promise((resolve, reject) => {email = data.floatingInputEmail;
    firstname = wordToCapitalize(data.floatingInputName);
    lastName = wordToCapitalize(data.floatingInputLastname);
    phone = data.floatingInputPhone;
    password = encodeBase64(data.floatingPassword);
    resolve();
  });
};

/**
 * @method
 * @returns {Promise<unknown>}
 * @description this method use promise for build JSON data method
 */
const promiseBuildData = () => {
  console.log("this third step for promise");
  return new Promise((resolve, reject) => {
    user = buildData({firstname: firstname, lastName: lastName, phone: phone, password: password, email: email});
    resolve(user);
  });
};

/**
 * @method
 * @returns {Object}
 * @description this method use promise for get data from the HTML inputs
 */
const getPromiseDataFormMyForm = () => {
  console.log("this first step for nested promises");
  return new Promise((resolve, reject) => {
    //1. first step load data from html
    const floatingInputEmail = document.getElementById("floatingInputEmail").value;
    const floatingInputName = document.getElementById("floatingInputName").value;
    const floatingInputLastname = document.getElementById("floatingInputLastname").value;
    const floatingInputPhone = document.getElementById("floatingInputPhone").value;
    const floatingPassword = document.getElementById("floatingPassword").value;

    resolve({
      floatingInputEmail: floatingInputEmail,
      floatingInputName: floatingInputName,
      floatingInputLastname: floatingInputLastname,
      floatingInputPhone: floatingInputPhone,
      floatingPassword: floatingPassword
    });
  });
};

/**
 * @method
 * @returns {Object}
 * @description this method use promises for get data from the HTML inputs,
 * also through convert to JSON object for next time send to any server
 */
const getDataFormMyForm = () => {
  getPromiseDataFormMyForm()
    .then(result => {
      return promiseForSanitizeData(result);
    })
    .then(result => {
      return promiseBuildData(result);
    })
    .then(result => {
      console.log(result);
    });
};