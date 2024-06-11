import {
  Comfortaa,
  Inter,
  Inter_Tight,
  JetBrains_Mono,
  Urbanist,
} from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "dark min-h-screen bg-black font-sans antialiased",
          fontSans.variable,
          fontDisplay.variable,
          fontMono.variable,
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
