import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopCart – Smart Shopping Made Simple",
  description: "ShopCart is a modern e-commerce platform built with Next.js 15, designed for a fast, seamless, and mobile-friendly shopping experience. Explore products, manage your cart, and checkout with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
