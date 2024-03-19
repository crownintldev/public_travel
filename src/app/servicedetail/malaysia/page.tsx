 
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
import { malaysiaDetail, malaysiaimg, overviewDetail } from '@/components/Constant'
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

const Malaysia = () => {
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
    title='Malaysia Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Malaysia Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Malaysia Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                malaysiaimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          malaysiaimg.map((array, index)=>(
                    <div className="keen-slider__slide  "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    malaysiaDetail.map((array,index)=>(
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
                    title: "Sticker Visa Requirements",
                    points: [
                        "Passport (6 Months Validity of Passport)",
                        "Bank Statement (6month) with Account maintenance later bank sign stamp",
                        "Photos Passport Size (taken within 6 months) size 35×50",
                        "Copies of CNIC",
                        "National Tax Number ( NTN )",
                    ]
                },
                {
                    title: "One Month Sticker Visa ",
                    points: [
                        "1 Month Single Entry Visa",
                        "3 Month  Multiple Visa ",
                        "6 Month  Multiple Visa",
                        "12 Month Multiple Visa",      
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
                    title: "Get Malaysia E Visa",
                    des:"Crown International Travels has been Authorized by Malaysia Visa Application Centre. Now we can apply Sticker & E visa for all Categories", 
                },
                {
                    title: "Visit E Visa Requirements",
                    points: [
                        "1st page Passport 6 Months Validity of Passport",
                        "Bank Statement (6month) with Account maintenance later bank sign stamp",
                        "Photos Passport Size (taken within 6 months) size 35×50",
                        "Copies of CNIC",
                    ]
                },
                {
                    title: "One Month Sticker Visa ",
                    des:"NOTE:- ALL DOCUMENTS SIZE MUST BE IN LESS THAN 2MB AND PHOTO SIZE MUST BE 35mm x 50mm ",
                    des2:"Embassy fee non-refundable in any reason of rejection",
                    points: [
                        "1 Month Single Entry E-Visa ",
                        "6 Month Multiple Visa",
                    ]
                },
            ]}
            />,
          },  
          {
            key: '3',
            title: 'Student E-Visa',
            content: <ServiceData
            data={[
               
                {
                    title: "Student E Visa Requirements",
                    points: [
                        "Original passport Scan",
                        "CNIC Scan",
                        "Picture Original pdf",
                        "Eval letter from Malaysia including reference number",
                        "Invitation letter from Malaysia",
                    ]
                },
                {
                    des:"NOTE:- ALL DOCUMENTS SIZE MUST BE IN LESS THAN 2MB AND PHOTO SIZE MUST BE 35mm x 50mm", 
                    des2:"Embassy fee nonrefundable in any reason of rejection",
                },
                
            ]}
            />,
          },     
          {
            key: '4',
            title: 'Expatriate E-Visa',
            content: <ServiceData
            data={[
               
                {
                    title: "Expatriate E Visa Requirements",
                    points: [
                        "Original Passport Scan first page",
                        "CNIC Scan",
                        "CNIC Scan",
                        "Picture original pdf",
                        "Calling VDR letter from Malaysia including reference number",
                    ]
                },
                {
                    des:"NOTE:- ALL DOCUMENTS SIZE MUST BE IN LESS THAN 2MB AND PHOTO SIZE MUST BE 35mm x 50mm", 
                    des2:"Embassy fee nonrefundable in any reason of rejection",
                },
                
            ]}
            />,
          },   
          {
            key: '5',
            title: 'Embassy Details',
            content: <ServiceData
            data={[
               
                {
                    title: "Address:",
                    points: [
                        "Plot No. 144-150, Street No. 17, Sector G-5 Diplomatic Enclave Islamabad",
                    ]
                },
                {
                    title: "Telephone:",
                    points: [
                        "+92 51 283 3201 [Visa Enquiry]",
                        "+92 51 207 2900 ext. 123 or 125 [Consular]",
                    ]
                },
                {
                    title: "Email:",
                    points: [
                        " mwislamabad@kln.gov.my [General]",
                        "islamabad@imi.gov.my [Visa & Immigration]",

                    ]
                },
                {
                    title: "Fax:",
                    points: [
                        " +92 51 283 3200 Twitter: MYHCIslamabad",
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
                title: "Day 1 Planning",
                content: 
                    "Arrive at Kuala Lumpur International Airport and check into your hotel.\nVisit the iconic Petronas Twin Towers and take in the breathtaking views of the city from the observation deck.\nStroll around the lively Bukit Bintang shopping district and indulge in some retail therapy.\nEnd the day with a visit to the vibrant night market at Jalan Alor and taste some delicious local street food"
                
            },
            { 
                title: "Day 2 Planning",
                content: 
                    "Take a day trip to the Batu Caves, a series of limestone caves and Hindu temples just outside of Kuala Lumpur.\nVisit the National Mosque of Malaysia and the nearby Islamic Arts Museum to learn about the country’s Muslim culture and heritage.\nHead to Chinatown and explore the colorful shops and eateries.\nEnd the day with a visit to the iconic Sri Mahamariamman Temple."
                
            },
            { 
                title: "Day 3 Planning",
                content: 
                    "Travel to Malacca, a historic city with a rich cultural heritage.\nVisit the A Famosa Fort, St. Paul’s Church, and the Malacca Sultanate Palace Museum to learn about the city’s past.\nEnjoy a relaxing river cruise along the Malacca River.\nTake a walk along Jonker Street and browse the antique shops and street vendors."
                
            },
            { 
                title: "Day 4 Planning",
                content: 
                    "Head to the beach town of Port Dickson and spend the day lounging on the beach or enjoying water sports.\n Visit the Army Museum, which showcases the history of the Malaysian armed forces.\nEnd the trip with a visit to the Port Dickson Ostrich Farm and get up close and personal with these fascinating birds."        
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

export default Malaysia