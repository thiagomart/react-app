'use client' // used for prevent errors related form based on: https://github.com/react-hook-form/react-hook-form/issues/11284
import React, { useState } from 'react';
import Image from "next/image";
import Form from './components/Form';
import Header from './components/Header';

export default function Home() : JSX.Element{
  const [terms, setTerms] = useState<boolean>(false);

  return (
	<div className="flex justify-stretch w-full">
	  <div className="flex-none items-center object-contain shrink self-stretch xl:visible lg:visible md:visible sm:invisible xs:invisible" >
		<Image src="/side-bg.svg" alt="Background" className="w-full xl:visible lg:visible md:visible sm:invisible xs:invisible" width={1090} height={960}
		  />
	  </div>
	  <div className="flex-initial flex-col w-full pt-8 pr-8 pb-[59.5px] pl-[89px] max-w-5xl items-right text-sm lg:flex shrink">
		<Header />
		<Form terms={terms} setTerms={setTerms}/>
	  </div>
	</div>
  );
}