var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#rooms').children('select').change(function() {
      MessagesView.$chats.empty();
      MessagesView.render();
    })
  },

  render: function() {
    //iterate over result array and pluch the usernames and texts for the selected lobby
    App.fetch(function() {
      _.each(arguments[0].results, function(userInfo) {
        if (userInfo.roomname === $('#rooms').children('select').children("option:selected").val()) {
          renderMessage(userInfo)
        }
      })
    })
  },

  renderMessage(message) {
    //add messages to the DOM'
    // var newMessage = document.createElement('div')
    // newMessage.append(message.username + ': ' + message.text)
    // MessagesView.$chats.append(newMessage)

    // messageView.render;
    MessagesView.$chats.append(MessageView.render({username: message.roomname, text: message.text}));
  }
};