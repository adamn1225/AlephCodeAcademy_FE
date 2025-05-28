import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aleph Code Academy",
  description: "Programming for Kids"
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
