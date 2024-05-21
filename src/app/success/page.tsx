import Image from "next/image";



export default function Success(): JSX.Element {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="hidden md:block">
          <Image
            className="bg-contain"
            src="/side-bg.svg"
            width={960}
            height={500}
            alt="Background"
          />
        </div>
        <div className="pl-5 md:pl-6 pr-5 pt-5 md:py-12 md:pr-12 lg:pl-[89px] bg-white-smoke md:bg-white h-screen">
          <div>
            <div className="flex items-center justify-between">
              <Image
                className="hidden md:block"
                src="/logo.svg"
                width={135.1}
                height={25.5}
                alt="VerifyMyAge Logo"
              />
            </div>
            <div className="mb-[60px]">
              <h1 className="mt-[51px] mb-5 hidden md:block">
                Congrats
              </h1>
              <p className="text-lg">
                You'll be automatically verified for all future orders.
              </p>  
              <p className="text-lg">
                Your orders will be dispatched without delay.
              </p>
            </div>
            <div>
              <div className="relative flex flex-col md:flex-row justify-center items-center bg-light-yellow rounded-2xl md:rounded-3.5xl px-[67px] py-[74px] w-full md:w-96 drop-shadow-2xl md:drop-shadow-3xl z-10">
                <Image
                  className="hidden md:block"
                  src="/assert.svg"
                  width={75}
                  height={75}
                  alt="success icon"
                  priority
                />
                <Image
                  className="md:hidden block"
                  src="/success_icon.svg"
                  width={50}
                  height={50}
                  alt="success icon"
                  priority
                />
                <div className="relative left-[26.92px]">
                  <h1 className="text-2xl/[24px] font-light text-left">
                    You've been successfully verified!
                  </h1>
                </div>
              </div>
              <div className="-mt-5 relative md:hidden pt-14 pb-10 px-5 bg-white rounded-b-2xl drop-shadow z-0">
                <p className="text-sm font-extralight text-center">
                  You'll be automatically verified for all future orders.
                </p>
                <p className="text-sm font-extralight text-center">
                  Your orders will be dispatched without delay.
                </p>
              </div>
              <hr className="mt-[25px] border-foggy-grey md:hidden" />
            </div>
          </div>
        </div>
    </div>
    );
};