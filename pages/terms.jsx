import Link from "next/link";
import styles from "../styles/pages.module.css";

import { NextSeo } from "next-seo";

const SEO = {
  title: "Global Entry Pro Assist | Terms and Conditions",
  description:'We provide  application assistance with Global Entry, Nexus and Sentri programs, part of the Trusted Traveler Program. Apply with us here.',
  

  openGraph: {
    title: "Global Entry Pro Assist | Terms and Conditions",
    description:'We provide  application assistance with Global Entry, Nexus and Sentri programs, part of the Trusted Traveler Program. Apply with us here.'
   
  },
};

export default function Terms() {
  return (
    <main className={styles.main}>
      <NextSeo {...SEO} />
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
            application assistance for Global Entry, Nexus and Sentri Programs, <br />
            part of the Trusted Traveler Program.
            <br />
            <br />
            It&#39;s important to note that we are an independent entity and have no
            affiliation with any government agency. While we can&#39;t influence  <br />the
            outcome of your membership application, we strive to provide the
            best service.
            <br />
            <br />
            Our fee covers the service provided by our experts. Additional fees
            may be required during your interview or via the credit card
            provided  <br /> on your application form.
            <br />
            <br />
            If, for any reason, we haven&#39;t processed your application, we are
            happy to issue refunds. Please direct your refund requests  <br />to <span ><a href="mailto:globalentryoffice@gmail.com" style={{color: "#5DBBF0"}}>globalentryoffice@gmail.com</a></span>, 
            and we will promptly assist you.
            <br />
            <br />
            However, it&#39;s important to acknowledge that Global Entry Pro Assist
            cannot be held accountable for any information, omissions, <br /> or errors
            found on our website or the application form.
            <br />
            <br />
            Thank you for choosing Global Entry Pro Assist for your fast track
            and registered traveler needs. If you have any further inquiries, <br />
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
