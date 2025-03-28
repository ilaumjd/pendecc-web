/* eslint-disable @typescript-eslint/no-explicit-any */
import RedirectClient from "./client";

export async function generateMetadata({ params }: any) {
  const { short_url } = await params;
  return {
    title: `pende.cc - ${short_url}`,
    description: `URL Shortener - Redirecting to ${short_url}!`,
  };
}

export default async function Redirect({ params }: any) {
  const { short_url } = await params;
  return <RedirectClient shortUrl={short_url} />;
}
