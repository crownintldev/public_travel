"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import MultiImage from "../Carousel/MultiImage";
import ServiceInfo from "./ServiceInfo";
import ServiecForm from "./serviceForm";
import { HeadingH4 } from "../Common/Heading";

export function Service() {
  return (
   <>
    <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Malaysia Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <MultiImage/>
         <ServiceInfo/>
         </div>
         <div className='md:col-span-1 mt-5 md:mt-0 w-full '>
         <ServiecForm/>
         </div>
     </div>
    </TracingBeam>
   </>
  );
}



