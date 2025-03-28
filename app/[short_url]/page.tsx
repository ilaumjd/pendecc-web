/* eslint-disable @typescript-eslint/no-explicit-any */
import RedirectClient from "./client";

export async function generateMetadata({ params }: any) {
  return {
    title: `pende.cc - ${params.short_url}`,
    description: `URL Shortener - Redirecting to ${params.short_url}!`,
  };
}

export default function Redirect({ params }: any) {
  return <RedirectClient shortUrl={params.short_url} />;
}
