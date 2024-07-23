import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#343446',
      secondary: '#7D7D89',
    },
  },
  typography: {
    fontFamily: 'graphik',
    // h1: {
    //   fontSize:"20",
    //   fontWeight:"500",
    //   letter:"0.5%",
    //   marginLeft:"20"
    // }
  },
});

export default theme;
