//business logic
const arrayGen = function(upperLimit) {
  const numberRange = [];
  for (let i = 0; i <= upperLimit; i++) {
    numberRange.push(i);
  }
}

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const upperLimit = $("input[name=numberInput]").val();
    const outputArray = arrayGen(upperLimit);
  })
})