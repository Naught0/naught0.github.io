import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

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

export const metadata = {
  title: "James' Personal Site",
  description:
    "James' (@naught0) personal site, showcasing some projects and the sporadic blog post.",
};

export const viewport = {
  themeColor: "black",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
