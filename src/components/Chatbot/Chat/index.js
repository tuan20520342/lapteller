import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Avatar } from '@mui/material';
import { Calculate } from '@mui/icons-material';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Chat = ({ isAnswer, content }) => {
  return (
    <Paper
      sx={{
        width: '100%',
        maxWidth: 1000,
        minWidth: 200,
        bgcolor: 'transparent',
        display: 'flex',
        gap: 1,
        justifyContent: isAnswer ? 'flex-start' : 'flex-end',
      }}
    >
      {isAnswer && <Avatar sx={{ bgcolor: deepOrange[500] }}>B</Avatar>}
      <Paper
        sx={{
          width: { xs: '90%', md: '80%' },
          bgcolor: isAnswer ? 'primary.lighter' : 'secondary.lighter',
          p: 1,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {content}
        </Typography>
      </Paper>
    </Paper>
  );
};

export default Chat;
