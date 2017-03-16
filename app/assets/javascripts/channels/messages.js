App.messages = App.cable.subscriptions.create("MessagesChannel", {
  connected: function() {
    console.log("MessagesChannel :: connected");
  },
  disconnected: function() {},
  received: function(data) {
    console.log("client receives ", data);
    $(".messages").prepend(data.message);
  }
});