export default function Backdrop(theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: `rgba(22,28,36,0.2)`,
          '&.MuiBackdrop-invisible': {
            background: 'transparent',
          },
        },
      },
    },
  };
}
