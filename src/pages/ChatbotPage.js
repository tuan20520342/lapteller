import { Box, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Chat from '~/components/Chatbot/Chat';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '~/redux/reducer/ModalReducer';
import * as SagaActionTypes from '~/redux/constants';
import ModalCustom from '~/HOC/ModalCustom';
import ProductModel from '~/components/Products/ProductModel';

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

  const onClickProduct = (product) => {
    dispatch(
      modalActions.showModal({
        ComponentContent: <ProductModel product={product} />,
      }),
    );
  };

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '10px',
          height: '100%',
          width: '100%',
          maxWidth: '1020px',
          minWidth: '200px',
          marginBottom: '100px',
          backgroundColor: 'white',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '10px',
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(https://i.imgur.com/2JK3Ex8.png)',
          backgroundSize: '40%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {listChat.map((item, index) => (
          <Chat key={index} content={item.content} isAnswer={item.isAnswer} onClick={onClickProduct}></Chat>
        ))}
      </Paper>

      <Paper
        elevation={4}
        sx={{
          width: '100%',
          display: 'flex',
          gap: 1,
          position: 'fixed',
          bottom: 0,
          left: 0,
          padding: 2,
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '90%', maxWidth: 1000, minWidth: 200, position: 'relative' }}>
          <TextField
            inputProps={{ style: { fontWeight: 500 }, autoComplete: 'off' }}
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
      <ModalCustom closeButton={true} />
    </div>
  );
};

export default ChatBotPage;
