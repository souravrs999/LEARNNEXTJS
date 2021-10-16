import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'LEARNNEXT - All about NextJS',
    description:
      "LEARNNEXT is a collection of Blog's and Article's for NextJS a React Framework for Production from the Vercel team, learn, improve and develop your skill as a NextJS developer.",
    image: 'https://learnnext-blog.vercel.app/img/banner-800x514.png',
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://learnnext-blog.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://learnnext-blog.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Learn NextJS" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@learnnextjs" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter.description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.data && (
          <meta property="article:published_time" content={meta.date} />
        )}
        {/* Propeller ads domain verification tag */}
        <meta name="propeller" content="1a12680230e496442922a489571f5e80" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Container;
