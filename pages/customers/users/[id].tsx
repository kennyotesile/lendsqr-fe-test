import TopNav from '@/components/TopNav'
import Head from 'next/head'
import SideNav from '@/components/SideNav'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function UserDetails() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const router = useRouter();
  const { id } = router.query;
  const userId: number = Number(id);

  interface User {
    createdAt: string|null;
    orgName: string|null;
    userName: string|null;
    email: string|null;
    phoneNumber: string|null;
    lastActiveDate: string|null;
    profile: {
        firstName: string|null;
        lastName: string|null;
        phoneNumber: string|null;
        avatar: string|null;
        gender: string|null;
        bvn: string|null;
        address: string|null;
        currency: string|null;
    };
    guarantor: {
        firstName: string|null;
        lastName: string|null;
        phoneNumber: string|null;
        gender: string|null;
        address: string|null;
    };
    accountBalance: string|null;
    accountNumber: string|null;
    socials: {
        facebook: string|null;
        instagram: string|null;
        twitter: string|null;
    };
    education: {
        level: string|null;
        employmentStatus: string|null;
        sector: string|null;
        duration: string|null;
        officeEmail: string|null;
        monthlyIncome: string[]|null;
        loanRepayment: string|null;
    };
    id: string|null;
  }

  const [users, setUsers] = useState<User[] | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const usersLocal: string | null = localStorage.getItem('users');
      if (usersLocal === null) {
          fetch(`${apiUrl}/users`)
              .then(res => res.json())
              .then(data => {
                  localStorage.setItem('users', JSON.stringify(data));
                  setUsers(JSON.parse(localStorage.getItem('users')!));
              })
      } else {
          setUsers(JSON.parse(localStorage.getItem('users')!));
      }
    }
  }, [])

  useEffect(() => {
    if (users !== null) {
      setUser(users[userId - 1]);
    }
  }, [users])

  return (
    <>
      <Head>
        <title>User Details | Lendsqr</title>
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
            <Link href='/customers/users' className='text-16 mb-[32px] flex items-center gap-[13px]'>
                <img src='/icons/back-arrow.svg' alt='Back icon' />
                Back to Users
            </Link>
            <div className='flex flex-col gap-[20px] md:flex-row justify-between mb-[40px]'>
              <h1 className='text-24 text-accent-text-color'>User Details</h1>
              <div className='flex gap-[20px]'>
                <Link href='#' className='button w-auto border border-[1px] text-danger-color border-danger-color rounded-[8px] px-[16px] py-[12px] hover:bg-danger-color hover:text-white'>Blacklist User</Link>
                <Link href='#' className='flex button border border-[1px] text-primary-color border-primary-color rounded-[8px] px-[16px] py-[12px] hover:bg-primary-color hover:text-white'>Activate User</Link>
              </div>
            </div>

            <section className='flex flex-col gap-[50px] shadow-[0_3px_20px_5px_rgba(0,0,0,0.04)] p-[30px] pb-[0px] bg-white rounded-[4px] border border-1 border-accent-text-color/[0.06]'>
              <div className='flex flex-col md:flex-row'>
                <div className='flex'>
                  {
                    user?.profile?.avatar ? <img src={user.profile.avatar} alt='User avatar' className='mb-[14px] h-[100px] w-[100px] rounded-full' /> : <img src='/avatar.svg' alt='User default avatar' className='mb-[14px]' />
                  }
                  <div className='px-[30px] pl-[20px] flex items-center'>
                      <span>
                          <h1 className='text-22 text-accent-text-color mb-[8px]'>{user && `${user.profile.firstName} ${user.profile.lastName}`}</h1>
                          <span>{user && `${user.userName}`}</span>
                      </span>
                  </div>
                </div>
                <div className='border-0 md:border-l-[1px] border-primary-text-color/[0.2] my-[10px] px-0 md:px-[30px] flex items-center'>
                    <span className='flex flex-col gap-[10px]'>
                        <span className='font-medium'>User's Tier</span>
                        <span className='flex gap-[5px]'>
                            <img src='/icons/star-filled-icon.svg' alt='Star filled' />
                            <img src='/icons/star-icon.svg' alt='Star' />
                            <img src='/icons/star-icon.svg' alt='Star' />
                        </span>
                    </span>
                </div>
                <div className='border-0 md:border-l-[1px] border-primary-text-color/[0.2] my-[10px] px-0 md:px-[30px] flex items-center'>
                    <span className='flex flex-col gap-[10px]'>
                        <span className='font-medium text-22 text-accent-text-color'>₦{user && `${user.accountBalance}`}</span>
                        <span>{user && `${user.accountNumber}`}/-</span>
                    </span>
                </div>
              </div>
              <div className='mx-[-30px] md:mx-0'>
                <ul className='flex overflow-x-auto'>
                  <li className='shrink-0 border-b-2 border-primary-color hover:border-primary-color'>
                    <Link href='#' className='text-16 bg-black'>
                      <div className='py-[10px] px-[25px]'>General Details</div>
                    </Link>
                  </li>
                  <li className='shrink-0 border-b-2 border-transparent hover:border-primary-color'>
                    <Link href='#' className='text-16 bg-black'>
                      <div className='py-[10px] px-[25px]'>Documents</div>
                    </Link>
                  </li>
                  <li className='shrink-0 border-b-2 border-transparent hover:border-primary-color'>
                    <Link href='#' className='text-16 bg-black'>
                      <div className='py-[10px] px-[25px]'>Bank Details</div>
                    </Link>
                  </li>
                  <li className='shrink-0 border-b-2 border-transparent hover:border-primary-color'>
                    <Link href='#' className='text-16 bg-black'>
                      <div className='py-[10px] px-[25px]'>Loans</div>
                    </Link>
                  </li>
                  <li className='shrink-0 border-b-2 border-transparent hover:border-primary-color'>
                    <Link href='#' className='text-16 bg-black'>
                      <div className='py-[10px] px-[25px]'>Savings</div>
                    </Link>
                  </li>
                  <li className='shrink-0 border-b-2 border-transparent hover:border-primary-color'>
                    <Link href='#' className='text-16 bg-black'>
                      <div className='py-[10px] px-[25px]'>App and System</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            <section className='mt-[30px] w-full shadow-[0_3px_20px_5px_rgba(0,0,0,0.04)] bg-white rounded-[4px] border border-1 border-accent-text-color/[0.06] p-[30px]'>
              <div className='pb-[30px] border-b-[1px] border-b-accent-text-color/10'>
                <h2 className='text-16 text-accent-text-color mb-[30px]'>Personal Information</h2>
                <div className='flex gap-[20px] md:gap-y-[30px] md:gap-x-[80px] lg:gap-x-[100px] flex-wrap'>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>FULL NAME</h2>
                    <span className='text-16'>{user && `${user.profile.firstName} ${user.profile.lastName}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>PHONE NUMBER</h2>
                    <span className='text-16'>{user && `${user.profile.phoneNumber}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>EMAIL ADDRESS</h2>
                    <span className='text-16'>{user && `${user.email}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>BVN</h2>
                    <span className='text-16'>{user && `${user.profile.bvn}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>GENDER</h2>
                    <span className='text-16'>{user && `${user.profile.gender}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>MARITAL STATUS</h2>
                    <span className='text-16'>-</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>CHILDREN</h2>
                    <span className='text-16'>-</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>TYPE OF RESIDENCE</h2>
                    <span className='text-16'>-</span>
                  </div>
                </div>
              </div>

              <div className='py-[30px] border-b-[1px] border-b-accent-text-color/10'>
                <h2 className='text-16 text-accent-text-color mb-[30px]'>Education and Employment</h2>
                <div className='flex gap-[20px] md:gap-y-[30px] md:gap-x-[80px] lg:gap-x-[100px] flex-wrap'>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>LEVEL OF EDUCATION</h2>
                    <span className='text-16'>{user && `${user.education.level}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>EMPLOYMENT STATUS</h2>
                    <span className='text-16'>{user && `${user.education.employmentStatus}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>SECTOR OF EMPLOYMENT</h2>
                    <span className='text-16'>{user && `${user.education.sector}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>DURATION OF EMPLOYMENT</h2>
                    <span className='text-16'>{user && `${user.education.duration}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>OFFICIAL EMAIL</h2>
                    <span className='text-16'>{user && `${user.education.officeEmail}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>MONTHLY INCOME</h2>
                    <span className='text-16'>{user && `₦${user.education.monthlyIncome![0]} - ₦${user.education.monthlyIncome![1]}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>LOAN REPAYMENT</h2>
                    <span className='text-16'>{user && `₦${user.education.loanRepayment}`}</span>
                  </div>
                </div>
              </div>

              <div className='py-[30px] border-b-[1px] border-b-accent-text-color/10'>
                <h2 className='text-16 text-accent-text-color mb-[30px]'>Socials</h2>
                <div className='flex gap-[20px] md:gap-y-[30px] md:gap-x-[80px] lg:gap-x-[100px] flex-wrap'>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>TWITTER</h2>
                    <span className='text-16'>{user && `${user.socials.twitter}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>FACEBOOK</h2>
                    <span className='text-16'>{user && `${user.socials.facebook}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>INSTAGRAM</h2>
                    <span className='text-16'>{user && `${user.socials.instagram}`}</span>
                  </div>
                </div>
              </div>

              <div className='pt-[30px]'>
                <h2 className='text-16 text-accent-text-color mb-[30px]'>Guarantor</h2>
                <div className='flex gap-[20px] md:gap-y-[30px] md:gap-x-[80px] lg:gap-x-[100px] flex-wrap'>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>FULL NAME</h2>
                    <span className='text-16'>{user && `${user.guarantor.firstName} ${user.guarantor.lastName}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>PHONE NUMBER</h2>
                    <span className='text-16'>{user && `${user.guarantor.phoneNumber}`}</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>EMAIL ADDRESS</h2>
                    <span className='text-16'>-</span>
                  </div>
                  <div className='flex flex-col md:shrink-0 gap-[8px] w-full md:w-auto'>
                    <h2 className='text-12'>RELATIONSHIP</h2>
                    <span className='text-16'>-</span>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
