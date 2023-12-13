import Link from "next/link";
import styles from "../styles/pages.module.css";

import ContactForm from "../components/ContactForm";

export default function Contacts() {
  return (
    <main className={styles.main}>
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
