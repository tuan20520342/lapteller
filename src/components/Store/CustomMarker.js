import { Button, Typography } from '@mui/material';
import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import StarIcon from '@mui/icons-material/Star';

const CustomMarker = ({ store }) => {
  const { latitude, longitude } = store.gps_coordinates;
  const { rating } = store;

  return (
    <Marker position={[latitude, longitude]}>
      {store?.links?.directions && (
        <Popup>
          <Button variant="text" sx={{ width: '100%' }} component="a" href={store.links.directions} target="_blank">
            Directions
          </Button>
        </Popup>
      )}
      {rating && (
        <Tooltip direction="right" permanent>
          <div style={{ width: 'fit-content', display: 'flex', flexDirection: 'row' }}>
            <Typography>{rating}</Typography>
            <StarIcon fontSize="small" sx={{ transform: 'translate(0, 5%)' }} />
          </div>
        </Tooltip>
      )}
    </Marker>
  );
};

export default CustomMarker;
