"use client";
import { ThemeProvider } from "@emotion/react";
import HomeScreen from "../screens/home-screen";
import { theme } from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />;
    </ThemeProvider>
  );
}
