var Parse = {

  server: `http://parse.sea.hackreactor.com`,

  create: function(message, successCB, errorCB = null) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
<<<<<<< HEAD
      url: 'http://parse.sea.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
=======
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB
    });
>>>>>>> c61e0b822f8aa516eafb7a3fa3ca181f9ff51291
  },
error: function (data) {
  // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  console.error('chatterbox: Failed to send message', data);
}

});
  },


  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }
  };
