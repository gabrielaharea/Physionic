import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#23A6F0',
      light: "#8EC2F2",
      dark: '#252B42',
      contrastText: '#fff'
    },
    secondary: {
      main: "#8EC2F2",
      contrastText: '#23A6F0',
    },
    background: {
      paper:'#8EC2F2',
    },
   
  },
});