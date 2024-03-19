 
"use client"
import HeadPage from '@/components/Common/HeadPage'
import { HeadingH3, HeadingH4 } from '@/components/Common/Heading'
import ServiecForm from '@/components/Service/serviceForm'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'
import { Para14 } from '@/components/Common/Paragraph'
import Itinerary from '@/components/Service/Itinerary'
import { HajjUmrahDetail } from '@/components/Constant'
  

const HajjUmrah = () => {
 
  return (
    <>
    <HeadPage
    className='bg-servicehead'
    title='Hajj & Umrah'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Hajj & Umrah'
    />
     <TracingBeam className="p-2 mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Hajj & Umrah"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
             <div className=' mt-10'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    HajjUmrahDetail.map((array,index)=>(
                        <Para14 key={index} title={array.text}/>
                    ))
                }      
            </div>
        </div>
      <Itinerary
      Itinerayloop={
        [
            {
                title: "Economy Umrah package or a High quality package",
                content: 
                    "Whether you are seeking an economy Umrah package or a high quality package with luxurious 4-5 star accommodations, Crown International Travels (Pvt) Ltd is the perfect choice for you. We offer a range of customizable packages to fit your specific needs and preferences."
            },
            {
                title: "To make your spiritual journey",
                content: 
                    "To make your spiritual journey more convenient, we warmly welcome you as a guest of Allah at our office in Saudi Arabia. Our dedicated staff in Makkah and Madinah are available 24/7 to provide personalized service and ensure your stay in the holy land is comfortable and fulfilling."
            },
            {
                title: "We partner with the best Umrah/Hajj",
                content: 
                    "We partner with the best Umrah/Hajj agents in Saudi Arabia to further assure the difference we can offer in services for a hassle-free stay, allowing you to focus solely on your once-in-a-lifetime spiritual experience."
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

export default HajjUmrah