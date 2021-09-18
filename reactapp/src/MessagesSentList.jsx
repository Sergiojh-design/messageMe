import React from 'react';

function MessagesSentList({ message_id, title, body, recipient, removeMessage}) {
  return (
    <div className="MessageList">
      <p>To: {recipient}</p>
      <span>Title: {title}</span>
      <p>Message: {body}</p>
      <button className ="Delete" onClick={() => removeMessage(message_id)}>Delete</button>
    </div>
  );
}

export default MessagesSentList;