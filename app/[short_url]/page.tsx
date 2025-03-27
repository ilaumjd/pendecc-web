"use client";
import { use, useEffect, useState } from "react";
import { useFetchUrl } from "./hook";
import { NotFound } from "@/components/not-found";
import { WaitingLabel } from "@/components/waiting-label";

type RedirectProps = {
  params: Promise<{ short_url: string }>;
};

export default function Redirect(props: RedirectProps) {
  const params = use(props.params);
  const { fetchUrl } = useFetchUrl(params.short_url);

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
        <NotFound shortUrl={params.short_url} />
      ) : (
        <WaitingLabel text={"Redirecting"} />
      )}
    </div>
  );
}
