"use client";
import { useEffect, useState } from "react";
import { useFetchUrl } from "./hook";
import { NotFound } from "@/components/not-found";
import { WaitingLabel } from "@/components/waiting-label";

export type RedirectProps = {
  short_url: string;
};

export default function RedirectClient(props: RedirectProps) {
  const { fetchUrl } = useFetchUrl(props.short_url);

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchUrl().then((result) => {
      if (result.success) {
        window.location.href = `${result.data?.defaultUrl}`;
      } else {
        setNotFound(true);
      }
    });
  }, [fetchUrl]);

  return (
    <div className="flex items-center justify-center">
      {notFound ? (
        <NotFound shortUrl={props.short_url} />
      ) : (
        <WaitingLabel text={"Redirecting"} />
      )}
    </div>
  );
}
