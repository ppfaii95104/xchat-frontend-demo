import Image from "next/image";
import ChatPage from "./chat/page";
import Head from "next/head";
import { Noto_Sans_Thai } from "next/font/google";
//👇 Configure our font object
const noto = Noto_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"],
  display: "swap",
  variable: "--font-noto",
});

export default function Home() {
  return (
    <html lang="en">
      <Head>
        {/* preconnect scripts... */}
        <title>xchat</title>
        <link rel="icon" href="../asset/logo/logo.png"></link>
      </Head>
      <body className={noto.className}>
        <ChatPage />;
      </body>
    </html>
  );
}
