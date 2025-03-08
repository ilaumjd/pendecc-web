"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFetchUrl } from "./hook";

export default function SuccessPage({ params }) {
  const router = useRouter();
  const unwrappedParams = use(params);

  const [urlResult, setUrlResult] = useState({});
  const defaultUrl = `https://${urlResult.data?.defaultUrl}`;
  const shortUrlHash = urlResult.data?.shortUrl;
  const shortUrl = `https://pende.cc/${urlResult.data?.shortUrl}`;

  const { fetchUrl } = useFetchUrl(unwrappedParams.short_url);

  useEffect(() => {
    fetchUrl().then((result) => {
      setUrlResult(result);
    });
  }, []);

  return (
    <Box sx={styles.box}>
      <Typography>{`Default URL: ${defaultUrl}`}</Typography>
      <TextField
        value={shortUrl}
        variant="outlined"
        size="small"
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
        <Button
          variant="contained"
          onClick={() => router.push(`/${shortUrlHash}`)}
        >
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
