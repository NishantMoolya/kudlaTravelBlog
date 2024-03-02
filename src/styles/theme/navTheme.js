import { createTheme } from '@mui/material';

const navTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ff9800',
      contrastText: 'rgba(255,235,235,0.99)',
    },
    secondary: {
      main: '#795548',
    },
    background: {
      default: '#fafafa',
    },
    text: {
      primary: '#fafafa',
    },
  },
});

export default navTheme;