 
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
import { SrilankaDetail, indonesiaimg, srilankaimg,  } from '@/components/Constant'
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

const Srilanka = () => {
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
    title='Srilanka Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Srilanka Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Srilanka Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                srilankaimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          srilankaimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>


             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    SrilankaDetail.map((array,index)=>(
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
                    title: "Srilanka Sticker Visa Required Documents",                  
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
                    title: "Sri Lanka Stocker Visa Not Available",
                },
                {
                    title: "Documents Required for Tourist ",
                    points:[
                        "Two Passport Size Photographs in Blue Background.",
                        "The Original Passport which is valid for six months from the travelling date.",
                        "ID Card Copy",
                    ]
                },
                {
                    title: "Documents Required for Business Visa ",
                    points:[
                        "A letter from the Applicant’s Company.",
                        "The invitation letter or a Letter from a Sri Lankan Company extending the business visa",
                        "NOC only in case of the government or private employee.",
                    ]
                },
                {
                    title: "Documents required to obtain ETA",
                    points:[    
                        "A Passport valid for six months from the date of the departure.",
                        "Id Card Copy",
                    ]
                },
                {
                    title: "Tourist Visa",
                    des:"For One Month Period"
                    
                },
                {
                    title: "Business Visa",
                    des:"For one month period"
                    
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
                    title: "Address:",
                    points: [
                        "The High Commission of Sri Lanka House No.24 Street No.89, G 6/3, Islamabad, Pakistan",
                    ]
                },
                {
                    title: "Telephone:",
                    points: [
                        "0092 – 51- 2828723",
                        "0092-51-2828751",
                    ]
                },
                {
                    title: "Email:",
                    points: [
                        "slhc.islamabad@mfa.gov.lk",

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
            title: "Day 1: Colombo and Kandy",
            content: 
                "Arrive in Colombo and drive to Kandy, the cultural capital of Sri Lanka.\nVisit the Temple of the Tooth, which houses a sacred tooth relic of Buddha.\nExplore the city’s colonial-era architecture, including the Old Royal Palace and the Queen’s Hotel.\nIn the evening, watch a traditional Kandyan dance performance."
        },
        {
            title: "Day 2: Sigiriya and Dambulla",
            content: 
                "Drive to Sigiriya and climb the famous Sigiriya Rock Fortress, a UNESCO World Heritage Site.\nExplore the ancient ruins and the stunning views from the top of the fortress.\nAfter lunch, visit the Dambulla Cave Temple, another UNESCO World Heritage Site and home to several ancient Buddhist cave temples."
        },
        {
            title: "Day 3: Nuwara Eliya and Tea Plantations",
            content: 
                "Drive to Nuwara Eliya, a picturesque town known for its tea plantations and cool climate.\nVisit a tea factory and learn about the process of making tea.\nTake a stroll through the tea gardens and enjoy the beautiful scenery.\nIn the afternoon, visit the Hakgala Botanical Gardens and explore the lush flora and fauna."
        },
        {
            title: "Day 4: Galle and Beaches",
            content: 
                "Drive to Galle, a coastal city known for its well-preserved colonial-era fortifications and architecture.\nExplore the Galle Fort, a UNESCO World Heritage Site, and visit the Dutch Reformed Church and other historical sites.\nAfter lunch, relax on the beach and enjoy the beautiful ocean views.\nReturn to Colombo for your departure flight."        
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

export default Srilanka