import React from 'react';
import { Avatar, Paper, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import MarkdownView from 'react-showdown';
import ProductCard from '~/components/Products/ProductCard';

const Chat = ({ isAnswer, content }) => {
  let renderedContent;

  try {
    const parsedContent = JSON.parse(content);

    if (Array.isArray(parsedContent.products)) {
      renderedContent = parsedContent.products.map((item, index) => (
        <ProductCard
          key={index}
          name={item.name}
          screenSize={item.screenSize}
          processor={item.processor}
          memory={item.memory}
          storage={item.storage}
        ></ProductCard>
      ));
    } else {
      renderedContent = (
        <MarkdownView className="markdown" markdown={content} options={{ tables: true, emoji: true }} />
      );
    }
  } catch (error) {
    console.log(error);
    renderedContent = <MarkdownView className="markdown" markdown={content} options={{ tables: true, emoji: true }} />;
  }

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
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {renderedContent}
      </Paper>
    </Paper>
  );
};

export default Chat;
