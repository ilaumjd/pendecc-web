"use client";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-geist-sans)",
  },
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
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#24292e",
        },
      },
    },
  },
});
