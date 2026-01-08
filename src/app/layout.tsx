import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salim Ansari | SDE 2 - Software Development Engineer",
  description:
    "SDE 2 Software Development Engineer specializing in full-stack development with expertise in React, Next.js, Node.js, and modern web technologies. Building scalable, high-performance applications with clean architecture and best practices.",
  keywords: [
    "SDE 2",
    "Software Development Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Salim Ansari" }],
  openGraph: {
    title: "Salim Ansari | SDE 2 - Software Development Engineer",
    description:
      "SDE 2 Software Development Engineer specializing in full-stack development with expertise in React, Next.js, Node.js, and modern web technologies.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
