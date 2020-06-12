//business logic
const arrayGen = function(upperLimit, userName) {
  const numberRange = [];
  for (let i = 0; i <= upperLimit; i++) {
    const numberString = i.toString().split('');
    if (digitCheck(numberString, 3)) {
      numberRange.push("Won't You Be My Neighbor, " + userName + "?");
    } else if (digitCheck(numberString, 2)) {
      numberRange.push("Boop!");
    } else if (digitCheck(numberString, 1)) {
      numberRange.push("Beep!");
    } else {
      numberRange.push("The next number is " + i.toString() + "!");
    }
  }
  return numberRange;
}

const digitCheck = function(numberString, checkDigit) {
  const compareDigit = checkDigit.toString();
  for (const digit of numberString) {
    if (digit === compareDigit) {
      return true;
    }
  }
  return false;
}

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#robotOutput").empty();
    const upperLimit = parseInt($("input[name=numberInput]").val());
    const userName = $("input[name=nameInput]").val();

    if (!upperLimit || upperLimit < 0 || upperLimit % 1 != 0) {
      alert("Mr. Robogear Only Counts to Positive Integers!");
    } else if (!userName) {
      alert("Tell Mr. Robogear Your Name, Sport!")
    }

    const outputArray = arrayGen(upperLimit, userName);

    for (let i = 0; i < outputArray.length; i++) {
      $("#robotOutput").append(`<p class='robogearLine' id='line${i}'>${outputArray[i]}</p>`);
    }

    for (let i = 0; i < outputArray.length; i++) {
      window.setTimeout(function() {
        $(`#line${i}`).fadeIn(2000).delay(2000).fadeOut(2000);
      }, 5700*i);
    }
  })

  $("button.dayNightButton").click(function() {
    if ($("body").hasClass("dayMode")) {
      $("body").removeClass("dayMode");
      $("body").addClass("nightMode");
    } else {
      $("body").removeClass("nightMode");
      $("body").addClass("dayMode");
    }
  })
})