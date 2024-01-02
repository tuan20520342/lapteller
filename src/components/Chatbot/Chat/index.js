import React from 'react';
import { Avatar, Paper, Stack, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import MarkdownView from 'react-showdown';
import ProductCard from '~/components/Products/ProductCard';
import ChatLoader from '~/components/UI/ChatLoader';

const Chat = ({ isAnswer, content, onClick, loading }) => {
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
          p: 1.2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {loading ? (
          <ChatLoader />
        ) : (
          <MarkdownView
            className="markdown"
            markdown={isAnswer ? content.answer : content}
            options={{ tables: true, emoji: true }}
          />
        )}
        {content?.products?.length !== 0 && isAnswer && !loading && (
          <Stack spacing={{ xs: 1 }} direction="row" useFlexGap flexWrap="wrap">
            {content?.products?.map((item, index) => (
              <ProductCard key={index} product={item} onClick={onClick}></ProductCard>
            ))}
          </Stack>
        )}
      </Paper>
    </Paper>
  );
};

export default Chat;
