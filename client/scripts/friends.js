var Friends = {
  friends: [],

  initialize: function() {
    $('#chats').on('click', '.username', function(event) {
      if (!Friends.friends.includes(event.target.innerText)) {
        Friends.friends.push(event.target.innerText);
      }
      Friends.toggleStatus(event.target);
    });
  },
  toggleStatus: function(friend) {
    $(friend).addClass('friend');
    MessagesView.$chats.empty();
    MessagesView.render();
  }
};



