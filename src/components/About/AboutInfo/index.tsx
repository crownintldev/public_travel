import Image from 'next/image'
import React from 'react'
import aboutimage from '../../../../public/assets/images/about.png'
import { Para14, Para16, Para18 } from '@/components/Common/Paragraph'
import { HeadingH1, HeadingH3, HeadingH4, HeadingH6 } from '@/components/Common/Heading'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const point =[
    {id:1, text:"All placges and activiates are carefully picked by us."},
    {id:2, text:"Established Experience"},
    {id:3, text:"Wide Range of Services"},
    {id:4, text:"Customized Travel Solutions"},
    {id:5, text:"Global Network"},
]
const words = `is established in 2007 as IATA travel Agency. We have authority To issue  Crown International Travels introduces itself as a company which offers lowest available rates on all of our service right on door steps. Crown International Travels is serving its valuable customers since 2007. We are operating from Rawalpindi, Office No F-15 Rizwan Arcade I, Adam Jee Road Saddar, offers its service to all over the Pakistan. Our company serves as a cheap alternative to other high priced companies in Rawalpindi.
We have a well co-coordinated team of professionals who are experienced and competent to provide quality services to our clients at their doorsteps, and that is the reason that we have won the trust and commendations of our clients. Crown International Travels is an experienced, locally owned and operated, independent Hajj & Umrah, Rent a Car, Air Ticketing and Travel Insurance Company that offers better prices selections and ultimate services which always exceed customers expectations. Crown International Travels offer all types of cars, hi-aces and coasters on hourly daily, monthly and yearly basis.
We are providing tour packages to our esteemed customers desiring to explore UAE, Turkey, Thailand, Malaysia, Indonesia, Singapore, Vietnam, brazil and egypt. As because of our outclass service our clients are increasing day by day demanding tour packages for other destinations as well.
We have Visa application center of Malaysia and nominated drop box agent of Vietnam.
`;
const AboutInfo = () => {
  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 container mt-10 lg:mt-32 justify-items-center'>
            <div className='space-y-4 mb-10 md:mb-0 flex flex-col justify-center'>
                 <Para18 className='font-fam text-primary-orange-300 font-bold  ' title='ABOUT US'/>
                 <hr className='border-2 border-primary-orange-300 w-20'/>
                 <div>
                    <HeadingH1  title='We are Professional '/><br/>
                 <HeadingH1  title='Planners For your '/>

                 </div>
                 

                 <div className='flex flex-wrap'>
                    <div className='w-1/12 hidden md:block'>
                    <hr className='border-2 border-primary-orange-200 w-14 mt-5'/>
                    </div>
                    <div className='w-full md:w-11/12 p-1 md:p-4 space-y-4'>
                        <Para14 title='We are a family-owned business, established in 1990 by Mr. Nazir Ahmed (Late), We have been offering a range of travel and tourism services for over 32 years. The journey started with just four people and now we have grown to and now we have grown to More Mature and lot number of staff in counts. In 2007 we expanded our business to a corporate level and registered with many local and international organizations.'/>
                        <Para14 title={'In 2010 we were awarded the Sustainable Tourism Award sponsored by the Travel Port. This award recognizes our work in promoting sustainable tourism through an eco-friendly approach.'}/>
                        <HeadingH6 className='text-primary-orange-300' title='You may be interested to know about the next generation!!'/>
                        <Para14 title={"My name is Mubashir Nazir. I am the CEO of our family-owned travel company. We’re a leading provider of domestic & international tourism packages and tours for people from all over the world. We’re passionate about what we do and we want to share this passion with you."}/>
                        <Para14 title={"Crown International Travels (Pvt) Ltd was founded by my father in 1990, and has been passed down to me as the new generation. I’m proud of how far we’ve come since then, and I’m excited to take Crown International Travels (Pvt) Ltd to the next level!"}/>

                    </div>
                 </div>
                 {/* {
                    point.map((item, index) => (
                        <div className='flex gap-2 items-center' key={index}>
                        <IoMdArrowDroprightCircle  size={25} className='text-primary-orange-200'/>
                        <Para16 title={item.text}/>
                        </div>
                    ))
                 } */}
               

            </div>
            <Image className='bg-cover' src={aboutimage} width={500} height={500} alt='Image'/>
        </div>

        <div className=" rounded-md  pt-5  bg-primary-orange-300 shadow container p-2 mt-10 lg:mt-32">
        <div className=" lg:p-8 md:p-6 sm:p-4 p-2 space-y-3 text-white">
          <HeadingH3  className={'border-b-2 text-white'} title={'Crown International Travels (Pvt) Ltd.'}/>
          <FaQuoteLeft size={25} />
          <TextGenerateEffect className="text-white" words={words} />
          <FaQuoteRight size={25} />
        </div>
      
      </div>
    </>
  )
}

export default AboutInfo