// distance = 1500 miles
// gas budget = $175
// 55mph = 30 mpg
// 60mph = 28 mpg
// 75mph = 23 mpg
// cost per gallon = $3

// what is the input?

// how many gallons we need?
// TotalGallons = distance / mpg 

// how much will it cost?
// cost = totalGallons * cpg

// how long will it take?
// time = dist / speed

// Const Variables 
const distance = 1500;
const costPerGal = 3;
const budget = 175

// Dynamic Variables 
let speed=55;
let mpg=30;

// Formula Variables 
let totalGallons = distance / mpg;
let totalCost = totalGallons * costPerGal;
let time = distance / speed;

console.log(`Distance: ${distance},
     Speed: ${speed}mph,
      MPG: ${mpg},
      Time: ${time},
      Gallons of Fuel: ${totalGallons},
      cost: ${totalCost},
      isFeasible: ${totalCost <= budget}`)

