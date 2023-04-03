import loginStyles from '@/styles/Login.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  interface LoginInfo {
    email: string;
    password: string;
  }
  
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: '',
  });
  
  function handleLoginInfoInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginInfo(prevState => ({ ...prevState, [name]: value }));
  }

  function handleLogin() {
    window.location.href = "/dashboard"
  }

  const [showOrHidePasswordLabelValue, setShowOrHidePasswordLabelValue] = useState<string>("SHOW");
  
  function showOrHidePassword() {
    const passwordField = document.querySelector<HTMLInputElement>('#password');
  
    if (showOrHidePasswordLabelValue == "SHOW") {
      setShowOrHidePasswordLabelValue("HIDE");
      passwordField && (passwordField.type = 'text');
    } else {
      setShowOrHidePasswordLabelValue("SHOW");
      passwordField && (passwordField.type = 'password');
    }
  }
  

  return (
    <>
        <Head>
            <title>Log in | Lendsqr</title>
        </Head>
        <main className='flex flex-row'>
            <div className='absolute block m-[24px] md:ml-[48px] md:mt-[53px] lg:ml-[97px] lg:mt-[106px]'>
              <Image src="/logo.svg" width={173.76} height={36} alt="Lendsqr logo" />
            </div>
            <div className='flex flex-col h-screen hidden md:flex w-1/2 items-center py-[300px] justify-center'>
                <Image src="/pablo-sign-in 1.svg" width={600} height={338} alt="Illustration" />
            </div>
            <div className={[loginStyles.shadowY, 'flex flex-col h-screen w-full md:w-1/2 px-[24px] md:px-[50px] lg:px-[100px] py-[300px] justify-center'].join(" ")}>
              <form className='w-full md:max-w-[447px]'>
                <div className='mb-[60px]'>
                  <h1 className='font-bold text-accent-text-color text-40'>Welcome!</h1>
                  <p className='text-20'>Enter details to login.</p>
                </div>
                
                <div className='flex flex-col gap-[30px]'>
                  <div className='flex flex-col gap-[24px]'>
                    <p>
                      <label htmlFor="email" className='hidden'>Email</label>
                      <input type="email" id="email" name="email" className='border border-2 border-primary-border-color rounded-[5px] pt-[15px] pb-[12px] px-[16px] w-full
                      focus:outline-primary-color no-transition' placeholder='Email' value={loginInfo.email} onChange={handleLoginInfoInputChange} />
                    </p>
                    <p>
                      <label htmlFor="password" className='hidden'>Password</label>
                      <span className='flex flex-col justify-center items-end'>
                        <input type="password" id="password" name="password" className='border border-2 border-primary-border-color rounded-[5px] pt-[15px] pb-[12px] pl-[16px] pr-[82px] w-full
                          focus:outline-primary-color no-transition' placeholder='Password' value={loginInfo.password} onChange={handleLoginInfoInputChange} />
                        <span className='button text-primary-color text-12 absolute mt-[4px] mr-[18px]' onClick={showOrHidePassword}>{showOrHidePasswordLabelValue}</span>
                      </span>
                    </p>
                    <Link href='#' className='button text-primary-color text-12'>FORGOT PASSWORD?</Link>
                  </div>
                  <div>
                    <input type='button' value='LOG IN' className='w-full bg-primary-color hover:bg-primary-color-hover
                    rounded-[8px] pt-[16px] pb-[13px] text-white' onClick={handleLogin} />
                  </div>
                </div>
              </form>
            </div>
        </main>
    </>
  )
}
