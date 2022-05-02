import Link from 'next/link';
import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import { Fact as TFact } from '~/lib/components/types';
import styles from './Fact.module.scss';

export const Fact: React.FC<{ value: TFact }> = ({ value }) => {
  const {
    celeb: { name },
  } = useCelebContext();

  return (
    <div className={styles.fact}>
      <div>
        <p className={styles.date}>{value.date}</p>
      </div>

      <div>
        {(value.type === 'quote' && (
          <div>
            <p className={styles.context}>
              {value.context}, {name} said
            </p>

            <blockquote>
              <p className={styles.quote}>{value.quote}</p>
            </blockquote>
          </div>
        )) ||
          (value.type == 'fact' && (
            <div>
              <p>{value.content}</p>
            </div>
          ))}
      </div>

      <div className={styles.tags}>
        {value.tags.map((t) => {
          return (
            <p key={t.tag.name}>
              # {t.isLowConfidence && 'Possibly '}
              {t.tag.name}
            </p>
          );
        })}
      </div>

      <div className={styles.links}>
        <Link href={value.source}>Source</Link>
        <Link href={value.forumLink}>Forum link</Link>
      </div>
    </div>
  );
};
