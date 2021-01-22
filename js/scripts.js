// $(document).ready(function() {
//   $("form#pig-latin").submit(function(event) {
//     $("#pig-latin-result").text($("input#sentence").val());
//     event.preventDefault();
//   });
// });



// Describe: beepBoop()
// Test: "It should return an array with a 0 if the number 0 is inputted"
// Expect(beepBoop(0).toEqual([0]);

// function beepBoop(number) {
//   const robogersArray = [number];
//   return robogersArray
// };

// console.log(beepBoop(0));

// Test: "It should return a string with "0" if the number 0 is inputted"
// Expect(beepBoop(0).toEqual("0");

// function beepBoop(number) {
//   const robogersArray = [number];
//   return robogersArray.toString();
// };

// console.log("Mr. Robergers says: " + beepBoop(0));

// Test: "It should return a string with "1,2,3,4,5,6,7,8,9,10" if the number 10 is inputted"
// Expect(beepBoop(10).toEqual("1,2,3,4,5,6,7,8,9,10");

// function beepBoop(number) {
//   let robogersArray = [];
//   for (let index = 1; index <= number; index ++) {
//     robogersArray.push(index);
//   } 
//   return robogersArray.toString();
// };

// console.log("Mr. Robergers says: " + beepBoop(10));

// Test: "It should return a string with "1 2 3 4 5 6 7 8 9 10" if the number 10 is inputted"
// Expect(beepBoop(10).toEqual("1 2 3 4 5 6 7 8 9 10");

// function beepBoop(number) {
//   let robogersArray = [];
//   for (let index = 1; index <= number; index ++) {
//     robogersArray.push(index);
//   } 
//   robogersString = robogersArray.toString();
//   return robogersString.replace(/,/g, " ");
// };

// console.log("Mr. Robergers says: " + beepBoop(10));

// Test: "It should return an array with [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] if the number 10 is inputted"
// Expect(beepBoop(10).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// function beepBoop(number) {
//   let robogersArray = [];
//   for (let index = 1; index <= number; index ++) {
//     robogersArray.push(index);
//   } 
//   return robogersArray
// };

// console.log(beepBoop(10));

// Test: "It should return an array with [Beep!, 2, 3, 4, 5, 6, 7, 8, 9] if the number 9 is inputted"
// Expect(beepBoop(9).toEqual([Beep!, 2, 3, 4, 5, 6, 7, 8, 9]);

// function beepBoop(number) {
//   let robogersArray = [];
//   for (let index = 1; index <= number; index ++) {
//     if (index === 1) {
//       robogersArray.push("Beep!");
//     } else {
//       robogersArray.push(index);
//     }
//   } 
//   return robogersArray
// };

// console.log(beepBoop(9));

// Test: "It should return an array with [Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, "Beep!"] if the number 10 is inputted"
// Expect(beepBoop(10).toEqual([Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, "Beep!"]);

function splitDigits(number) {
  let digitArray = [];
  let digitString = number.toString();
  for (let digitIndex = 0, numberLength = digitString.length; digitIndex < numberLength; digitIndex ++) {
    digitArray.push(+digitString.charAt(digitIndex));
  }
  return digitArray
};

function beepBoop(number) {
  let robogersArray = [];
  for (let index = 1; index <= number; index ++) {
  const digitArray = splitDigits(index);
  }
  // if (index === 1) {
  //   robogersArray.push("Beep!");
  // } else {
  //   robogersArray.push(index);
  // }
  // return robogersArray
};

console.log(beepBoop(123));