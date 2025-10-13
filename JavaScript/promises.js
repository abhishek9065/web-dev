function random(resolve) { // resolve is also a function}
        setTimeout(resolve, 3000);  // Simulate a delay of 3 seconds
}

const p = new Promise(random); // supposed to return something eventually

// using the eventual value returned by the promise
function callback() {
        console.log("promise succeeded");
}
p.then(callback); // when the promise is resolved, call the callback function


// Create the promisifed version of fs.readFile, fs.writeFile, cleanFile:
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const unlink = util.promisify(fs.unlink);

// Promesified version of ReadFile Function

const fs = require("fs"); // File System module

function readTheFile(sendTheFinalValueHere) {
        fs.readFile("a.txt", "utf8", function (err, data) {
                sendsendTheFinalValueHere(data);
        })
}

const p = readFile(); // p is a promise

function callback(contents) {  // callback function to be called when the promise is resolved
        console.log(contents);
}

p.then(callback); // when the promise is resolved, call the callback function
