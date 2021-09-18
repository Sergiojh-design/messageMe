import React, { useState, useEffect } from 'react';
import Messages from './Messages.jsx';
import { useAuth } from './contexts/AuthContext'
import axios from 'axios';
import Helpers from './Helper.js';


function Message() {
  const [messagesRecieved, setMessagesRecieved] = useState([]);
  const [messagesSent, setMessagesSent] = useState([]);
  const { currentUser } = useAuth()

  useEffect(() => {
    axios.get(`/messages/?email=${currentUser.email}`)
      .then((response) => {
        let data = response.data;
        let messagesRecievedUser = Helpers.getMessagesRecievedAndUsers(data.messagesRecieved, data.messagesRecievedUser);

        setMessagesRecieved(messagesRecievedUser);
        setMessagesSent(data.messagesSent);
      });
  }, []);

  const removeMessage = (message_id) => {
    console.log(message_id)
    axios.delete(`/messages/?email=${currentUser.email}`,{data: {id: message_id}})
    .then((response) => {
       const result = (messagesRecieved).filter(message => message.id !== message_id );
       const result2 = (messagesSent).filter(message => message.id !== message_id );

       setMessagesRecieved(result);
       setMessagesSent(result2);
    });
  };

  const addMessage = (message) => {
    console.log(message)
    axios.post(`/messages/?email=${currentUser.email}`, message)
    .then((response) => {
      setMessagesSent((messagesSent).concat(message));
    })
  }

  // const messagesRecievedList = messagesRecieved.map((messageRecieved) => <MessagesRecievedList key={messageRecieved.id} message_id = {messageRecieved.id} title={messageRecieved.title} body={messageRecieved.body} user={messageRecieved.user} removeMessage={removeMessage}/>
  // );

  // const messagesSentList = messagesSent.map((messageSent) => <MessagesSentList key={messageSent.id} message_id = {messageSent.id} title={messageSent.title} body={messageSent.body} recipient={messageSent.recipient} removeMessage={removeMessage}/>
  // );
  return (
    <div>
      <Messages messagesRecieved={messagesRecieved} messagesSent={messagesSent} removeMessage={removeMessage} addMessage={addMessage}/>
    </div>
  );
}

export default Message;