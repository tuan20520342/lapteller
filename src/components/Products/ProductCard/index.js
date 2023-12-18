import React from 'react';
import { Card, CardContent, CardMedia, Typography, Tooltip, CardActionArea, Paper } from '@mui/material';

const ProductCard = ({ name, screenSize, processor, memory, storage }) => {
  return (
    <Paper sx={{ bgcolor: 'transparent', width: '272px' }} elevation={2}>
      <CardActionArea sx={{ borderRadius: 1, overflow: 'hidden', background: 'white' }}>
        <CardContent>
          <Tooltip title={name}>
            <Typography
              gutterBottom
              variant="body1"
              color="secondary.main"
              sx={{
                fontWeight: 600,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {name}
            </Typography>
          </Tooltip>
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '1',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {`Screen size: ${screenSize}`}
          </Typography>
          <Tooltip title={processor}>
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
              }}
            >
              {`Processor: ${processor}`}
            </Typography>
          </Tooltip>
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '1',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {`Memory: ${memory}`}
          </Typography>
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '1',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {`Storage: ${storage}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Paper>
  );
};

export default ProductCard;
