import Link from 'next/link';
import styles from './portal.module.css';

export default function GatewayPage(){
  return <main className={styles.gateway}>
    <div className={styles.brandbar}>
      <div className={styles.brand}><i className="fa-solid fa-plane-departure"/> Mona Travel</div>
      <span>Lebanon · B2B · MICE · DMC</span>
    </div>
    <div className={styles.intro}>
      <p>WELCOME TO MONA TRAVEL</p>
      <h1>How can we support you in Lebanon?</h1>
      <span>Choose the business solution that best matches your project.</span>
    </div>
    <div className={styles.options}>
      <Link href="/b2b" className={`${styles.option} ${styles.b2b}`}>
        <div className={styles.overlay}/>
        <div className={styles.icon}><i className="fa-regular fa-building"/></div>
        <div className={styles.copy}>
          <small>B2B TRAVEL & DESTINATION MANAGEMENT</small>
          <h2>B2B Solutions</h2>
          <p>Corporate travel, business delegations, hotel sourcing, executive transportation and complete ground handling across Lebanon.</p>
          <span>Enter B2B Website <i className="fa-solid fa-arrow-right"/></span>
        </div>
      </Link>
      <Link href="/mice" className={`${styles.option} ${styles.mice}`}>
        <div className={styles.overlay}/>
        <div className={styles.icon}><i className="fa-solid fa-people-group"/></div>
        <div className={styles.copy}>
          <small>MEETINGS · INCENTIVES · CONFERENCES · EVENTS</small>
          <h2>MICE Solutions</h2>
          <p>Meetings, incentive programs, conferences, exhibitions, corporate events and professional event logistics in Lebanon.</p>
          <span>Enter MICE Website <i className="fa-solid fa-arrow-right"/></span>
        </div>
      </Link>
    </div>
    <div className={styles.footerline}>One brand. Two specialist business divisions. One trusted local partner in Lebanon.</div>
  </main>;
}
