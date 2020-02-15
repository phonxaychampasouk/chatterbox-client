var MessageView = {

  render: _.template(`
<<<<<<< HEAD

      <div class="chat">
        <div class="username">${username}</div>
        <div class="text">${text}</div>
        div class ="roomname">${roomname}</div>
      </div>

    `)
=======
      <div class="chat">
        <div class="username"><%=username%></div>
        <div><%=text%></div>
      </div>
    `),

  renderFriend: _.template(`
    <div class="chat">
      <div class="username friend"><%=username%></div>
      <div><%=text%></div>
    </div>
  `)
};
>>>>>>> c61e0b822f8aa516eafb7a3fa3ca181f9ff51291

