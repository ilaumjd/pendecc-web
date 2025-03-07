import { useState } from "react";

export const useShortener = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const shortenUrl = async (defaultUrl) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/urls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: defaultUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      setShortUrl(data.ShortUrl);
      alert(JSON.stringify(data.ShortUrl));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { shortUrl, loading, error, shortenUrl };
};
