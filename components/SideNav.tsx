import sideNavStyles from '@/styles/SideNav.module.scss';
import Link from "next/link";
import { useRouter } from 'next/router';
import { showOverlay } from '@/components/FullScreenOverlay';
import { useRecoilState } from 'recoil';
import { switchOrgDropdownState } from '@/states/sideNavStates';

export default function SideNav() {
    interface Link {
        title: string,
        url: string,
        iconUrl: string
    }
      
    interface NavSections {
        [sectionName: string]: Link[]
    }
      
    const navSections: NavSections = {
        CUSTOMERS: [
            {
                title: 'Users',
                url: '/customers/users',
                iconUrl: '/icons/users-icon.svg'
            },
            {
                title: 'Guarantors',
                url: '/customers/guarantors',
                iconUrl: '/icons/guarantors-icon.svg'
            },
            {
                title: 'Loans',
                url: '/customers/loans',
                iconUrl: '/icons/loans-icon.svg'
            },
            {
                title: 'Decision Models',
                url: '/customers/decision-models',
                iconUrl: '/icons/decision-models-icon.svg'
            },
            {
                title: 'Savings',
                url: '/customers/savings',
                iconUrl: '/icons/savings-icon.svg'
            },
            {
                title: 'Loan Requests',
                url: '/customers/loan-requests',
                iconUrl: '/icons/loan-requests-icon.svg'
            },
            {
                title: 'Whitelist',
                url: '/customers/whitelist',
                iconUrl: '/icons/whitelist-icon.svg'
            },
            {
                title: 'Karma',
                url: '/customers/karma',
                iconUrl: '/icons/karma-icon.svg'
            }
        ],
        BUSINESSES: [
            {
                title: 'Organization',
                url: '/businesses/organization',
                iconUrl: '/icons/organization-icon.svg'
            },
            {
                title: 'Loan Products',
                url: '/businesses/loan-products',
                iconUrl: '/icons/loans-icon.svg'
            },
            {
                title: 'Savings Products',
                url: '/businesses/savings-products',
                iconUrl: '/icons/savings-products-icon.svg'
            },
            {
                title: 'Fees and Charges',
                url: '/businesses/fees-and-charges',
                iconUrl: '/icons/fees-and-charges-icon.svg'
            },
            {
                title: 'Transactions',
                url: '/businesses/transactions',
                iconUrl: '/icons/transactions-icon.svg'
            },
            {
                title: 'Services',
                url: '/businesses/services',
                iconUrl: '/icons/services-icon.svg'
            },
            {
                title: 'Service Account',
                url: '/businesses/service-account',
                iconUrl: '/icons/service-account-icon.svg'
            },
            {
                title: 'Settlements',
                url: '/businesses/settlements',
                iconUrl: '/icons/settlements-icon.svg'
            },
            {
                title: 'Reports',
                url: '/businesses/reports',
                iconUrl: '/icons/reports-icon.svg'
            }
        ],
        SETTINGS: [
            {
                title: 'Preferences',
                url: '/settings/preferences',
                iconUrl: '/icons/preferences-icon.svg'
            },
            {
                title: 'Fees and Pricing',
                url: '/settings/fees-and-pricing',
                iconUrl: '/icons/fees-and-pricing-icon.svg'
            },
            {
                title: 'Audit Logs',
                url: '/settings/audit-logs',
                iconUrl: '/icons/audit-logs-icon.svg'
            },
            {
                title: 'Systems Messages',
                url: '/settings/systems-messages',
                iconUrl: '/icons/systems-messages-icon.svg'
            }
        ]
    }

    const router = useRouter();

    const [switchOrgDropdown, setSwitchOrgDropdown] = useRecoilState<boolean>(switchOrgDropdownState);

    function showSwitchOrgDropdown() {
        setSwitchOrgDropdown(true);
        showOverlay();
    }

    return (
        <nav className='w-[283px] bg-white py-[30px] h-full overflow-y-auto'>
            <div className='relative'>
                <button type='button' className='flex gap-[10px] items-center text-16 text-accent-text-color px-[30px] py-[12px] border-l-[3px] border-transparent cursor-pointer'
                onClick={showSwitchOrgDropdown}>
                    <img src='/icons/organization-icon.svg' width={16} height={16} alt='Organization icon' />
                    Switch Organization
                    <img src='/icons/chevron-down-icon.svg' width={12} height={12} alt='Organization icon' />
                </button>
                {switchOrgDropdown && (
                    <div className='flex flex-col absolute z-20 bg-white min-w-[220px] py-[4px] rounded-[8px] border border-1 border-gray-200 right-[24px] mt-[4px]'>
                        <Link href='#' className='px-[30px] py-[12px] hover:bg-primary-color-lighter'>Some Company</Link>
                        <Link href='#' className='px-[30px] py-[12px] hover:bg-primary-color-lighter'>Pecunia LLC</Link>
                    </div>
                )}
            </div>

            <Link href='/dashboard' className={router.pathname == '/dashboard' ?
                                [sideNavStyles.link, 'flex gap-[10px] text-16 text-accent-text-color opacity-100 mt-[30px] px-[30px] py-[12px] border-l-[3px] bg-primary-color-lighter border-primary-color'].join(' ') :
                                [sideNavStyles.link, 'flex gap-[10px] text-16 text-accent-text-color opacity-60 hover:opacity-100 mt-[30px] px-[30px] py-[12px] border-l-[3px] border-transparent hover:border-primary-color'].join(' ')}>
                <img src='/icons/dashboard-icon.svg' width={16} height={16} alt='Dashboard icon' />
                Dashboard
            </Link>

            {Object.keys(navSections).map((navSectionKey) => (
                <section key={navSectionKey} className='mt-[30px]'>
                    <h2 className='text-12 font-medium mx-[30px] mb-[10px]'>{navSectionKey}</h2>
                    <ul className='flex flex-col gap-[10px]'>
                        {navSections[navSectionKey].map((link: Link) => (
                            <li key={link.url}>
                                <Link href={link.url} className={router.pathname == link.url ?
                                [sideNavStyles.link, 'flex gap-[10px] text-16 text-accent-text-color opacity-100 px-[30px] py-[12px] border-l-[3px] bg-primary-color-lighter border-primary-color'].join(' ') :
                                [sideNavStyles.link, 'flex gap-[10px] text-16 text-accent-text-color opacity-60 hover:opacity-100 px-[30px] py-[12px] border-l-[3px] border-transparent hover:border-primary-color'].join(' ')}>
                                    <img src={link.iconUrl} width={16} height={16} alt={`${link.title} icon`} className='' />
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            <hr className='mt-[60px]' />
            <button type='button' onClick={() => {
                window.location.href = '/'
            }} className='flex w-full gap-[10px] text-16 text-accent-text-color mt-[10px] px-[30px] py-[12px] border-l-[3px] border-transparent'>
                <img src='/icons/logout-icon.svg' width={16} height={16} alt='Log out icon' />
                Log out
            </button>
            <p className='text-12 text-accent-text-color mt-[10px] px-[30px] py-[12px]'>v1.2.0</p>
        </nav>
    );
}