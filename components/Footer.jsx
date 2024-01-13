import React from "react";
import Link from "next/link";

import styles from "../styles/Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerMenu}>
        <div className={styles.footerUsa}>
          <h4>
            <Link style={{fontWeight:'bold', fontSize:'20px', marginBottom:'24px'}} href="/usa-info">USA</Link>
          </h4>
          <Link href="/apply-usa">Global Entry</Link>
          <Link href="/apply-usa">Global Entry Renewal</Link>
          <Link href="/apply-usa">Global Entry Child</Link>
        </div>
        <div className={styles.footerCanada}>
          <h4>
            <Link style={{fontWeight:'bold', fontSize:'20px', marginBottom:'24px'}}  href="/canada-info">CANADA</Link>
          </h4>
          <Link href="/apply-canada">NEXUS</Link>
          <Link href="/apply-canada">NEXUS Renewal</Link>
          <Link href="/apply-canada">NEXUS Child</Link>
        </div>
        <div className={styles.footerMexico}>
          <h4>
            <Link style={{fontWeight:'bold', fontSize:'20px', marginBottom:'24px'}}  href="/mexico-info">MEXICO</Link>
          </h4>
          <Link href="/apply-mexico">SENTRI</Link>
          <Link href="/apply-mexico">SENTRI Renewal</Link>
        </div>
      </div>

      <div className={styles.copyRightMenu}>
        <div className={styles.copyRightMenuContent}>
          <p>© 2024 Global Entry Pro Assist Ltd. All Rights Reserved</p>
          <div className={styles.footer2menu}>
            <Link href="/terms">Terms and Conditions</Link>
            <Link href="/refund">Refund Policy</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contacts">Contacts</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
