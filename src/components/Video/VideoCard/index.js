import React, { useState } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const VideoCard = () => {
  return (
    <Card sx={{ width: '100%' }}>
      <CardMedia
        sx={{
          height: 0,
          paddingTop: '56.25%',
        }}
        image="https://i.ytimg.com/vi/EIn7j2DoOPk/mqdefault.jpg"
        title="green iguana"
      />
      <CardContent>
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
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontWeight: 500,
          }}
          noWrap
        >
          LAPTELLER
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontWeight: 500,
          }}
        >
          22/11/2022
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
