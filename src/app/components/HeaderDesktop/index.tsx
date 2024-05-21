import React from 'react';
import Image from 'next/image';


export default function HeaderDesktop(): JSX.Element {
    return (
        <div className="md:block hidden" >
            <div className='flex md:justify-between xs:justify-end'>
                <a className="flex place-items-center gap-2 p-8 lg:p-0 md:visible xs:invisible " 
                href="https://verifymyage.com/" target="_blank" rel="noopener noreferrer">
                    <Image src="/logo.svg" alt="VerifyMyAge Logo" width={135.1} height={25.5}
                    />
                </a>
                <Image src="/step.svg" alt="Step Icon" width={50} height={50} />
            </div>
            <div className="md:flex rounded-full md:w-11 sm:w-8 md:h-11 sm:items-start sm:content-start md:items-center md:content-center md:justify-center bg-grey cursor-pointer md:mt-[59.5px] back-icon-mobile">
                <Image src="/back-icon.svg" alt="back page" width={13} height={16.06} />
            </div>
            <div className="md:mt-[20.5px]">
                <h1>
                Join VerifyMyAge
                </h1>
            </div>
            <div className="md:pt-5 sm:pt-[19px]">
                <h2>
                Let's start by setting up your login details
                </h2>
            </div>
        </div>
    );
  }