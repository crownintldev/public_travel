 
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
import { JordanDetail,  indonesiaimg, jordanimg, } from '@/components/Constant'
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

const Jordan     = () => {
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
    title='Jordan    Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Jordan    Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Jordan    Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                jordanimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          jordanimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    JordanDetail.map((array,index)=>(
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
                    title: "Jordan Visa Requirement",
                    points: [
                        "A completed visa application form.",
                        "A passport photo that’s less than 6 months old.",
                        "A valid passport with at least 6 months validity remaining on the date of travel and 2 blank pages.",
                        "A clear scan copy of your valid passport.",
                        "Accommodation reservations for your time in the country.",
                        "Your travel bookings, including return or onward flight information.",
                        "A recent monthly bank statement.",
                        "Your itinerary and any bookings made for your time in Jordan.",
                    ]
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
                    title: "Jordan Visa Requirement",
                    points: [
                        "A completed visa application form.",
                        "A passport photo that’s less than 6 months old.",
                        "A valid passport with at least 6 months validity remaining on the date of travel and 2 blank pages.",
                        "A clear scan copy of your valid passport.",
                        "Accommodation reservations for your time in the country.   ",
                        "Your travel bookings, including return or onward flight information.",
                        "A recent monthly bank statement.",
                        "Your itinerary and any bookings made for your time in Jordan.",
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
                        "P4C5+W4P, Ramna 5 Diplomatic Enclave, Islamabad, Islamabad Capital Territory",
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
                title: "Day 1: Arrival in Amman and City Tour",
                content: 
                    "Arrive in Amman and check into your hotel.\nTake a city tour and visit the Amman Citadel, a historic site with panoramic city views.\nVisit the Roman Theatre, one of the largest Roman theatres in the world.\nWalk around the city’s bustling streets and try local cuisine at a restaurant."
            },
            {
                title: "Day 2: Petra and Wadi Rum",
                content: 
                    "Drive to Petra, a UNESCO World Heritage Site and one of the New Seven Wonders of the World.\nExplore the ancient city, including the Treasury, the Monastery, and the Royal Tombs.\nAfter lunch, drive to Wadi Rum and take a jeep tour of the desert to watch the sunset over the sand dunes."
            },
            {
                title: "Day 3: Dead Sea and Jerash",
                content: 
                    "Drive to the Dead Sea to enjoy a dip in its salty waters and relax on the beach.\nAfter lunch, visit Jerash, an ancient Roman city, and explore the amphitheater, the Temple of Artemis, and the colonnaded street."
            },
            {
                title: "Day 4: Madaba and Mount Nebo",
                content: 
                    "Drive to Madaba to see the Byzantine-era mosaics, including the famous Madaba Map at the Church of St. George.\nAfter lunch, visit Mount Nebo and the Memorial Church of Moses, with views of the Jordan Valley and the Dead Sea.\nReturn to Amman for your departure flight."        
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

export default Jordan   