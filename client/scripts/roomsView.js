var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', RoomsView.render)
  },

  render: function() {
    var newRoom = prompt('Whats the room gonna be called?');
    RoomsView.$select.append('<option value=' + newRoom + '>' + newRoom + '</option>')
  }

};
