function convertToInteger(input){
  let parsedInput = parseInt(input);
  console.log(input);
  if (!isNaN(parsedInput)) {
    return parsedInput;
  } else {
    return false;
  }
}


function toRoman(number) {
  const numericalValues = [1, 5, 10, 50, 100, 500, 1000];
  const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
  if (convertToInteger(number)) { // if convertToInteger(number) is true:
    for (let i = 0; i < numericalValues.length; i++) { // for each value in [1, 5, 10, 50, 100, 500, 1000]:
      if (number === numericalValues[i]) { // if number is equal to either 1, 5, 10, 50, 100, 500, or 1000:
        let romanSymbol = romanNumerals[i]; // then romanSymbol will be assigned to what symbol is at that same index inside of the romanNumerals array
        return console.log(romanSymbol); // return that symbol
      }
    }
  }
}

toRoman(5); // will return V becuase 5 is located in the first index of the numericalValues array and the symbol in the first index of the romanNumerals array is "V"