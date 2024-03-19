 
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
import { UzbekistanDetail,  indonesiaimg, uzbekistanimg, } from '@/components/Constant'
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

const Uzbekistan     = () => {
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
    title='Uzbekistan    Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Uzbekistan    Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Uzbekistan    Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                uzbekistanimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          uzbekistanimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    UzbekistanDetail.map((array,index)=>(
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
                    title: "Sticker Visa Not Available",
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
                    title: "Uzbekistan E – Visa Requirement",
                    points:[
                        "Original Passport    { Validity more then 06 Months }",
                        "04 Pictures with White Background  { 35mm x 50mm }",
                        "CNIC Photo Copy",
                        "Return Air Ticket",
                        "Visa form duly filled",
                        "Telex from Uzbekistan",
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
                    title: "Office Hours",
                    des:"9:00 am – 16:00 pm from Monday to Thursday",
                },
                {
                    title: "Address Details",
                    points:[
                        "House No 40, Khayaban-e-Iqbal، Road، F 8/3 F-8, Islamabad, Islamabad Capital Territory, Pakistan",
                    ]
                },
                
                {
                    title: "Phones",
                    points:[
                        "(92-51) 226-47-46",
                        "(92-51) 285-27-68",
                    ]
                },
                {
                    title: "Fax",
                    des:"(92-51) 226-17-39",
                },
                {
                    title: "Email",
                    points:[
                        "Pakistan@tiv.uz",
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
                title: "Day 1: Arrival in Tashkent and City Tour",
                content: 
                    "Arrive in Tashkent, the capital of Uzbekistan, and check-in to your hotel. Start your city tour by visiting Independence Square, Amir Timur Square, and the Chorsu Bazaar, a bustling marketplace. Later, visit the State Museum of History of Uzbekistan to learn about the country’s history and culture."
            },
            {
                title: "Day 2: Explore Samarkand",
                content: 
                    "Take a morning train to Samarkand, a UNESCO World Heritage site. Visit the Registan Square, the Bibi-Khanym Mosque, and after lunch, the Shakhi-Zinda necropolis and the Gur-e-Amir Mausoleum, the final resting place of Timur."
            },
            {
                title: "Day 3: Discover Bukhara",
                content: 
                    "Take an early morning train to Bukhara, a UNESCO World Heritage site. Explore the old town, including the Kalyan Minaret, the Kalon Mosque, and the Ark Fortress. Visit the Lyabi-Hauz complex and in the afternoon, the Samanid Mausoleum."
            },
            {
                title: "Day 4: Return to Tashkent and Departure",
                content: 
                    "Take a morning train back to Tashkent and revisit the Chorsu Bazaar for last-minute souvenir shopping. Enjoy a farewell lunch at a local restaurant before departing for the airport."        
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

export default Uzbekistan   