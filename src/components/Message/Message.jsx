import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const alert = {
  backgroundColor: '#eb5454',
  color: 'white',
};

const MessageContent = styled.div`
  display: flex;
  text-align: center;
  align-items: center;

  margin: 5px;
  padding: 5px;
  padding-left: 10px;
  width: 50%;
  border-radius: 5px;

  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  font-size: 20px;
`;

const messageTypes = {
  alert,
};

function Message({ children, type }) {
  return (
    <ThemeProvider theme={messageTypes[type]}>
      <MessageContent>{children}</MessageContent>
    </ThemeProvider>
  );
}

export default Message;
