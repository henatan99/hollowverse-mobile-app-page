import React from 'react';
import { useCelebContext } from '~/lib/components/StaticPropsContextProvider';
import { Fact } from '~/lib/celeb/Facts/Fact';
import styles from './Facts.module.scss';

export const Facts = () => {
  const context = useCelebContext();
  const { groups, topics } = context.celeb.facts!;

  return (
    <div className={styles.facts}>
      {topics.map((topic, i) => {
        const factGroup = groups[topic];

        return (
          <div key={`${topic}-${i}`}>
            {factGroup.map((fact, innerI) => {
              return (
                <div
                  key={`${topic}-${i}-${innerI}`}
                  // style={{ backgroundColor: '#F4ECF7' }}
                >
                  <Fact value={fact} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
