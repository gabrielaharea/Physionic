import "../styles/globals.css";
import React, { useEffect, FC } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { CssBaseline, makeStyles, ThemeProvider } from "@mui/material";
import createEmotionCache from "./createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { EmotionCache } from "@emotion/cache";
import { theme } from "./theme";
import HomePage from "./components/HomeHero";
import Card2 from "./components/Card2";
import RewiewPages from "./components/ReviewCom"

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
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <HomePage />
      <Card2 />
      <RewiewPages />
    </div>
  );
};

export default App;
