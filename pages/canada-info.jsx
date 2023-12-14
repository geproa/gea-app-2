import Link from "next/link";

import styles from "../styles/pages.module.css";

export default function Canada() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.titleH1}>
          <h1>Canada NEXUS</h1>
        </div>
      </section>
      {/* Hero Section - End*/}

      <section className={styles.allContent}>
        {/* faq1 */}
        <div className={styles.faq}>
          <h3>What is Nexus Canada?</h3>
          <p>
            NEXUS is a Trusted Traveler program created to make border clearance
            faster and easier for pre-approved, low-risk travelers entering
            Canada and the United States.
            <br />
            <br />
            With a single fee payment, NEXUS members enjoy expedited crossing
            privileges at air, land, and marine ports of entry that participate
            in the program.
            <br />
            <br />
            In a collaborative effort between the US Customs and Border
            Protection (CBP) and the Canada Border Services Agency (CBSA), NEXUS
            aims to streamline border crossings for its members while
            maintaining enhanced security measures.
            <br />
            <br />
            Each membership lasts 5 years and requires a machine-readable
            passport or permanent resident card. 
            <br />
            <br />
            At airports, members use NEXUS kiosks for fingerprint verification,
            customs declaration, and receive a transaction receipt. 
            <br />
            <br />
            Additional screening may occur, and non-compliance leads to
            enforcement action and membership revocation.
            <br />
            <br />
            The processing time for the program may take between 12-14 months.
          </p>
        </div>
        {/* faq2 */}
        <div className={styles.faq}>
          <h3>Who can help me with my Nexus application?</h3>
          Global Entry Pro Assist specializes in processing of NEXUS
          applications. 
          <br />
          <br />
          As an independent company, we are not affiliated with any government
          agency, and we do not have the authority to influence the status of
          your NEXUS membership.
        </div>
        {/* faq3 */}
        <div className={styles.faq}>
          <h3>What are the steps to apply  for NEXUS?</h3>
          At Global Entry Pro Assist, we specialize in meticulously checking and
          processing applications for Trusted Traveler’s programs.
          <br />
          <br />
          As a private company, we operate independently from any government
          agency, ensuring impartiality in the outcome of your membership.
        </div>
        {/* steps 1 */}
        <div className={styles.steps}>
          <h4>Here is how our process works, getting started is a breeze:</h4>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p>
                Step 1: Submit your application and pay the Global Entry Pro
                Assist fee.
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
              <Link href="/apply-canada">APPLY ONLINE</Link>
            </button>
          </div>
        </div>
        {/* faq4 */}
        <div className={styles.faq}>
          <h3>How much does it cost to get a Nexus?</h3>
          <p>
            If you want to save precious time, let our experts handle the
            paperwork for you. By choosing our services, you can experience a
            hassle-free application process, with the total cost amounting to
            $139,99 (One-time payment via PayPal).
            <br />
            <br />
            This fee is payable at the time of application submission and covers
            the cost of processing your application with our help.
            <br />
            <br />
            To apply for NEXUS, you&#39;ll need to submit your application along
            with a one-time government fee of $50 (covers a 5-year membership).
            <br />
            <br />
            Once approved, your NEXUS membership will be valid for five years
            starting from the date you receive your NEXUS membership card.
          </p>
        </div>
        {/* faq5 */}
        <div className={styles.faq}>
          <h3>What are the eligibility requirements for the Nexus program?</h3>
          <p>
            NEXUS Canada welcomes individuals of various citizenships, including
            Canadian nationals, Canadian permanent residents, United States
            nationals, and United States permanent residents. 
            <br />
            <br />
            Age is not a limiting factor for eligibility, although applicants
            under 18 years of age must obtain consent from a parent or guardian.
          </p>
        </div>
        {/* faq6 */}
        <div className={styles.faq}>
          <h3>What are the NEXUS kiosks?</h3>
          <p>
            NEXUS kiosks are conveniently located at major airports in Canada,
            providing members with streamlined travel options. 
            <br />
            <br />
            In addition, members can take advantage of Global Entry lanes at
            prominent US airports and benefit from TSA (Transportation Security
            Administration) precheck lanes for expedited security checks when
            departing from the USA.
            <br />
            <br />
            To qualify for TSA Precheck, members must provide their Known
            Traveler Number (KTN) when booking tickets. 
            <br />
            <br />
            These services collectively ensure a smoother and more efficient
            travel experience for NEXUS members.
          </p>
        </div>
        {/* faq7 */}
        <div className={styles.faq}>
          <h3>How do I renew my Nexus membership?</h3>
          <p>
            The validity of your NEXUS membership is for a period of 5 years, as
            long as you adhere to the membership conditions. 
            <br />
            <br />
            Your membership will expire on your birthday. To renew your NEXUS
            membership, you can initiate the process up to 3 months before the
            expiration date, and upon renewal, it will be extended for another 5
            years starting from your next birthday.
            <br />
            <br />
            However, if you submit your renewal application after the expiration
            date of your membership, you will be treated as a first-time NEXUS
            applicant and will need to undergo a mandatory interview. 
            <br />
            <br />
            On the other hand, if your personal information remains unchanged
            throughout the 5-year duration of your NEXUS membership and you
            renew your NEXUS pass before your card expires, you will not be
            required to attend an interview.
            <br />
            <br />
            It&#39;s important to note that if there have been any changes to
            your personal data, such as acquiring a new passport or changing
            your address, you may be requested to attend an interview at an
            enrollment center of your choosing.
            <br />
            <br />
            If you&#39;re planning to travel between the United States and
            Canada by land, air, or sea and want to avoid long wait times at the
            border crossing points for Nexus cardholders, you can turn to Global
            Entry Pro Assist for renewing your Nexus membership. 
            <br />
            <br />
            We specialize in fast-track programs for global passport control and
            we strive to increase the chances of success for your application by
            ensuring it is complete, accurate, and free of errors. 
            <br />
            <br />
            Our team is skilled at simplifying the application process and
            breaking down any confusing government terms. 
            <br />
            <br />
            We’ll guide you through any additional steps and documentation
            required, and we are available to address your inquiries.
            <br />
            <br />
          </p>
          <Link href="/apply-canada" style={{ color: "#5DBBF0", fontWeight: "bold" }}>
            APPLY NOW
          </Link>
        </div>

        {/* faq8 */}
        <div className={styles.faq}>
          <h3>
            Can I fill out one Nexus application form for the whole family?
          </h3>
          <p>
            A family application form is not available. Each family member,
            including children and infants, must complete an individual
            application form.
          </p>
        </div>

        {/* faq9 */}
        <div className={styles.faq}>
          <h3>
            If I have a NEXUS card, can my children cross the border with me in
            the NEXUS lane?
          </h3>
          <p>
            To use the NEXUS lane, even newborn infants and children must have
            their own NEXUS card. However, children under 18 are not required to
            pay any fees.
          </p>
        </div>

        {/* faq10 */}
        <div className={styles.faq}>
          <h3>How long does it take to get a NEXUS card?</h3>
          <p>Typically, it may take around 3 months to receive a NEXUS card.</p>
        </div>

        {/* faq11 */}
        <div className={styles.faq}>
          <h3>
            How do I book my Nexus interview?
          </h3>
          <p>
            When you fill out our application form, you will have the option to
            choose a preferred enrollment center.
          </p>
        </div>

        {/* faq12 */}
        <div className={styles.faq}>
          <h3>What are the reasons for being denied a Nexus card?</h3>
          <p>
            The reasons for a NEXUS card denial can vary.
            <br />
            <br />
            If you have not provided complete and accurate information on your
            application form or have made errors in data entry, your application
            may be denied.
            <br />
            <br />
            Other reasons for denial include a previous conviction or failure to
            comply with customs and immigration laws. 
            <br />
            <br />
            If you disagree with the denial, you have the option to file an
            objection with the NEXUS Ombudsman.
          </p>
        </div>

        {/* faq13 */}
        <div className={styles.faq}>
          <h3>
            How do I update my passport/address/car info once I have my NEXUS
            card?
          </h3>
          <p>
            To update your information, you can either visit one of the
            enrollment centers located on either side of the US-Canada border or
            make the changes online using the information provided in the email
            we have sent to you.
          </p>
        </div>

        {/* faq14 */}
        <div className={styles.faq}>
          <h3>What if I have lost my Nexus card?</h3>
          <p>
            If your NEXUS card is lost or stolen, it is necessary to visit one
            of the Nexus enrollment centers and report the loss. A replacement
            card can be issued for a small fee.
          </p>
          <div className={styles.ctaDiv}>
            <button className={styles.ctaBtn2}>
              <Link href="/apply-canada">APPLY NOW</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
