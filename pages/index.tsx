import React from "react";
import Head from "next/head";
import GoogleMapViewer from "./GoogleMapViewer";

const Home: React.FC<{}> = () => {
  return (
    <div>
      <Head>
        <title>Sakay Davao</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleMapViewer />
    </div>
  );
};

export default Home;