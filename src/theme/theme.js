// theme.js

import { createTheme } from "@mui/material/styles";
// Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(105,105,105,0.9)",
    },
  },
});

// Light Theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(12,10,10,0.9)",
      background: "#FFF",
      text: "#2F4F4F",
      bold: "bold",
      border: "solid 1.5px rgba(220,220,220 , 0.40)",
    },
  },
});

export { darkTheme, lightTheme };
