"use client"
import { HeadingH1, HeadingH2, HeadingH3, HeadingH6 } from '@/components/Common/Heading'
import { Para14 } from '@/components/Common/Paragraph'
import { review } from '@/components/Constant'
import { useKeenSlider } from 'keen-slider/react'
import React from 'react'

const Testimonial:React.FC = () => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        breakpoints: {
          "(min-width: 400px)": {
            slides: { perView: 2, spacing: 5 },
          },
          "(min-width: 1000px)": {
            slides: { perView: 2, spacing: 10 },
          },
        },
        slides: { perView: 1 },
      })
      const truncateText = (text: string, maxLength: number): string => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + "..."; // Truncate text and add ellipsis
        }
        return text;
      };
      const StarIcon = () => (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-[#fe720f]" height="13" width="13" xmlns="http://www.w3.org/2000/svg">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
        </svg>
      );
      const stars = Array(5).fill(null).map((_, index) => <StarIcon key={index} />);
  return (
    <>
<div className='md:container p-2 m-2 mt-10 lg:mt-32'>
    <HeadingH3 title={"Customer Review" }/>
    <hr className='w-16 border-2 border-primary-orange-300'/>
    <div className=' bg-primary-orange-200 rounded-md mt-10 w-full'>
  
        <div className='grid grid-cols-1 sm:grid-cols-2  pt-20 pb-20 w-full  flex-col items-center'>
            <div className='text-white text-center md:px-10 md:mx-10 '> 
                <HeadingH2 title={'Dont just take our word for it...'}/>
                <Para14 title={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro optio fugit a culpa sunt id!'}/>
            </div>

            <div ref={ref} className="keen-slider flex overflow-hidden mt-10 gap-3 m-2">
            {
                review.map((item , index)=> (
                    <div className='p-4 rounded-md shadow bg-white space-y-4  keen-slider__slide' key={index}>
                    <div className="flex gap-3">
                    {stars}
                    </div>
                    <HeadingH6 title={item.name}/>
                    <Para14 className='' title={truncateText(item.description, 300)}/>
                </div>
                ))
            }
           
            </div>
            
        </div>
    </div>
</div>
    </>
  )
}

export default Testimonial