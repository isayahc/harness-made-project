import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello, World!",
  description: "A Hello World Next.js app built in a Daytona sandbox.",
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
