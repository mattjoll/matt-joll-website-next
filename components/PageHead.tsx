import { FunctionComponent } from 'react';
import Head from 'next/head';

type PageHeadProps = {
  pageUrl?: string;
  title?: string;
  type?: string;
};

const PageHead: FunctionComponent<PageHeadProps> = (props) => {
  const title = !!props.title ? `${props.title} - Matt Joll` : 'Matt Joll';

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Matt Joll is a Software Engineer from New Zealand with a passion for the web."
      />
      <meta name="og:title" content={title} />
      <meta
        name="og:description"
        content="Matt Joll is a Software Engineer from New Zealand with a passion for the web."
      />
      <meta
        name="og:url"
        content={`https://mattjoll.nz${props.pageUrl || ''}`}
      />
      <meta name="og:type" content={props.type || 'website'} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;
