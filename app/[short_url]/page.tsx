import { use } from "react";
import RedirectClient, { RedirectProps } from "./client";

export async function generateMetadata({ params }: { params: RedirectProps }) {
  return {
    title: `pende.cc - ${params.short_url}`,
    description: `Make your long link pendecc! - Redirecting to ${params.short_url}!`,
  };
}

export default function Redirect({
  params,
}: {
  params: Promise<RedirectProps>;
}) {
  const unwrappedParams = use(params);
  return <RedirectClient short_url={unwrappedParams.short_url} />;
}
