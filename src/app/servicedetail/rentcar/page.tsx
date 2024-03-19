 
"use client"
import HeadPage from '@/components/Common/HeadPage'
import { HeadingH3, HeadingH4 } from '@/components/Common/Heading'
import ServiecForm from '@/components/Service/serviceForm'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'
import { Para14 } from '@/components/Common/Paragraph'
import Itinerary from '@/components/Service/Itinerary'
import { RentCarDetail } from '@/components/Constant'
  

const RentCar = () => {
 
  return (
    <>
    <HeadPage
    className='bg-servicehead'
    title='Rent a Car '
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Rent a Car '
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Rent a Car"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
             <div className=' mt-10'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    RentCarDetail.map((array,index)=>(
                        <Para14 key={index} title={array.text}/>
                    ))
                }      
            </div>
        </div>
      <Itinerary
      Itinerayloop={
        [
            {
                title: "You Can Expect",
                content: 
                    "Our Focus is the Comfort of our Customers\nOur fleets are Reliable\nOur Servicels 24 hours a day 7 day a week\nOur Staff are friendly\nOur Rates are Very Competitive"
            },
            {
                title: "Knowledge & Focus",
                content: 
                    "Crown International Travels (Pvt) Ltd Rent A Car has the experience, knowledge, and focus needed in today’s car rental market. With years of experience in the car rental business, we understand what success looks like and how to achieve it in a highly competitive market. We recognize the opportunity to assist businesses and individuals in achieving their short, medium, and long-term goals."
            },
            {
                title: "One-Stop Car Rental",
                content: 
                    "Crown International Travels (Pvt) Ltd Rent a Car strives to provide a unique One-Stop Car Rental Service for both new market entrants and existing businesses or individuals. Our goal is to become the next preferred choice of car rental company for companies and individuals in the market. We aim to achieve this by leveraging our depth of experience, successful strategies, and exemplary standards of personal and business integrity. With years of experience in the industry, we are committed to becoming a nationally recognized brand."
            },
           
        ]
      }
      />
         </div>
         <div className='md:col-span-1 mt-5 md:mt-0 w-full '>
         <ServiecForm/>
         </div>
     </div>
    </TracingBeam>
    </>
  )
}

export default RentCar