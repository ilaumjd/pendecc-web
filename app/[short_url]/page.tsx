"use client";
import { use, useEffect, useState } from "react";
import { useFetchUrl } from "./hook";
import { Label } from "@/components/ui/label";

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

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center text-2xl">
      {notFound ? (
        <Label>Not Found</Label>
      ) : (
        <Label>
          Redirecting
          {Array.from({ length: counter % 4 }, () => ".").join("")}
        </Label>
      )}
    </div>
  );
}
