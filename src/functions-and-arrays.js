// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if(num1 > num2){
    return num1;
  } else if(num1 < num2){
    return num2;
  } else {
    return num1;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let totalCharsOfWord;
  let indexOfLongestWord = 0;

  // Empty array
  if(words.length === 0){
    return null;
  } 
  // Not empty array
  else {
    // Array with only one word
    if(words.length === 1){
      return(words[0]);
    }
    // Array with more than one word
    else {
      // Loop array
      for(let i = 0; i < words.length; i++){
        // Skip first loop
        if(i > 0){
          // Compare length actual word against the longest one
          if(words[i].length > words[indexOfLongestWord].length){
            // If the actual word is longest than the longest one, we save their index
            indexOfLongestWord = i;
          }
        }
      }
      // Return longest word
      return words[indexOfLongestWord];
    }
  }
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers){
  let totalSum = 0; 
  // Empty array
  if(numbers.length === 0){
    return 0;
  } 
  // Not empty array
  else {
    // Array with only one number
    if(numbers.length === 1){
      return numbers[0];
    } 
    // Array with more than one number
    else {
      for(let i = 0; i < numbers.length; i++){
        // Array with more than one number but all 0
        if(numbers[i] === 0){
          return 0;
        } 
        // Array with more than one number and all different numbers
        else{
          totalSum += numbers[i];
        }
      }
      // Return totalSum
      return totalSum;
    }
  }
}


// Iteration #3.1 Bonus:
function sum(arr) {
  let totalSum = 0;
  // Empty array
  if(arr.length === 0){
    return 0;
  } 
  // Not empty arr
  else {
    // Array with only one value
    if(arr.length === 1){
      // Just one value and its a number
      if(typeof arr[0] === 'number'){
        totalSum = arr[0];
      } 
      return totalSum;
    } 
    // Array with more than one value
    else{
      // Loop array
      for(let i = 0; i < arr.length; i++){
        // Type number
        if(typeof arr[i] === 'number'){
          totalSum += arr[i];
        }
        // Type string
        else if(typeof arr[i] === 'string'){
          totalSum += arr[i].length;
        }
        // Type boolean
        else if(arr[i] === true){
          totalSum += 1;
        } 
        // Unsupported data type
        else if(typeof arr[i] === 'object'){
          throw new Error("Unsupported data type sir or ma'am");
        }
      }
      return totalSum;
    }
  }
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg){
  let totalSum = 0;

  // Empty array
  if(numbersAvg.length === 0){
    return null;
  }
  // Not empty array
  else {
    // Array with only one number
    if(numbersAvg.length === 1){
      return numbersAvg[0] / numbersAvg.length;
    } 
    // Array with more than one number
    else {
      // Loop array
      for(let i = 0; i < numbersAvg.length; i++){
        // Sum values
        totalSum += numbersAvg[i];
      }
    }
  }
  // Return average
  return totalSum / numbersAvg.length;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsAvg){
  let totalSum = 0;

  // Empty array
  if(wordsAvg.length === 0){
    return null;
  } 
  // Not empty array
  else {
    // Just 1 word
    if(wordsAvg.length === 1){
      totalSum = wordsAvg[0].length;
      return totalSum;
    } 
    // More than 1 word
    else {
      for(let i = 0; i < wordsAvg.length; i++){
        totalSum += wordsAvg[i].length;
      }
    }
    return totalSum / wordsAvg.length;
  }
  
}

// Bonus - Iteration #4.1
function avg(arr){
  let totalSum = 0;

  // Empty array
  if(arr.length === 0){
    return null;
  }
  // Not empty arr
  else{
    // Loop array
    for(let i = 0; i < arr.length; i++){
      // Type number
      if(typeof arr[i] === 'number'){
        totalSum += arr[i];
      } 
      // Type string
      else if(typeof arr[i] === 'string'){
        totalSum += arr[i].length;
      }
      // Type boolean: true case
      else if(arr[i] === true){
        totalSum += 1;
      }
    }
    return totalSum / arr.length;
  }
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(words){
  let equalsCounter = 1;
  let newWords = [];

  // Empty array
  if(words.length === 0){
    return null;
  }
  // Not empty array
  else {
    for(let i = 0; i < words.length; i++){
      // If the word is NOT in the newArray
      if(!(newWords.includes(words[i]))){
        newWords.push(words[i]);
      } 
    }
    // Return newArray
    return newWords;
  }
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsArr, word){
  // Empty array
  if(wordsArr.length === 0){
    return null;
  }
  // Not empty array
  else {
    // Just one word in the array
    if(wordsArr.length === 1){
      // The one word its the word we are looking for
      if(word === wordsArr[0]){
        return true;
      }
    } 
    // More than one word
    else {
      if(wordsArr.includes(word)){
        return true;
      } else{
        return false;
      }
    }
  }
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsArr, word) {
  let counter = 0;
  // Empty array
  if(wordsArr.length === 0){
    return 0;
  } 
  // Not empty array
  else {
    for(let i = 0; i < wordsArr.length; i++){
      if(wordsArr[i] === word){
        counter += 1;
      }
    }

    if(counter === 0){
      return 0;
    } else if (counter === 1){
      return 1;
    } else {
      return counter;
    }
  }
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

const matrixA = [
  [ 1,  2, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1,  4, 3, 4, 5],
]
greatestProduct(matrixA);

function greatestProduct(matrix){
  let calc;
  let greatestNum = 0;

  // Loop array horizontally
  for(let i= 0; i < matrix.length; i++){
    // Loop inner array horizontally
    for(let y = 0; y < matrix[i].length-3; y++){
      // Do the product
      calc = matrix[i][y] * matrix[i][y+1] * matrix[i][y+2] * matrix[i][y+3];

      // Check if actual product is greater than the greatest
      if(calc > greatestNum){
        // Save new greatestProduct
        greatestNum = calc;
      }
    }
  }

  // Loop array vertically
  for(let i = 0; i < matrix.length-3; i++){
    for(let y = 0; y < matrix[i].length; y++){
      // Do the product
      calc = matrix[i][y] * matrix[i+1][y] * matrix[i+2][y] * matrix[i+3][y];

      // Check if actual product is greater than the greatest
      if(calc > greatestNum){
        // Save new greatestProduct
        greatestNum = calc;
      }
    }
  }
  // Return greatestProduct
  return greatestNum;
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
