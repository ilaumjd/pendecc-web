/* eslint-disable @typescript-eslint/no-explicit-any */
import SuccessClient from "./client";

export async function generateMetadata({ params }: any) {
  const { short_url } = await params;
  return {
    title: `pende.cc - ${short_url}`,
    description: `URL Shortener - Redirecting to ${short_url}!`,
  };
}

export default async function Success({ params }: any) {
  const { short_url } = await params;
  return <SuccessClient shortUrl={short_url} />;
}
