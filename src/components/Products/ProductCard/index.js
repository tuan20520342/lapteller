import React from 'react';
import { Card, CardContent, CardMedia, Typography, Tooltip, CardActionArea, Paper } from '@mui/material';

const ProductCard = ({ id, title, price, image }) => {
  return (
    <Paper sx={{ bgcolor: 'transparent' }} elevation={2}>
      <CardActionArea sx={{ borderRadius: 1, overflow: 'hidden', background: 'white' }}>
        <CardMedia
          sx={{
            aspectRatio: '1/1',
          }}
          image={image}
          title=""
        />
        <CardContent>
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
              lineHeight: 1,
            }}
          >
            {price}
          </Typography>
          <Tooltip title={title}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
                lineHeight: 1,
              }}
              noWrap
            >
              {title}
            </Typography>
          </Tooltip>
        </CardContent>
      </CardActionArea>
    </Paper>
  );
};

export default ProductCard;
