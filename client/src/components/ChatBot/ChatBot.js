import React from 'react';
import classes from './chatBot.module.scss';
import botImage from '../../static/chat-bot.png';
import { Link } from 'react-router-dom';

const ChatBot = () => {
  return (
    <Link className={classes.ancor} to='/goals'>
      <div className={classes.container}>
        <img src={botImage} alt='chatbot' />
        <div className={classes.text}>Use chat bot to set your goals!</div>
      </div>
    </Link>
  );
};

export default ChatBot;
