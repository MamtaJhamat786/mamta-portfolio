import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: '#4f46e5',
      light: '#395070',
      dark: '#012b6c',
    },
    secondary: {
      main: '#ec4899',
    },
    success: {
      main: '#10b981',
    },
    warning: {
      light: '#ffffc5',
      main: '#f59e0b',
    },
    error: {
      main: '#ef4444',
    },
    info: {
      main: '#0ea5e9',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: `"Inter", sans-serif`,
  },
});

export default theme;
