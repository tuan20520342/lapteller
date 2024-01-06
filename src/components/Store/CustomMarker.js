import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import StarIcon from '@mui/icons-material/Star';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const CustomMarker = ({ store }) => {
  const { latitude, longitude } = store.gps_coordinates;
  const { rating } = store;

  const storeStatus = (status) => {
    if (status?.includes('Đang mở cửa')) {
      return <span style={{ color: 'green' }}> open</span>;
    } else {
      return <span style={{ color: 'red' }}> closed</span>;
    }
  };

  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        {store?.phone && (
          <Typography>
            <LocalPhoneIcon fontSize="small" sx={{ transform: 'translate(0, 20%)' }} />
            {` ${store?.phone}`}
          </Typography>
        )}
        {store?.hours && (
          <Typography>
            <AccessTimeIcon fontSize="small" sx={{ transform: 'translate(0, 25%)' }} />
            {storeStatus(store?.hours)}
          </Typography>
        )}
        {store?.links?.directions && (
          <Button variant="text" sx={{ width: '100%' }} component="a" href={store.links.directions} target="_blank">
            Directions
          </Button>
        )}
      </Popup>
      {rating && (
        <Tooltip direction="right" permanent>
          <Stack direction="row">
            <Typography>{rating}</Typography>
            <StarIcon fontSize="small" sx={{ transform: 'translate(0, 5%)' }} />
          </Stack>
        </Tooltip>
      )}
    </Marker>
  );
};

export default CustomMarker;
