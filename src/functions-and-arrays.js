// Progression #1: Greatest of the two numbers 
function greatestOfTwoNumbers(a, b) {
  if (a > b)
    return a;
  else
    return b;
}
 

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  if(words.length === 0){
    return null;
  }
    max = words[0];
  for (var i = 0; i < words.length; i++) {
    if (max.length < words[i].length) {
      max = words[i];
    }
  }
  return max;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers){ 
  if(numbers===0){
    return 0
  }
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
return sum;
}



// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  if(numbersAvg.length === 0){
    return null;
  }
  var avg = netPrice(numbersAvg);
  avg /= (numbersAvg.length)
  return avg;
 
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  if(wordsArr.length === 0){
    return null;
  }
  var avg = 0;
  for(var i = 0; i<wordsArr.length; i++ ){
  avg += wordsArr[i].length
  }
  return (avg / wordsArr.length);
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique){
  if(wordsUnique.length === 0)
    return null;
  return [...new Set(wordsUnique)]
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(wordsFind){
  if(wordsFind.length === 0)
    return null;
    for(var i = 0; i<wordsFind.length; i++){
      if(wordsFind[i]===wordsFind[i]){
        return true;
      }
    }
}
// Progression #7: Count repetition
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
function howManyTimesElementRepeated(wordsCount , item){
  if(wordsCount.length === 0 ){
  return 0;
  }
  var turns = 0;
  for(var i = 0; i<wordsCount.length; i++){
    if (wordsCount[i] === item)
    {
      turns+=1;
    }
  }
  return turns;
}


