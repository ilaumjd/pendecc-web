"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import { useShortener } from "./hook";

export default function HomeScreen() {
  const { loading, error, shortenUrl } = useShortener();

  const [inputUrl, setInputUrl] = useState("");
  const [showCustomUrl, setShowCustomUrl] = useState(false);
  const [customUrl, setCustomUrl] = useState("");

  const handleShorten = () => {
    if (inputUrl) {
      shortenUrl(inputUrl, customUrl);
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

      <Box sx={styles.customUrlBox}>
        <Checkbox
          checked={showCustomUrl}
          onChange={(e) => setShowCustomUrl(e.target.checked)}
        />
        {showCustomUrl ? (
          <TextField
            label="Custom URL"
            variant="outlined"
            fullWidth
            size="small"
            sx={styles.customUrlTextField}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span style={styles.uneditablePrefix}>pende.cc/</span>
                </InputAdornment>
              ),
            }}
            onChange={(e) => setCustomUrl(e.target.value)}
          />
        ) : (
          <Typography>Custom URL</Typography>
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
    fontSize: { xs: "1.8rem", sm: "2.5rem" },
    color: "text.primary",
    fontWeight: 600,
    textAlign: "center",
  },
  urlTextField: {
    mt: 4,
    width: { xs: "100%", sm: 500 },
    maxWidth: "95vw",
  },
  customUrlBox: {
    display: "flex",
    justifyContent: "flex-start",
    height: 40,
    width: { xs: "100%", sm: 500 },
    maxWidth: "95vw",
    alignItems: "center",
  },
  customUrlTextField: {
    flex: "1 1 auto",
    marginLeft: "16px",
    width: { xs: "calc(100% - 40px)", sm: "auto" },
  },
  submitButton: {
    mt: 4,
    width: { xs: "100%", sm: "auto" },
    maxWidth: "95vw",
  },
};
