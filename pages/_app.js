import "@/styles/globals.css";
import { AuthProvider } from "@/lib/auth";

import {NextUIProvider} from "@nextui-org/react";

import Header from '../components/Header'
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
    </NextUIProvider>
  );
}
