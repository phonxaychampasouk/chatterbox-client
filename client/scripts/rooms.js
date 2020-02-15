var Rooms = {

  add: function(room) {
    var initializedRoom = new Messages;
    initializedRoom.roomname = room;
    initializedRoom.text = 'Created this room at ' + JSON.stringify(new Date());
    Parse.create(initializedRoom);
    MessagesView.$chats.empty();
    MessagesView.render();
  }
};