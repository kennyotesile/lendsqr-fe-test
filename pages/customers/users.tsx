import TopNav from '@/components/TopNav'
import Head from 'next/head'
import SideNav from '@/components/SideNav'
import { useState } from 'react'
import Link from 'next/link';
import FullScreenOverlay, { hideOverlay, showOverlay } from '@/components/FullScreenOverlay';
import { useRecoilState } from 'recoil';
import { switchOrgDropdownState } from '@/states/sideNavStates';

export default function Users() {
  const [showNumberOfUsersShownDropdown, setShowNumberOfUsersShownDropdown] = useState<boolean>(false);
  const [showMoreActionsDropdown, setShowMoreActionsDropdown] = useState<boolean>(false);
  const [showFiltersDropdown, setShowFiltersDropdown] = useState<boolean>(false);

  const [switchOrgDropdown, setSwitchOrgDropdown] = useRecoilState<boolean>(switchOrgDropdownState);

  function hideAllDropdowns() {
    setShowNumberOfUsersShownDropdown(false);
    setShowMoreActionsDropdown(false);
    setShowFiltersDropdown(false);

    setSwitchOrgDropdown(false);

    hideOverlay();
  }

  function handleShowFiltersDropdown() {
    setShowFiltersDropdown(true);
    showOverlay();
  }

  return (
    <>
      <Head>
        <title>Users | Lendsqr</title>
      </Head>

      <FullScreenOverlay onClick={hideAllDropdowns} />
      
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
              <div className='overflow-x-auto w-full h-[640px] flex flex-col shadow-[0_3px_20px_5px_rgba(0,0,0,0.04)] bg-white rounded-[4px] border border-1 border-accent-text-color/[0.06] p-[30px]'>
                <table className='table-auto text-left m-0'>
                  <thead className='h-[30px] align-top'>
                    <tr>
                      <th className='text-12 font-semibold whitespace-nowrap pr-[30px]'>
                        <span className='flex items-center gap-[10px]'>
                          ORGANIZATION
                          <button onClick={handleShowFiltersDropdown}>
                            <img src='/icons/filter-icon.svg' alt='filter-icon' />
                          </button>
                        </span>
                        {
                          showFiltersDropdown && <div id='filtersDropdown' className='relative'>
                            <div className='absolute z-40 left-0 top-[15px] shadow-[0_3px_20px_5px_rgba(0,0,0,0.04)] bg-white rounded-[4px] border border-1 border-text-color/[0.14] w-[270px] font-medium'>
                              <div className='flex flex-col py-[30px] px-[20px] gap-[20px]'>
                                <div className='flex flex-col gap-[6px]'>
                                  Organization
                                  <select className='rounded-[8px] py-[12px] px-[20px] border border-[1px] border-accent-text-color/20 outline-primary-color font-normal cursor-pointer'>
                                    <option value='Select'>Select</option>
                                    <option value='Org 1'>Org 1</option>
                                    <option value='Org 2'>Org 2</option>
                                  </select>
                                </div>

                                <div className='flex flex-col gap-[6px]'>
                                  User
                                  <input type='text' className='rounded-[8px] py-[12px] px-[20px] border border-[1px] border-accent-text-color/20 outline-primary-color font-normal' placeholder='User' />
                                </div>

                                <div className='flex flex-col gap-[6px]'>
                                  Email
                                  <input type='email' className='rounded-[8px] py-[12px] px-[20px] border border-[1px] border-accent-text-color/20 outline-primary-color font-normal' placeholder='Email' />
                                </div>

                                <div className='flex flex-col gap-[6px]'>
                                  Date
                                  <input type='date' className='rounded-[8px] py-[12px] px-[20px] border border-[1px] border-accent-text-color/20 outline-primary-color font-normal' placeholder='Email' />
                                </div>

                                <div className='flex flex-col gap-[6px]'>
                                  Phone number
                                  <input type='text' className='rounded-[8px] py-[12px] px-[20px] border border-[1px] border-accent-text-color/20 outline-primary-color font-normal' placeholder='Email' />
                                </div>

                                <div className='flex flex-col gap-[6px]'>
                                  Status
                                  <select className='rounded-[8px] py-[12px] px-[20px] border border-[1px] border-accent-text-color/20 outline-primary-color font-normal cursor-pointer'>
                                    <option value='Select'>Select</option>
                                    <option value='Inactive'>Inactive</option>
                                    <option value='Pending'>Pending</option>
                                    <option value='Blacklisted'>Blacklisted</option>
                                    <option value='Active'>Active</option>
                                  </select>
                                </div>

                                <div className='flex gap-[14px]'>
                                  <button type='button' className='py-[12px] px-[30px] border border-[1px] border-primary-text-color rounded-[8px] font-semibold'>Reset</button>
                                  <button type='button' className='py-[12px] px-[30px] border border-[1px] border-primary-color rounded-[8px] font-semibold bg-primary-color hover:bg-primary-color-hover hover:border-primary-color-hover text-white'>Reset</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                      </th>
                      <th className='text-12 font-semibold whitespace-nowrap pl-[30px]'>
                        <span className='flex items-center gap-[10px]'>
                          USERNAME
                          <button onClick={handleShowFiltersDropdown}>
                            <img src='/icons/filter-icon.svg' alt='filter-icon' />
                          </button>
                        </span>
                      </th>
                      <th className='text-12 font-semibold whitespace-nowrap pl-[30px]'>
                        <span className='flex items-center gap-[10px]'>
                          EMAIL
                          <button onClick={handleShowFiltersDropdown}>
                            <img src='/icons/filter-icon.svg' alt='filter-icon' />
                          </button>
                        </span>
                      </th>
                      <th className='text-12 font-semibold whitespace-nowrap pl-[30px]'>
                        <span className='flex items-center gap-[10px]'>
                          PHONE NUMBER
                          <button onClick={handleShowFiltersDropdown}>
                            <img src='/icons/filter-icon.svg' alt='filter-icon' />
                          </button>
                        </span>
                      </th>
                      <th className='text-12 font-semibold whitespace-nowrap pl-[30px]'>
                        <span className='flex items-center gap-[10px]'>
                          DATE JOINED
                          <button onClick={handleShowFiltersDropdown}>
                            <img src='/icons/filter-icon.svg' alt='filter-icon' />
                          </button>
                        </span>
                      </th>
                      <th className='text-12 font-semibold whitespace-nowrap pl-[30px]'>
                        <span className='flex items-center gap-[10px]'>
                          STATUS
                          <button onClick={handleShowFiltersDropdown}>
                            <img src='/icons/filter-icon.svg' alt='filter-icon' />
                          </button>
                        </span>
                      </th>
                      <th className='pl-[30px]'></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b-[1px] border-accent-text-color/[0.1]'>
                      <td className='py-[20px] whitespace-nowrap pr-[30px]'>Lendsqr</td>
                      <td className='py-[20px] whitespace-nowrap pl-[30px]'>Adedeji</td>
                      <td className='py-[20px] whitespace-nowrap pl-[30px]'>adedeji@lendsqr.com</td>
                      <td className='py-[20px] whitespace-nowrap pl-[30px]'>08078903721</td>
                      <td className='py-[20px] whitespace-nowrap pl-[30px]'>May 15, 2020 10:00 AM</td>
                      <td className='py-[20px] whitespace-nowrap pl-[30px] flex'>
                        <div className='px-[13px] py-[8px] rounded-full bg-primary-text-color/[0.06]'>Inactive</div>
                      </td>
                      <td className='pl-[30px]'>
                        <div className='relative'>
                          <button onClick={() => {
                            setShowMoreActionsDropdown(!showMoreActionsDropdown);
                            showOverlay();
                          }}>
                            <img src='/icons/more-icon.svg' alt='More icon' />
                          </button>
                          {
                            showMoreActionsDropdown && <div id='moreActionsDropdown' className='absolute z-40 right-0 shadow-[0_3px_20px_5px_rgba(0,0,0,0.04)] bg-white rounded-[4px] border border-1 border-accent-text-color/[0.04] w-[180px]'>
                            <ul className='flex flex-col'>
                              <li>
                                <Link href='/customers/users/user-details' type='button' className='p-[14px] w-full hover:bg-gray-100 rounded-t-[4px] flex gap-[8px]'>
                                  <img src='/icons/eye-icon.svg' alt='View details icon' />
                                  <span>View details</span>
                                </Link>
                              </li>
                              <li>
                                <button type='button' className='p-[14px] w-full hover:bg-gray-100 flex gap-[8px]'>
                                  <img src='/icons/blacklist-user-icon.svg' alt='Blacklist user icon' />
                                  <span>Blacklist user</span>
                                </button>
                              </li>
                              <li>
                                <button type='button' className='p-[14px] w-full hover:bg-gray-100 rounded-b-[4px] flex gap-[8px]'>
                                  <img src='/icons/activate-user-icon.svg' alt='Activate user icon' />
                                  <span>Activate user</span>
                                </button>
                              </li>
                            </ul>
                          </div>
                          }
                        </div>
                      </td>
                    </tr>

                    {/* <tr className='border-b-[1px] border-accent-text-color/[0.1]'>
                      <td className='py-[20px]'>Lendsqr</td>
                      <td className='py-[20px]'>Adedeji</td>
                      <td className='py-[20px]'>adedeji@lendsqr.com</td>
                      <td className='py-[20px]'>08078903721</td>
                      <td className='py-[20px]'>May 15, 2020 10:00 AM</td>
                      <td className='py-[20px] flex'>
                        <div className='px-[13px] py-[8px] rounded-full bg-warning-color/[0.1] text-warning-color'>Pending</div>
                      </td>
                      <td>
                        <div className='relative'>
                          <button onClick={() => {
                            setShowMoreActionsDropdown(!showMoreActionsDropdown);
                            showOverlay();
                          }}>
                            <img src='/icons/more-icon.svg' alt='More icon' />
                          </button>
                          {
                            showMoreActionsDropdown && <div id='moreActionsDropdown' className='absolute z-40 right-0 shadow-[0_3px_20px_5px_rgba(0,0,0,0.04)] bg-white rounded-[4px] border border-1 border-accent-text-color/[0.04] w-[180px]'>
                            <ul className='flex flex-col'>
                              <li>
                                <Link href='/customers/users/user-details' type='button' className='p-[14px] w-full hover:bg-gray-100 rounded-t-[4px] flex gap-[8px]'>
                                  <img src='/icons/eye-icon.svg' alt='View details icon' />
                                  <span>View details</span>
                                </Link>
                              </li>
                              <li>
                                <button type='button' className='p-[14px] w-full hover:bg-gray-100 flex gap-[8px]'>
                                  <img src='/icons/blacklist-user-icon.svg' alt='Blacklist user icon' />
                                  <span>Blacklist user</span>
                                </button>
                              </li>
                              <li>
                                <button type='button' className='p-[14px] w-full hover:bg-gray-100 rounded-b-[4px] flex gap-[8px]'>
                                  <img src='/icons/activate-user-icon.svg' alt='Activate user icon' />
                                  <span>Activate user</span>
                                </button>
                              </li>
                            </ul>
                          </div>
                          }
                        </div>
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
                      <td>
                        <button>
                          <img src='/icons/more-icon.svg' alt='More icon' />
                        </button>
                      </td>
                    </tr>

                    <tr className='border-b-[1px] border-accent-text-color/[0.1]'>
                      <td className='py-[20px]'>Lendsqr</td>
                      <td className='py-[20px]'>Adedeji</td>
                      <td className='py-[20px]'>adedeji@lendsqr.com</td>
                      <td className='py-[20px]'>08078903721</td>
                      <td className='py-[20px]'>May 15, 2020 10:00 AM</td>
                      <td className='py-[20px] flex'>
                        <div className='px-[13px] py-[8px] rounded-full bg-success-color/[0.06] text-success-color'>Active</div>
                      </td>
                      <td>
                        <button>
                          <img src='/icons/more-icon.svg' alt='More icon' />
                        </button>
                      </td>
                    </tr> */}
                  </tbody>
                </table> {/** Fix: Consume data from endpoint */ }
              </div>

              <div className='w-full flex flex-col md:flex-row gap-[20px] md:gap-0 md:justify-between'>
                <div className='flex items-center gap-[10px]'>
                  Showing
                  <div className='relative'>
                    <button className='px-[12px] py-[8px] flex gap-[18px] items-center bg-accent-text-color/10 hover:bg-accent-text-color/20 rounded-[4px]' onClick={() => {
                      setShowNumberOfUsersShownDropdown(!showNumberOfUsersShownDropdown);
                      showOverlay();
                      
                      const numberOfUsersShownDropdownInput = document.querySelector('#numberOfUsersShownDropdown input');
                      if (numberOfUsersShownDropdownInput instanceof HTMLInputElement) {
                        numberOfUsersShownDropdownInput.focus();
                      }
                    }}>
                      100
                      <img src='/icons/chevron-down-icon.svg' alt='Dropdown icon' />
                    </button>
                    {
                      showNumberOfUsersShownDropdown && <div id='numberOfUsersShownDropdown' className='flex-col bg-white rounded-[4px] border border-1 border-gray-200 absolute z-40 top-[34px]'>
                      <input type='number' max='100' min='1' placeholder='1 - 100' className='border border-0 rounded-[4px] focus:outline-primary-color h-8 w-[76px] px-2' />
                    </div>
                    }
                  </div>
                  out of 100
                </div> {/** Fix: No. of rows dropdown */}
                <div className='flex gap-[12px]'>
                  <button className='w-[24px] h-[24px] flex items-center justify-center rounded-[4px] bg-accent-text-color/10'>
                    <img src='/icons/chevron-left-icon.svg' alt='Back icon' className='opacity-60' />
                  </button>

                  <div className='flex gap-[4px]'>
                    <button className='w-[24px] h-[24px] flex items-center justify-center rounded-[4px] hover:bg-accent-text-color/10'>
                      <span className='text-16 font-medium'>1</span>
                    </button>
                    <button className='w-[24px] h-[24px] flex items-center justify-center rounded-[4px] hover:bg-accent-text-color/10'>
                      <span className='text-16 font-normal text-primary-text-color/60'>2</span>
                    </button>
                    <button className='w-[24px] h-[24px] flex items-center justify-center rounded-[4px] hover:bg-accent-text-color/10'>
                      <span className='text-16 font-normal text-primary-text-color/60'>3</span>
                    </button>
                    <button className='w-[24px] h-[24px] flex items-center justify-center rounded-[4px] hover:bg-accent-text-color/10'>
                      <span className='text-16 font-normal text-primary-text-color/60'>...</span>
                    </button>
                    <button className='w-[24px] h-[24px] flex items-center justify-center rounded-[4px] hover:bg-accent-text-color/10'>
                      <span className='text-16 font-normal text-primary-text-color/60'>15</span>
                    </button>
                    <button className='w-[24px] h-[24px] flex items-center justify-center rounded-[4px] hover:bg-accent-text-color/10'>
                      <span className='text-16 font-normal text-primary-text-color/60'>16</span>
                    </button>
                  </div>
                  
                  <button className='w-[24px] h-[24px] flex items-center justify-center rounded-[4px] bg-accent-text-color/10 hover:bg-accent-text-color/20'>
                    <img src='/icons/chevron-right-icon.svg' alt='Next icon' />
                  </button>
                </div> {/** Fix: Implement pagination */}
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
