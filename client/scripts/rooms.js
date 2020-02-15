var Rooms = {

  add: function(room) {
    var initializedRoom = new Messages;
    initializedRoom.roomname = room;
    Parse.create(initializedRoom);
    MessagesView.$chats.empty();
    MessagesView.render();
  }
};