import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SparkProvider } from '../components/SparkProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SparkProvider>
      <Head>
        <title>Rubeena Khan Clinic</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </SparkProvider>
  );
}
