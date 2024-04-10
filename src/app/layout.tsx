import "./globals.css";
import { Noto_Sans_Thai } from "next/font/google";
import localFont from "next/font/local";
import React, { useState } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
//👇 Configure our font object
const noto = Noto_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"],
  display: "swap",
  variable: "--font-noto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
