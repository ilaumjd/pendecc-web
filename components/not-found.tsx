import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

type NotFoundProps = {
  shortUrl: string;
};

export default function NotFound(params: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Label className="text-2xl">Not Found</Label>
      <Label className="mt-4">{`The URL https://pende.cc/${params.shortUrl} is not found.`}</Label>
      <Label className="mt-2">You can claim it by yourself 😁</Label>
      <Button className="mt-4">
        <Link href="/">← Home</Link>
      </Button>
    </div>
  );
}
