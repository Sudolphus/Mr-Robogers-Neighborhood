//business logic

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const upperLimit = $("input[name=numberInput]").val();
  })
})