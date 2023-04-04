import TopNav from '@/components/TopNav'
import Head from 'next/head'
import SideNav from '@/components/SideNav'
import EmptyPageMessage from '@/components/EmptyPageMessage'

export default function Savings() {
  return (
    <>
      <Head>
        <title>Savings | Lendsqr</title>
      </Head>
      <div className='font-work-sans bg-whitespace-color h-screen pt-[100px]'>
        <div className='absolute w-screen top-0'>
          <TopNav />
        </div>

        <div className='h-full overflow-y-auto flex'>
          <aside className='hidden h-full lg:block'>
            <SideNav />
          </aside>
          <main className='w-full h-full flex items-center justify-center p-[24px] md:p-[30px] lg:p-[60px]'>
            <EmptyPageMessage />
          </main>
        </div>
      </div>
    </>
  )
}
