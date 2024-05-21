import "@/styles/globals.css";
import { AuthProvider } from "@/lib/auth";

import { NextUIProvider } from "@nextui-org/react";

import Header from "../components/Header";
import Footer from "@/components/Footer";

import CookieConsent from "@/components/CookiesModal";

import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <AuthProvider>
        <DefaultSeo {...SEO} />
        <Header />
        <Component {...pageProps} />
        <CookieConsent />
        <Footer />
      </AuthProvider>
    </NextUIProvider>
  );
}
