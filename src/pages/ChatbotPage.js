import { Box, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Chat from '~/components/Chatbot/Chat';
import SendIcon from '@mui/icons-material/Send';
import { Input } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import * as SagaActionTypes from '~/redux/constants';

const ChatBotPage = () => {
  const dispatch = useDispatch();
  const { listChat } = useSelector((state) => state.chatbotSlice);

  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Scroll the entire page to the bottom when a new message is added
    window.scrollTo(0, document.body.scrollHeight);
  }, [listChat]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      dispatch({
        type: SagaActionTypes.SEND_MESSAGE_SAGA,
        message: newMessage,
      });
      setNewMessage('');
      // You can handle sending messages to a server or other logic here
    }
  };

  const handleEnterMesage = (key) => {
    if (key.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 100,
      }}
    >
      {listChat.map((item, index) => (
        <Chat key={index} content={item.content} isAnswer={item.isAnswer}></Chat>
      ))}

      <Paper
        sx={{
          width: '100%',
          display: 'flex',
          gap: 1,
          position: 'fixed',
          bottom: 0,
          padding: 2,
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '90%', maxWidth: 1000, minWidth: 400, position: 'relative' }}>
          <TextField
            inputProps={{ style: { fontWeight: 500 } }}
            variant="outlined"
            placeholder="Send a message"
            fullWidth
            color="secondary"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(key) => {
              handleEnterMesage(key);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="send button" onClick={handleSendMessage} edge="end">
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Paper>
    </div>
  );
};

export default ChatBotPage;
