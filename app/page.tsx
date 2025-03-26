"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useShortener } from "./hook";
import { CheckedState } from "@radix-ui/react-checkbox";
import { AlertError } from "@/components/alert-error";

export default function Home() {
  const { loading, error, shortenUrl, reset } = useShortener();

  const [inputUrl, setInputUrl] = useState("");
  const [showCustomUrl, setShowCustomUrl] = useState<CheckedState>(false);
  const [customUrl, setCustomUrl] = useState("");

  const disableSubmitButton =
    loading || !inputUrl || (showCustomUrl && !customUrl);

  const handleShorten = () => {
    if (inputUrl) {
      shortenUrl(inputUrl, customUrl);
    }
  };

  useEffect(reset, [inputUrl, customUrl]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 mx-auto max-w-md">
      <Label className="self-start">{"Enter your long URL:"}</Label>
      <Input
        type="url"
        placeholder="https://example.com/long-url"
        className="w-full h-14"
        onChange={(e) => setInputUrl(e.target.value)}
      />
      <div className="flex items-center space-x-2 self-start h-10">
        <Checkbox
          id="terms"
          onCheckedChange={(checked) => setShowCustomUrl(checked)}
        />
        {showCustomUrl ? (
          <div className="flex gap-1">
            <Label>{"https://pende.cc/"}</Label>
            <Input
              placeholder="custom-url"
              className="w-full relative"
              onChange={(e) => setCustomUrl(e.target.value)}
            />
          </div>
        ) : (
          <Label
            htmlFor="terms"
            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Custom URL
          </Label>
        )}
      </div>
      <Button
        size="lg"
        disabled={disableSubmitButton}
        onClick={handleShorten}
        className="disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Shorten
      </Button>
      {error && <AlertError message={error} />}
    </section>
  );
}
