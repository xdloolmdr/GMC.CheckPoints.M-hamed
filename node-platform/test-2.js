/* var fs = require("fs");

// Lecture asynchrone
fs.readFile("input.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Lecture asynchrone : " + data.toString());
});

// Lecture synchrone
var data = fs.readFileSync("input.txt");
console.log("Lecture synchrone : " + data.toString());

console.log("Programme terminé"); */
var fs = require("fs");

// Asynchrone - Ouverture du fichier
console.log("Going to open file!");
fs.open("input.txt", { encode: "utf-8" ,flag}, function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
});
