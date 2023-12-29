import React, { useEffect } from 'react';
import ProductCard from '../ProductCard';
import * as SagaActionTypes from '~/redux/constants';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Tooltip, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { ellipsisStyle } from '~/components/UI/EllipsisStyle';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductDetailCard from '../ProductDetailCard';
import useResponsive from '~/hooks/useResponsive';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProductModel = ({ product }) => {
  const { name, screenSize, processor, memory, storage } = product;

  const dispatch = useDispatch();
  const { listProducts } = useSelector((state) => state.productSlice);

  const isPhone = useResponsive('down', 'sm');

  useEffect(() => {
    dispatch({
      type: SagaActionTypes.GET_PRODUCTS_SAGA,
      productName: name,
    });
  }, [dispatch]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#cecece',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div
      style={{
        backgroundColor: '#f9fbfa',
        padding: 16,
        height: '70%',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Tooltip title={name}>
              <Typography
                gutterBottom
                variant="h4"
                sx={{
                  fontWeight: 600,
                  ...ellipsisStyle,
                  paddingRight: 2,
                }}
              >
                {name}
              </Typography>
            </Tooltip>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography sx={ellipsisStyle}>{`Screen size: ${screenSize}`}</Typography>
            <Tooltip title={processor}>
              <Typography sx={ellipsisStyle}>{`Processor: ${processor}`}</Typography>
            </Tooltip>
            <Typography sx={ellipsisStyle}>{`Memory: ${memory}`}</Typography>
            <Typography sx={ellipsisStyle}>{`Storage: ${storage}`}</Typography>
          </Grid>
          <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {listProducts.slice(0, isPhone ? 3 : 4).map((item, index) => (
              <Paper style={{ flex: '1' }} key={index} elevation={2}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{
                    width: '100%',
                    aspectRatio: '1/1',
                    borderRadius: '10px',
                    objectFit: 'cover',
                  }}
                />
              </Paper>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Carousel responsive={responsive} partialVisible={true}>
              {listProducts.map((item, index) => (
                <ProductDetailCard product={item}></ProductDetailCard>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default ProductModel;
