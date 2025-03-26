"use client";
import { use, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FetchUrlResponse, useFetchUrl } from "@/app/[short_url]/hook";

type SuccessProps = {
  params: Promise<{ short_url: string }>;
};

export default function Success(props: SuccessProps) {
  const params = use(props.params);

  const { fetchUrl } = useFetchUrl(params.short_url);
  const [urlResult, setUrlResult] = useState<FetchUrlResponse>({});
  const defaultUrl = `https://${urlResult.data?.defaultUrl}`;
  const shortUrlHash = `/${urlResult.data?.shortUrl}`;
  const shortUrl = `https://pende.cc${shortUrlHash}`;

  useEffect(() => {
    fetchUrl().then((result) => {
      setUrlResult(result);
    });
  }, []);

  return (
    <section className="flex flex-col gap-4 mx-auto max-w-md">
      <Label>
        Default URL:{" "}
        <Link href={defaultUrl} target="_blank" className="underline">
          {defaultUrl}
        </Link>
      </Label>

      <Input type="text" readOnly value={shortUrl} className="w-full h-14" />

      <div className="flex gap-2 mt-4">
        <Button
          className=""
          onClick={() => navigator.clipboard.writeText(shortUrl)}
        >
          Copy
        </Button>
        <Button className="">
          <Link href={shortUrlHash} target="_blank">
            Open Link
          </Link>
        </Button>
      </div>
    </section>
  );
}
