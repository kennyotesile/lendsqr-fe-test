import TopNav from '@/components/TopNav'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Dashboard | Lendsqr</title>
      </Head>
      <main className='bg-whitespace-color h-screen'>
        <TopNav />
      </main>
    </>
  )
}
