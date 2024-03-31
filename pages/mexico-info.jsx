import Link from "next/link";
import styles from "../styles/pages.module.css";

import { NextSeo } from "next-seo";

const SEO = {
  title: "Global Entry Pro Assist | Mexico SENTRI",
  description:'We provide  application assistance with Global Entry, Nexus and Sentri programs, part of the Trusted Traveler Program. Apply with us here.',
  

  openGraph: {
    title: "Global Entry Pro Assist | Mexico SENTRI",
    description:'We provide  application assistance with Global Entry, Nexus and Sentri programs, part of the Trusted Traveler Program. Apply with us here.'
   
  },
};

export default function Mexico() {
  return (
    <main className={styles.main}>
       <NextSeo {...SEO} />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.titleH1}>
          <h1>Mexico SENTRI</h1>
        </div>
      </section>
      {/* Hero Section - End*/}

      <section className={styles.allContent}>
        {/* faq1 */}
        <div className={styles.faq}>
          <h3>What is Sentri?</h3>
          <p>
            The SENTRI (Secure Electronic Network for Travelers Rapid
            Inspection) program, run by the US Customs and Border Protection
            (CBP), aims to make travel inspections faster and safer for eligible
            travelers.
            <br />
            <br />
            The SENTRI Card serves as a border pass that allows for quicker
            crossings between Mexico and the United States.
            <br />
            <br />
            If you prefer walking across the border, you can use your SENTRI
            pass without any vehicle registration.
            <br />
            <br />
            However, if you plan to travel by car, you&#39;ll need to register
            it with the program. You can do this when you fill out your
            application form, during your interview, or at a later date by
            visiting an enrollment center.
            <br />
            <br />
            Make sure to bring all the necessary car documents and have your
            vehicle ready for inspection.
            <br />
            <br />
            Keep in mind that there&#39;s a chance you may be selected for
            additional examination when entering Mexico or the United States.
            <br />
            <br />
            It&#39;s crucial to follow the program&#39;s rules and conditions.
            Any violations will result in appropriate enforcement measures and
            the loss of your membership privileges.
            <br />
            <br />
            The processing time for the program may take between 10-12 months.
          </p>
        </div>

        {/* faq2 */}
        <div className={styles.faq}>
          <h3>Who can help me with my Sentry application?</h3>
          <p>
            Global Entry Pro Assist offers specialized services in fast track
            programs for global passport control.
            <br />
            <br />
            Our dedicated team strives to maximize the success of your
            application by ensuring it is comprehensive, precise, and devoid of
            errors.
            <br />
            <br />
            We not only guide you through any supplementary requirements and
            necessary documents but also offer insights into potential
            application hurdles.
          </p>
        </div>

        {/* faq3 */}
        <div className={styles.faq}>
          <h3>How do I apply for Sentri?</h3>
          <p>
            At Global Entry Pro Assist, we specialize in meticulously checking
            and processing applications for Trusted Traveler’s programs. 
            <br />
            <br />
            As a private company, we operate independently from any government
            agency, ensuring impartiality in the outcome of your membership.
          </p>
        </div>

        {/* steps 1 */}
        <div className={styles.steps}>
          <h4>Here is how our process works, getting started is a breeze:</h4>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p>
                Step 1: Submit your application and pay the Global Entry Pro
                Assist fee (via PayPal).
              </p>
            </div>
            <div className={styles.card}>
              <p>Step 2: Our assigned agent will reach out to you via email.</p>
            </div>
            <div className={styles.card}>
              <p>
                Step 3: Our experts fill out your documents and send them to the
                government.
              </p>
            </div>
            <div className={styles.card}>
              <p>
                Sit back, relax, and let Global Entry Pro Assist make your
                journey smoother.
              </p>
            </div>
          </div>
        </div>
        {/* steps 2 */}
        <div className={styles.steps}>
          <h4>NEXT steps you need to follow to complete the process:</h4>
          <div className={styles.cards}>
            <div className={styles.cardBlue}>
              <li>pay the required government fee</li>
            </div>
            <div className={styles.cardBlue}>
              <li>online pre-enrollment</li>
            </div>
            <div className={styles.cardBlue}>
              <li>schedule an interview at an enrollment center</li>
            </div>
            <div className={styles.cardBlue}>
              <li>provide your fingerprints and verify your ID</li>
            </div>
          </div>
          <div className={styles.cta}>
            <button className={styles.ctaBtn}>
              <Link href="apply-mexico">APPLY ONLINE</Link>
            </button>
          </div>
        </div>

        {/* faq4 */}
        <div className={styles.faq}>
          <h3>How much does it cost to get Sentri?</h3>
          <p>
            If you want to save precious time, let our experts handle the
            paperwork for you. By choosing our services, you can experience a
            hassle-free application process, with the total cost amounting to
            $149,00 (One-time payment via PayPal).
            <br />
            <br />
            This fee is payable at the time of application submission and covers
            the cost of processing your application with our help.
            <br />
            <br />
            To apply for Sentri, you&#39;ll need to submit your application
            along with a one-time government fee of $122,25.
            <br />
            <br />
            <Link
              href="/apply-mexico"
              style={{ color: "#5DBBF0", fontWeight: "bold" }}
            >
              APPLY NOW
            </Link>
          </p>
        </div>

        {/* faq5 */}
        <div className={styles.faq}>
          <h3>
            Who qualifies for Sentri pass? What are the eligibility requirements
            for SENTRI membership?
          </h3>
          <p>
            Both Mexican nationals and permanent residents, as well as United
            States nationals and permanent residents, are eligible for SENTRI.
            <br />
            <br />
            SENTRI membership is available to individuals of all ages, with the
            exception that applicants under 18 must obtain consent from a parent
            or guardian.
          </p>
        </div>

        {/* faq6 */}
        <div className={styles.faq}>
          <h3>What are the benefits of the Sentri card?</h3>
          <p>
            The SENTRI card offers numerous advantages, with the primary benefit
            being swift access to Mexico and the USA through the dedicated
            SENTRI lanes at land borders.
            <br />
            <br />
            SENTRI provides the following perks:
          </p>
          <br />
          <ul>
            <li>Elimination of processing lines</li>
            <li>Streamlined paperwork procedures</li>
            <li>Decreased waiting periods</li>
            <li>Access to Global Entry kiosks within the United States</li>
          </ul>
        </div>

        {/* faq7 */}
        <div className={styles.faq}>
          <h3>How do I renew my Sentri membership?</h3>
          <p>
            SENTRI Membership remains valid for a duration of 5 years, as long
            as the membership conditions are not violated. 
            <br />
            <br />
            The expiration date coincides with your birthday. To renew your
            SENTRI membership, you can do so within 3 months prior to its
            expiration, which extends the membership for another 5 years
            starting from your next birthday. 
            <br />
            <br />
            However, if you apply after the membership has expired, you will
            need to reapply as a new SENTRI applicant and attend a mandatory
            interview.
            <br />
            <br />
            If your personal information has remained unchanged during the past
            5 years of your SENTRI membership and you renew your SENTRI pass
            before it expires, you will not be required to attend an interview. 
            <br />
            <br />
            However, if there have been any changes to your data, such as a new
            passport or address, you may be requested to attend an interview at
            an enrollment center of your choosing.
            <br />
            <br />
            If you&#39;re looking to cross the US-Mexican border by land, air,
            or sea, while avoiding lengthy lines at SENTRI card border crossing
            points, Global Entry Pro Assist can help you with renewing your
            SENTRI membership. 
            <br />
            <br />
            We specialize in fast track programs for global passport control and
            make sure your application is precise by thoroughly reviewing and
            correcting any errors.
            <br />
            <br />
            Our expertise lies in simplifying the application process and
            guiding you through any additional steps or documentation
            requirements.
            <br />
            <br />
            <Link
              href="/apply-mexico"
              style={{ color: "#5DBBF0", fontWeight: "bold" }}
            >
              APPLY NOW
            </Link>
          </p>
        </div>

        {/* faq8 */}
        <div className={styles.faq}>
          <h3>What are the Sentri kiosks?</h3>
          <p>
            SENTRI kiosks can be found at every border entry point along the
            US-Mexican border, providing convenient access for members. 
            <br />
            <br />
            Additionally, members enjoy the privilege of utilizing Global Entry
            lanes at major US airports and TSA (Transportation Security
            Administration) Precheck lanes when departing from the USA. 
            <br />
            <br />
            These TSA Precheck lanes expedite the security screening process for
            passengers.
            <br />
            <br />
            To be eligible for TSA Precheck, Global Entry members must provide
            their membership number, also known as the Known Traveler Number
            (KTN), when making flight reservations.
          </p>
        </div>

        {/* faq9 */}
        <div className={styles.faq}>
          <h3>
            If I have a SENTRI card, can my children join me in the SENTRI lane
            when crossing the border?
          </h3>
          <p>
            In order to utilize the SENTRI lane, both children and newborn
            infants must possess their own individual SENTRI card. However,
            children under the age of 18 are exempt from any associated fees.
          </p>
        </div>

        {/* faq10 */}
        <div className={styles.faq}>
          <h3>How long does it take to get a SENTRI card?</h3>
          <p>
            Typically, it may take around 3 months to receive a SENTRI card.
          </p>
        </div>

        {/* faq11 */}
        <div className={styles.faq}>
          <h3>How do I book my SENTRI interview?</h3>
          <p>
            When you fill out our application form, you will have the option to
            choose a preferred enrollment center.
          </p>
        </div>

        {/* faq12 */}
        <div className={styles.faq}>
          <h3>
            What factors can lead to the rejection of a SENTRI card application?
          </h3>
          <p>
            Denial of a SENTRI card can stem from various factors.
            <br />
            <br />
            Incomplete or inaccurate information provided on the application
            form, including data entry errors, may result in denial.  
            <br />
            <br />
            Other grounds for denial include previous convictions and
            non-compliance with customs or immigration regulations. 
            <br />
            <br />
            If you disagree with the denial, you have the option to challenge it
            through the SENTRI Ombudsman.
          </p>
        </div>

        {/* faq13 */}
        <div className={styles.faq}>
          <h3>
            How do I update my passport/address/car info once I have my SENTRI
            card?
          </h3>
          <p>
            To update your passport, address, or vehicle information after
            receiving your SENTRI card, you have the option of visiting an
            enrollment center located on either side of the US-Canada border. 
            <br />
            <br />
            Alternatively, you can make the changes online by following the
            instructions provided in the email we sent to you.
          </p>
        </div>

        {/* faq14 */}
        <div className={styles.faq}>
          <h3>What if I have lost my SENTRI card?</h3>
          <p>
            If your SENTRI card is misplaced or stolen, it is necessary to visit
            one of the SENTRI enrollment centers and report the incident. A
            replacement card can be issued for a nominal fee.
          </p>
          <div className={styles.ctaDiv}>
            <button className={styles.ctaBtn2}>
              <Link href="/apply-mexico">APPLY NOW</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
