import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TypeBetter - Type 3x faster with AI that rewrites in real time",
  description: "TypeBetter sits between your keyboard and every Mac app, improving what you write before it hits the screen. Works in Slack, Gmail, Notion, and everywhere you type.",
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    title: "TypeBetter - Type 3x faster with AI that rewrites in real time",
    description: "AI-powered writing improvement for Mac. No copy-paste. No prompts. Just type.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TypeBetter - Type 3x faster with AI",
    description: "AI-powered writing improvement for Mac. Works in every app.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
