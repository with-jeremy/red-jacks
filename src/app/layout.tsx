import type { Metadata } from "next";
import { Abel, Dancing_Script } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const abel = Abel({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abel",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancingScript",
});

export const metadata: Metadata = {
  title: "Red Jacks | Punk Rock Venue Management",
  description: "Manage events, tickets, and more for Red Jacks punk rock venue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body
          className={`${abel.variable} ${dancingScript.variable} antialiased bg-background text-foreground`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
