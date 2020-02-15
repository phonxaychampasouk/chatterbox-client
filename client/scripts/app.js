var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // Render messages for lobby

    //Add pre-existing chat rooms to rooms object;
    // App.fetch(function() {
    //   _.each(arguments[0].results, function(userInfo) {
    //     Rooms[userInfo.roomname] = userInfo.roomname;
    //     console.log(userInfo.roomname)
    //   });
    // });

    //render messages for default room, lobby
    MessagesView.render();

    //Add room keys to room selector
    // _.each(Rooms, function(key) {
    //   // $('#rooms').children('select').append('<option value=' + key + '>' + key + '</option>')
    //   console.log(key)
    // });

    //Add pre-existing chat rooms to room selector
    App.fetch(function() {
      var rooms = ['lobby'];
      console.log(arguments[0].results);
      _.each(arguments[0].results, function(userInfo) {
        if (!rooms.includes(userInfo.roomname)) {
          $('#rooms').children('select').append('<option value="' + userInfo.roomname + '">' + userInfo.roomname + '</option>');
        }
        rooms.push(userInfo.roomname);
      });
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // _.each(data.results, function(userInfo) { console.log(userInfo.username)})
      // callback();
      callback(data);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

