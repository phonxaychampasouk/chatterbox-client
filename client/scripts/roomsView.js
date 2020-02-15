var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', RoomsView.render)
  },

  render: function() {
    //prompt the user for the new room name
    var newRoom = prompt('Whats the room gonna be called?');

    //Add it to the list of room choices
    RoomsView.renderRoom(newRoom);

    //Add new room to server
    //?????????

    // assignc current room to created room/ clear past chat

  },

  renderRoom: function(roomName) {
    // add rooms to the DOM'
    RoomsView.$select.append('<option value=' + roomName + '>' + roomName + '</option>')
  }
};
