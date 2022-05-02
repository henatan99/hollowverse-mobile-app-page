import { AppProps } from 'next/app';
import React from 'react';
import { StaticPropsContextProvider } from '~/lib/components/StaticPropsContextProvider';
import { AppBar } from '~/lib/_app/AppBar/AppBar';
import { Footer } from '~/lib/_app/Footer/Footer';
import { Head } from '~/lib/_app/Head/Head';
import styles from './app.module.scss';

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head />
      <StaticPropsContextProvider value={pageProps} className={styles.app_main}>
        <AppBar />
        <Component {...pageProps} />
        <Footer />
      </StaticPropsContextProvider>
    </>
  );
};
