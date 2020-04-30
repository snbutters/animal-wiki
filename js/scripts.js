$(document).ready(function() {
  $("form#animals").submit(function(event) {

    var animal = $("input:radio[name=animal]:checked").val();

    if (animal === "goats") {
      $('#goats, #pigs, #cows').hide();
      $('#goats').show();
    } else if (animal === "pigs") {
      $('#goats, #pigs, #cows').hide();
      $('#pigs').show();
    } else if (animal === "cows") {
      $('#goats, #pigs, #cows').hide();
      $('#cows').show();
    }

    event.preventDefault();
  });
});