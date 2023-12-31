import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apple",
  description: "Explore Your Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo/applelogo.png" type="image/png" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
