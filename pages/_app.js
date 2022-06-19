
import Head from 'next/head';

const ClientApp = props => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Angry Nerds - oceniamy gry</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
      </>
  );
};

export default ClientApp;