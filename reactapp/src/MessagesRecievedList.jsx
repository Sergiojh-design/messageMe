import React from 'react';


function MessagesRecievedList({ message_id, title, body, user, removeMessage}) {

  return (
    <div className="MessageList">
      <p>From: {user}</p>
      <span>Title: {title}</span>
      <p>Message: {body}</p>
      <button className ="Delete" onClick={() => removeMessage(message_id)}>Delete</button>
    </div>
  );
}

export default MessagesRecievedList;