$(function() {
  $(".devour").on("click", function(event) {
    console.log('test');
    var id = $(this).data("id");
    var changeDevoured = true;

    var newDevourState = {
      devoured: changeDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("Changed devoured to", changeDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".create-form").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   var newBurger = {
  //     burger_name: $("#burger-field").val().trim(),
  //     devoured: false
  //   };

  //   // Send the POST request.
  //   $.ajax("/api/burgers", {
  //     type: "POST",
  //     data: newBurger
  //   }).then(
  //     function() {
  //       console.log("created new burger");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});