import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

// all available props
const theme = {
  background: '#f5f8fb',
  // fontFamily: 'Helvetica Neue',
  headerBgColor: '#3366CC',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#3366CC',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const config = {
  width: '400px',
  headerTitle: 'Plan with Ope, your $$ bot buddy...',
  className: 'chat-container'
}

const steps = [
  {
    id: "1",
    message: "Hi Carille, how are you feeling today?",
    trigger: "2"
  },
  {
    id: "2",
    user: true,
    trigger: "3"
  },
  {
    id: "3",
    message: "Yes, I know what you mean",
    trigger: "4"
  },
  {
    id: "4",
    message: "Now that you're here, what financial goal should we set up for you today?",
    end: true
  }
];

const ThemedExample = ({ chatOpened, toggleFloating }) => (
  <ThemeProvider theme={theme}>
    <ChatBot
      steps={steps}
      floating={true}
      opened={chatOpened}
      toggleFloating={toggleFloating}
      {...config}
    />
  </ThemeProvider>
);

export default ThemedExample;