 
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
import { KenyaDetail,  indonesiaimg, kenyaimg, } from '@/components/Constant'
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

const Kenya     = () => {
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
    title='Kenya    Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Kenya    Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Kenya    Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                kenyaimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          kenyaimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    KenyaDetail.map((array,index)=>(
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
                    title: "Kenya Sticker Visa Not Available",
                   
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
                    title: "Kenya E – Visa Requirement",
                    points:[
                        "Passport Scan Copy",
                        "1 Picture with White Background",
                        "CNIC Copy",
                        "3 – 4 Working Days",
                        "For Business Visits",
                    ]          
                },
                {
                    des:"Invitation Letters from company / Invitation letter for business visits Copies of registration of the company Return air ticket",
                },
                {
                    title:"—– For Family visits —–",
                    des:"Invitation Letters from family. Identity card / Passport / Alien card / Entry permit of the host. Return air ticket"
                },
                {
                    title:"—– For Tourists Travel —–",
                    des:"itinerary (Details about places to visit if going as a tourist).Hotel bookings. Return air ticket Identity Documents Clear Passport biodata page. A clear photograph."
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
                        "10, St 6, F-10-3, F-10, Islamabad, ICT",
                    ]
                },
                {
                    title: "Hours",
                    points:[
                        "Open ⋅ Closes 5 pm",
                    ]
                },
                {
                    title: "Phone",
                    points:[
                        "(051) 2601504",
                        "(051) 2601506",

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
                title: "Day 1: Nairobi",
                content: 
                    "Arrive in Nairobi, the capital city of Kenya.\nVisit the Nairobi National Museum to learn about the country’s history and culture.\nExplore the bustling downtown area and visit the colorful local markets.\nEnd the day with dinner at a traditional Kenyan restaurant, trying local specialties like nyama choma and ugali."
            },
            {
                title: "Day 2: Masai Mara National Reserve",
                content: 
                    "Take an early morning flight to the Masai Mara National Reserve.\nSpend the day on a game drive, spotting wildlife such as elephants, lions, zebras, and giraffes.\nIn the evening, enjoy a traditional Maasai dance performance."
            },
            {
                title: "Day 3: Lake Nakuru National Park",
                content: 
                    "Head to Lake Nakuru National Park, known for its flamingos and bird species.\nTake a game drive around the park, spotting rhinos, lions, and other wildlife.\nVisit a local village to learn about traditional Kenyan life and customs."
            },
            {
                title: "Day 4: Mombasa",
                content: 
                    "Take a morning flight to Mombasa, a coastal city with beautiful beaches.\nSpend the day relaxing on the beach and swimming.\nIn the evening, visit the Old Town and enjoy dinner at a local seafood restaurant."        
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

export default Kenya   