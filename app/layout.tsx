import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pende.cc",
  description: "Make your long link pendecc!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header */}
          <header className="sticky top-0 z-50 flex items-center p-4">
            <div className="flex-1" />
            <Label className="text-4xl font-bold cursor-pointer">
              <Link href="/">PENDE.CC</Link>
            </Label>
            <div className="flex-1 flex justify-end">
              <ModeToggle />
            </div>
          </header>

          {/* Main Content */}
          <main className="container flex-1 px-4 md:mx-auto">{children}</main>

          {/* Footer */}
          <footer className="sticky bottom-0 z-50 flex justify-end p-4">
            <Label>
              Created by{" "}
              <Link
                className="text-primary hover:text-primary/80 underline"
                href="https://ilaumjd.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ilaumjd
              </Link>
            </Label>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
