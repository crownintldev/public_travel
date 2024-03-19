 
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
import { CambodiaDetail, cambodiaimg, indonesiaimg,  } from '@/components/Constant'
import Image from 'next/image'
import { Para14 } from '@/components/Common/Paragraph'
import Tab from '@/components/Tabs'
import Servicedetail from '@/components/Service/Servicedetail'
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

const Cambodia = () => {
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
    title='Cambodia Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Cambodia Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Cambodia Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                cambodiaimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          cambodiaimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    CambodiaDetail.map((array,index)=>(
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
                    title: "Cambodia Sticker Visa Not Available ",
                    
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
                    title: "Cambodia E – Visa Requirement",
                    points:[
                        "Passport 1st & 2nd Page Scan Copy   { Validity At least 6 Months }",
                        "01 Pictures with White Background  { 35mm x 50mm }",
                        "CNIC Photo Copy",
                        "Covid vaccine certificate",
                        "Hotel booking",
                        "Ticket Booking",
                        "Bank Statement ( Last 6 month )",
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
                    title: "Cambodia Embassy not available.",
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
                title: "Day 1: Arrive in Siem Reap",
                content: 
                    "Arrive in Siem Reap, the gateway to the Angkor Wat temple complex.\nVisit the Angkor Wat temple complex, the largest religious monument in the world and a UNESCO World Heritage site.\nWatch the sunset from the top of Phnom Bakheng, a hill that offers stunning views of the surrounding landscape."
            },
            {
                title: "Day 2: Exploring Angkor's Smaller Temples",
                content: 
                    "Explore the smaller temples of the Angkor complex, including the Bayon Temple, Ta Prohm, and Banteay Srei.\nVisit the Angkor National Museum to learn more about the history and culture of the Khmer Empire.\nTake a traditional Khmer cooking class to learn how to make local dishes such as amok and lok lak."
            },
            {
                title: "Day 3: Day Trip to Tonle Sap Lake",
                content: 
                    "Take a day trip to the Tonle Sap Lake, the largest freshwater lake in Southeast Asia.\nVisit the floating villages on the lake, which offer a unique glimpse into the daily lives of the local people.\nLearn about the local fishing industry and try your hand at catching fish using traditional methods.\nEnjoy a sunset boat ride on the lake and take in the beautiful scenery."
            },
            {
                title: "Day 4: Visit the capital city of Phnom",
                content: 
                    "Visit the capital city of Phnom Penh and explore its historical sites, including the Royal Palace and the National Museum of Cambodia.\nLearn about Cambodia’s recent history at the Tuol Sleng Genocide Museum and the Killing Fields of Choeung Ek.\nTake a stroll along the lively riverfront and enjoy the city’s vibrant street food scene.\nEnd the day with a sunset cruise on the Mekong River and enjoy the stunning views of the city skyline."        
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

export default Cambodia