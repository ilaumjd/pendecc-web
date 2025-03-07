"use client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";
import { Box, Button, TextField } from "@mui/material";
import { use } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage({ params }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const shortUrl = unwrappedParams.short_url;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.box}>
        <TextField
          value={shortUrl}
          variant="outlined"
          size="small"
          inputProps={{
            readOnly: true,
          }}
          sx={styles.textField}
          fullWidth
        />
        <Box sx={styles.buttonBox}>
          <Button
            variant="outlined"
            onClick={() => navigator.clipboard.writeText(shortUrl)}
          >
            Copy
          </Button>
          <Button
            variant="contained"
            onClick={() => router.push(`/${shortUrl}`)}
          >
            Open Link
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
  textField: {
    maxWidth: 300,
  },
  buttonBox: {
    display: "flex",
    gap: 2,
    mt: 2,
    width: "100%",
    maxWidth: 300,
    height: 40,
    justifyContent: "end",
  },
};
