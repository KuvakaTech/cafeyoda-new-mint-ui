import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const Document = () => {
  return (
    <Html>
      <Head>
        <title>CafeYoda Mint</title>
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.discordapp.com/attachments/895650450186047498/1070236283307298836/favicon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
