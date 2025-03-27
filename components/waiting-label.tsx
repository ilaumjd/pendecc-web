import { useEffect, useState } from "react";
import { Label } from "./ui/label";

type WaitingLabelProps = {
  text: string;
};

export function WaitingLabel(params: WaitingLabelProps) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <Label className="text-2xl">
      {params.text}
      {Array.from({ length: counter % 4 }, () => ".").join("")}
    </Label>
  );
}
