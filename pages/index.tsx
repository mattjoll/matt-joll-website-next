import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Matt Joll</title>
        <meta
          name="description"
          content="Matt Joll is a Software Engineer from New Zealand with a passion for the web."
        />
        <meta name="og:title" content="Matt Joll" />
        <meta
          name="og:description"
          content="Matt Joll is a Software Engineer from New Zealand with a passion for the web."
        />
        <meta name="og:url" content="https://mattjoll.nz" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Coming soon!</h3>
    </div>
  );
};

export default Home;
