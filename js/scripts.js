function splitDigits(number) {
  const splitDigitArray = [];
  const digitString = number.toString();
  for (let digitIndex = 0; digitIndex < digitString.length; digitIndex ++) {
    splitDigitArray.push(+digitString.charAt(digitIndex));
  }
  return splitDigitArray
};

function beepBoop(number) {
  const robogersArray = [];
  for (let index = 0; index <= number; index ++) {
    if (index === 0 || index > 3 && index < 10) {
      robogersArray.push(index);
    } else {
      const digitArray = splitDigits(index);
      if (digitArray.includes(3)) {
        robogersArray.push("Won't you be my neighbor?");
      } else if (digitArray.includes(2)) {
        robogersArray.push("Boop!");
      } else if (digitArray.includes(1)) {
        robogersArray.push("Beep!");
      } else {
        robogersArray.push(index);
      }
    }
  };
  globalArray = robogersArray;
  const robogersString = robogersArray.join(" ");
  return robogersString;
};

$(document).ready(function() {
  $("form#robogers").submit(function(event) {
    robogersSays = beepBoop($("input#robogers-input").val());
    $("#robogers-output").text(robogersSays);
    robogersSpeaks();
    event.preventDefault();
  });
});

function reverseOrder() {
  const reversedRobogersArray = globalArray.reverse();
  const reversedRobogersString = reversedRobogersArray.join(" ");
  $("#robogers-output-reversed").text(reversedRobogersString);
  $("#robogers-output").hide();
  $("#robogers-output-reversed").show();
}

function robogersSpeaks() {
  $(".robogers-speaks").show();
  $(".jumbotron").hide();
}