"use client";
import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useShortener } from "./hook";

export default function HomeScreen() {
  const { loading, error, shortenUrl } = useShortener();

  const [inputUrl, setInputUrl] = useState("");
  const [showCustomLink, setShowCustomLink] = useState(false);

  const handleShorten = () => {
    if (inputUrl) {
      shortenUrl(inputUrl);
    }
  };

  return (
    <Box sx={styles.box}>
      <Typography variant="h1" sx={styles.title}>
        PENDE.CC
      </Typography>
      <TextField
        id="outlined-basic"
        label="Enter URL"
        variant="outlined"
        fullWidth
        sx={styles.urlTextField}
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
      />

      <Box sx={styles.shortUrlBox}>
        <FormControlLabel
          control={
            <Checkbox
              checked={showCustomLink}
              onChange={(e) => setShowCustomLink(e.target.checked)}
            />
          }
          label="Custom link"
          sx={styles.customLinkCheckbox}
        />
        {showCustomLink && (
          <TextField
            label="Custom URL"
            variant="outlined"
            fullWidth
            sx={styles.urlTextField}
          />
        )}
      </Box>
      <Button
        variant="contained"
        sx={styles.submitButton}
        onClick={handleShorten}
        disabled={loading}
      >
        {loading ? "Shortening..." : "Shorten"}
      </Button>
      {error && <Typography color="error">{error}</Typography>}
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
  title: {
    fontSize: "2.5rem",
    color: "text.primary",
    fontWeight: 600,
  },
  urlTextField: {
    maxWidth: 300,
    mt: 4,
  },
  customLinkCheckbox: {},
  submitButton: {
    mt: 2,
  },
};
