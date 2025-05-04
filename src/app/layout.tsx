import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kedir Jabir - Full Stack Developer",
  description: "Building scalable and modern web applications.",
  openGraph: {
    title: "Kedir Jabir - Full Stack Developer",
    description:
      "Showcasing expertise in full-stack development and web technologies.",
    type: "website",
    locale: "en_US",
    url: "https://ibnujabir.tech/",
    siteName: "Kedir Jabir Portfolio",
    images: [
      {
        url: "/logo.png",
        alt: "Kedir Jabir - Full Stack Developer",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kedir Jabir - Full Stack Developer",
    description: "Building scalable and modern web applications.",
    images: ["/logo.png"],
    site: "@Ibnu_J1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
