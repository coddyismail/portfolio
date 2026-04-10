import Head from "next/head";
import styles from "../css/Poster.module.css";

export default function Poster() {
  return (
    <>
      <Head>
        <title>FYP Poster</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.body}>
        <div className={styles.poster}>

          {/* TOP BANNER */}
          <div className={styles.topBanner}>
            <span>Limited Availability · April 2025</span>
            <div className={styles.dotRow}>
              <div className={`${styles.dot} ${styles.active}`} />
              <div className={`${styles.dot} ${styles.active}`} />
              <div className={`${styles.dot} ${styles.active}`} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
            <span>FYP Services</span>
          </div>

          {/* HEADER */}
          <div className={styles.header}>
            <div className={styles.labelTag}>Final Year Projects</div>
            <div className={styles.bigHeading}>
              WE BUILD<br />
              <span className={styles.accent}>YOUR FYP.</span>
            </div>
            <div className={styles.subHeading}>Professional. Delivered. Yours.</div>

            {/* STAMP */}
            <div className={styles.stamp}>
              <div className={styles.stampTop}>Only</div>
              <div className={styles.stampNum}>3</div>
              <div className={styles.stampBot}>Slots Left</div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className={styles.divider} />

          {/* SLOTS */}
          <div className={styles.slotsSection}>
            {[1, 2, 3].map((num) => (
              <div key={num} className={`${styles.slotBox} ${num === 2 ? styles.slotBoxMiddle : ""}`}>
                <div className={styles.slotAvailable} />
                <div className={styles.slotNumber}>0{num}</div>
                <div className={styles.slotLabel}>Slot Open</div>
              </div>
            ))}
          </div>

          {/* MAIN CONTENT */}
          <div className={styles.mainContent}>
            <div className={styles.leftCol}>
              <div className={styles.monthTag}>📅 This Month Only</div>

              <p className={styles.sectionTitle}>What You Get</p>
              <ul className={styles.featureList}>
                <li>Full project development — front to back</li>
                <li>Documentation &amp; report writing included</li>
                <li>Presentation-ready deliverables</li>
                <li>Revisions until you&apos;re satisfied</li>
                <li>Timeline tailored to your deadline</li>
              </ul>

              <div className={styles.priceBlock}>
                <div className={styles.priceLabel}>Pricing</div>
                <div className={styles.priceRange}>
                  5,000 <span className={styles.priceAccent}>—</span> 20,000
                </div>
                <div className={styles.priceNote}>
                  PKR · Final price depends on scope &amp; requirements
                </div>
              </div>
            </div>

            <div className={styles.rightCol}>
              <div>
                <div className={styles.rightPriceLabel}>Starting From</div>
                <div className={styles.rightPriceValue}>Rs. 5K</div>
                <div className={styles.rightPriceSub}>
                  Goes up to Rs. 20K<br />based on your needs
                </div>
              </div>

              <div className={styles.rightDivider} />

              <div>
                <div className={styles.rightSectionTitle}>Discount Policy</div>
                <div className={styles.rightNote}>
                  Discounts are <strong>not</strong> available by default.<br /><br />
                  <strong>Only applies</strong> if you come through a{" "}
                  <strong>referral</strong> from a friend.
                </div>
              </div>

              <div className={styles.rightDivider} />

              <div>
                <div className={styles.rightSectionTitle}>Timeline</div>
                <div className={styles.rightNote}>
                  Slots close once <strong>3 clients</strong> are confirmed for this month.
                </div>
              </div>
            </div>
          </div>

          {/* REFERRAL BANNER */}
          <div className={styles.referralBanner}>
            <div className={styles.referralIcon}>🤝</div>
            <div className={styles.referralText}>
              <h3>Got a Referral? You&apos;re in Luck.</h3>
              <p>
                Discount is <em>exclusively</em> for those referred by a mutual friend.
                No referral? Full price applies — still worth it.
              </p>
            </div>
          </div>

          {/* BOTTOM */}
          <div className={styles.bottomSection}>
            <div className={styles.urgencyBlock}>
              <div className={styles.urgencyBadge}>⚡ Act Fast</div>
              <div className={styles.urgencyText}>
                <strong>3 slots. 1 month.</strong><br />
                Once they&apos;re gone — that&apos;s it.
              </div>
            </div>
            <div className={styles.ctaBlock}>
              <div className={styles.ctaLabel}>Reach out now</div>
              <div className={styles.ctaAction}><a href="https://wa.me/+919405227703" >DM TO CLAIM YOUR SLOT →</a></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
