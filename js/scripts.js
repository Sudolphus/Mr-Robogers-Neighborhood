//business logic
const arrayGen = function(upperLimit) {
  const numberRange = [];
  for (let i = 0; i <= upperLimit; i++) {
    const numberString = i.toString().split('');
    if (digitCheck(numberString, 3)) {
      numberRange.push("Won't You Be My Neighbor?");
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
    $("#numberOutput").empty();
    const upperLimit = parseInt($("input[name=numberInput]").val());
    if (!upperLimit || upperLimit < 0 || upperLimit % 1 != 0) {
      alert("Enter a positive integer!");
    }
    const outputArray = arrayGen(upperLimit);

    for (let i = 0; i < outputArray.length; i++) {
      $("#numberOutput").append("<li class='robogearLine'>" + outputArray[i] + "</li>");
      $(".robogearLine:last").fadeIn(2000).delay(3000).fadeOut(1000);
    }
  })
})