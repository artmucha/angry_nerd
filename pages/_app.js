import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import SEO from 'next-seo.config';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import AuthProvider from 'providers/AuthProvider';

const App = ({ Component, pageProps }) => (
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <Head>
        <title>Angry Nerds - oceniamy gry!</title>
        <link rel="shortcut icon" href="/logo_light.png" />
        <link rel="apple-touch-icon" href="/logo_light.png" />
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
  </AuthProvider>
);

export default App;