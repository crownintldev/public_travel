 
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
import { PhilippineDetail,  indonesiaimg, philippinesimg, } from '@/components/Constant'
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

const Philippine     = () => {
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
    title='Philippine    Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Philippine    Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Philippine    Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                philippinesimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          philippinesimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    PhilippineDetail.map((array,index)=>(
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
                    title: "Sticker Visa Required Documents",
                    points: [
                        "Cover letter / Company Working Letter",
                        "1 Empty Passport Page / 6 Months Validity of Passport",
                        "Bank Statement Personal & Company (1year) with Account maintenance later bank sign stamp attested from foreign office",
                        "Police Character Attested from foreign Office",
                        "4 Photos White background passport size (taken within 6 months)",
                        "Copies of CNIC",
                        "NTN",
                        "Air ticket & hotel booking confirmed",
                        "Covid Vaccination",
                        "PCR TEST With in 24 to 48 hours",
                        "Self Appareance Must",
                    ]
                },
                {
                    title: "Visa Duration",
                    points: [
                        "3 Month Visa",
                        "6 Month Visa",
                        "1 Year Visa",
                        "Seaman’s",  
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
                    title: "Philippine Evisa Not Available",          
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
                        "Zhou-Enlai Avenue, Plot Nos. 3, 4 and 5, Diplomatic Enclave, Sector G-5, Islamabad",
                    ]
                },
                {
                    title: "E-mail",
                    points:[
                        "islamabad.pe@dfa.gov.ph",
                        "isdpe@isb.comsats.net.pk",

                    ]
                },
                {
                    title: "Phone",
                    points:[
                        "+92-51 (8487513)",
                        "+92-333-1509891",

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
                title: "Day 1: Explore Manila",
                content: 
                    "Visit Intramuros, the historic walled city, to learn about the country’s colonial past.\nVisit the National Museum of the Philippines for its rich art and cultural heritage.\nVisit the Manila Baywalk and watch the beautiful sunset."
            },
            {
                title: "Day 2: Beach Day in Boracay",
                content: 
                    "Fly to Boracay, known for its white sandy beaches and crystal clear waters.\nSpend the day lounging on the beach and enjoying water activities like snorkeling and island hopping.\nWatch the sunset at the beach."
            },
            {
                title: "Day 3: Island Hopping in El Nido",
                content: 
                    "Fly to El Nido on Palawan Island, known for its limestone cliffs and turquoise waters.\nTake an island-hopping tour in the Bacuit Archipelago.\nEnjoy a seafood dinner by the beach."
            },
            {
                title: "Day 4: Explore Cebu City",
                content: 
                    "Fly to Cebu City, the oldest city in the Philippines.\nVisit Magellan’s Cross, Basilica del Santo Niño, and Fort San Pedro.\nTry local delicacies such as lechon (roast pig) and puso (rice wrapped in leaves)."        
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

export default Philippine   