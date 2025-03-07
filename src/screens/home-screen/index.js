import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function HomeScreen() {
  return (
    <Box sx={styles.box}>
      <Typography variant="h1" sx={styles.typography}>
        PENDE.CC
      </Typography>
      <TextField
        id="outlined-basic"
        label="Enter URL"
        variant="outlined"
        fullWidth
        sx={styles.textField}
      />
      <Button variant="contained" sx={styles.button}>
        Shorten
      </Button>
    </Box>
  );
}

const styles = {
  box: {
    bgcolor: "background.default",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  typography: {
    fontSize: "2.5rem",
    color: "text.primary",
    marginBottom: 2,
    fontWeight: 600,
  },
  textField: {
    maxWidth: 300,
  },
  button: {
    mt: 2,
  },
};
