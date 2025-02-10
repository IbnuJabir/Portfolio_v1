import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Kedir Jabir",
//   description: "Kedir Jabir's Portfolio Website",
//   openGraph: {
//     title: "Kedir Jabir",
//     description: "Kedir Jabir's Portfolio Website",
//     type: "website",
//     locale: "en_US",
//     url: "https://ibnujabir.tech/",
//     siteName: "Kedir Jabir",
//     images: [
//       {
//         url: "https://drive.google.com/file/d/1VvbHS6nSTonxsDd4WW7P8-_yba3_Igj3/view?usp=sharing",
//         alt: "Kedir Jabir",
//         width: 1200,
//         height: 630,
//       },
//     ],
//   },
// };
export const metadata: Metadata = {
  title: "Kedir Jabir - Full Stack Developer",
  description:
    "Explore Kedir Jabir's portfolio, showcasing expertise in full-stack development, modern web technologies, and scalable software solutions.",
  openGraph: {
    title: "Kedir Jabir - Full Stack Developer",
    description:
      "Discover Kedir Jabir's journey as a full-stack developer, featuring innovative projects, technical expertise, and industry experience.",
    type: "website",
    locale: "en_US",
    url: "https://ibnujabir.tech/",
    siteName: "Kedir Jabir Portfolio",
    images: [
      {
        url: "/logo.png",
        alt: "Kedir Jabir - Full Stack Developer",
        width: 600,
        height: 430,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kedir Jabir - Full Stack Developer",
    description:
      "Showcasing full-stack expertise in modern web technologies, scalable architectures, and impactful projects.",
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
      </body>
    </html>
  );
}
