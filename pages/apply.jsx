import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Apply() {
  const myStyle = {
    color: "#505050",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "20px",
  };

  const titleStyle = {
    fontSize: "30px",
  };

  const sectionStyle ={
    margin: '80px 0'
  }



  return (
    <section className={styles.how} style={sectionStyle}>
      <div className={styles.wrapperDiv}>
        <div className={styles.elementDiv}>
          <div className={styles.titleElement}>
            <p>Global Entry applications:</p>
          </div>
        </div>

        <div className={styles.rowOne}>
          <div className={styles.number}>
            <p style={titleStyle} id={styles.title}>USA</p>
          </div>
          <div className={styles.imgText} style={myStyle} id={styles.links}>
            <Link href="/global-entry-usa-form" >Global Entry</Link>
            <Link href="/global-entry-usa-form-renewal">Global Entry Renewal</Link>
            <Link href="/global-entry-usa-form-child">Global Entry Child</Link>
          </div>
        </div>

        <div className={styles.rowOne}>
          <div className={styles.number}>
            <p style={titleStyle} id={styles.title}>Canada</p>
          </div>
          <div className={styles.imgText} style={myStyle} id={styles.links}>
            <Link href="/nexus-apply-form">NEXUS</Link>
            <Link href="/nexus-apply-form-renewal">NEXUS Renewal</Link>
            <Link href="/nexus-apply-form-child">NEXUS Child</Link>
          </div>
        </div>

        <div className={styles.rowOne}>
          <div className={styles.number}>
            <p style={titleStyle} id={styles.title}>Mexico</p>
          </div>
          <div className={styles.imgText} style={myStyle} id={styles.links}>
            <Link href="/sentri-apply-form">SENTRI</Link>
            <Link href="/sentri-apply-form-renewal">SENTRI Renewal</Link>
            <Link href="/sentri-apply-form-child">SENTRI Child</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
