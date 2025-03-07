"use client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";
import { Box, Button, TextField } from "@mui/material";
import { use } from "react";

export default function SuccessPage({ params }) {
  const unwrappedParams = use(params);
  const shortUrl = unwrappedParams.short_url;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.box}>
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
      </Box>
    </ThemeProvider>
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
