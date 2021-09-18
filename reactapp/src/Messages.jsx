import React, { useState } from 'react';
import MessagesRecievedList from './MessagesRecievedList.jsx';
import MessagesSentList from './MessagesSentList.jsx';
import NewMessage from './NewMessage.jsx';
import { useAuth } from './contexts/AuthContext'
import { useHistory } from 'react-router-dom'

function Messages({messagesRecieved, messagesSent, removeMessage, addMessage}) {
  const messagesRecievedList = messagesRecieved.map((messageRecieved) => <MessagesRecievedList key={messageRecieved.id} message_id = {messageRecieved.id} title={messageRecieved.title} body={messageRecieved.body} user={messageRecieved.user} removeMessage={removeMessage}/>
  );

  const messagesSentList = messagesSent.map((messageSent) => <MessagesSentList key={messageSent.id} message_id = {messageSent.id} title={messageSent.title} body={messageSent.body} recipient={messageSent.recipient} removeMessage={removeMessage}/>
  );


  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')
    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <div>
      <button class = 'Logout' onClick={handleLogout}>LOGOUT</button>
      <NewMessage addMessage={addMessage}/>
      <h1>Welcome: {currentUser.email}</h1>
      <div Style="width: 50%; float:left">
        <h1>Inbox</h1>
        <span>
          {messagesRecievedList}
        </span>
      </div>
        <div Style="width: 50%; float:right">
        <h1>Sent</h1>
        <span>
          {messagesSentList}
        </span>
      </div>
    </div>
  );
}

export default Messages;