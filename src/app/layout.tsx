import "./globals.css";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Noto_Sans_Thai, Sarabun } from "next/font/google";
import LayoutPage from "@/components/layout/LayoutPage";

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
      <head>
        <title>xChat</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>

      <body className={`${noto.variable}`}>
        {/* <LayoutPage>{children}</LayoutPage> */}
        {children}
      </body>
    </html>
  );
}
