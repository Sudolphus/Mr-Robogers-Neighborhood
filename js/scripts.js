//business logic
const arrayGen = function(upperLimit) {
  const numberRange = [];
  for (let i = 0; i <= upperLimit; i++) {
    const numberString = i.toString().split('');
    if (threeCheck(numberString)) {
      numberRange.push("Won't You Be My Neighbor?");
    } else {
      numberRange.push(i);
    }
  }
  console.log(numberRange);
}

const threeCheck = function(numberString) {
  for (const digit of numberString) {
    if (digit === "3") {
      return true;
    }
  }
  return false;
}

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const upperLimit = parseInt($("input[name=numberInput]").val());
    if (!upperLimit || upperLimit < 0 || upperLimit % 1 != 0) {
      alert("Enter a positive integer!");
    }
    const outputArray = arrayGen(upperLimit);
  })
})