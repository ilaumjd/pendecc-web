import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0366d6",
    },
    background: {
      default: "#ffffff",
      paper: "#f6f8fa",
    },
    text: {
      primary: "#24292e",
      secondary: "#586069",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "1rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
