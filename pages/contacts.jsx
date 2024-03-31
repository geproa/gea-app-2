import Link from "next/link";
import styles from "../styles/pages.module.css";

import ContactForm from "../components/ContactForm";

import { NextSeo } from "next-seo";

const SEO = {
  title: "Global Entry Pro Assist | Contact Us",
  description:'We provide  application assistance with Global Entry, Nexus and Sentri programs, part of the Trusted Traveler Program. Apply with us here.',
  

  openGraph: {
    title: "Global Entry Pro Assist | Contact Us",
    description:'We provide  application assistance with Global Entry, Nexus and Sentri programs, part of the Trusted Traveler Program. Apply with us here.'
   
  },
};

export default function Contacts() {
  return (
    <main className={styles.main}>
         <NextSeo {...SEO} />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.titleH1}>
          <h1>Contacts</h1>
        </div>
      </section>
      {/* Hero Section - End*/}

      <section className={styles.allContent}>
        {/* faq1 */}
        <div className={styles.faq}>
          <h2
          className={styles.h2contacts}
            style={{
              color: "#505050",
              fontWeight: "bold",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            We are always available and ready to help if you have any questions.
          </h2>
          <ContactForm />
        </div>
        <br />
        <section className={styles.ctaBtns}>
          <Link href="/usa-info">USA Global Entry</Link>
          <Link href="/canada-info">Canada NEXUS</Link>
          <Link href="/mexico-info">Mexico Sentri</Link>
        </section>
      </section>
    </main>
  );
}
