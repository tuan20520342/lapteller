import { Box, Button, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import VideoCard from '~/components/Video/VideoCard';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import * as SagaActionTypes from '~/redux/constants';
import ModalCustom from '~/HOC/ModalCustom';
import { modalActions } from '~/redux/reducer/ModalReducer';
import VideoModal from '~/components/Video/VideoModal';

const VideoPage = () => {
  const dispatch = useDispatch();
  const { listVideo } = useSelector((state) => state.videoSlice);

  const [keyword, setKeyWord] = useState('');
  useEffect(() => {
    dispatch({
      type: SagaActionTypes.GET_VIDEO_SAGA,
    });
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [listVideo]);

  const handleSearchVideo = () => {
    if (keyword.trim() !== '') {
      dispatch({
        type: SagaActionTypes.GET_VIDEO_SAGA,
        keyword: keyword.replace(/\s/g, '+'),
      });
    }
  };

  const handleOpenVideoModal = (id) => {
    console.log(id);
    dispatch(
      modalActions.showModal({
        ComponentContent: <VideoModal id={id} />,
      }),
    );
  };

  const handleEnterSearch = (key) => {
    if (key.key === 'Enter') {
      handleSearchVideo();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center the content vertically
        height: '100%',
        width: '100%',
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
          zIndex: 1000,
        }}
        elevation={2}
      >
        <Box sx={{ width: '90%', maxWidth: 1000, minWidth: 200, position: 'relative' }}>
          <TextField
            inputProps={{ style: { fontWeight: 500 } }}
            variant="outlined"
            placeholder="Search"
            fullWidth
            color="secondary"
            onChange={(e) => setKeyWord(e.target.value)}
            onKeyDown={(key) => {
              handleEnterSearch(key);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="send button" edge="end" onClick={handleSearchVideo}>
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
        {listVideo.map((item) => (
          <VideoCard
            key={item.id.videoId}
            id={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            thumbnail={item.snippet.thumbnails.medium.url}
            publishTime={item.snippet.publishTime}
            onClick={handleOpenVideoModal}
          ></VideoCard>
        ))}
        {/* <Button onClick={() => handleOpenVideoModal('9zJ86TCf5Ww')}>aaaaaaaaa</Button> */}
      </div>
      <ModalCustom />
    </div>
  );
};
export default VideoPage;
