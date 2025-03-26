"use client";
import { use, useEffect } from "react";
import { useFetchUrl } from "./hook";

type RedirectProps = {
  params: Promise<{ short_url: string }>;
};

export default function Redirect(props: RedirectProps) {
  const params = use(props.params);
  const { fetchUrl } = useFetchUrl(params.short_url);

  useEffect(() => {
    fetchUrl().then((result) => {
      if (result.success) {
        window.location.href = `${result.data?.defaultUrl}`;
      }
    });
  }, [fetchUrl]);

  return <div>Redirecting...</div>;
}
