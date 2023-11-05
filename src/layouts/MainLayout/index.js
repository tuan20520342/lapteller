import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import ResponsiveAppBar from '~/layouts/MainLayout/Appbar';
//

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 64;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 8,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 8,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function DashboardLayout() {
  return (
    <RootStyle>
      <ResponsiveAppBar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
