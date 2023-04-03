import topNavStyles from '@/styles/TopNav.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function TopNav() {
    const [searchInputValue, setSearchInputValue] = useState<string>('');

    function handleSearchInputValueChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchInputValue(e.target.value);
    }

    function clearSearchInput() {
        setSearchInputValue('');
    }

    useEffect(() => {
        const clearSearchButton = document.querySelector('#clearSearchButton');
        if (searchInputValue === '') {
            clearSearchButton?.classList.add('hidden');
        } else {
            clearSearchButton?.classList.remove('hidden');
        }
    }, [searchInputValue])

    return (
        <nav className={[topNavStyles.shadowX, 'flex h-[100px] items-center bg-white'].join(" ")}>
            <div className='px-[24px] md:px-[30px]'>
                <Link href='/dashboard'>
                    <img src='/logo.svg' alt='Lendsqr logo' className='w-[145px] h-[30px] mr-[108px]' />
                </Link>
            </div>

            <div className='h-full flex flex-1 px-[24px] md:px-[30px] lg:px-[60px] items-center justify-end lg:justify-between gap-[47px]'>
                <div className='hidden lg:flex flex-col justify-center items-end'>
                    <input type='text' placeholder='Search for anything' name='search' className='border border-1 rounded-[8px] pt-[12px] pb-[9px] pl-[20px] pr-[90px] w-[400px]
                    focus:outline-primary-color focus:outline-offset-0 no-transition' value={searchInputValue} onChange={handleSearchInputValueChange}/>
                    <span className='button text-white bg-primary-color flex items-center justify-center rounded-r-[8px] h-[40px] absolute px-[21px] hover:bg-primary-color-hover cursor-pointer'>
                        <Image src='/search-icon.svg' width={14} height={14} alt='Search icon' />
                    </span>
                    <span id='clearSearchButton' className='flex items-center justify-center h-[40px] absolute px-[10px] mr-[60px] button hidden' onClick={clearSearchInput}>
                        <span className='mt-1'>✕</span>
                    </span>
                </div>

                <div className='hidden md:flex lg:hidden'>
                    <span className='button text-white bg-primary-color flex items-center justify-center rounded-full h-[40px] w-[40px] hover:bg-primary-color-hover cursor-pointer'>
                        <Image src='/search-icon.svg' width={14} height={14} alt='Search icon' />
                    </span>
                </div>

                <div className='hidden md:flex gap-[47px] items-center'>
                    <Link href='#' className='hover:underline text-accent-text-color text-16 mt-1'>Docs</Link>
                    <span className='w-[26px] h-[26px] relative'>
                        <Link href='#'>
                            <Image src='/notification-icon.svg' alt='Notification icon' layout='fill' objectFit='cover' />
                        </Link>
                    </span>
                    <span className='cursor-pointer flex items-center gap-[10px]'>
                        <img src='/avatar.png' alt='Avatar' className='w-[48px] h-[48px]' />
                        <span className='text-accent-text-color font-semibold mt-1'>Adedeji</span>
                        <Image src='/dropdown-icon.svg' width={8} height={4} alt='Dropdown icon' className='mt-1' />
                    </span>
                </div>

                <div className='p-2 mr-[-10px] lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </nav>
    );
}