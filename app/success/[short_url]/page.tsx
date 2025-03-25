"use client";
import { use, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FetchUrlResponse, useFetchUrl } from "@/app/[short_url]/hook";

export type SuccessPageProps = {
  params: Promise<{ short_url: string }>;
};

export default function SuccessPage(props: SuccessPageProps) {
  const params = use(props.params);

  const { fetchUrl } = useFetchUrl(params.short_url);
  const [urlResult, setUrlResult] = useState<FetchUrlResponse>({});
  const defaultUrl = `https://${urlResult.data?.defaultUrl}`;
  const shortUrlHash = urlResult.data?.shortUrl;
  const shortUrl = `https://pende.cc/${urlResult.data?.shortUrl}`;

  useEffect(() => {
    fetchUrl().then((result) => {
      setUrlResult(result);
    });
  }, [fetchUrl]);

  return (
    <section>
      <Label>
        Default URL:{" "}
        <Link href={defaultUrl} target="_blank">
          {defaultUrl}
        </Link>
      </Label>

      <Input type="text" readOnly value={shortUrl} className="mt-4" />

      <div className="flex gap-2 mt-4">
        <Button className="">Copy</Button>
        <Button className="">
          <Link href={shortUrlHash ?? ""} target="_blank">
            Open Link
          </Link>
        </Button>
      </div>
    </section>
  );
}
