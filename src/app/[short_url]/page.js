"use client";

import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function RedirectPage() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const fetchAndRedirect = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/urls/${params.short_url}`,
          {
            method: "GET",
          },
        );

        const data = await response.json();

        if (data.defaultUrl) {
          console.log(data.defaultUrl);
          window.location.href = `https://${data.defaultUrl}`;
        } else {
          router.push("/404");
        }
      } catch (err) {
        console.error("Error fetching URL:", err);
        router.push("/error");
      }
    };

    fetchAndRedirect();
  }, [params.short_url, router]);

  return <div>Redirecting...</div>;
}
