const fs = require("fs");
const processFunctions = require("./processFunctions");

processFuncitons.hi();

fs.readFile("data.txt", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(processFunctions.processScores(result.toString()));
  }
});

console.log(Math.randon() * 10);
console.log("hey you!");

module.exports = {
  processScores,
};
