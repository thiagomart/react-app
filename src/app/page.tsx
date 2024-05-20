import Image from "next/image";
import { Field } from "./components/Field/index";

export default function Home() {
  return (
    <div className="flex justify-stretch w-full">
      <div className="flex-none items-center object-contain shrink self-stretch xl:visible lg:visible md:visible sm:invisible xs:invisible" >
        <Image src="/side-bg.svg" alt="Vercel Logo" className="w-full xl:visible lg:visible md:visible sm:invisible xs:invisible" width={1090} height={960}
          />
      </div>
      <div className="flex-initial flex-col w-full pt-8 pr-8 pb-[59.5px] pl-[89px] max-w-5xl items-right text-sm lg:flex shrink">
        <div className="">
            <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0" href="https://verifymyage.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/logo.svg" alt="VerifyMyAge Logo" width={135.1} height={25.5}
              />
            </a>
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
        <div className="mt-7 w-1/2 pt-[59.5px]">
          <Field title={"Full Name"} required={true} type={'text'}/>
          <Field title={"Email"} required={true} type={'text'}/>
          <Field title={"Mobile"} required={true} type={'text'}/>
          <Field title={"Password"} required={true} type={'text'}/>
        </div>
        <div className="w-full flex content-center items-center">
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="ml-4 pb-1 text-xs">
            <label> Tick this box to confirm you've read and agreed to our Terms and Privacy Policy.</label>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <button className="border-0 w-[70px] text-[9px] flex items-center justify-center bg-light-yellow font-normal rounded-full px-4 py-3.5 text-dark-grey" type="submit">
              <Image src="/lock-icon.svg" alt="back page" width={20} height={20} />
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
    </div>
  );
}