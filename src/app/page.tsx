'use client' // used for prevent errors related form based on: https://github.com/react-hook-form/react-hook-form/issues/11284
import React, { useState } from 'react';
import Image from "next/image";
import Form from './components/Form';
import HeaderDesktop from './components/HeaderDesktop';
import HeaderMobile from './components/HeaderMobile';

export default function Home() : JSX.Element{
  const [terms, setTerms] = useState<boolean>(false);

  return (
	<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
	  <div className="hidden md:block" >
		<Image src="/side-bg.svg" alt="Background" className="w-full xl:visible lg:visible md:visible sm:invisible xs:invisible" width={1090} height={960}
		  />
	  </div>
		<div className="md:flex-initial md:flex-col w-full xs:px-[25px] sm:px-[25px] md:pt-8 md:pr-8 md:pb-[59.5px] md:pl-[89px] max-w-5xl md:items-right text-sm lg:flex shrink bg-white-smoke md:bg-white">
			<HeaderDesktop />
			<HeaderMobile />
			<Form terms={terms} setTerms={setTerms}/>
		</div>
	</div>
  );
}