"use client";
import { use, useEffect, useState } from "react";
import { useFetchUrl } from "./hook";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NotFound from "@/components/not-found";

type RedirectProps = {
  params: Promise<{ short_url: string }>;
};

export default function Redirect(props: RedirectProps) {
  const params = use(props.params);
  const { fetchUrl } = useFetchUrl(params.short_url);

  const [notFound, setNotFound] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchUrl().then((result) => {
      if (result.success) {
        window.location.href = `${result.data?.defaultUrl}`;
      } else {
        setNotFound(true);
      }
    });
  }, [fetchUrl]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      {notFound ? (
        <NotFound shortUrl={params.short_url} />
      ) : (
        <Label className="text-2xl">
          Redirecting
          {Array.from({ length: counter % 4 }, () => ".").join("")}
        </Label>
      )}
    </div>
  );
}
