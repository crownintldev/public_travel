import React, { ReactNode } from 'react'
import { HeadingH2, HeadingH3 } from '../Heading'
import Link from 'next/link';

const HeadPage = ({title, text,className,bredcrumb}:{
    title: string;
    text: string;
    bredcrumb?: string;
    className?: string;
}) => {
  return (
    <>
  <div className={`${className} relative h-[400px] bg-fixed flex flex-col justify-center items-center bg-no-repeat bg-bottom object-contain`}>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-orange-200 via-primary-orange-200 to-primary-orange-200 opacity-75"></div>
    
      <HeadingH2 className='tracking-widest font-fam text-white z-10' title={title}/>
      <HeadingH3 className='text-white z-10 text-center' title={text} />
      <ol className="flex items-center whitespace-nowrap z-10">
  <li className="inline-flex items-center">
    <Link className="flex items-center text-sm text-white hover:text-primary-orange-300 focus:outline-none focus:text-primary-orange-300" href="/">
      Home
    </Link>
    <svg className="flex-shrink-0 mx-2 overflow-visible size-6 text-primary-orange-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
  </li>
  <li className="inline-flex items-center text-sm font-semibold text-white" aria-current="page">
    {bredcrumb}
  </li>
</ol>
    </div>


    </>
  )
}

export default HeadPage