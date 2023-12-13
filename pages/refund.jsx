import Link from "next/link";
import styles from "../styles/pages.module.css";

export default function Refund() {
  return (
    <main className={styles.main}>
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
              <a href="mailto:mail@mail.com" style={{ color: "#5DBBF0" }}>
                mail@mail.com
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
