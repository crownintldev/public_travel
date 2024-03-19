 
//@ts-nocheck
"use client"
import HeadPage from '@/components/Common/HeadPage'
import { HeadingH3, HeadingH4, HeadingH6 } from '@/components/Common/Heading'
import ServiecForm from '@/components/Service/serviceForm'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { Para12, Para14 } from '@/components/Common/Paragraph'
import { dropvietnam } from '@/components/Constant'

const Vietnam= () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    }
  
  return (
    <>
    <HeadPage
    className='bg-servicehead'
    title='Vietnam    Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Vietnam    Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
     
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div className='w-full space-y-3 mt-10'>
  {dropvietnam.length > 0 && dropvietnam.map((faq, outerIndex) => (
    <div key={faq.id || outerIndex} className="bg-primary-orange-200 text-black rounded-md duration-500 transition">
      <button
        className="flex justify-between items-center w-full p-3 text-left duration-500 transition"
        onClick={() => toggleAccordion(outerIndex)}
        aria-expanded={openIndex === outerIndex}
      >
        <HeadingH6 className='font-medium' title={faq.title} />
        <IoIosArrowDropdownCircle className={`h-6 w-6 text-white transform transition-transform ${openIndex === outerIndex ? 'rotate-180' : ''}`} />
      </button>
      <div className={`p-5 border-t border-gray-200 transition bg-white shadow-lg duration-500 space-y-3 ease ${openIndex !== outerIndex ? 'hidden' : ''}`}>
        {faq.content.map((item, innerIndex) => (
          <React.Fragment key={outerIndex + '-' + innerIndex}>
            <HeadingH6 title={item.Heading} />
            <Para14 title={item.des} />
          </React.Fragment>
        ))}
      </div>
    </div>
  ))}
</div>
 
         </div>
         <div className='md:col-span-1 mt-5 md:mt-0 w-full '>
         <ServiecForm/>
         </div>
     </div>
    </TracingBeam>
    </>
  )
}

export default Vietnam   