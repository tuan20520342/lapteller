import React from 'react';
import { Card, CardContent, CardMedia, Typography, Tooltip, CardActionArea, Box } from '@mui/material';

const VideoCard = ({ id, title, channel, thumbnail, publishTime, onClick }) => {
  function decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }

  const DateTime = (publishTime) => {
    const day = new Date(publishTime);
    return `${day.getDay()}/${day.getMonth()}/${day.getFullYear()}`;
  };

  return (
    <Box sx={{ bgcolor: 'transparent' }}>
      <CardActionArea sx={{ borderRadius: 1, overflow: 'hidden' }} onClick={() => onClick(id)}>
        <CardMedia
          sx={{
            aspectRatio: '16/9',
          }}
          image={thumbnail}
          title=""
        />
        <CardContent>
          <Tooltip title={decodeHTMLEntities(title)}>
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                fontWeight: 600,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                lineHeight: 1.5,
              }}
            >
              {decodeHTMLEntities(title)}
            </Typography>
          </Tooltip>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontWeight: 500,
            }}
            noWrap
          >
            {channel}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontWeight: 500,
            }}
          >
            {DateTime(publishTime)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Box>
  );
};

export default VideoCard;
