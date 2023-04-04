import TopNav from '@/components/TopNav'
import Head from 'next/head'
import SideNav from '@/components/SideNav'

export default function Users() {
  return (
    <>
      <Head>
        <title>Users | Lendsqr</title>
      </Head>
      <div className='font-work-sans bg-whitespace-color h-screen pt-[100px]'>
        <div className='absolute w-screen top-0'>
          <TopNav />
        </div>

        <div className='h-full overflow-y-auto flex'>
          <aside className='hidden h-full lg:block'>
            <SideNav />
          </aside>

          <main className='w-full h-full flex flex-col p-[24px] md:p-[30px] lg:p-[60px] overflow-y-auto'>
            <h1 className='text-24 text-accent-text-color mb-[40px]'>Users</h1>

            <section className='flex flex-col md:flex-row gap-[20px] md:gap-[24px]'>
              <div className='flex-1 shadow-[0_3px_20px_5px_rgba(0,0,0,0.04)] p-[30px] pt-[20px] bg-white rounded-[4px] border border-1 border-accent-text-color/[0.06]'>
                <img src='/heading-icons/users-icon.svg' alt='Users icon' className='mb-[14px]' />
                <span className='font-medium block mb-[12px]'>USERS</span>
                <span className='text-24 text-accent-text-color font-semibold'>2,453</span>
              </div>
              <div className='flex-1 shadow-[0_3px_20px_5px_rgba(0,0,0,0.04)] p-[30px] pt-[20px] bg-white rounded-[4px] border border-1 border-accent-text-color/[0.06]'>
                <img src='/heading-icons/active-users-icon.svg' alt='Active users icon' className='mb-[14px]' />
                <span className='font-medium block mb-[12px]'>ACTIVE USERS</span>
                <span className='text-24 text-accent-text-color font-semibold'>2,453</span>
              </div>
              <div className='flex-1 shadow-[0_3px_20px_5px_rgba(0,0,0,0.04)] p-[30px] pt-[20px] bg-white rounded-[4px] border border-1 border-accent-text-color/[0.06]'>
                <img src='/heading-icons/users-with-loans-icon.svg' alt='Users with loans icon' className='mb-[14px]' />
                <span className='font-medium block mb-[12px]'>USERS WITH LOANS</span>
                <span className='text-24 text-accent-text-color font-semibold'>12,453</span>
              </div>
              <div className='flex-1 shadow-[0_3px_20px_5px_rgba(0,0,0,0.04)] p-[30px] pt-[20px] bg-white rounded-[4px] border border-1 border-accent-text-color/[0.06]'>
                <img src='/heading-icons/users-with-savings-icon.svg' alt='Users with savings icon' className='mb-[14px]' />
                <span className='font-medium block mb-[12px]'>USERS WITH SAVINGS</span>
                <span className='text-24 text-accent-text-color font-semibold'>102,453</span>
              </div>
            </section>

            <section className='mt-[40px] flex flex-col justify-between gap-[20px]'>
              <div className='w-full h-[640px] flex flex-col shadow-[0_3px_20px_5px_rgba(0,0,0,0.04)] bg-white rounded-[4px] border border-1 border-accent-text-color/[0.06] p-[30px]'>
                <table className='table-auto text-left m-0'>
                  <thead className='h-[30px] align-top'>
                    <tr>
                      <th className='text-12 font-semibold'>ORGANIZATION</th>
                      <th className='text-12 font-semibold'>USERNAME</th>
                      <th className='text-12 font-semibold'>EMAIL</th>
                      <th className='text-12 font-semibold'>PHONE NUMBER</th>
                      <th className='text-12 font-semibold'>DATE JOINED</th>
                      <th className='text-12 font-semibold'>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b-[1px] border-accent-text-color/[0.1]'>
                      <td className='py-[20px]'>Lendsqr</td>
                      <td className='py-[20px]'>Adedeji</td>
                      <td className='py-[20px]'>adedeji@lendsqr.com</td>
                      <td className='py-[20px]'>08078903721</td>
                      <td className='py-[20px]'>May 15, 2020 10:00 AM</td>
                      <td className='py-[20px] flex'>
                        <div className='px-[13px] py-[8px] rounded-full bg-primary-text-color/[0.06]'>Inactive</div>
                      </td>
                    </tr>

                    <tr className='border-b-[1px] border-accent-text-color/[0.1]'>
                      <td className='py-[20px]'>Lendsqr</td>
                      <td className='py-[20px]'>Adedeji</td>
                      <td className='py-[20px]'>adedeji@lendsqr.com</td>
                      <td className='py-[20px]'>08078903721</td>
                      <td className='py-[20px]'>May 15, 2020 10:00 AM</td>
                      <td className='py-[20px] flex'>
                        <div className='px-[13px] py-[8px] rounded-full bg-warning-color/[0.1] text-warning-color'>Pending</div>
                      </td>
                    </tr>

                    <tr className='border-b-[1px] border-accent-text-color/[0.1]'>
                      <td className='py-[20px]'>Lendsqr</td>
                      <td className='py-[20px]'>Adedeji</td>
                      <td className='py-[20px]'>adedeji@lendsqr.com</td>
                      <td className='py-[20px]'>08078903721</td>
                      <td className='py-[20px]'>May 15, 2020 10:00 AM</td>
                      <td className='py-[20px] flex'>
                        <div className='px-[13px] py-[8px] rounded-full bg-danger-color/[0.1] text-danger-color'>Blacklisted</div>
                      </td>
                    </tr>

                    <tr>
                      <td className='py-[20px]'>Lendsqr</td>
                      <td className='py-[20px]'>Adedeji</td>
                      <td className='py-[20px]'>adedeji@lendsqr.com</td>
                      <td className='py-[20px]'>08078903721</td>
                      <td className='py-[20px]'>May 15, 2020 10:00 AM</td>
                      <td className='py-[20px] flex'>
                        <div className='px-[13px] py-[8px] rounded-full bg-success-color/[0.06] text-success-color'>Active</div>
                      </td>
                    </tr>
                  </tbody>
                </table> {/** Fix: Consume data from endpoint */ }
              </div>

              <div className='w-full flex flex-col md:flex-row gap-[20px] md:gap-0 md:justify-between'>
                <div>Showing 100 out of 100</div> {/** Fix: Style '100' */}
                <div>Showing 100 out of 100</div> {/** Fix: Pagination */}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
