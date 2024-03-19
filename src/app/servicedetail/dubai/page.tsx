 
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
import { DubaiDetail,  dubaiimg,  indonesiaimg, } from '@/components/Constant'
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

const Dubai     = () => {
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
    title='Dubai    Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Dubai    Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Dubai    Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                dubaiimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          dubaiimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    DubaiDetail.map((array,index)=>(
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
                    title: "We Working on only Dubai Visa",
                   
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
                    title: "Dubai E – Visa Requirement",
                    points:[
                       "Scan Copy of CNIC",    
                       "Passport Scan copy",    
                       "Passport Size Photos Scan Copy.",    
                       "Last Six Month Bank Statement",    
                       "Undertaking & Guarantee that Applicant must be an exit within the validity of his/her visa duration.",              
                    ]          
                },
                {
                    points:[
                       "The multiple entry 5-year tourist visa enables tourists to enter the UAE multiple times on self-sponsorship and remain in the country for 90 days on each visit, and can be extended for further 90 days. This type of tourist visa can be issued for all nationalities.",           
             
                    ]          
                },
                {
                    title:"To obtain this visa, the applicant must have",
                    points:[
                       "a bank balance of 4,000 USD or its equivalent in foreign currencies during the last six months",           
                       "a valid health insurance policy applicable in the UAE",           
                       "a ticket to and from the UAE",           
                       "proof of stay (hotel/residential address) in the UAE",
                    ]          
                },
                {
                    title:"Visa Duration",
                    points:[
                        "1 Month Single Entry Visa  ",
                        "2 Month Single Entry Visa",
                        "5 Year Multiple Entry Visa",
                    ]
                }
                      
            ]}
            />,
          },  
          
          {
            key: '3',
            title: 'Embassy Details',
            content: <ServiceData
            data={[
                
                {
                    title: "Location",
                    points:[
                        "https://www.google.com/maps/@33.7329368,73.1303063,17z",
                    ]
                },
                {
                    title: "Fax",
                    points:[
                        "0097180024",
                    ]
                },
                {
                    title: "Phone",
                    points:[
                        "0092512099999",
                    ]
                },   
                {
                    title: "Website",
                    points:[
                        "islamabademb@mofaic.gov.ae",
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
                title: "Day 1: Exploring Downtown Dubai",
                content: 
                    "Start at the Dubai Mall, one of the largest shopping malls in the world, and visit the Dubai Aquarium and Underwater Zoo.\nHead to the top of the Burj Khalifa for city views from the observation deck.\nEnd the day with the Dubai Fountain show."
            },
            {
                title: "Day 2: Discovering Old Dubai",
                content: 
                    "Take a morning tour of the historic Al Fahidi neighborhood (Bastakiya) to explore traditional architecture.\nVisit the Dubai Museum in the city’s oldest building.\nEnjoy a dhow cruise on Dubai Creek in the evening with a traditional Arabic dinner."
            },
            {
                title: "Day 3: Water Parks and Miracle Garden",
                content: 
                    "Spend the day at a famous water park, like Aquaventure or Wild Wadi Water Park.\nIn the evening, visit the Dubai Miracle Garden to see the world’s largest flower garden."
            },
            {
                title: "Day 4: Desert Safari and Dubai Marina",
                content: 
                    "Take a morning desert safari, including a ride through sand dunes and camel riding.\nVisit the Dubai Miracle Garden in the afternoon.\nEnd the day exploring Dubai Marina and taking a boat ride to see the skyline at night."        
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

export default Dubai   