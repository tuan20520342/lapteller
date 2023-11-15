import React, { useState } from 'react';
import { Avatar, Paper, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

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
      {isAnswer && <Avatar sx={{ bgcolor: deepOrange[500], display: { xs: 'none', md: 'flex' } }}>B</Avatar>}
      <Paper
        sx={{
          width: 'content-fit',
          marginLeft: !isAnswer && '10%',
          marginRight: isAnswer && '10%',
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
