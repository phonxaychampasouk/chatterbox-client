var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#rooms').children('select').change(function() {
      MessagesView.render()
    })
  },

  render: function() {
    // var newMessage = document.createElement('div')
    // newMessage.append(Messages.username + ' in room "' + Messages.roomname + '": ' + Messages.text)
    // MessagesView.$chats.append(newMessage)

    //////
    //iterate over result array and pluch the usernames and texts for the selected lobby
    App.fetch(function() {
      _.each(arguments[0].results, function(userInfo) {
        if (userInfo.roomname = $('#rooms').children('select').children("option:selected").val()) {
          console.log(userInfo.username)
        }
      }) 
    }) 
  }
};