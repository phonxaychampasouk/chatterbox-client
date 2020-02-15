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
          MessagesView.renderMessage(userInfo);
        }
      });
    });
  },

  renderMessage(message) {
    MessagesView.$chats.append(MessageView.render({username: message.username, text: message.text}));
  }
};