 
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
import { SingaporeDetail,  indonesiaimg, singaporeimg,  } from '@/components/Constant'
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

const Singapore = () => {
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
    title='Singapore Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Singapore Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Singapore Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                singaporeimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          singaporeimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    SingaporeDetail.map((array,index)=>(
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
                    title: "Sri Lanka Stocker Visa Not Available",
                    
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
                    title: "Singapore E- Visa Requirement",
                    points:[
                        "Original Passport    { Validity At least 6 Months }",
                        "04 Pictures with White Background  { 35mm x 50mm }",
                        "Last Six Month Bank Statement",
                        "Bank Accounts Maintenance Letter",
                        "NTN  { National Tax No.}     ( If Applicable )",
                        "Return Air Ticket",

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
                    title: "Address:",
                    points: [
                        "Lakson Square Building No 2Sarwar Shaheed Road Karachi, Pakistan",
                    ]
                },
                {
                    title: "Telephone:",
                    points: [
                        "+92-21-3568-6419, 3568-5308",
                    ]
                },
                {
                    title: "Email:",
                    points: [
                        "singaporecg@cyber.net.pk",

                    ]
                },
                {
                    title: "Fax:",
                    points: [
                        "+92-21-3568-8067, 3568-0093",
                    ]
                },
                {
                    title: "Url:",
                    des:"https://www.mfa.gov.sg/Karachi"
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
                title: "Day 1: Marina Bay Sands",
                content: 
                    "Start your day with a visit to Marina Bay Sands, an iconic hotel and shopping complex. Take in the stunning view from the observation deck, SkyPark.\nHead to Gardens by the Bay, a nature park featuring a variety of plants and flowers, including the famous Supertree Grove and Cloud Forest.\nIn the evening, visit Clarke Quay, a riverside development known for its lively nightlife and restaurants."
            },
            {
                title: "Day 2: Chinatown",
                content: 
                    "Explore the culturally rich district of Chinatown, featuring historic temples, colorful shophouses, and bustling markets.\nVisit the Buddha Tooth Relic Temple and Museum, a beautiful temple dedicated to the Buddha.\nExperience the local hawker culture by having lunch at one of the famous hawker centers, such as Maxwell Food Centre or Chinatown Complex Food Centre.\nIn the evening, catch a light show at the iconic Merlion Park, featuring Singapore’s symbol, the Merlion statue."
            },
            {
                title: "Day 3: Sentosa Island",
                content: 
                    "Spend the day on Sentosa Island, a popular resort island with a variety of attractions such as Universal Studios Singapore, S.E.A. Aquarium, and Adventure Cove Waterpark.\nIn the evening, head to the beach and watch the sunset at Siloso Beach."
            },
            {
                title: "Day 4: National Museum and Botanic Gardens",
                content: 
                    "Visit the National Museum of Singapore, showcasing the country’s history and culture.\nStroll around the beautiful Botanic Gardens, a UNESCO World Heritage Site and Singapore’s first UNESCO site.\nEnd your trip by experiencing the famous shopping district of Orchard Road, home to numerous shopping malls, luxury brands, and entertainment options."        
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

export default Singapore