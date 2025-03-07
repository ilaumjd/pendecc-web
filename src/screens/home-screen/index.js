"use client";
import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

function HomeScreen() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "2.5rem",
          color: "text.primary",
          marginBottom: 2,
          fontWeight: 600,
        }}
      >
        PENDE.CC
      </Typography>
      <TextField
        id="outlined-basic"
        label="Enter URL"
        variant="outlined"
        fullWidth
        sx={{ maxWidth: 300 }}
      />
      <Button variant="contained" sx={{ mt: 2 }}>
        Shorten
      </Button>
    </Box>
  );
}

export default HomeScreen;
