 
"use client"
import HeadPage from '@/components/Common/HeadPage'
import { HeadingH3, HeadingH4 } from '@/components/Common/Heading'
import ServiecForm from '@/components/Service/serviceForm'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React, { MutableRefObject } from 'react'
import {
    useKeenSlider,
    KeenSliderPlugin,
    KeenSliderInstance,
  } from "keen-slider/react"
  import "keen-slider/keen-slider.min.css"
import { TurkeyDetail,  indonesiaimg, turkeyimg, } from '@/components/Constant'
import Image from 'next/image'
import { Para14 } from '@/components/Common/Paragraph'
import Tab from '@/components/Tabs'
import Itinerary from '@/components/Service/Itinerary'
import ServiceData from '@/components/Service/servicedata'
  
  function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
  ): KeenSliderPlugin {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove("active")
        })
      }
      function addActive(idx: number) {
        slider.slides[idx].classList.add("active")
      }
  
      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx)
          })
        })
      }
  
      slider.on("created", () => {
        if (!mainRef.current) return
        addActive(slider.track.details.rel)
        addClickEvents()
        mainRef.current.on("animationStarted", (main) => {
          removeActive()
          const next = main.animator.targetIdx || 0
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  }

const Turkey     = () => {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
      })
      const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        {
          initial: 0,
          slides: {
            perView: 4,
            spacing: 10,
          },
        },
        [ThumbnailPlugin(instanceRef)]
      )
  return (
    <>
    <HeadPage
    className='bg-servicehead'
    title='Turkey    Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Turkey    Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Turkey    Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                turkeyimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          turkeyimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    TurkeyDetail.map((array,index)=>(
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
            content: <ServiceData
            data={[
                {
                    title: "Anatolia Deal Turkey Sticker Visa",
                   
                },
            ]}
            />,
          },
          {
            key: '2',
            title: 'E-Visa',
            content: <ServiceData
            data={[
                {
                    title: "Turkey E – Visa Requirement",
                    points:[
                        "Passport valid until at least 6 months  + Photocopy of 1st and 2nd page",
                        "Return Ticket",
                        "Confirm Hotel Booking",
                        "Budget For Daily Basics 50$",
                        "Supporting Document (Valid visa OR valid residence permit from one of the Schengen Countries, USA, UK or Ireland). E-visas are not accepted as supporting documents.",      
                    ]          
                },
                {
                   points:[
                    "1 Month Stay Duration",
                    "6 Month Visa Validity",
                    "Single Entry Visa",
               
                   ]
                },
                {
                    des:"For Multiple Entry Supporting Document (Valid visa OR valid residence permit from one of the Schengen Countries, USA, UK or Europe & Arab). E-visas are not accepted as supporting documents.",
                    points:[
                        "3 Month Stay Duration Multiple",
                        "6 Month Visa Validity",
                        "Multiple Entry Visa",
              
                    ]
                },
                
                  
            ]}
            />,
          },  
          
          {
            key: '3',
            title: 'Embassy Details',
            content: <ServiceData
            data={[
                
                {
                    title: "Address Details",
                    points:[
                        "Street 1, Diplomatic Enclave, G-5, 44000 Islamabad – Pakistan",
                    ]
                },
                {
                    title: "Email",
                    points:[
                        "embassy.islamabad@mfa.gov.tr",
                    ]
                },
                {
                    title: "Phone",
                    points:[
                        "+92 51 831 98 00",
                        "+92 51 831 98 10",
                    ]
                },   
                {
                    title: "Fax",
                    points:[
                        "+92 51 227 76 71",
                        "+92 51 227 87 52",
                    ]
                }, 
            ]}
            />,
          }, 
        ]}
      />
      <Itinerary
      Itinerayloop={
        [
            {
                title: "Day 1: Arrive in Istanbul",
                content: 
                    "Arrive in Istanbul and start with a visit to the Blue Mosque.\nExplore the Hagia Sophia, a museum that was once a church and mosque.\nEnd the day with a boat tour along the Bosphorus Strait, offering views of the city skyline."
            },
            {
                title: "Day 2: Day Trip to Cappadocia",
                content: 
                    "Take a day trip to Cappadocia, known for its rock formations and cave dwellings.\nVisit the Goreme Open-Air Museum to see ancient rock churches and frescoes.\nExperience a hot air balloon ride over the fairy chimneys at sunrise."
            },
            {
                title: "Day 3: Explore Ephesus",
                content: 
                    "Explore the ancient city of Ephesus and see its ruins and artifacts.\nVisit the House of Virgin Mary.\nEnd the day with a dip in the Pamukkale hot springs."
            },
            {
                title: "Day 4: Discover Istanbul",
                content: 
                    "Spend the morning at the Grand Bazaar, shopping for handicrafts and souvenirs.\nVisit the Topkapi Palace, once the residence of Ottoman sultans.\nEnd the trip with a visit to the Spice Bazaar and enjoy Turkish tea."        
            }
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

export default Turkey   