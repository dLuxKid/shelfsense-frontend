import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShelfSense - Your Physical Library On The Web",
  description:
    "ShelfSense is the ultimate solution for managing your home library of physical books. With ShelfSense, you can organize, categorize, and track your books with ease, right from the web. Keep tabs on what you own, lend books to friends, and discover new reads. Simplify your library management experience with ShelfSense and bring order to your bookshelves.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
