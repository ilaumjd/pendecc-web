"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useShortener } from "./hook";
import { CheckedState } from "@radix-ui/react-checkbox";

export default function Home() {
  const { loading, error, shortenUrl } = useShortener();

  const [inputUrl, setInputUrl] = useState("");
  const [showCustomUrl, setShowCustomUrl] = useState<CheckedState>(false);
  const [customUrl, setCustomUrl] = useState("");

  const handleShorten = () => {
    if (inputUrl) {
      shortenUrl(inputUrl, customUrl);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 mx-auto max-w-md mt-10 md:mt-30">
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
              disabled={false}
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
      <Button size="lg" disabled={loading} onClick={handleShorten}>
        Shorten
      </Button>
    </section>
  );
}
