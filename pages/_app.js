import "@/styles/globals.css";
import { AuthProvider } from "@/lib/auth";

import Header from '../components/Header'
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}
