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

function beepBoop(number) {
  let robogersArray = [];
  for (let index = 1; index <= number; index ++) {
    robogersArray.push(index);
  } 
  return robogersArray
};

console.log(beepBoop(10));