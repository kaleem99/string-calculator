function add(str) {
  var expression = "",
    delimeter = "",
    numbers = [];
  let stringvalidation = input_Validation(str);
  if (stringvalidation != true && isNaN(stringvalidation)) {
    throw Error(stringvalidation);
  } else if (Number.isInteger(stringvalidation)) {
    return stringvalidation;
  }
  if (str.charAt(2) == "[") {
    return findMultipleDelimeters(str);
  }
  if (str.match(/[0-9]/)) {
    numbers = str.split(/\n|,|;/g);
  }
  if (str.match("//") && !isNaN(parseInt(str.charAt(str.length - 1)))) {
    expression = str.slice(str.search("\n") + 1, str.length);
    delimeter = str.slice(2, str.search("\n"));
    numbers = expression.split(delimeter);
  }
  return addSumOfAll(numbers);
}

function addSumOfAll(numbers) {
  return numbers
    .filter(function ignore(num) {
      return num < 1000;
    })
    .reduce((sum, current) => parseInt(sum) + parseInt(current));
}

function findMultipleDelimeters(str) {
  findRegex = /\[|\]/g;
  findDelimeter = /\[(.*?)\]/g;
  findmultipleBrackets = /(?<=\[).+?(?=\])/g;
  var sum = 0;
  delimeterArray = str.match(findmultipleBrackets);
  stringInString = str.substr(str.indexOf("\n") + 1, str.length - 1);
  for (var i = 0; i < stringInString.length; i++) {
    stringInString = stringInString.replace(delimeterArray[i], "+");
  }
  numbersArray = stringInString.split("+");
  sum = sumOfArray(numbersArray);
  return sum;
}

function sumOfArray(numbersArray) {
  var sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += parseInt(numbersArray[i]);
  }
  return sum;
}

function input_Validation(str) {
  var negativeNumbers = [];
  if (str == "") {
    return 0;
  } else if (str.length == 1) {
    return parseInt(str);
  }
  if (str[0] != "/" && str[1] != "/" && str.search("/") != -1) {
    return "ERROR: invalid input";
  }
  if (str.match(/\-\d/g)) {
    negativeNumbers = str.match(/\-\d/g);
    throw Error("negatives not allowed " + negativeNumbers);
  } else if (isNaN(str[str.length - 1])) {
    return "ERROR: invalid input";
  }
  return true;
}

module.exports = { add };

// console.log(add("//4\n142"));
