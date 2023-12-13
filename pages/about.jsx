import Link from "next/link";
import styles from "../styles/pages.module.css";

export default function AboutUs() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.titleH1}>
          <h1>About us</h1>
        </div>
      </section>
      {/* Hero Section - End*/}

      <section className={styles.allContent}>
        {/* faq1 */}
        <div className={styles.faq}>
          <h2
            style={{ fontSize: "32px", fontWeight: "bold", color: "#505050" }}
          >
            Who are we?
          </h2>
          <h3>
            Global Entry Pro Assist is your reliable partner for hassle-free
            border crossing passes.
          </h3>
          <p>
            We understand the challenges and complexities involved in the Global
            Entry, Nexus, and Sentri programs, which are all part of the Trusted
            Traveler Program. That&#39;s why we&#39;re here to help with the
            application.
            <br />
            <br />
            Our experienced team is dedicated to simplifying the application
            process and ensuring your success. 
            <br />
            <br />
            We&#39;ll not only provide expert guidance but also demystify the
            government&#39;s jargon, making it easier for you to navigate through
            the requirements.
            <br />
            <br />
            At Global Entry Pro Assist, we specialize in meticulously checking
            and processing applications for Trusted Traveler’s programs. 
            <br />
            <br />
            As a private company, we operate independently from any government
            agency, ensuring impartiality in the outcome of your membership.
            <br />
            <br />
            Our team at Global Entry Pro Assist is committed to providing you
            with professional and efficient service, ensuring a seamless
            experience throughout your application journey.
          </p>
        </div>

        {/* faq2 */}
        <div className={styles.faq}>
          <h3>What are the benefits of using our service?</h3>
          <p>
            You will receive expert guidance in choosing the travel program that
            suits you best. We will deal with all the paperwork and save your
            precious time.
          </p>
        </div>

        {/* faq3 */}
        <div className={styles.faq}>
          <h3>Our experts provide:</h3>
          <ul>
            <li>
              <p>Seamless online form </p>
            </li>
            <li>
              <p>
                Clear and simple explanations, avoiding confusing government
                terminology
              </p>
            </li>
            <li>
              <p>
                Comprehensive advice on required documents for applications 
              </p>
            </li>
            <li>
              <p>Information on visa requirements</p>
            </li>
            <li>
              <p>
                Recommendations and insights on fast track programs worldwide
              </p>
            </li>
          </ul>
        </div>

        {/* faq4 */}
        <div className={styles.faq}>
          <h3>
            Why Choose Global Entry Pro Assist?
            <br />
            Let us give you some compelling reasons:
          </h3>
          <ol>
            <li>
              <p>
                <b>1. Unmatched Expertise:</b> With years of experience and
                in-depth knowledge of the application process, our experts have
                what it takes to handle all your needs. We stay updated with the
                latest program requirements, giving your application an edge.
              </p>
            </li>
            <br />
            <li>
              <p>
                <b>2. Streamlined Process:</b> Say goodbye to confusion and
                paperwork. Our goal is to make the entire application process
                stress-free for you. We have developed streamlined procedures,
                ensuring a smooth experience from start to finish.
              </p>
            </li>
            <br />
            <li>
              <p>
                <b>3. Error-Free Applications:</b> We leave no room for
                mistakes. Our meticulous attention to detail ensures that your
                application is accurate and complete. This significantly
                increases your chances of approval, saving you valuable time and
                avoiding potential delays.
              </p>
            </li>
            <br />
            <li>
              <p>
                <b>4. Expedited Response Time:</b> We understand the importance
                of your time. Our dedicated team is committed to providing
                prompt assistance.
                <br />
                Have a question? Shoot us a message, and we&#39;ll get back to you
                within 24 hours.. Your peace of mind is our priority.
              </p>
            </li>
            <br />
            <li>
              <p>
                <b>5 .Trusted Partner:</b> Join a community of satisfied
                travelers who have experienced the benefits of our exceptional
                services.
                <br />
                <br />
                When you choose Global Entry Pro Assist, you&#39;re choosing a
                reliable partner that will ensure your journey is smooth and
                worry-free.
                <br />
                <br />
                Don&#39;t settle for long queues and frustrating delays.
                <br />
                <br />
                Choose Global Entry Pro Assist for a seamless, expedited travel
                experience.
                <br />
                <br />
                Contact us today and let Global Entry Pro Assist be your key to
                hassle-free travel.
              </p>
            </li>
          </ol>
        </div>
        <div className={styles.ctaDiv}>
        <button className={styles.ctaBtn2}>
          <Link href="/apply">APPLY ONLINE NOW</Link>
        </button>
        </div>
      </section>
    </main>
  );
}
