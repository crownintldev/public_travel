"use client"
import { HeadingH3, HeadingH6 } from '@/components/Common/Heading';
import { Para14 } from '@/components/Common/Paragraph';
import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
interface Iter {
    title: string;
    content: string;
  }
  
  interface IterProps {
    Itinerayloop: Iter[];
  }
const Itinerary:React.FC<IterProps> = ({Itinerayloop}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <>
     <div className="mt-10 lg:mt-32">
         <div >
         <HeadingH3 title={"Travel Itinerary"}/>
         <hr className='w-20 border-2 border-primary-orange-200 '/>
         </div>
     <div className='w-full space-y-3 mt-10'>
            {Itinerayloop.length>0 &&Itinerayloop.map((faq, index) => (
              <div key={index} className="bg-primary-orange-200 text-black rounded-md duration-500 transition">
                <button
                  className="flex justify-between items-center w-full p-3 text-left duration-500 transition"
                  onClick={() => toggleAccordion(index)}>
                  <HeadingH6 className='font-medium' title={faq.title}/>
                  <IoIosArrowDropdownCircle className={`h-6 w-6 text-white transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}/>
                </button>
                <div className={`p-5 border-t  border-gray-200 bg-white shadow-lg transition duration-500 ease ${openIndex !== index && 'hidden'}`}>
                {faq.content.split('\n').map((point, index) => (
                    <div className="flex flex-row gap-2" key={index}>
                        <GoDotFill className='mt-[3px]' />
                        <Para14 title={point} />
                    </div>
                ))}
                  
                </div>
              </div>
            ))}
          </div>    
    </div>   
    </>
  )
}

export default Itinerary