import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://raychu23.github.io"),
  title: {
    default: "Raymond Chu - Software Engineer",
    template: "%s - Raymond Chu",
  },
  description:
    "Raymond Chu is a software engineer and AI/ML researcher at Grinnell College building practical systems across language models, computer vision, and data infrastructure.",
  openGraph: {
    title: "Raymond Chu - Software Engineer",
    description: "Selected software engineering projects and research by Raymond Chu.",
    images: [{ url: "/og-raymond-chu.png", width: 1568, height: 1003, alt: "Raymond Chu - Software Engineer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymond Chu - Software Engineer",
    description: "Selected software engineering projects and research by Raymond Chu.",
    images: ["/og-raymond-chu.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
