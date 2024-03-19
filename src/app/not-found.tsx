import { HeadingH1 } from '@/components/Common/Heading'
import { SparklesCore } from '@/components/ui/sparkles'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <>
      <div className="mt-10 lg:mt-32 w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
        <p className='text-[120px] text-primary-orange-200 tracking-wider font-bold font-fam'>404</p>
      <HeadingH1 className=" font-bold text-center text-primary-orange-200 relative z-10"title={"PAGE NOT FOUND"} />
      <Link href={'/'} className='shadow p-2 rounded-md text-white bg-primary-orange-200 hover:bg-primary-orange-300 duration-300 transition'>Back to Home</Link>
       
      <div className="w-[60rem] h-60 relative mt-5">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary-orange-200 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary-orange-200 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary-orange-300 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary-orange-300 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.8}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#fb923c"
        />
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    </>
  )
}

export default NotFound