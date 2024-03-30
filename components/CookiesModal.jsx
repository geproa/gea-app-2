import Link from "next/link";
import React, { useState } from "react";

import styles from "../styles/Home.module.css";

export default function CookiesModal() {
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    // You can implement your logic here, like setting a cookie or updating state
    setAgreed(true);
  };

  // Render nothing if user already agreed to cookies
  if (agreed) return null;

  return (
    <div className="cookiesModal">
      <div>
        <p>
          We use cookies to improve our website and your experience when using
          it.
          <br />
          Cookies used for the essential operation of this site have already
          been set.
          <br /> To find out more about the cookies we use and how to delete
          them, see our{" "}
          <Link href="/cookies" style={{ color: "#5DBBF0" }}>
             Cookie Policy
          </Link>
          .
        </p>
      </div>
      <div className={styles.cookiesBtnDiv}>
        <button className={styles.cookiesBtn} onClick={handleAgree}>
          Agree
        </button>
      </div>
    </div>
  );
}
