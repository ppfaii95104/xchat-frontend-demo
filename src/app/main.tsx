import React from "react";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "var(--font-noto)",
        colorPrimary: "#0A4595",
      },
      components: {
        Radio: {
          buttonSolidCheckedActiveBg: "#FF6C11",
          buttonSolidCheckedBg: "#FF6C11",
          buttonSolidCheckedHoverBg: "#FF6C11",
        },
      },
    }}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;
