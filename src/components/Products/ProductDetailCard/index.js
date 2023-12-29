import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
  CardActionArea,
  Paper,
  Divider,
  Button,
  CardActions,
  Grid,
} from '@mui/material';
import { ellipsisStyle } from '~/components/UI/EllipsisStyle';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { printNumberWithCommas } from '~/utils/printNumerWithCommas';
import { useNavigate } from 'react-router-dom';

const ProductDetailCard = ({ product }) => {
  const navigate = useNavigate();

  const handleGoToShop = () => {
    navigate('/customers');
  };

  return (
    <Paper sx={{ bgcolor: 'white', flex: '1', margin: '0 10px' }} elevation={2}>
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          color="secondary.main"
          sx={{
            fontWeight: 600,
            textAlign: 'center',
            ...ellipsisStyle,
          }}
        >
          {`${printNumberWithCommas(product.extracted_price)} VNĐ`}
        </Typography>
        <Divider variant="middle" sx={{ marginBottom: '8px' }} />
        <Typography sx={ellipsisStyle}>{`Store: ${product.source}`}</Typography>
        <Typography sx={ellipsisStyle}>{`Condition: ${product.second_hand_condition}`}</Typography>
        <Typography sx={ellipsisStyle}>{`Rating: ${product.rating}/5`}</Typography>
        <Typography sx={ellipsisStyle}>{`Review: ${product.reviews}`}</Typography>
        <CardActions>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                sx={{ width: '100%' }}
                component="a"
                href={product.link === '#' ? product.product_link : product.link}
                target="_blank"
              >
                Product detail
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" sx={{ width: '100%' }} startIcon={<FmdGoodIcon />} onClick={handleGoToShop}>
                Go to shop
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </CardContent>
    </Paper>
  );
};

export default ProductDetailCard;
