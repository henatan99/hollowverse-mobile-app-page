import React from 'react';
import { CelebPageProps } from '~/lib/components/types';
import { Facts } from '~/lib/celeb/Facts';
import { PageHead } from '~/lib/celeb/PageHead/PageHead';
import { TagCollection } from '~/lib/celeb/TagCollection';
import { TopSection } from '~/lib/celeb/TopSection/TopSection';
import styles from '../../styles/Home.module.scss';

export const Celeb = (p: CelebPageProps) => {
  return (
    <main className={styles.home}>
      <PageHead />

      <TopSection />

      {p.celeb.tags && <TagCollection />}

      {p.celeb.facts && <Facts />}
    </main>
  );
};

export default Celeb;
