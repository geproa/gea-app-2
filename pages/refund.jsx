import Link from "next/link";
import styles from "../styles/pages.module.css";

import { NextSeo } from "next-seo";

const SEO = {
  title: "Global Entry Pro Assist | Refund Policy",
  description:'We provide  application assistance with Global Entry, Nexus and Sentri programs, part of the Trusted Traveler Program. Apply with us here.',
  

  openGraph: {
    title: "Global Entry Pro Assist | Refund Policy",
    description:'We provide  application assistance with Global Entry, Nexus and Sentri programs, part of the Trusted Traveler Program. Apply with us here.'
   
  },
};

export default function Refund() {
  return (
    <main className={styles.main}>
      <NextSeo {...SEO} />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.titleH1}>
          <h1>Refund Policy</h1>
        </div>
      </section>
      {/* Hero Section - End*/}

      <section className={styles.allContent}>
        {/* faq1 */}
        <div className={styles.faq}>
          <p>
            If you have reconsidered your decision regarding our service, we
            assure you that we are fully prepared to accommodate your needs.
            <br />
            <br />
            To ensure a swift refund, simply drop an email to{" "}
            <span>
              <a href="mailto:globalentryoffice@gmail.com" style={{ color: "#5DBBF0" }}>
              globalentryoffice@gmail.com
              </a>
            </span>
            .
            <br />
            <br />
            We&#39;ll process your refund within 72 business hours. 
            <br />
            <br />
            Please, bear in mind that we offer full refunds for applications
            that haven&#39;t been submitted or processed yet.
          </p>
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
