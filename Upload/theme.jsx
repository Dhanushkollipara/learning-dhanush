import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Change to your preferred color
    },
    secondary: {
      main: '#f50057', // Change to your preferred color
    },
  },
  typography: {
    button: {
      textTransform: 'none', // Prevent all caps
      fontSize: '16px',
    },
  },
});

export default theme;
