import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { IoMicOutline } from "react-icons/io5";
import { GiKangaroo } from "react-icons/gi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";



export default function Home() {
  return (
    <Layout>

      <main className={styles.mainContent}>
        {/* Intro & CTA */}
        <section className={styles.introSection}>
          <img alt='eshan-image' src='/img/eshan.jpg' className={styles.image} />
          <h1 className={styles.name}>Eshan Pai</h1>
          <p className={styles.tagline}>
            Building the Future of Payments.
          </p>
          <p className={styles.introText}>
            Aspiring migrant entrepreneur in Australia<br />
            with a passion for fintech and innovation.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/category/book-reviews">
              See My Work
            </Link>
            <Link className="button button--secondary button--lg" to="/about">
              About Me
            </Link>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* Ventures Grid */}
        <section className={styles.venturesGrid}>
          <div className={styles.ventureItem}>
            <GiKangaroo className={styles.ventureIcon}/>
            <h4>Strayapay</h4>
            <p>Founder of a payment startup</p>
          </div>
          <div className={styles.ventureItem}>
            <IoMicOutline className={styles.ventureIcon}/>
            <h4>The Money Yarn - Coming Soon</h4>
            <p>Host of a fintech podcast</p>
          </div>
        </section>

        <hr className={styles.divider} />

        {/* Contact */}
        <section className={styles.contactSection}>
          <h2>Contact</h2>
          <div className={styles.contactIcons}>
            <a href="https://www.linkedin.com/in/eshan-pai/" aria-label="LinkedIn">
              <AiOutlineLinkedin />
            </a>
            <a href="mailto:hello@eshanpai.com" aria-label="Email">
              <MdOutlineEmail />
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
