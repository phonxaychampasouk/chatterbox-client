var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    $('#rooms').children('select').change(function () {
      MessagesView.$chats.empty();
      MessagesView.render();
    })
  },

  render: function () {
    App.fetch(function () {
      _.each(arguments[0].results, function (userInfo) {
        if (userInfo.roomname === $('#rooms').children('select').children("option:selected").val()) {
          MessagesView.renderMessage(userInfo);
        }
      });
    });
  },

  renderMessage(message) {
    if (!MessageView.render({ username: message.username, text: message.text }).includes('<script>') && !MessageView.render({ username: message.username, text: message.text }).includes('$(window)')) {
      if (Friends.friends.includes(message.username)) {
        MessagesView.$chats.append(MessageView.renderFriend({ username: message.username, text: message.text }));
      } else {
        MessagesView.$chats.append(MessageView.render({ username: message.username, text: message.text }));
      }
    }
  }
};