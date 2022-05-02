import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import styles from './TagCollection.module.scss';

export const TagCollection = () => {
  const tags = useCelebContext().celeb.tags!;

  return (
    <div style={{ backgroundColor: '#E8F8F5' }} className={styles.tag_collection}>
      <div className={styles.tag_regular_collection}>
        {tags.regular.map((t) => (
          <div key={t.tag.name} className={styles.tag_regular}>{t.tag.name}</div>
        ))}
      </div>

      {tags.lowConfidence.length > 0 && (
        <div className={styles.tag_low_confidence_wrapper}>
          <p>Maybe</p>
          <div className={styles.tag_low_confidence_collection}>
            {tags.lowConfidence.map((t) => (
              <div key={t.tag.name} className={styles.tag_low_confidence}>{t.tag.name}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
