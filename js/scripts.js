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

// function splitDigits(number) {
//   let digitArray = [];
//   let digitString = number.toString();
//   for (let digitIndex = 0, numberLength = digitString.length; digitIndex < numberLength; digitIndex ++) {
//     digitArray.push(+digitString.charAt(digitIndex));
//   }
//   return digitArray
// };

// function beepBoop(number) {
//   array2 = [];
//   for (let index = 1; index <= number; index ++) {
//     if (index > 1 && index < 10) {
//       array2.push(index);
//     } else {
//       const digitsArray = splitDigits(index);
//       digitsArray.forEach(function(digit) {
//         if (digit === 1) {
//           console.log("potato");
//           array2.push("Beep!");
//         }
//       });
//     }
//   };
//   return array2;
// };

// console.log(beepBoop(10));

// Test: "It should return an array with [Beep!, 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"] if the number 11 is inputted"
// Expect(beepBoop(11).toEqual([Beep!, 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]);

// function splitDigits(number) {
//   let digitArray = [];
//   let digitString = number.toString();
//   for (let digitIndex = 0, numberLength = digitString.length; digitIndex < numberLength; digitIndex ++) {
//     digitArray.push(+digitString.charAt(digitIndex));
//   }
//   return digitArray
// };

// function beepBoop(number) {
//   array2 = [];
//   for (let index = 1; index <= number; index ++) {
//     if (index > 1 && index < 10) {
//       array2.push(index);
//     } else {
//       const digitsArray = splitDigits(index);
//       if (digitsArray.includes(1)) {
//         array2.push("Beep!");
//       } else {
//         array2.push(index);
//       }
//     }
//   };
//   return array2;
// };

// console.log(beepBoop(11));

// Test: "It should return an array starting and ending with ["Beep!", "Boop!", 3, 4, ... "Beep!", "Boop!", "Boop!", "Boop!"] if the number 22 is inputted"
// Expect(beepBoop(22).toEqual(["Beep!", "Boop!", 3, 4, ... "Beep!", "Boop!", "Boop!", "Boop!"]);

// function splitDigits(number) {
//   let digitArray = [];
//   let digitString = number.toString();
//   for (let digitIndex = 0, numberLength = digitString.length; digitIndex < numberLength; digitIndex ++) {
//     digitArray.push(+digitString.charAt(digitIndex));
//   }
//   return digitArray
// };

// function beepBoop(number) {
//   array2 = [];
//   for (let index = 1; index <= number; index ++) {
//     if (index > 2 && index < 10) {
//       array2.push(index);
//     } else {
//       const digitsArray = splitDigits(index);
//       if (digitsArray.includes(2)) {
//         array2.push("Boop!");
//       } else if (digitsArray.includes(1)) {
//         array2.push("Beep!");
//       } else {
//         array2.push(index);
//       }
//     }
//   };
//   return array2;
// };

// console.log(beepBoop(22));

// Test: "It should return an array starting and ending with ["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, ... "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"] if the number 33 is inputted"
// Expect(beepBoop(33).toEqual(["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, ... "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"]);

// function splitDigits(number) {
//   let digitArray = [];
//   let digitString = number.toString();
//   for (let digitIndex = 0, numberLength = digitString.length; digitIndex < numberLength; digitIndex ++) {
//     digitArray.push(+digitString.charAt(digitIndex));
//   }
//   return digitArray
// };

// function beepBoop(number) {
//   let array2 = [];
//   for (let index = 1; index <= number; index ++) {
//     if (index > 3 && index < 10) {
//       array2.push(index);
//     } else {
//       const digitsArray = splitDigits(index);
//       if (digitsArray.includes(3)) {
//         array2.push("Won't you be my neighbor?");
//       } else if (digitsArray.includes(2)) {
//         array2.push("Boop!");
//       } else if (digitsArray.includes(1)) {
//         array2.push("Beep!");
//       } else {
//         array2.push(index);
//       }
//     }
//   };
//   return array2;
// };
// console.log(beepBoop(33));

// Test: "It should return a string with "Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!" if the number 10 is inputted"
// Expect(beepBoop(10).toEqual("Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!");

function splitDigits(number) {
  let digitArray = [];
  let digitString = number.toString();
  for (let digitIndex = 0, numberLength = digitString.length; digitIndex < numberLength; digitIndex ++) {
    digitArray.push(+digitString.charAt(digitIndex));
  }
  return digitArray
};

function beepBoop(number) {
  let array2 = [];
  for (let index = 1; index <= number; index ++) {
    if (index > 3 && index < 10) {
      array2.push(index);
    } else {
      const digitsArray = splitDigits(index);
      if (digitsArray.includes(3)) {
        array2.push("Won't you be my neighbor?");
      } else if (digitsArray.includes(2)) {
        array2.push("Boop!");
      } else if (digitsArray.includes(1)) {
        array2.push("Beep!");
      } else {
        array2.push(index);
      }
    }
  };
  robogersString = array2.join(" ");
  return robogersString;
};
console.log("Mr. Robogers says " + beepBoop(13));