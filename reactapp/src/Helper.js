const getMessagesRecievedAndUsers = (messagesRecieved, users) => {
  for(let i = 0; i < messagesRecieved.length; i++){
    messagesRecieved[i]['user'] = users[i]['email'];
  }

  return messagesRecieved;
}

module.exports.getMessagesRecievedAndUsers = getMessagesRecievedAndUsers;