import sideNavStyles from '@/styles/SideNav.module.scss';
import Link from "next/link";

export default function TopNav() {
    interface Link {
        title: string;
        url: string;
    }
      
    interface NavSections {
        CUSTOMERS: Link[];
        BUSINESSES: Link[];
        SETTINGS: Link[];
    }
      
    const navSections: NavSections = {
        CUSTOMERS: [
            {
                title: 'Users',
                url: '/customers/users'
            },
            {
                title: 'Guarantors',
                url: '/customers/guarantors'
            },
            {
                title: 'Loans',
                url: '/customers/loans'
            },
            {
                title: 'Decision Models',
                url: '/customers/decision-models'
            },
            {
                title: 'Savings',
                url: '/customers/savings'
            },
            {
                title: 'Loan Requests',
                url: '/customers/loan-requests'
            },
            {
                title: 'Whitelist',
                url: '/customers/whitelist'
            },
            {
                title: 'Karma',
                url: '/customers/karma'
            }
        ],
        BUSINESSES: [
            {
                title: 'Organization',
                url: '/businesses/organization'
            },
            {
                title: 'Loan Products',
                url: '/businesses/loan-products'
            },
            {
                title: 'Savings Products',
                url: '/businesses/savings-products'
            },
            {
                title: 'Fees and Charges',
                url: '/businesses/fees-and-charges'
            },
            {
                title: 'Transactions',
                url: '/businesses/transactions'
            },
            {
                title: 'Services',
                url: '/businesses/services'
            },
            {
                title: 'Service Account',
                url: '/businesses/service-account'
            },
            {
                title: 'Settlements',
                url: '/businesses/settlements'
            },
            {
                title: 'Reports',
                url: '/businesses/reports'
            }
        ],
        SETTINGS: [
            {
                title: 'Preferences',
                url: '/settings/preferences'
            },
            {
                title: 'Fees and Pricing',
                url: '/settings/fees-and-pricing'
            },
            {
                title: 'Audit Logs',
                url: '/settings/audit-logs'
            },
            {
                title: 'System Messages',
                url: '/settings/system-messages'
            }
        ]
    }

    return (
        <nav className='w-[283px] bg-white py-[30px] h-full overflow-y-auto'>
            <Link href='#' className={[sideNavStyles.link, 'flex text-16 text-accent-text-color px-[30px] py-[12px] border-l-[3px] border-primary-color'].join(' ')}>Switch Organization</Link>
            <Link href='#' className={[sideNavStyles.link, 'flex text-16 text-accent-text-color-lighter hover:text-accent-text-color px-[30px] py-[12px] border-l-[3px] border-transparent hover:border-primary-color mt-[30px]'].join(' ')}>Dashboard</Link>

            {Object.keys(navSections).map((navSectionKey) => (
                <section key={navSectionKey} className='mt-[30px]'>
                    <h2 className='text-12 font-medium mx-[30px] mb-[10px]'>{navSectionKey}</h2>
                    <ul className='flex flex-col gap-[10px]'>
                        {navSections[navSectionKey].map((link: Link) => (
                            <li key={link.url}>
                                <Link href={link.url} className={[sideNavStyles.link, 'flex text-16 text-accent-text-color-lighter hover:text-accent-text-color px-[30px] py-[12px] border-l-[3px] border-transparent hover:border-primary-color'].join(' ')}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </nav>
    );
}