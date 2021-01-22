// $(document).ready(function() {
//   $("form#pig-latin").submit(function(event) {
//     $("#pig-latin-result").text($("input#sentence").val());
//     event.preventDefault();
//   });
// });



// Describe: beepBoop()
// Test: "It should return an array with a 0 if the number 0 is inputted"
// Expect(beepBoop(0).toEqual([0]);

function beepBoop(number) {
  const robogersArray = [number];
  return robogersArray
};

console.log(beepBoop(0));