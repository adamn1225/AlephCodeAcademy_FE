import type { Metadata } from "next";
import "../globals.css";
import PublicTopNav from '@/components/layouts/PublicTopNav';
import PublicSideNav from '@/components/layouts/PublicSideNav';

export const metadata: Metadata = {
  title: "Aleph Code Academy",
  description: "Programming for Kids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen font-sans bg-gradient-to-br from-sky-100 via-pink-50 to-indigo-100">
          <PublicTopNav />
          <div className="flex flex-1">
            <PublicSideNav />
            <main className="flex-1 p-8 md:p-12 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}