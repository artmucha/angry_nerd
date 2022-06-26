import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import Head from 'next/head';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import { useApollo } from 'utils/apollo';

function App({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState)

  return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Angry Nerds</title>
            <link rel="shortcut icon" href="/logo.png" />
            <link rel="apple-touch-icon" href="/logo.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta
              name="description"
              content="Angry Nerds - oceniamy gry!"
            />
          </Head>
          <DefaultSeo {...SEO} />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
  )
}

export default App;