import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = "/login"
  });

  return (
    <>
      <Head>
        <title>Lendsqr</title>
      </Head>
    </>
  )
}
