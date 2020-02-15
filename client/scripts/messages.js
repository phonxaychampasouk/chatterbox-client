class Messages {
  constructor() {
    this.username = window.location.search.substr(10),
    this.text = $('#message').val(),
    this.roomname = $('#rooms').children('select').children("option:selected").val();
  }
}