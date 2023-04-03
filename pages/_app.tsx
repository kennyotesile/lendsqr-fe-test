import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lendsqr | Empowering the smartest lenders</title>
        <meta name="description" content="Launch your lending business in minutes and block borrowers with Lendsqr. Sign up now." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
