import Link from "next/link";
import styles from "../styles/pages.module.css";

export default function Terms() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.titleH1}>
          <h1>Terms and Conditions</h1>
        </div>
      </section>
      {/* Hero Section - End*/}

      <section className={styles.allContent}>
        {/* faq1 */}
        <div className={styles.faq}>
          <p>
            <b>Global Entry Pro Assist</b> is a private company specializing in
            application assistance for Global Entry, Nexus and Sentri Programs,
            part of the Trusted Traveler Program.
            <br />
            <br />
            It&#39;s important to note that we are an independent entity and have no
            affiliation with any government agency. While we can&#39;t influence the
            outcome of your membership application, we strive to provide the
            best service.
            <br />
            <br />
            Our fee covers the service provided by our experts. Additional fees
            may be required during your interview or via the credit card
            provided on your application form.
            <br />
            <br />
            If, for any reason, we haven&#39;t processed your application, we are
            happy to issue refunds. Please direct your refund requests to <span ><a href="mailto:mail@mail.com" style={{color: "#5DBBF0"}}>mail@mail.com</a></span>, 
            and we will promptly assist you.
            <br />
            <br />
            However, it&#39;s important to acknowledge that Global Entry Pro Assist
            cannot be held accountable for any information, omissions, or errors
            found on our website or the application form.
            <br />
            <br />
            Thank you for choosing Global Entry Pro Assist for your fast track
            and registered traveler needs. If you have any further inquiries,
            don&#39;t hesitate to reach out.
          </p>
        </div>
        <section className={styles.ctaBtns}>
          <Link href="/usa-info">USA Global Entry</Link>
          <Link href="/canada-info">Canada NEXUS</Link>
          <Link href="/mexico-info">Mexico Sentri</Link>
        </section>
      </section>
    </main>
  );
}
