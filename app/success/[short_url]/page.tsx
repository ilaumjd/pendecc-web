"use client";
import { use, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FetchUrlResponse, useFetchUrl } from "@/app/[short_url]/hook";
import NotFound from "@/components/not-found";

type SuccessProps = {
  params: Promise<{ short_url: string }>;
};

export default function Success(props: SuccessProps) {
  const params = use(props.params);
  const { fetchUrl } = useFetchUrl(params.short_url);

  const [urlResult, setUrlResult] = useState<FetchUrlResponse>({});
  const defaultUrl = `${urlResult.data?.defaultUrl}`;
  const shortUrlHash = `/${urlResult.data?.shortUrl}`;
  const shortUrl = `https://pende.cc${shortUrlHash}`;
  const error = urlResult.error;

  useEffect(() => {
    fetchUrl().then((result) => {
      setUrlResult(result);
    });
  }, []);

  return (
    <section className="flex flex-col gap-4 mx-auto max-w-md">
      {error ? (
        <NotFound shortUrl={params.short_url} />
      ) : (
        <div>
          <Label className="text-xl font-bold">Your short link is ready!</Label>
          <Label className="mt-2">
            Default URL:
            <Link href={defaultUrl} target="_blank" className="underline">
              {defaultUrl}
            </Link>
          </Label>

          <Input
            type="text"
            readOnly
            value={shortUrl}
            className="w-full h-14 mt-2"
          />

          <div className="flex self-end gap-2 mt-4">
            <Button variant="outline">
              <Link href="/">← Home</Link>
            </Button>
            <Button variant="outline">
              <Link href={shortUrlHash} target="_blank">
                Open Link
              </Link>
            </Button>
            <Button
              onClick={async () => {
                await navigator.clipboard.writeText(shortUrl);
                const button = document.activeElement as HTMLButtonElement;
                const originalText = button.textContent;
                button.textContent = "Copied!";
                setTimeout(() => {
                  button.textContent = originalText;
                }, 2000);
              }}
            >
              Copy
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
