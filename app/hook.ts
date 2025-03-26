import { API_BASE_URL } from "./constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { isValidUrl } from "./utils";

export const useShortener = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shortenUrl = async (defaultUrl: string, customUrl: string) => {
    setLoading(true);
    setError("");

    try {
      if (!isValidUrl(defaultUrl)) {
        throw new Error("Not a proper URL");
      }

      const alphanumericPattern = /^[a-zA-Z0-9-_]+$/;

      if (customUrl && !alphanumericPattern.test(customUrl)) {
        throw new Error(
          "Custom URL not allowed, please use a-z, A-Z, 0-9, -, _",
        );
      }

      const response = await fetch(`${API_BASE_URL}/urls`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: defaultUrl, customUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      router.push(`/success/${data.shortUrl}`);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setLoading(false);
    setError("");
  };

  return { loading, error, shortenUrl, reset };
};
