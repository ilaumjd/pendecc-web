import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useShortener } from "./hook";

export default function HomeScreen() {
  const { shortUrl, loading, error, shortenUrl } = useShortener();
  const [inputUrl, setInputUrl] = useState("");

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
      <Button
        variant="contained"
        sx={styles.submitButton}
        onClick={handleShorten}
        disabled={loading}
      >
        {loading ? "Shortening..." : "Shorten"}
      </Button>
      {error && <Typography color="error">{error}</Typography>}
      {shortUrl && (
        <Box sx={styles.shortUrlBox}>
          <TextField
            value={shortUrl}
            variant="outlined"
            size="small"
            inputProps={{
              readOnly: true,
            }}
            fullWidth
          />
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigator.clipboard.writeText(shortUrl)}
          >
            Copy
          </Button>
        </Box>
      )}
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
  submitButton: {
    mt: 2,
  },
  shortUrlBox: {
    display: "flex",
    alignItems: "top",
    gap: 1,
    mt: 2,
    width: "100%",
    maxWidth: 300,
    height: 40,
  },
};
