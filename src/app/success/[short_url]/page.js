"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFetchUrl } from "./hook";

export default function SuccessPage({ params }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const shortUrl = unwrappedParams.short_url;

  const { fetchUrl } = useFetchUrl(shortUrl);

  useEffect(() => {
    const data = fetchUrl();
    alert(JSON.stringify(data));
  }, [fetchUrl]);

  return (
    <Box sx={styles.box}>
      <Typography>{`Default URL: ${shortUrl}`}</Typography>
      <TextField
        value={shortUrl}
        variant="outlined"
        size="small"
        inputProps={{
          readOnly: true,
        }}
        sx={styles.textField}
        fullWidth
        margin="normal"
      />
      <Box sx={styles.buttonBox}>
        <Button
          variant="outlined"
          onClick={() => navigator.clipboard.writeText(shortUrl)}
        >
          Copy
        </Button>
        <Button variant="contained" onClick={() => router.push(`/${shortUrl}`)}>
          Open Link
        </Button>
      </Box>
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
