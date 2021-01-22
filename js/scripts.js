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

$(document).ready(function() {
  $("form#robogers").submit(function(event) {
    robogersSays = beepBoop($("input#robogers-input").val());
    $("#robogers-output").text(robogersSays);
    event.preventDefault();
  });
});
