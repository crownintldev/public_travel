"use client"
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';
import React from 'react'
import { HeadingH3,  HeadingH6 } from '../../Common/Heading';
import Image from 'next/image';
import { Para14 } from '../../Common/Paragraph';

interface Visaprops {
    heading: string;
    visaprocess ?:Array<{ link?: any, image?: any, title?: any, para?: string,location?:string }>

  }

const VisaInfo:React.FC<Visaprops> = ({heading,visaprocess}) => {
    const truncateText = (text: string | null | undefined, maxLength: number): string => {
        if (text && text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text || '';
    };
    
      const [ref] = useKeenSlider<HTMLDivElement>({
     
        breakpoints: {
          "(min-width: 400px)": {
            slides: { perView: 2, spacing: 5 },
          },
          "(min-width: 1000px)": {
            slides: { perView: 4, spacing: 10 },
          },
        },
        slides: { perView: 1 },
      })
  return (
    <>
    {
       visaprocess &&  visaprocess.length > 0 && (
            <div className='container p-2 mt-10 '>
            <HeadingH3 title={heading}/>
            <hr className='w-16 border-2 border-primary-orange-300'/>
            <div ref={ref} className="keen-slider flex overflow-hidden mt-10 gap-3">
                {
                 visaprocess.length > 0 && visaprocess.map((array,index)=>(
                        <Link href={array.link} className="grid keen-slider__slide mt-3 mb-3" key={index} >
                        <div className="bg-white relative shadow transition duration-500 rounded-lg">
                          <Image className="rounded-t-lg w-full h-[250px] bg-contain" width={300} height={300} src={array.image} alt="img" />
                          <div className="md:py-4 py-2 md:px-6 px-2  rounded-lg bg-white">
                            <HeadingH6 className=" font-bold text-2xl mb-3  hover:cursor-pointer" title={array.title} />
                            <Para14 className=" tracking-wide" title={truncateText(array.para,80)}/>
                          </div>
                          <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                            <span className="sm:text-md text-[12px]">{array.location}</span>
                          </div>
                        </div>
                          </Link>
                    ))
                }
                </div>
            </div>
         )
    }
   

    </>
  )
}

export default VisaInfo