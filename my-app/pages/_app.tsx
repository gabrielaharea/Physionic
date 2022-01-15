import "../styles/globals.css";
import React, { useEffect, FC } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { CssBaseline, makeStyles } from "@mui/material";
import createEmotionCache from "./createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { EmotionCache } from "@emotion/cache";
import { theme } from "./theme";
import HomePage from "./components/HomeHero";
import Card2 from "./components/Card2";
import RewiewPages from "./components/ReviewCom";
import FaqText from "./components/FaqBox";
import { ThemeProvider } from "@emotion/react";
import PricingBox from "./components/PricingBox";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}

const App: FC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <div className="App">
      {" "}
      <Head>
        <title>Physionic</title>
        <meta name="description" content="Meet the Best Hospital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <HomePage />
        <Card2 />
        <RewiewPages />
        <FaqText />
        <PricingBox />
      </ThemeProvider>
    </div>
  );
};

export default App;
