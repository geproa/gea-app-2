import Link from "next/link";
import styles from "../styles/pages.module.css";

import { NextSeo } from "next-seo";

const SEO = {
  title: "Global Entry Pro Assist | Cookies",
  description:'We provide  application assistance with Global Entry, Nexus and Sentri programs, part of the Trusted Traveler Program. Apply with us here.',
  

  openGraph: {
    title: "Global Entry Pro Assist | Cookies",
    description:'We provide  application assistance with Global Entry, Nexus and Sentri programs, part of the Trusted Traveler Program. Apply with us here.'
   
  },
};

export default function Cookies() {
  return (
    <main className={styles.main}>
       <NextSeo {...SEO} />
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.titleH1}>
          <h1>Cookie Policy</h1>
         
        </div>
      </section>
      {/* Hero Section - End*/}

      <section className={styles.allContent} style={{ marginTop: "-40px"}}>
        {/* faq1 */}
        <div className={styles.faq}>
        
          <h2 style={{ fontSize: "40px"}}>What are cookies?</h2>
          <p >
            To make this site work properly, we sometimes place small data files
            called cookies on your device. Most big websites do this too.
          </p>
          <p>
            A cookie is a small text file that a website saves on your computer
            or mobile device when you visit the site. It enables the website to
            remember your actions and preferences (such as login, language, font
            size and other display preferences) over a period of time, so you
            don’t have to keep re-entering them whenever you come back to the
            site or browse from one page to another.
          </p>
          <br />
          <h2 style={{ fontSize: "40px"}}>How do we use cookies?</h2>
          <p>A number of our pages use cookies to remember:</p>
          <ul>
            <li>
              your display preferences, such as contrast colour settings or font
              size
            </li>
            <li>
              if you have already replied to a survey pop-up that asks you if
              the content was helpful or not (so you won&#39;t be asked again)
            </li>
            <li>
              if you have agreed (or not) to our use of cookies on this site
            </li>
          </ul>
          <p>
            Also, some videos embedded in our pages use a cookie to anonymously
            gather statistics on how you got there and what videos you visited.
            Enabling these cookies is not strictly necessary for the website to
            work but it will provide you with a better browsing experience. You
            can delete or block these cookies, but if you do that some features
            of this site may not work as intended. The cookie-related
            information is not used to identify you personally and the pattern
            data is fully under our control. These cookies are not used for any
            purpose other than those described here.
          </p>
          <br/>
          <h2 style={{ fontSize: "40px"}}>How to control cookies</h2>
          <p>
            You can control and/or delete cookies as you wish – for details, see
            <Link href="https://www.aboutcookies.org/" target="_blank" style={{ color: "#5DBBF0"}}> www.aboutcookies.org</Link>. You can delete all cookies that are already on
            your computer and you can set most browsers to prevent them from
            being placed. If you do this, however, you may have to manually
            adjust some preferences every time you visit a site and some
            services and functionalities may not work.
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
