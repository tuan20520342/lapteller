import React, { useEffect } from 'react';
import ProductCard from '../ProductCard';
import * as SagaActionTypes from '~/redux/constants';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Tooltip, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { ellipsisStyle } from '~/components/UI/EllipsisStyle';

const ProductModel = ({ product }) => {
  const { name, screenSize, processor, memory, storage } = product;

  // const dispatch = useDispatch();
  // const { listProducts } = useSelector((state) => state.productSlice);

  // useEffect(() => {
  //   dispatch({
  //     type: SagaActionTypes.GET_PRODUCTS_SAGA,
  //     productName: productName,
  //   });
  // }, [dispatch]);

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
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        height: '70%',
      }}
    >
      {/* {listProducts.map((item, index) => (
        <ProductCard key={index} name={item.title}></ProductCard>
      ))} */}
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
            <div style={{ flex: '1' }}>
              <img
                src={
                  'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
                }
                alt=""
                style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div style={{ background: 'red', flex: '1' }}></div>
            <div style={{ background: 'red', flex: '1' }}></div>
            <div style={{ background: 'red', flex: '1' }}></div>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default ProductModel;
