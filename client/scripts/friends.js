var Friends = {
  friends: [],

  initialize: function () {
    $('#chats').on('click', '.username', function (event) {
      if (Friends.friends.includes(event.target.innerText)) {
        Friends.friends.splice(Friends.friends.indexOf(event.target.innerText), 1);
        MessagesView.$chats.empty();
        MessagesView.render();
      } else if (!Friends.friends.includes(event.target.innerText)) {
        Friends.friends.push(event.target.innerText);
        Friends.toggleStatus(event.target);
        MessagesView.$chats.empty();
        MessagesView.render();
      }
    });
  },
  toggleStatus: function (friend) {
    $(friend).addClass('friend');
  }
};



