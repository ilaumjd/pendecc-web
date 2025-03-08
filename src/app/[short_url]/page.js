"use client";
import { use, useEffect } from "react";
import { useFetchUrl } from "./hook";

export default function RedirectPage({ params }) {
  const unwrappedParams = use(params);
  const { fetchUrl } = useFetchUrl(unwrappedParams.short_url);

  useEffect(() => {
    fetchUrl().then((result) => {
      if (result.success) {
        window.location.href = `https://${result.data?.defaultUrl}`;
      }
    });
  }, []);

  return <div>Redirecting...</div>;
}
