"use client";
import { use, useEffect, useState } from "react";
import { useFetchUrl } from "./hook";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <div className="flex items-center justify-center">
      {notFound ? (
        <div className="flex flex-col items-center justify-center text-center">
          <Label className="text-2xl">Not Found</Label>
          <Label className="mt-4">{`The URL https://pende.cc/${params.short_url} is not found.`}</Label>
          <Label className="mt-2">You can claim it by yourself 😁</Label>
          <Button className="mt-4">
            <Link href="/">← Home</Link>
          </Button>
        </div>
      ) : (
        <Label className="text-2xl">
          Redirecting
          {Array.from({ length: counter % 4 }, () => ".").join("")}
        </Label>
      )}
    </div>
  );
}
