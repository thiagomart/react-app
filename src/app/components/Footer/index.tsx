import React from 'react';
import Image from 'next/image';

type Props = {
    terms: boolean
}

export function Footer({terms}: Props): JSX.Element {
    return (
        <div>
            <div className="md:flex items-center md:pt-[60px] sm:w-full">
                <div>
                    <button 
                        className="border-0 w-[70px] text-[9px] flex items-center justify-center bg-light-yellow font-normal rounded-full px-4 py-3.5 text-dark-grey disabled:opacity-55 " 
                        type="submit"
                        disabled={!terms}
                        aria-disabled={!terms}
                    >
                        <Image src="/lock-icon.svg" alt="lock Icon" width={20} height={20} />
                        <label className="pt-[0.15rem] text-sm font-light cursor-pointer"> Save</label>
                    </button>
                </div>
                <div className="pl-5">
                    <a href="https://verify.verifymyage.co.uk/ebay/signup" target="_blank" rel="noopener noreferrer">
                        <button className="border-2 border-black bg-white-smoke md:bg-white block rounded-full px-4 py-3.5 text-dark-grey shadow-sm ring-0 focus:ring-0 hover:ring-0 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6">
                            Got a VerifyMyAge account? Sign in
                        </button>
                    </a> 
                </div>
            </div>
        </div>
    );
  }