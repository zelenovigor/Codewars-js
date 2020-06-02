/*Write a function that returns an array of numbers from 1 to 100.

The function should be able to be called with or without arguments.

If no arguments are given, each number in the array divisible by 3 should be replaced with the word 'Fizz', and each number in the array divisible by 5 should be replaced with the word 'Buzz'. If the number is divisble by both 3 and 5, then it should be replaced with 'FizzBuzz'.

The function should also be able to take up to 4 arguments. The first and second arguments are strings, which should be 'Fizz' and 'Buzz' by default.

The third and fourth arguments are integers and and should be 3 and 5 by default.

Example:

fizzBuzzCustom()[15]                         // returns 16
fizzBuzzCustom()[44]                         // returns "FizzBuzz" (45 is divisible by 3 and 5)
fizzBuzzCustom('Hey', 'There')[25]         // returns 26
fizzBuzzCustom('Hey', 'There')[11]         // returns "Hey" (12 is divisible by 3)
fizzBuzzCustom("What's ", "up?", 3, 7)[80] // returns "What's " (81 is divisible by 3)
*/

var fizzBuzzCustom = function (stringOne, stringTwo, numOne, numTwo) {
    var results = [];
    if (numOne == undefined) {
        numOne = 3;
    }
    if (numTwo == undefined) {
        numTwo = 5;
    }
    if (stringOne == undefined) {
        stringOne = 'Fizz';
    }
    if (stringTwo == undefined) {
        stringTwo = 'Buzz';
    }
    for (var i = 1; i <= 100; i++) {
        if ((i % numOne == 0) && (i % numTwo == 0)) {
            results.push(stringOne + stringTwo)
        } else if (i % numOne == 0) {
            results.push(stringOne)
        } else if (i % numTwo == 0) {
            results.push(stringTwo)
        } else {
            results.push(i)
        }
    }
    return results;
};
fizzBuzzCustom()[15]