import TopNav from '@/components/TopNav'
import Head from 'next/head'
import SideNav from '@/components/SideNav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Lendsqr</title>
      </Head>
      <main className='font-work-sans bg-whitespace-color h-screen pt-[100px]'>
        <section className='absolute w-screen top-0'>
          <TopNav />
        </section>

        <section className='h-full overflow-y-auto'>
          <aside className='hidden h-full lg:block'>
            <SideNav />
          </aside>
        </section>
      </main>
    </>
  )
}
