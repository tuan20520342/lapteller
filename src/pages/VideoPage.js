import { Box, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import React from 'react';
import VideoCard from '~/components/Video/VideoCard';
import SearchIcon from '@mui/icons-material/Search';

const VideoPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center the content vertically
      }}
    >
      <Paper
        sx={{
          width: '100%',
          display: 'flex',
          position: 'fixed',
          padding: 2,
          left: 0,
          top: { xs: 55, sm: 63, md: 67 },
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '90%', maxWidth: 1000, minWidth: 200, position: 'relative' }}>
          <TextField
            inputProps={{ style: { fontWeight: 500 } }}
            variant="outlined"
            placeholder="Search"
            fullWidth
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="send button" edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Paper>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          maxWidth: 1700,
          width: '100%',
          // marginLeft: 'auto',
          // marginRight: 'auto',
          gridColumnGap: 10,
          gridRowGap: 20,
          marginTop: 100,
        }}
      >
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};
export default VideoPage;
