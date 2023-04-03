import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lendsqr | Empowering the smartest lenders</title>
        <meta name="description" content="Launch your lending business in minutes and block borrowers with Lendsqr. Sign up now." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
