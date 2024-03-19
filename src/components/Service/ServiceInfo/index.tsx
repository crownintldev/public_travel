import { HeadingH3 } from '@/components/Common/Heading'
import { Para14 } from '@/components/Common/Paragraph'
import { overviewDetail } from '@/components/Constant'
import React from 'react'
import Tab from '@/components/Tabs'
import Servicedetail from '../Servicedetail'
import Itinerary from '../Itinerary'


const ServiceInfo:React.FC = () => {
  return (
    <>
        <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    overviewDetail.map((array,index)=>(
                        <Para14 key={index} title={array.text}/>
                    ))
                }      
            </div>
        </div>
        <Tab  className={"mt-10 lg:mt-32"}
        tabsData = {[
          {
            key: '1',
            title: 'Sticker Visa',
            content: <Servicedetail/>,
          },
          {
            key: '2',
            title: 'E-Visa',
            content: <Servicedetail/>,
          },     
        ]}
      />
      <Itinerary
      Itinerayloop={
        [
          { title: "What services does Crown Travels offer?", content: "Crown Travels specializes in personalized travel planning and booking services, including flights, accommodations, guided tours, cruise bookings, travel insurance, and special event travel packages." },
            { title: "How can I book a trip with Crown Travels?", content: "You can book a trip with Crown Travels by visiting our website, calling our customer service number, or by visiting our office in person. Our travel experts will assist you in finding the best travel options to suit your needs." },
            { title: "Does Crown Travels offer international travel packages?", content: "Yes, Crown Travels offers a wide range of international travel packages. Whether you're looking for a beach getaway, a cultural excursion, or an adventure tour, we can arrange trips to destinations around the globe." },
            { title: "Can Crown Travels accommodate special travel requests or needs?", content: "Absolutely. We pride ourselves on creating customized travel experiences. Whether you have dietary restrictions, mobility concerns, or special requests, we work to accommodate your needs for a comfortable and enjoyable trip." },
            { title: "What is the cancellation policy at Crown Travels?", content: "Our cancellation policy varies depending on the type of booking and the suppliers' terms. We advise customers to review the terms and conditions at the time of booking, and for added protection, consider purchasing travel insurance through us." },
        ]
      }
      />
     
    </>
  )
}

export default ServiceInfo