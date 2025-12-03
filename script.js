// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all numbers are divisible by 5. Cache the result in a variable.
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log(isDivisibleBy5);


// can't figure out how to run so that each expression is interpreted
// I tried (||) , (+), parentheses, and backtic all results are the same even when I change the variables
// decided to try each individual pairing
// used logical operator && to find ALL true 
// used long literal string (+) for final result


// Check if the first number is larger than the last. Cache the result in a variable.
console.log(n1 > n4);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

const Subtract = n2 - n1;
console.log(Subtract);

const multiply = Subtract * n3;
console.log(multiply);

const remainder = multiply / n4;
console.log(remainder)

// Change the way that isOver25 calculates so that we do not 
// need to use the NOT operator (!) in other logic comparisons. 
// Rename the variable as appropriate.
const isUnder25 = (n1 < 25) + (n2 < 25) + (n3 < 25) + (n4 < 25) <= 25

