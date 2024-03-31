import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preload" /> */}
        <meta name="theme-color" content="#33333" />
        <meta property="og:image" content="/images/Global-Entry-Pro-Assist-Logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="228" />
        <meta property="og:image:height" content="122" />
        <meta
          name="description"
          content="We provide  application assistance with Global Entry, Nexus and Sentri programs, part of the Trusted Traveler Program. Apply with us here."
        />
        <meta property="og:title" content="Global Entry Pro Assist" />
        <meta property="og:url" content="www.globalentryproassist.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
