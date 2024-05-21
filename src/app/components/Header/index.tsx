import React from 'react';
import Image from 'next/image';


export default function Header(): JSX.Element {
    return (
        <div>
            <div className='flex md:justify-between xs:justify-end'>
                <a className="flex place-items-center gap-2 p-8 lg:p-0 visible " 
                href="https://verifymyage.com/" target="_blank" rel="noopener noreferrer">
                      <Image src="/logo.svg" alt="VerifyMyAge Logo" width={135.1} height={25.5}
                    />
                </a>
                <Image src="/step.svg" alt="Step Icon" width={50} height={50} />
            </div>
            <div className="flex rounded-full w-11 h-11 items-center content-center justify-center bg-grey cursor-pointer mt-[59.5px]">
                <Image src="/back-icon.svg" alt="back page" width={13} height={16.06} />
            </div>
            <div className="mt-[20.5px]">
                <h1>
                Join VerifyMyAge
                </h1>
            </div>
            <div className="pt-5">
                <h2>
                Let's start by setting up your login details
                </h2>
            </div>
      </div>
    );
  }