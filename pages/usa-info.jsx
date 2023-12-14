import Link from "next/link";

import styles from "../styles/pages.module.css";

export default function Usa() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.titleH1}>
          <h1>USA</h1>
        </div>
      </section>
      {/* Hero Section - End*/}

      {/* Main Section */}
      <section className={styles.mainSection}>
        <div className={styles.titleBox}>
          <div className={styles.title}>
            <h2 class="mb-5">GLOBAL ENTRY FAQs</h2>
            <h3>
              Here, we address frequently asked questions regarding the Global
              Entry Trusted Traveler program.
            </h3>
          </div>
        </div>
      </section>
      {/* Main Section- End */}

      <section className={styles.allContent}>
        {/* faq1 */}
        <div className={styles.faq}>
          <h3>What is the Global Entry Program?</h3>
          <p>
            <b>Global Entry is a Trusted Traveler Program</b> that allows
            pre-approved, low-risk travelers to receive expedited clearance upon
            arrival in the United States.
            <br />
            <br />
            With a valid membership card lasting 5 years, Global Entry
            participants can skip long lines and quickly complete the customs
            process at designated kiosks in airports.
            <br />
            <br />
            By presenting their machine-readable passport or US permanent
            resident card, verifying their fingerprints, and making a customs
            declaration, travelers can receive a transaction receipt and proceed
            to baggage claim and the exit.
            <br />
            <br />
            While occasional random checks may occur, Global Entry offers a
            hassle-free travel experience, reducing wait times and streamlining
            entry into the United Stat es. The processing time for the program
            may take between 4-6 months.
          </p>
        </div>

        {/* faq2 */}
        <div className={styles.faq}>
          <h3>Who can help me with the Global Entry application process?</h3>
          <p>
            We are <b>Global Entry Pro Assist</b> and specialize in{" "}
            <b>Trusted Traveler Program assistance</b> , including{" "}
            <b>Global Entry, Nexus, and Sentri</b>.
            <br />
            <br />
            Simplify your life by entrusting us with the application process.
            Save time and focus on your business while we handle the
            intricacies.
            <br />
            <br />
            Experience a seamless and efficient travel process with our
            expertise.
          </p>
        </div>

        {/* faq3 */}
        <div className={styles.faq}>
          <h3>What&#39;s the fastest way to get Global Entry?</h3>
          <h3>
            Here&#39;s how we can help you and make the process faster for you:
          </h3>
          <ul>
            <li>Save time by skipping long queues.</li>

            <li>Handle all application paperwork on your behalf.</li>

            <li>
              Increase your chances of success with meticulous attention to
              detail.
            </li>
          </ul>
          <p>
            As an independent entity, we are not affiliated with any government
            agency. Please, note that while we provide exceptional assistance,
            we cannot guarantee the final outcome of your Global Entry
            membership but we can boost your chances for a successful
            application.
          </p>
        </div>

        {/* faq4 */}
        <div className={styles.faq}>
          <h3>What’s the application process for Global Entry?</h3>
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
              <li>
               pay the required government fee
              </li>
            </div>
            <div className={styles.cardBlue}>
              <li>
             online pre-enrollment
              </li>
            </div>
            <div className={styles.cardBlue}>
              <li>
                schedule an interview at an enrollment center
              </li>
            </div>
            <div className={styles.cardBlue}>
              <li>
                provide your fingerprints and verify your ID
              </li>
            </div>
          </div>
          <div className={styles.cta}>
            <button className={styles.ctaBtn}>
              <Link href="apply-usa">APPLY ONLINE</Link>
            </button>
          </div>
        </div>

        {/* faq5 */}
        <div className={styles.faq}>
          <h3>What are the benefits of the Global Entry program?</h3>
          <p>Save time and enjoy the benefits of Global Entry:</p>
          <br />
          <ul>
            <li>
              No processing lines or paperwork
            </li>
            <li>
              Expedited entry in other countries
            </li>
            <li>
              Available at major US airports
            </li>
            <li>
              Reduced wait times
            </li>
          </ul>
          <br />
          <p>
            With Global Entry, you can breeze through immigration, skip the
            queues, and make your travel experience better.
          </p>
        </div>

        {/* faq6 */}
        <div className={styles.faq}>
          <h3>How much does it cost to get Global Entry?</h3>
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
            To apply for Global Entry, you&#39;ll need to submit your
            application along with a one-time government fee of $100. 
            <br />
            <br />
            Once approved, your Global Entry membership will be valid for five
            years starting from the date you receive your Global Entry
            membership card.
          </p>
        </div>

        {/* faq7 */}
        <div className={styles.faq}>
          <h3>How do I book my Global Entry interview?</h3>
          <p>
            When you fill out our application form, you will have the option to
            choose a preferred enrollment center.
          </p>
        </div>

        {/* faq8 */}
        <div className={styles.faq}>
          <h3>What is the iris recognition scanning?</h3>
          <p>
            Iris scanning is widely used worldwide for identity verification. It
            is highly reliable, accurate, and difficult to falsify.
            <br />
            <br />
            Unlike fingerprints, the iris is less prone to damage and forgery,
            as it leaves no mark and has more unique variables.
            <br />
            <br />
            During the biometric data collection process, multiple images of the
            iris are captured without any physical contact. The scanning process
            is quick and safe for your eyes.
            <br />
            <br />
            To scan your eyes, you simply stand in front of the machine while an
            LED light briefly illuminates your iris.
            <br />
            <br />
            The light is not excessively bright and adheres to eye safety
            standards. The iris camera takes a black and white picture of the
            iris.  <br />
            <br />
            You generally do not need to remove non-colored/non-patterned
            contact lenses or glasses. However, certain types of lenses or
            glasses that cause excessive reflection may require removal. 
            <br />
            <br />
            Laser eye surgery does not affect the iris shape and has no negative
            impact on the scan. Changes to the iris occurring after the initial
            scan may necessitate assistance at the kiosk.
            <br />
            <br />
            When using the iris recognition cameras at the kiosks, maintain a
            distance of 10 to 15 cm from the camera. 
            <br />
            <br />
            Focus one eye on the camera and remain still until the computer
            confirms identification completion.
          </p>
        </div>

        {/* faq9 */}
        <div className={styles.faq}>
          <h3>What is the Global Entry Kiosk?</h3>
          <p>
            Global Entry kiosks are available at major US airports, providing
            members with streamlined processes. 
            <br />
            <br />
            Members can also utilize NEXUS lanes in Canada and TSA
            (Transportation Security Administration) Precheck lanes during
            departures for faster travel.
            <br />
            <br />
            To qualify for TSA Precheck, Global Entry members should provide
            their Known Traveler Number (KTN) when booking tickets. 
            <br />
            <br />
            Enjoy expedited security checks and a hassle-free travel experience
            with Global Entry.
            <br />
            <br />
            <Link href="/apply-usa" style={{ color: "#5DBBF0", fontWeight: "bold" }}>
              APPLY NOW
            </Link>
          </p>
        </div>

        {/* faq10 */}
        <div className={styles.faq}>
          <h3>What are the eligibility requirements for Global Entry?</h3>
          <p>
            Global Entry membership is open to a range of individuals, including
            US citizens, US lawful permanent residents, and citizens of various
            countries such as Argentina, Brazil, Bahrain, India, Colombia,
            United Kingdom, Germany, The Netherlands, Panama, Singapore, South
            Korea, Switzerland, Taiwan, and Mexican nationals.
            <br />
            <br />
            Please note that depending on your country of citizenship, there may
            be additional requirements that need to be fulfilled. 
            <br />
            <br />
            For Canadian citizens and residents, Global Entry benefits can be
            obtained through enrollment in the NEXUS program.
            <br />
            <br />
            If you are below the age of 18, it is essential to obtain consent
            from your parents or legal guardian to participate in the program.
            <br />
            <br />
            You will be required to have a passport or a permanent resident
            card.
          </p>
        </div>

        {/* faq11 */}
        <div className={styles.faq}>
          <h3>What are the Global Entry requirements for children?</h3>
          <p>
            Global Entry does not impose a minimum age requirement, but if you
            are below 18 years old, you need your parent or legal guardian&#39;s
            permission to join the program.
            <br />
            <br />
            It&#39;s worth noting that your parent or legal guardian does not
            have to be a Global Entry member themselves.
          </p>
        </div>

        {/* faq12 */}
        <div className={styles.faq}>
          <h3>
            Where can I find my membership number for the Trusted Traveler
            program?
          </h3>
          <p>
            The membership number, which is also referred to as your PASS ID,
            can be found on the back of Trusted Traveler cards as well.
          </p>
        </div>

        {/* faq13 */}
        <div className={styles.faq}>
          <h3>
            I am a current Global Entry member. How do I update my passport
            information?
          </h3>
          <p>
            Global Entry members have the convenience of updating their passport
            information directly through their TTP account. By selecting the
            &#34;Update Documents&#34; option, members can easily make the
            necessary changes.
            <br />
            <br />
            However, in the case of a name change on the passport, it is
            mandatory to visit a Global Entry enrollment center to ensure that
            the information is properly updated.
          </p>
        </div>

        {/* faq14 */}
        <div className={styles.faq}>
          <h3>How do I renew my Global Entry membership?</h3>
          <p>
            You become eligible to initiate the renewal process for your
            membership one year before your current program expires.
            <br />
            <br />
            We can handle the paperwork and the renewal process for you.
          </p>
        </div>

        {/* faq15 */}
        <div className={styles.faq}>
          <h3>
            Do I need to go through an interview when renewing my program
            membership?
          </h3>
          <p>
            An interview may not be required for program membership renewal.
            After submitting your renewal application and fee, you should
            regularly check your TTP account for updates on any further steps
            needed to complete the renewal process.
            <br />
            <br />
            An email notification will be sent to you when there are changes in
            your membership status.  
          </p>
        </div>

        {/* faq16 */}
        <div className={styles.faq}>
          <h3>
            As a United States citizen who is enrolled in Global Entry, what
            advantages do I enjoy in terms of expedited entry?
          </h3>
          <p>
            If you are a US citizen with Global Entry membership, you can take
            advantage of the Smartgate system for streamlined entry into
            Australia and/or New Zealand without any prior registration. 
            <br />
            <br />
            Furthermore, you have the option to apply for various programs such
            as Dutch Privium, Korean SES, Panama&#39;s Global Pass, Taiwan&#39;s
            e-Gate, Germany&#39;s EasyPASS, or Mexico&#39;s Viajero Confiable,
            which offer expedited entry into those respective countries.
            <br />
            <br />
            Keep in mind that there may be additional fees and enrollment
            interviews associated with these programs.
            <br />
            <br />
            <Link
              href="/apply-usa"
              style={{ color: "#5DBBF0", fontWeight: "bold" }}
            >
              APPLY NOW  
            </Link>
          </p>
        </div>

        {/* faq17 */}
        <div className={styles.faq}>
          <h3>Is criminal history a disqualifier for Global Entry?</h3>
          <p>
            Global Entry operates on a risk-based system designed to streamline
            the entry process for pre-approved travelers.
            <br />
            <br />
            However, there are certain factors that may disqualify applicants
            from participating in Global Entry. These include:
          </p>
          <ul>
            <li>
              
                Providing false or incomplete information when completing the
                application.
              
            </li>
            <li>
              
                Having a criminal record or pending criminal charges, including
                outstanding warrants.
              
            </li>
            <li>
              
                Being found in violation of customs, immigration, or agriculture
                regulations or laws in any country.
              
            </li>
            <li>
              
                Being the subject of an ongoing investigation by any federal,
                state, or local law enforcement agency.
              
            </li>
            <li>
              Having been denied the purchase of a firearm.
            </li>
            <li>
              Having received a criminal pardon from any country.
            </li>
            <li>
              
                Being deemed inadmissible to the United States under immigration
                regulations, even if an applicant has obtained waivers of
                inadmissibility or parole documentation.
              
            </li>
            <li>
              
                Failing to demonstrate low-risk status or meet other program
                requirements to the satisfaction of CBP (Customs and Border
                Protection).
              
            </li>
          </ul>
          
            It is essential for applicants to comply with these guidelines to
            ensure eligibility for the Global Entry program.
          
        </div>

        {/* faq18 */}
        <div className={styles.faq}>
          <h3>
            Can I join Global Entry if I am not a US citizen or US lawful
            permanent resident?
          </h3>
          <p>
            Global Entry is also open to citizens of the Netherlands enrolled in
            Privium and members of the Korean Smart Entry Service.
            <br />
            <br />
            Mexican citizens can also apply for Global Entry. Canadian NEXUS
            members enjoy Global Entry benefits but are not eligible for
            separate enrollment.  
          </p>
        </div>

        {/* faq19 */}
        <div className={styles.faq}>
          <h3>
            Do all types of visas qualify for enrollment in the Global Entry
            program?
          </h3>
          <p>
            If your country has an established trusted traveler arrangement with
            CBP (US Customs and Border Protection), you may be eligible for
            Global Entry participation, as long as you are not entering the US
            under any of the following visa categories:
          </p>
          <ul>
            <li>
              C-1: Alien in Transit
            </li>
            <li>
              C-2: Alien in Transit to United Nations
            </li>
            <li>
              C-3: Foreign Government Official In Transit
            </li>
            <li>
              H-1C: Registered Nurse
            </li>
            <li>
              H-2A: Agricultural Worker
            </li>
            <li>
              H-2B: Unskilled Worker
            </li>
            <li>
              H-2R: Returning H-2B
            </li>
            <li>
              H-3: Trainee
            </li>
            <li>
              K-1: Fiancé of US Citizen
            </li>
            <li>
              K-2: Child of K-1
            </li>
            <li>
              K-3: Spouse of US Citizen
            </li>
            <li>
              K-4: Child of K-3
            </li>
            <li>
              M-1: Vocational Student
            </li>
            <li>
              M-2: Spouse/Child of M-1
            </li>
            <li>
              N-8: Parent of SK-3
            </li>
            <li>
              N-9: Child of N-8, SK-1, SK-2, SK-4
            </li>
            <li>
              Q-1: Participant in an International Exchange Program
            </li>
            <li>
              
                Q-2: Irish Peace Process Cultural and Training Program Principal
              
            </li>
            <li>
              Q-3: Spouse and Minor Children of Q-2
            </li>
            <li>
              S-5: Witness/Informant
            </li>
            <li>
              S-6: Witness/Informant
            </li>
            <li>
              S-7: Family Members of S-5, S-6
            </li>
            <li>
              T-1: Trafficking Victim
            </li>
            <li>
              T-2: Spouse of T-1
            </li>
            <li>
              T-3: Child of T-1
            </li>
            <li>
              T-4: Parent of T-1
            </li>
            <li>
              T-5: Sibling of T-1
            </li>
            <li>
              U-1: Criminal Activity Victim
            </li>
            <li>
              U-2: Spouse of U-1
            </li>
            <li>
              U-3: Child of U-1
            </li>
            <li>
              U-4: Parent of U-1
            </li>
            <li>
              U-5: Sibling of U-1
            </li>
          </ul>
        </div>

        {/* faq20 */}
        <div className={styles.faq}>
          <h3>
            If the Global Entry Kiosk issues me a receipt marked &#34;wish
            X&#34; , what should I do?
          </h3>
          <p>
            If you receive a receipt from the Global Entry kiosk with an
            &#34;X&#34; printed on it, there are a few important steps to
            follow.
            <br />
            <br />
            Instead of rejoining the line, you should promptly approach a
            Customs and Border Protection (CBP) officer stationed at a staffed
            CBP passport control booth.
            <br />
            <br />
            The CBP officer will carefully examine your documents, determine the
            reason for the &#39;X&#39; marking, and proceed accordingly.
            <br />
            <br />
            Depending on the situation, you may be either released on the spot
            or directed to a designated area for further processing, known as
            &#39;secondary.&#39;
            <br />
            <br />
            The &#39;X&#39; marking can indicate various scenarios, such as a
            random inspection, discrepancies with your fingerprints, or other
            relevant matters. 
            <br />
            <br />
            It is crucial to have the &#39;X&#39; cleared before proceeding to
            the exit control point. Failure to do so will result in redirection
            back to passport control for necessary processing. 
            <br />
            <br />
            Remember, the receipt from the kiosk serves as proof to the CBP
            officer that you have successfully completed the kiosk procedure.
          </p>
          <br />
          <Link
            href="/apply-usa"
            style={{ color: "#5DBBF0", fontWeight: "bold", fontSize: "20px" }}
            S
          >
            APPLY NOW  
          </Link>
        </div>

        {/* faq21 */}
        <div className={styles.faq}>
          <h3>
            If the Global Entry kiosk provides me with a receipt marked with an
            &#39;O,&#39; what steps should I take?
          </h3>
          <p>
            If the receipt from the Global Entry kiosk bears an &#39;O&#39;
            marking, it signifies that you have made a declaration.
            <br />
            <br />
            In such a case, you should retrieve your luggage and proceed to the
            exit point, where you will be required to meet with an officer for
            further discussion regarding your declaration.
          </p>
        </div>

        {/* faq22 */}
        <div className={styles.faq}>
          <h3>
            Are individuals with Global Entry privileges granted priority access
            at US airports equipped with Global Entry kiosks?
          </h3>
          <p>
            The head-of-the-line privilege is exclusively offered at US airports
            featuring Global Entry.
            <br />
            <br />
            This privilege is specifically reserved for members of the program
            in situations where the technology is inaccessible, when a member is
            referred to a CBP officer, or at the exit points within the airport.
          </p>
        </div>

        {/* faq23 */}
        <div className={styles.faq}>
          <h3>
            If I am a lawful permanent resident of the United States, which
            document should I present when using the Global Entry kiosk?
          </h3>
          <p>
            When using the Global Entry kiosk or portal, US lawful permanent
            residents should use their I-551 permanent resident card.
          </p>
        </div>

        {/* faq24 */}
        <div className={styles.faq}>
          <h3>
            Is it necessary for me to declare food items or products when
            utilizing the Global Entry kiosk?
          </h3>
          <p>
            It is important to declare all agricultural products that you bring
            into the United States. Failing to declare such items can lead to
            fines and penalties of up to $10,000.
          </p>
        </div>

        {/* faq25 */}
        <div className={styles.faq}>
          <h3>
            As a Global Entry member, do I have to use the Global Entry Program
            when entering the United States?
          </h3>
          <p>
            No, it is not mandatory for Global Entry members to utilize the
            Global Entry technology. They have the option to be processed by CBP
            officers instead.
          </p>
        </div>

        {/* faq26 */}
        <div className={styles.faq}>
          <h3>
            If my travel companions (including children, spouse, or
            co-travelers) are not enrolled as Global Entry members, are they
            allowed to accompany me through the Global Entry lane?
          </h3>
          <p>
            No, exclusive access to the Global Entry lanes is limited to
            individuals who are enrolled as Global Entry members.
          </p>
        </div>

        {/* faq27 */}
        <div className={styles.faq}>
          <h3>Who receives Global Entry cards?</h3>
          <p>
            Global Entry cards are exclusively issued to individuals who are
            either US citizens, lawful permanent residents, or Mexican
            nationals.
          </p>
        </div>

        {/* faq28 */}
        <div className={styles.faq}>
          <h3>Should I get a Global Entry card?</h3>
          <p>
            No, having a Global Entry card is not mandatory for utilizing Global
            Entry at airports.
            <br />
            <br />
            The card is only needed for expedited entry through the SENTRI and
            NEXUS lanes when entering the United States.
          </p>
        </div>

        {/* faq29 */}
        <div className={styles.faq}>
          <h3>When will I receive my Global Entry card?</h3>
          <p>
            After being approved for Global Entry, new applicants can expect to
            receive their Global Entry card within 7-10 business days.
          </p>
        </div>

        {/* faq29 */}
        <div className={styles.faq}>
          <h3>
            How do I replace a lost, stolen or damaged NEXUS, SENTRI or Global
            Entry card?
          </h3>
          <p>
            You can request a new one. Please note that a replacement card fee
            of $25 will apply. Once it is requested, the original card will be
            deactivated and rendered unusable.
          </p>
        </div>
      </section>
    </main>
  );
}
