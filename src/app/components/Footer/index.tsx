import React from 'react';
import Image from 'next/image';

type Props = {
    terms: boolean
}

export function Footer({terms}: Props): JSX.Element {
    return (
    <footer>
        <div className="mx-auto flex flex-col md:flex-row md:pt-[60px] sm:justify-between md:justify-start z-2">
            <hr className="border-foggy-grey mb-3 mt-1.5 md:hidden z-50" />
                <div className='sm:w-auto z-40'>
                    <button 
                        className="border-0 md:w-[119px] md:h-[70px] sm:h-[25px] sm:mb-0 sm:mr-4 w-full sm:w-auto text-[9px] flex 
                        items-center justify-center bg-light-yellow font-normal rounded-full 
                        px-4 py-3.5 text-dark-grey disabled:opacity-55 z-30" 
                        type="submit"
                        disabled={!terms}
                        aria-disabled={!terms}
                    >
                        <Image src="/lock-icon.svg" alt="lock Icon" width={20} height={20} />
                        <label className="pt-[0.15rem] text-sm font-light cursor-pointer"> Save</label>
                    </button>
                </div>
                <div className="md:pl-5 w-full sm:w-auto md:pt-0 xs:pt-2 z-20">
                    <a href="https://verify.verifymyage.co.uk/ebay/signup" target="_blank" rel="noopener noreferrer" className=''>
                        <button className="border-2 border-black bg-white-smoke md:bg-white block rounded-full md:h-[70px] sm:h-[25px] px-4 py-3.5 text-dark-grey shadow-sm ring-0 focus:ring-0 hover:ring-0 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full sm:w-auto z-10">
                            Got a VerifyMyAge account? Sign in
                        </button>
                    </a> 
                </div>
                <div className='md:hidden bg-white w-full h-[7.5rem] absolute z-0 right-0 bottom-[11px]'>
                </div>
            </div>
        </footer>
    );
  }