$(document).on("turbolinks:load", function() {
  $("form#js-socket").submit(function(event) {
    var $input, data;
    console.log("stopping submitting from HTTP");
    event.preventDefault();
    // use jQuery to find the text input:
    $input = $(this).find('input:text');
    data = {
      message: {body: $input.val()}
    };
    console.log("sending over socket: ", data);
    App.messages.send(data);
    // clear text field
    $input.val('');
  });
});