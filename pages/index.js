import Link from "next/link";
import Image from "next/image";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.titleH1}>
          <h1>
            Say Goodbye to Long Lines:
            <br />
            Get Application Assistance for Global Entry, Nexus,
            <br />
            and Sentri part of Trusted Traveler Program.
          </h1>
        </div>
      </section>
      {/* Hero Section - End*/}

      {/* Main Section */}
      <section className={styles.mainContent}>
        <div className={styles.boxContent}>
          <h2>Global Entry, Nexus and Sentri Help</h2>
          <h3>
            Simplify your arrival in the USA with Global Entry Pro Assist.
          </h3>
          <div className="textContent">
            <p class="if-you-need">
              <span class="text-wrapper">
                If you need assistance with the Global Entry, Nexus and Sentri
                application, you’ve arrived at the right page. <br />
                <br />
                We provide application assistance for
              </span>
              <span class="span">
                {" "}
                <b>Global Entry, Nexus</b>{" "}
              </span>
              <span class="text-wrapper"> and </span>
              <span class="span">
                <b>Sentri Programs</b>
              </span>
              <span class="text-wrapper">, part of the </span>
              <span class="span">
                <b>Trusted Traveler Program</b>
              </span>
              <span class="text-wrapper">
                .<br />
                <br />
                Navigating the complexities of travel arrangements can be a
                daunting task, especially for frequent business travelers.
                <br />
                <br />
                While
              </span>
              <span class="span">
                {" "}
                <b>Trusted Traveler Programs</b>
              </span>
              <span class="text-wrapper"> like</span>
              <span class="span">
                {" "}
                <b>Global Entry</b>, <b>Nexus and Sentri</b>{" "}
              </span>
              <span class="text-wrapper">
                offer undeniable benefits for both businesses and individuals,
                the application process itself can often add unnecessary red
                tape and bureaucratic hurdles.
                <br />
                <br />
                Fortunately, there&#39;s a solution that allows you to enjoy all
                the advantages of Global Entry, Nexus and Sentri while
                minimizing the hassle.
                <br />
                Let us handle everything for you.
                <br />
                <br />
                Not only that, but we ensure that incorrect or incomplete
                applications are never submitted. Our streamlined process
                requires minimal effort on your part.
                <br />
                <br />
                Whether you&#39;re well-versed in corporate
              </span>
              <span class="span">Global Entry applications</span>
              <span class="text-wrapper">
                or just starting out, our goal is to simplify your life and free
                up
                <br />
                your valuable time to focus on other aspects of your business.
                <br />
                <br />
                The best part? <br />
                <br />
                We kickstart the process immediately, keeping you informed of
                any additional requirements.Take advantage of our expertise and
                <br />
                let us handle the intricacies of Global Entry on your behalf.
                <br />
                <br />
                Experience a seamless and efficient travel process like never
                before.
                <br />
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Main Section- End */}

      {/* How Section */}
      <section className={styles.how}>
        <h3>
          How can we help you with the Trusted Traveler Program - Global Entry,
          Nexus, and Sentri?
        </h3>
        <div className={styles.wrapperDiv}>
          <div className={styles.elementDiv}>
            <div className={styles.titleElement}>
              <p>Here&#39;s how:</p>
            </div>
          </div>

          <div className={styles.rowOne}>
            <div className={styles.number}>
              <p>1</p>
            </div>
            <div className={styles.imgText}>
              <Image
              className={styles.iconImg}
                src="/images/business-time.svg"
                alt="business-time-icon"
                width={63}
                height={52}
              />
              <p>
                Save your valuable time by eliminating the hassle of waiting in
                long queues.
              </p>
            </div>
          </div>

          <div className={styles.rowOne}>
            <div className={styles.number}>
              <p>2</p>
            </div>
            <div className={styles.imgText}>
              <Image
               className={styles.iconImg}
                src="/images/file-circle.svg"
                alt="business-time-icon"
                width={63}
                height={52}
              />
              <p>
                Let us take care of all the application paperwork on your
                behalf.
              </p>
            </div>
          </div>

          <div className={styles.rowOne}>
            <div className={styles.number}>
              <p>3</p>
            </div>
            <div className={styles.imgText}>
              <Image
               className={styles.iconImg}
                src="/images/clipboard.svg"
                alt="business-time-icon"
                width={43}
                height={32}
              />
              <p>
                Enhance your chances of a successful application with our
                meticulous attention to detail, ensuring precision.
              </p>
            </div>
          </div>

          <button className={styles.ctaBtn}>
            <Link href="/apply">APPLY ONLINE NOW</Link>
          </button>
          <div className={styles.disclaimer}>
            <p>
              Please, note that while we provide exceptional assistance, we
              cannot guarantee the final outcome of your Global Entry membership
              but we can boost your chances for a successful application.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.ctaBtns}>
        <Link href="/usa-info">USA Global Entry</Link>
        <Link href="/canada-info">Canada NEXUS</Link>
        <Link href="/mexico-info">Mexico Sentri</Link>
      </section>
    </main>
  );
}
