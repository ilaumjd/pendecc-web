"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useState } from "react";

export default function Home() {
  const [showCustomUrl, setShowCustomUrl] = useState<CheckedState>(false);

  return (
    <section className="flex flex-col min-h-screen items-center justify-center gap-4 mx-auto max-w-md">
      <Label className="text-4xl font-bold mb-4">PENDE.CC</Label>
      <Input type="url" placeholder="Enter URL" className="w-full h-14" />
      <div className="flex items-center space-x-2 self-start h-10">
        <Checkbox
          id="terms"
          onCheckedChange={(checked) => setShowCustomUrl(checked)}
        />
        {showCustomUrl ? (
          <div className="flex gap-1">
            <Label>{"https://pende.cc/"}</Label>
            <Input
              placeholder="Custom URL"
              className="w-full relative"
              disabled={false}
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
      <Button size="lg">Shorten</Button>
    </section>
  );
}
