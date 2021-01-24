function splitDigits(number) {
  const splitDigitArray = [];
  const digitString = number.toString();
  for (let digitIndex = 0; digitIndex < digitString.length; digitIndex ++) {
    splitDigitArray.push(+digitString.charAt(digitIndex));
  }
  return splitDigitArray
};

function beepBoop(number, userName) {
  const robogersArray = [];
  for (let index = 0; index <= number; index ++) {
    if (index === 0 || index > 3 && index < 10) {
      robogersArray.push(index);
    } else if (index >= 0 && index <= 3 || index >= 10) {
      const digitArray = splitDigits(index);
      if (digitArray.includes(3)) {
        robogersArray.push("Won't you be my neighbor, " + userName + "?");
      } else if (digitArray.includes(2)) {
        robogersArray.push("Boop!");
      } else if (digitArray.includes(1)) {
        robogersArray.push("Beep!");
      } else {
        robogersArray.push(index);
      }
    }
  };
  return robogersArray;
};

$(document).ready(function() {
  $("form#robogers").submit(function(event) {
    event.preventDefault();
    const robogersInput = $("input#robogers-input").val();
    const userNameInput = $("input#user-name").val();
    if (robogersInput >= 0 && robogersInput % 1 === 0) {
      const robogersArray = beepBoop(robogersInput, userNameInput);
      const robogersString = robogersArray.join(" ");
      $("#robogers-output").text(robogersString);
      showRobogers();
    } else {
      $("#user-error").text(userNameInput.toUpperCase());
      terminatorShow();
    }
  });
});

function reverseOrder() {
  const robogersInput = $("input#robogers-input").val();
  const userNameInput = $("input#user-name").val();
  if (robogersInput >= 0 && robogersInput % 1 === 0) {
    const robogersArray = beepBoop(robogersInput, userNameInput);
    reversedRobogersArray = robogersArray.reverse();
    const reversedRobogersString = reversedRobogersArray.join(" ");
    $("#robogers-output-reversed").text(reversedRobogersString);
    showReverseOrder();
  } else {
    $("#user-error").text(userNameInput.toUpperCase());
    terminatorShow();
  }
};


function showRobogers() {
  $("#robogers-speaks").show();
  $("#robogers-output").show();
  $("#robogers-output-reversed").hide();
  $(".jumbotron").hide();
  $("#terminator-error").hide();
  $("#before-submit").hide();
  $("#after-submit").show();
};

function showReverseOrder() {
  $("#robogers-output").hide();
  $("#robogers-output-reversed").show();
};

function terminatorShow() {
  $("#terminator-error").show();
  $(".jumbotron").hide();
  $("#robogers-speaks").hide();
  $("#before-submit").show();
  $("#after-submit").hide();
};