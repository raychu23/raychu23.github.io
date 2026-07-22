import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://raychu23.github.io"),
  title: {
    default: "Your Name - Software Engineer",
    template: "%s - Your Name",
  },
  description:
    "Software engineer building thoughtful, reliable products and exploring ideas through research.",
  openGraph: {
    title: "Your Name - Software Engineer",
    description: "Selected software engineering projects and research.",
    images: [{ url: "/og.png", width: 1733, height: 909, alt: "Your Name - Software Engineer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Software Engineer",
    description: "Selected software engineering projects and research.",
    images: ["/og.png"],
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
