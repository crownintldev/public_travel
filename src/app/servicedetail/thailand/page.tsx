 
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
import { SrilankaDetail, ThailandDetail, indonesiaDetail, indonesiaimg, malaysiaDetail, malaysiaimg, overviewDetail, thailandimg, vietnamDetail, vietnamimg } from '@/components/Constant'
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

const Thailand = () => {
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
    title='Thailand Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Thailand Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Thailand Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                thailandimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          thailandimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>


             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    ThailandDetail.map((array,index)=>(
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
                title: "Thailand Sticker Visa Required Documents",
                points:[
                  "Cover letter / Company Working Letter",
                  "1 Empty Passport Page / 6 Months Validity of Passport",
                  "Bank Statement Personal & Company (6 Month) with Account maintenance later bank sign stamp",
                  "4 Photos White background passport size (taken within 6 months)",
                  "Copies of CNIC",
                  "NTN",
                  "Air ticket & hotel booking confirmed",
                 
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
                    title: "Thailand E Visa Not Available",
                },
                   
            ]}
            />,
          },  
          {
            key: '3',
            title: 'Thailand Non-B',
            content: <ServiceData
            data={[
                {
                    title: "Thailand Non-B Visa Requirements",
                    points:[
                        "Original passport",
                        "All previous passport",
                        "CNIC copy",
                        "4 pics white background",
                        "Letter from organization",
                        "Invitation letter from Thai company",
                        "Passport copy of invitee",
                        "Thai company registration copy",
                        "Thai company financial bank statement last one year",
                        "Last one year tax income of Thai company",
                        "Map of Thai company",
                    ]
                  },
            ]}
            />,
          },  
          {
            key: '4',
            title: 'Thailand Non-O',
            content: <ServiceData
            data={[
                {
                    title: "Thailand Non-O Visa Requirements",
                    points:[
                      "Original passport",
                      "All previous passport",
                      "CNIC copy",
                      "4 pics white background",
                      "Letter from organization mentioned the relation with applicant",
                      "Copy of Thai national Id card and passport",
                      "Copy of household registration",
                      "Copy of bank statement of Thai national",
                    ]
                },
                   
            ]}
            />,
          },  
          {
            key: '5',
            title: 'Thailand Non-ED',
            content: <ServiceData
            data={[
                {
                    title: "Thailand Non-Ed Visa Requirements",
                    points:[
                      "Original passport",
                      "All previous passport",
                      "CNIC copy",
                      "4 pics white background",
                      "Letter from institute mentioned the name of student",
                      "1st semester paid fees",
                      "One year bank statement",
                      "Educational details",
                    ]
                },
                   
            ]}
            />,
          },  
          {
            key: '6',
            title: 'Attestation',
            content: <ServiceData
            data={[
                {
                    title: "Thailand Documents Attestation",
                    points:[
                      "Hand written request letter in Thai Language ",
                      "Copy of Thai ID card",
                      "Home Registration",
                      "Bank Statement",
                      "Required docs from Pakistan",
                      "Request Letter",
                      "Copy of Passport, ID card and Previous Thai Visa ",
                      "Employment letter and tax documents",
                      "Bank Statement",
                    ]
                },
                   
            ]}
            />,
          },  
          
          {
            key: '7',
            title: 'Embassy Details',
            content: <ServiceData
            data={[
               
                {
                    title: "Address:",
                    points: [
                        "Plots No.1 – 20 Diplomatic Enclave-1 Sector G-5/4 Islamabad, Pakistan",
                    ]
                },
                {
                    title: "Telephone:",
                    points: [
                        "(92-51) 8431270 – 80 For Visa Section Ext. 1122,1166 ",
                    ]
                },
                {
                    title: "Email:",
                    points: [
                        "General Queries : office.isb@mfa.go.th",
                        "Consular Section : consular.isb@mfa.go.th",
                    ]
                },
                {
                  title:"Fax:",
                  points:[
                    "(92-51) 8431288,",
                    "(92-51) 8431291",
                  ]
                },
                {
                  title:"Website",
                  des:"https://islamabad.thaiembassy.org/",
                }
            ]}
            />,
          }, 
        ]}
      />
      <Itinerary
      Itinerayloop={
        [
          {
            "title": "Day 1: Bangkok Exploration",
            "content": 
                "Arrive in Bangkok and check into your hotel.\nExplore the Grand Palace and Wat Phra Kaew, two of the city’s most famous landmarks.\nVisit Wat Arun, a beautiful temple located on the banks of the Chao Phraya River.\nShop and dine at Asiatique The Riverfront, a popular night market with a variety of shops, restaurants, and entertainment options."
        },
        {
            "title": "Day 2: Ayutthaya and Bangkok Nightlife",
            "content": 
                "Take a day trip to Ayutthaya, the former capital of Thailand and a UNESCO World Heritage Site. Explore the ancient ruins and temples, including Wat Mahathat and Wat Yai Chai Mongkol.\nIn the evening, return to Bangkok and head to Khao San Road for a taste of the city’s lively nightlife."
        },
        {
            "title": "Day 3: Chiang Mai Discovery",
            "content": 
                "Take a morning flight to Chiang Mai, a city located in the north of Thailand.\nVisit Wat Phra That Doi Suthep, a temple located on a mountain with stunning views of the city.\nExplore the Sunday Night Walking Street Market, where you can find local handicrafts and enjoy street food."
        },
        {
            "title": "Day 4: Chiang Mai and Elephants",
            "content": 
                "Take a morning trip to the Elephant Nature Park, an ethical elephant sanctuary where you can interact with these gentle giants and learn about their conservation.\nIn the afternoon, visit the Old City of Chiang Mai, where you can explore ancient temples and experience the local culture.\nIn the evening, enjoy a traditional Khantoke dinner and cultural show."
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

export default Thailand