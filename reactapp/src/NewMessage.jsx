import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const StyledDiv = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
//justify-content: flex-start;

`;

const StyledInput = styled.input`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 450px;
height: 30px;
`;

const StyledInput2 = styled.input`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 250px;
height: 30px;
padding: 0 15px 0 0;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const Column = styled.div`
display: flex;
flex-direction: column;
`;

const NewMessage = ({addMessage},
) => {
  const [messageIsOpen, setMessageIsOpen] = useState(false);
  const [messageTitle, addMessageTitle] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [recipient, addRecipient] = useState('');

  return (
    <div class = 'AddMessage'>
      <button type="submit" onClick={() => setMessageIsOpen(true)}>
        SEND A MESSAGE +
      </button>
      <Modal
        isOpen={messageIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setMessageIsOpen(false)}
      >
        <h1>SEND A MESSAGE</h1>
        <form
          type="submit"
          value="Submit"
          onSubmit={(event) => {
            event.preventDefault();
            const newMessage = {
              recipient: recipient,
              title: messageTitle,
              body: messageBody,
            };

            addMessage(newMessage);
            addMessageTitle('');
            setMessageBody('');
            addRecipient('');
            setMessageIsOpen(false);
          }}
        >
          <p> </p>
          <hr size="1" width="100%" color="#DCDCDC" />
          <h3>YOUR MESSAGE</h3>
          <Row>
          <label>
            <StyledDiv>Title</StyledDiv>
            <StyledInput2
              type="text"
              maxLength="60"
              placeholder="Hello!"
              value={messageTitle}
              onChange={(event) => {
                addMessageTitle(event.target.value);
              }}
              required
            />
          </label>
            <Column>
              <label>
                <StyledDiv>Your Message</StyledDiv>
                <StyledInput
                  type="text"
                  minLength="0"
                  maxLength="200"
                  placeholder="How is your day going?"
                  value={messageBody}
                  onChange={(event) => {
                    setMessageBody(event.target.value);
                  }}
                  required
                />
              </label>
            </Column>
          </Row>
          <p />
          <hr size="1" width="100%" color="#DCDCDC" />
          <h3>SEND TO: </h3>
          <Row>
            <Column>
              <label>
                <StyledDiv>Recipient</StyledDiv>
                <StyledInput2
                  type="email"
                  maxLength="60"
                  placeholder="Example: jackson11@gmail.com"
                  value={recipient}
                  onChange={(event) => {
                    addRecipient(event.target.value);
                  }}
                  required
                />
              </label>
            </Column>
          </Row>
          <p> </p>
          <button type="submit">SUBMIT</button>
        </form>
      </Modal>
    </div>
  );
};

export default NewMessage;
