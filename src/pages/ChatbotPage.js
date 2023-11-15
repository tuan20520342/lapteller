import { Box, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Chat from '~/components/Chatbot/Chat';
import SendIcon from '@mui/icons-material/Send';
import { Input } from '@mui/material';

const ChatBotPage = () => {
  const [listChat, setListChat] = useState([
    {
      isAnswer: true,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Scroll the entire page to the bottom when a new message is added
    window.scrollTo(0, document.body.scrollHeight);
  }, [listChat]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setListChat([...listChat, { content: newMessage, isAnswer: false }]);
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