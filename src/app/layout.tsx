import "./globals.css";
import { Noto_Sans_Thai } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import React, { useState } from "react";

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
      <Head>
        {/* preconnect scripts... */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
