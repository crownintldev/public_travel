 
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
import { TajikistanDetail,  indonesiaimg, tajikistanimg, } from '@/components/Constant'
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

const Tajikistan = () => {
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
    title='Tajikistan Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Tajikistan Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Tajikistan Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                tajikistanimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          tajikistanimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    TajikistanDetail.map((array,index)=>(
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
                    title: "Tajikistan E -Visa Requirement",
                    points:[
                        "Original Passport    { Validity At least 6 Months }",
                        "04 Pictures with White Background  { 35mm x 50mm }",
                        "CNIC Photo Copy",
                        "Confirm Hotel Booking",
                        "Hosting in Tajikistan ( Hosted detail mean hotel )",
                        "Mention your travel plan or itinerary",  
                    ]
                    
                },
                {
                    title: "______________",
                    points:[
                        "1 Month Stay Duration",
                        "3 Month Visa Validity",
                        "Single Entry Visa",
                        "2 Month Stay Duration",
                        "5-7 Days Process Time",

                       
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
                    title:"Ambassador Extraordinary and Plenipotentiary – Ismatullo Nasredin"
                },
                {
                    title: "Address Details",
                    points:[
                        "Plot 7-10, Street 31, Sector G-5, Diplomatic Enclave, Islamabad",
                    ]
                },
                {
                    title: "Phones",
                    points:[
                        "+9251 8900222",
                    ]
                },
              
                {
                    title: "Email",
                    points:[
                        "tajemb_Islamabad@mfa.tj ",
                        "tajemb_islamabad@inbox.ru",

                    ]
                },
                {
                    title: "Website",
                    des:"mfa.tj/islamabad",
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
                title: "Day 1: Arrive in Dushanbe",
                content: 
                    "Arrive in Dushanbe, Tajikistan’s capital city.\nVisit the National Museum of Tajikistan to learn about the country’s history and culture.\nExplore the city’s bazaars, including the popular Green Bazaar, to experience the local culture and shop for souvenirs.\nTake a stroll in Rudaki Park and enjoy the beautiful views of the surrounding mountains."
            },
            {
                title: "Day 2: Iskanderkul Adventure",
                content: 
                    "Drive to Iskanderkul, a stunning lake located in the Fann Mountains.\nStop at the Hissor Fortress, a historic site that dates back to the 7th century, on the way.\nHike around the lake and enjoy the breathtaking scenery.\nVisit the nearby waterfall and relax in the natural hot springs."
            },
            {
                title: "Day 3: Wakhan Valley Exploration",
                content: 
                    "Drive to the Wakhan Valley, a remote and rugged region that borders Afghanistan.\nVisit the Yamchun Fortress and hot springs, which offer panoramic views of the valley.\nStop at the Bibi Fatima hot springs, believed to have healing powers, and take a dip in the warm waters.\nStay overnight in a homestay with a local family to experience their way of life and learn about their culture."
            },
            {
                title: "Day 4: Return to Dushanbe",
                content: 
                    "Return to Dushanbe and explore the city’s art scene, including the Tajik State Academic Theater of Opera and Ballet and the Tajik State Philharmonic Hall.\nVisit the Botanical Garden of Dushanbe, which boasts over 2,000 plant species from around the world.\nEnjoy a farewell dinner in one of Dushanbe’s restaurants to taste the local cuisine and say goodbye to Tajikistan."        
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

export default Tajikistan