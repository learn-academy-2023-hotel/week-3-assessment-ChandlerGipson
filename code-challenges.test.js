// ASSESSMENT 3: Coding Practical Questions with Jest

const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code: have to have the array store the fibonnacci sequence starting with the first two indexes of the array [1,1] in the for loop i had the index -2. if 1 was less than 2 it would add 1. i then added both of my firstTwo including the indexes. once the array has gone through all indexes you will need it to return. then i console.log logged both fibonacci lengths

describe( "greaterThanTwo",() => {
  it ("takes in a number (greater than 2) and returns the array with the fibonacci squence" , () => {
     expect (greaterThanTwo(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
     expect (greaterThanTwo(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
     
  })
})

const greaterThanTwo = (number) => {
  const firstTwo = [1,1]
  for(let i = 2; i<number; i++ )
  firstTwo[i] = firstTwo[i-1] + firstTwo[i-2]
return firstTwo
}
console.log(greaterThanTwo(fibonacciLength1))
console.log(greaterThanTwo(fibonacciLength2))

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("objectValue"), () => {
  it("takes in an object and returns an array of the object's values sorted from least to greatest.")
  expect(objectValue(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
  expect(objectValue(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
}

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

function someValue(obj) {
  const values = Object.values(obj)
  values.sort((a, b) => a - b)
  return values
}

// Pseudo code: used chatgbt to created a variable to take on all numbers in the array. using the .sort method on the values array and using the (a, b) => a - b i will sort the values from the smallest to largest. 
