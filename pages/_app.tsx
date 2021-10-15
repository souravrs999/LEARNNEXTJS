import '@/styles/globals.css';
import '@/styles/nord.css';

import Router from 'next/router';
import React, { useEffect } from 'react';
import ProgressBar from '@badrap/bar-of-progress';

import type { AppProps } from 'next/app';

import * as gtag from '@/lib/gtag';

const progress = new ProgressBar({
  size: 3,
  color: '#64ffda',
  className: 'bar-of-progress',
  delay: 10
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}
