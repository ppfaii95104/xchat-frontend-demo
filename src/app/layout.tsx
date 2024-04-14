import "./globals.css";

import Head from "next/head";
import React, { useState } from "react";
import { Noto_Sans_Thai, Sarabun } from "next/font/google";
import LayoutPage from "@/components/layout/LayoutPage";
//👇 Configure our font object
const noto = Noto_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-noto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <Head>
        {/* preconnect scripts... */}
        <title>xchat</title>
        <link rel="icon" href="../asset/logo/logo.png"></link>
      </Head>
      <body className={`${noto.variable}`}>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
