//business logic
const arrayGen = function(upperLimit) {
  const numberRange = [];
  for (let i = 0; i <= upperLimit; i++) {
    numberRange.push(i);
  }
}

const threeCheck = function(number) {
  
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