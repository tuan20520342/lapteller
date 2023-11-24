import Modal from '@mui/material/Modal';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalActions } from '../redux/reducer/ModalReducer';
import { Box } from '@mui/material';

const style = {
  boxSizing: 'border-box',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'transparent',
  boxShadow: 2,
  borderRadius: 1,
  overflow: 'hidden',
};

const ModalCustom = () => {
  const { visible, ComponentContent } = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <Modal
      open={visible}
      onClose={handleCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{ComponentContent}</Box>
    </Modal>
  );
};

export default ModalCustom;
