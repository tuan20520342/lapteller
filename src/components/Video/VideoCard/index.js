import React, { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Typography, Tooltip, ButtonBase, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ id, title, channel, thumbnail, publishTime }) => {
  const navigate = useNavigate();

  const DateTime = (publishTime) => {
    const day = new Date(publishTime);
    return `${day.getDay()}/${day.getMonth()}/${day.getFullYear()}`;
  };

  const handleVideoDetail = () => {
    navigate(`/videos/${id}`);
  };

  return (
    <Card>
      <CardActionArea onClick={handleVideoDetail}>
        <CardMedia
          sx={{
            aspectRatio: '16/9',
          }}
          image={thumbnail}
          title=""
        />
        <CardContent>
          <Tooltip title={title}>
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
              {title}
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
    </Card>
  );
};

export default VideoCard;
