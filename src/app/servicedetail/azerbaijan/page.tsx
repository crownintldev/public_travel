 
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
import { AzerbaijanDetail,  azerbaijanimg,  indonesiaimg, } from '@/components/Constant'
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

const Azerbaijan = () => {
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
    title='Azerbaijan Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Azerbaijan Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Azerbaijan Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                azerbaijanimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          azerbaijanimg.map((array, index)=>(
                    <div className="keen-slider__slide h-auto lg:h-[250px] "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    AzerbaijanDetail.map((array,index)=>(
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
                    title: "Azerbaijan Sticker Visa Not Available ",
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
                    title: "Azerbaijan E – Visa Requirement",
                    points:[
                        "Original Passport { Validity At least 6 Months }",
                        "04 Pictures with White Background  { 35mm x 50mm }",
                        "CNIC Photo Copy",
                        "1 Month Visa Validity",
                        "Single Entry Visa",
                        "3 – 5 Days Process Time",
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
                    title: "Address Details",
                    points:[
                        "Embassy of Azerbaijan to Pakistan Plot 1 D and 1E Diplomatic Enclave II, Islamabad",
                    ]
                },
                {
                    title: "Phones",
                    points:[
                        "+9251-260-07-04",
                        "+9251-260-07-03",

                    ]
                },
                {
                    title: "Fax",
                    points:[
                        "+9251 260-07-20",
                    ]
                },
                {
                    title: "Whatsapp",
                    points:[
                        "+99451-319-04-33 (Please send your questions in written form)",
                    ]
                },
                {
                    title: "Email",
                    points:[
                        "Egynet@isb.comsats.net.pk",
                    ]
                },
                {
                    title: "Website",
                    des:"http://islamabad.mfa.gov.az/",
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
                title: "Day 1: Baku",
                content: 
                    "Start your trip in Baku, the capital city of Azerbaijan.\nExplore the walled old city of Baku, a UNESCO World Heritage Site that dates back to the 12th century.\nVisit the iconic Maiden Tower, an ancient fortress that offers stunning views of the city.\nVisit the Heydar Aliyev Center, a modern architectural masterpiece designed by Zaha Hadid.\nEnjoy dinner at one of the city’s many excellent restaurants, featuring delicious Azerbaijani cuisine."
            },
            {
                title: "Day 2: Absheron Peninsula",
                content: 
                    "Take a day trip to the Absheron Peninsula, located just outside Baku.\nVisit the Ateshgah Fire Temple, a 17th-century temple dedicated to the Zoroastrian religion.\nExplore the Yanar Dag natural gas fire, a fascinating geological phenomenon that has been burning for centuries.\nVisit the Gobustan National Park, home to ancient rock carvings and mud volcanoes."
            },
            {
                title: "Day 3: Guba",
                content: 
                    "Travel to the town of Guba, located in the northeast of Azerbaijan.\nExplore the city’s historic center, including the 18th-century Juma Mosque and the 19th-century Jewish Quarter.\nVisit the nearby Khinalig village, one of the oldest and highest villages in the Caucasus.\nExperience the local cuisine, including traditional dishes such as piti, a stew made with lamb and chickpeas."
            },
            {
                title: "Day 4: Sheki",
                content: 
                    "Travel to the city of Sheki, located in the northwest of Azerbaijan.\nExplore the city’s historic center, including the Palace of Sheki Khans, a beautiful 18th-century palace.\nVisit the Sheki Bazaar, a traditional market where you can find local crafts and souvenirs.\nTake a trip to the nearby Sheki Caravanserai, an ancient trading post dating back to the 18th century.\nReturn to Baku for your final evening in Azerbaijan."        
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

export default Azerbaijan