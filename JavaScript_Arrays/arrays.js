/*
Task #1
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
 */
function countBy(x, n) {
    let result = [];

    for (let i = 1; i <=n; i++) {
      result.push(x * i);
    }

    return result;
  }

console.log(countBy(1,10)); // [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2, 5)); // [2,4,6,8,10]

/*
Task #2
Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:

Sam Harris => S.H
patrick feeney => P.F
*/
function abbrevName(name){
    return name
            .split(" ")
            .map(item => item[0]
            .toUpperCase())
            .join(".");
}

console.log(abbrevName('Harry Potter')); // 'H.P'
console.log(abbrevName('Ron Weasly')); // 'R.W'

/*
Task #3
Given a non-empty array of integers, return the result of multiplying the values together in order.
Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
function grow(x){
    return x.reduce ((accum, item) => accum * item, 1);
}

console.log(grow([1, 2, 3])); // 6
console.log(grow([4, 1, 1, 1, 4])); // 16

/*
Task #4
Given a random non-negative number, you have to return the digits of
this number within an array in reverse order.
*/

function digitize(n) {
    let str = n + '';
    return str
            .split('')
            .reverse()
            .map(item => +item);
  }

  console.log(digitize(54321)); // [1, 2, 3, 4, 5]
  console.log(digitize(357)); // [7, 5, 3]

/*
Task #5
Complete the function which takes two arguments and returns all numbers which are divisible
by the given divisor. First argument is an array of numbers and the second is the divisor.
*/

function divisibleBy(numbers, divisor){
    return numbers.filter(item => item % divisor === 0);
}

console.log(divisibleBy([1,2,3,4,5,6], 2)); // [2,4,6]
console.log(divisibleBy([1,2,3,4,5,6], 3)); // [3,6]

/*
Task #6
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
    let sum = 0;
      arr.forEach(item => {
      if (item > 0) {
        sum+=item;
      }
    });
    return sum;
}

console.log(positiveSum([1,2,3,4,5])); // 15
console.log(positiveSum([-1,-2,-3,-4,-5])); // 0

// This task can also be solved usin reduce method:
/*
function positiveSum(arr) {
  return arr.reduce((accum, item) => item > 0 ? accum + item : accum, 0);
}
console.log(positiveSum([1,2,3,4,5])); // 15
console.log(positiveSum([-1,-2,-3,-4,-5])); // 0
*/

/*
Task #7
Given an array of numbers, check if any of the numbers are the character codes for
lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.
*/
function isVow(a){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let codes = vowels.map(item => item.codePointAt(0));
    return a.map(item => codes.includes(item) ? String.fromCodePoint(item) : item);
  }
  console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106])); // [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
  console.log(isVow([101,121,110,113,113,103,121,121,101,107,103])); // ["e",121,110,113,113,103,121,121,"e",107,103]