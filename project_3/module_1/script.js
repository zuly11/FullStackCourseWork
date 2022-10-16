function howEqual(val1, val2) {
  let output = "";
  if (val1 === val2) {
    output = "strictly";
  } else if (val1 == val2) {
    output = "loosely";
  }

  return output;
}

console.log(howEqual(0, "0")); // => loosely
console.log(howEqual(3, 9 / 3)); // => strictly
console.log(howEqual(true, "truthy")); // => not equal

/*console.log(isTruthy("i yearn for ")); //*/
