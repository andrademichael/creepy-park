$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var heightInput = parseInt($("#heightInput").val());
    var ageInput = parseInt($("#ageInput").val());
    console.log(ageInput)
    $(".all").addClass("highlight");

    if (ageInput >= 18) {
      $(".adult").addClass("highlight");
    }
    else {
      $(".minor").addClass("highlight");
    }
    if (heightInput > 48) {
      $(".tall").addClass("highlight");
      $(".short").removeClass("highlight")
      if (ageInput < 18) {
        $(".adult").removeClass("highlight");
      }
    }
    else {
      $(".short").addClass("highlight");
      $(".tall").removeClass("highlight")
        if (ageInput >= 18) {
        $(".minor").removeClass("highlight");
      }

    }
  });





});
