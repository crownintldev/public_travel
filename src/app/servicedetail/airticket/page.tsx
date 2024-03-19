 
"use client"
import HeadPage from '@/components/Common/HeadPage'
import { HeadingH3, HeadingH4 } from '@/components/Common/Heading'
import ServiecForm from '@/components/Service/serviceForm'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'
import { Para14 } from '@/components/Common/Paragraph'
import Itinerary from '@/components/Service/Itinerary'
import { AirTicketDetail } from '@/components/Constant'
  

const AirTicket = () => {
 
  return (
    <>
    <HeadPage
    className='bg-servicehead'
    title='Air Ticket'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Air Ticket'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Air Ticket"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
             <div className=' mt-10'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    AirTicketDetail.map((array,index)=>(
                        <Para14 key={index} title={array.text}/>
                    ))
                }      
            </div>
        </div>
      <Itinerary
      Itinerayloop={
        [
            {
                title: "We provides special negotiated Group Fares",
                content: 
                    "Crown International provides special negotiated Group Fares on Ad Hoc basis for any group travel. This is supplemented with exclusively special arrangement for Group Travel both at origin and destination points. For larger groups, if requested, our representative accompanies the group at no extra cost to facilitate the group"
            },
            {
                title: "Saving special deals on air fares",
                content: 
                    "Crown International always negotiates with preferred airlines to obtain revenue saving special deals on air fares for desired destination, fares will exclusively apply only to clients, employees and dependents. However, this will have stipulated conditions applied by the airlines on volume of business and period. This can be discussed and effectively managed to result in major cost savings for our clients."
            },
            {
                title: "Applies both for vacation and business travel of clients",
                content: 
                    "Crown International is providing the best market fares available from time to time with various airlines. This will applies both for vacation and business travel of clients, employees and family dependents. The maximum discount as specified in our financial arrangement applies in all cases."
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

export default AirTicket