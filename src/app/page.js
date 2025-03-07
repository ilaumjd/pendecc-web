"use client";
import { ThemeProvider } from "@emotion/react";
import HomeScreen from "./_home";
import { theme } from "./theme";

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}
