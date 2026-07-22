import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: "Your Name — Software Engineer",
      template: "%s — Your Name",
    },
    description:
      "Software engineer building thoughtful, reliable products and exploring ideas through research.",
    openGraph: {
      title: "Your Name — Software Engineer",
      description: "Selected software engineering projects and research.",
      images: [{ url: "/og.png", width: 1733, height: 909, alt: "Your Name — Software Engineer" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Your Name — Software Engineer",
      description: "Selected software engineering projects and research.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
