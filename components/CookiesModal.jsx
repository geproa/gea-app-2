// import Link from "next/link";
// import React, { useState } from "react";

// import styles from "../styles/Home.module.css";

// export default function CookiesModal() {
//   const [agreed, setAgreed] = useState(false);

//   const handleAgree = () => {
//     // You can implement your logic here, like setting a cookie or updating state
//     setAgreed(true);
//   };

//   // Render nothing if user already agreed to cookies
//   if (agreed) return null;

//   return (
    // <div className="cookiesModal">
    //   <div>
    //     <p>
    //       We use cookies to improve our website and your experience when using
    //       it.
    //       <br />
    //       Cookies used for the essential operation of this site have already
    //       been set.
    //       <br /> To find out more about the cookies we use and how to delete
    //       them, see our{" "}
    //       <Link href="/cookies" style={{ color: "#5DBBF0" }}>
    //          Cookie Policy
    //       </Link>
    //       .
    //     </p>
    //   </div>
    //   <div className={styles.cookiesBtnDiv}>
    //     <button className={styles.cookiesBtn} onClick={handleAgree}>
    //     Accept
    //     </button>
    //   </div>
    // </div>
//   );
// }


// components/CookieConsent.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Cookies from 'js-cookie';

import styles from "../styles/Home.module.css";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-consent">
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
       
        <button className={styles.cookiesBtn} onClick={handleAccept}>Accept</button>
      </div>
    </div>
      <p>
        We use cookies to enhance your browsing experience. By continuing to visit this site, you agree to our use of cookies.
      </p>
      <button onClick={handleAccept}>Accept</button>
      {/* <style jsx>{`
        .cookie-consent {
          position: fixed;
          bottom: 0;
          width: 100%;
          background: #000;
          color: #fff;
          text-align: center;
          padding: 10px;
          z-index: 1000;
        }
        .cookie-consent button {
          margin-left: 20px;
          padding: 5px 10px;
          cursor: pointer;
        }
      `}</style> */}
    </div>
  );
};

export default CookieConsent;

