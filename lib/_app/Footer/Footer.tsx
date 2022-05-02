import Image from 'next/image';
import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        width={50}
        height={50}
        alt="Hollowverse"
        src="/images/letter-logo.png"
      />
      <div className={styles.footer_info}>
        <p>
          Hollowverse is about the important <br />
          people and their beliefs.
        </p>

        <p>
          Email us at{' '}
          <a href="mailto:hollowverse@hollowverse.com">
            hollowverse@hollowverse.com
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
