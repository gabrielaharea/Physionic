import type { NextPage } from "next";
import React from "react";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import App from "./_app";
import HomePage from "./components/HomeHero";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Home;
