import React from 'react';
import Image from 'next/image';


export default function HeaderMobile(): JSX.Element {
    return (
        <div className="md:hidden flex header-mobile mt-[30px]">
            <div className='absolute items-center justify-between top-[20px] right-[20px]'>
                <Image src="/step.svg" alt="Step Icon" width={100} height={100} />
            </div>
            <div className="rounded-full w-8 sm:items-start sm:content-start bg-grey cursor-pointer back-icon-mobile">
                <Image src="/back-icon.svg" alt="back page" width={13} height={16.06} />
            </div>
            <div className="ml-[10px] ">
                <h1>
                    Join VerifyMyAge
                </h1>
            </div>
            <div className="pl-[41px]">
                <h2>
                    Let&lsquo;s start by setting up 
                </h2>
                <h2>your login details</h2>
            </div>
      </div>
    );
  }