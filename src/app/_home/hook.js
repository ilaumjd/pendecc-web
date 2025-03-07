import { useRouter } from "next/navigation";
import { useState } from "react";

export const useShortener = () => {
  const router = useRouter();
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
      router.push(`success/${data.shortUrl}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, shortenUrl };
};
