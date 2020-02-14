var Messages = {
    username: window.location.search.substr(10),
    text: $('#message').val(),
    roomname: $('#rooms').children('select').children("option:selected").val()
};