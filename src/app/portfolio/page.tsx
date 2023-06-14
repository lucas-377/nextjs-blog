import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Lucas Santana - Portfolio',
  description: 'This is Portfolio Page',
};

const Portfolio: React.FC = () => {
  return (
    <>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </>
  );
};

export default Portfolio;
