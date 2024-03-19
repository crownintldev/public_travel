 
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
import { indonesiaDetail, indonesiaimg, malaysiaDetail, malaysiaimg, overviewDetail, vietnamDetail, vietnamimg } from '@/components/Constant'
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

const Indonesia = () => {
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
    title='Indonesia Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Indonesia Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Indonesia Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                indonesiaimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          indonesiaimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    indonesiaDetail.map((array,index)=>(
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
                    title: "Indonesia Sticker Visa Requirements",
                    points: [
                        "Original Passport",
                        "All Previous Passport",
                        "CNIC Copy",
                        "4 Pics White Background",
                        "Police Character certificate for 1 time traveler",
                        "Account Maintenance Certificate",
                        "Covid Vaccination Booster Doz",
                        "Last 06 Month Bank Statement With 3 Lac Balance (if applicable person don’t have strong statement then blood relation statement is acceptable )",

                    ]
                },
                {
                    title: ">>>> Process Time 10-15 Days <<<<",
                    des:"One Month Sticker Visa ",
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
                    title: "Indonesia E Visa Requirements",
                    points:[
                        "Passport 1st & 2nd Page Scan with applicant signature",
                        "Photo in white background",
                        "ID card Scan",
                        "Vaccination card scan",
                    ]
                },
                {
                    title: "Indonesia One Month E- Visa ",
                   
                },
            ]}
            />,
          },  
          {
            key: '3',
            title: 'Businness Visa',
            content: <ServiceData
            data={[
               
                {
                    title: "Business Visa in Indonesia",
                    points: [
                        "Processing Time 20days",
                        "Company Registration ",
                        "For Per Applicant Visa Processing Charges 2years With Kitas",

                    ]
                },
                {
                    title: "Required documents from Customer",
                    points: [
                        "Passport 1st & 2nd Page Scan With Applicant Signature",
                        "Photo In White Background",
                        "ID Card Scan",
                        "Name Of Directors Minimum 2 Name Required",

                    ]
                },
                {
                    title: "Below The Documents We Arranged For You",
                    points: [
                        "Nama PT",
                        "Direktur utama",
                        "Direktur",
                        "Komisaris utama",
                        "Komisaris",
                        "Sahamnya",
                        "Modal awal",
                        "Email PT",
                        "Tlpn",
                        "Domisili usaha",
                        "Bidang usaha",
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
                        "P4C3+XGF، Gamal Abdul Naseer Rd, Ramna 5 Diplomatic Enclave, Islamabad, Islamabad Capital Territory",
                    ]
                },
                {
                    title: "Telephone:",
                    points: [
                        "(051) 2832017",
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
                title: "Day 1: Arrival in Bali",
                content: 
                    "Arrive in Bali and check in at your hotel\nVisit Tanah Lot Temple, a beautiful temple built on a rock formation in the sea\nEnjoy the sunset at Seminyak Beach\nHave dinner at one of the local restaurants in Seminyak or Kuta"
                
            },
            { 
                title: "Day 2: Ubud and Kintamani Tour",
                content: 
                    "Depart early for a full-day Ubud and Kintamani Tour\nVisit the Tegalalang Rice Terrace, a beautiful terraced rice field\nExplore the Ubud Monkey Forest, a sanctuary for Balinese long-tailed monkeys\nVisit Kintamani, an area in the central highlands that offers breathtaking views of Mount Batur and Lake Batur\nHave lunch overlooking the volcano and lake\nVisit the Tirta Empul Temple, a sacred Hindu water temple\nReturn to your hotel in Bali"
                
            },
            { 
                title: "Day 3: Bali Beach Day and Traditional Dance Performance",
                content: 
                    "Spend the day relaxing on one of Bali’s stunning beaches, such as Nusa Dua Beach or Jimbaran Beach\nHave a seafood lunch by the beach\nIn the evening, watch a traditional Balinese dance performance, such as the Kecak Dance or Legong Dance"
                
            },
            { 
                title: "Day 4: Departure",
                content: 
                    "Visit one of Bali’s famous temples, such as Besakih Temple or Uluwatu Temple\nGo shopping for souvenirs at a local market, such as the Ubud Art Market or Sukawati Art Market\nReturn to your hotel and check out\nDepart from Bali for your next destination"        
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

export default Indonesia