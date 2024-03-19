 
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
import { malaysiaDetail, malaysiaimg, overviewDetail, vietnamDetail, vietnamimg } from '@/components/Constant'
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

const Vietnam = () => {
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
    title='Vietnam Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Vietnam Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Vietnam Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                vietnamimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          vietnamimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    vietnamDetail.map((array,index)=>(
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
                    title: "Vietnam Sticker Visa Requirements",
                    points: [
                        "02 passport sizes Pictures",
                        "01 photo of CNIC / ID",
                        "01 copy of passport",
                        "Original passport",
                        "Visa approval from Vietnam",
                    ]
                },
                {
                    title: "Single Entry Visa",
                    points: [
                        "01 Month Validity",
                        "03 Month Validity",     
                    ]
                },
                {
                    title: "Multiple Entry Visa",
                    points: [
                        "01 Month Multiple",
                        "03 Month Multiple",  
                        "06 Month Multiple",     
                        "01 Year Multiple",     
                    ]
                },
                {
                    des:"01 Month Validity",
                    des2:"03 Month Validity",
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
                    title: "Vietnam E Visa Not Available",
                },
            ]}
            />,
          },  
          {
            key: '3',
            title: 'Attestation',
            content: <ServiceData
            data={[
               
                {
                    title: "For Afghanistan 🇦🇫 Citizens",
                    des:"All categories same Charges",
                    des2:"Normal 07 Working Days",

                    points: [
                        "For Urgent in 02-03 working days",
                        "For Same Day visa",
                    ]
                },
                {
                    title: "For Attestation",
                    points: [
                        "01 Document Only",
                        "Overlapping Seal",
                    ]
                },
                {
                    title: "Below are the requirements for Attestation",
                    points: [
                        "01 photo of CNIC / ID",
                        "Complete Application form",
                        "Photo of documents",
                        "Documents attested by MOFA",

                    ]
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
                        "F-8-1, F-8, Islamabad, ICT",
                    ]
                },
                {
                    title: "Telephone:",
                    points: [
                        "(051) 2655785",
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
                title: "Day 1 Explore the historic city of Hanoi",
                content: 
                    "Explore the historic city of Hanoi, Vietnam’s capital, and visit popular attractions such as Hoan Kiem Lake, the Temple of Literature, and the Ho Chi Minh Mausoleum.\nWander through the Old Quarter and sample some of Hanoi’s famous street food, such as pho and banh mi."
                
            },
            { 
                title: "Day 2: Take a day trip to the UNESCO",
                content: 
                    "Take a day trip to the UNESCO World Heritage Site of Ha Long Bay, where you can enjoy a scenic cruise, explore the limestone caves and grottos, and swim in the turquoise waters."
                
            },
            { 
                title: "Day 3: Head to Hoi An, a charming ancient town",
                content: 
                    "Head to Hoi An, a charming ancient town that is also a UNESCO World Heritage Site. Visit the Japanese Covered Bridge, stroll through the Old Town, and shop for handmade silk and tailor-made clothing.\nTake a cooking class and learn how to make traditional Vietnamese dishes."
                
            },
            { 
                title: "Day 4: Experience the hustle and bustle",
                content: 
                    "Experience the hustle and bustle of Ho Chi Minh City (formerly known as Saigon), Vietnam’s largest city. Visit the War Remnants Museum, the Independence Palace, and the Notre Dame Cathedral.\n Explore the famous Ben Thanh Market, where you can shop for souvenirs and taste local street food."        
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

export default Vietnam