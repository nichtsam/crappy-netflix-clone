import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:description"
          content="Watch Netflix movies &amp; TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
