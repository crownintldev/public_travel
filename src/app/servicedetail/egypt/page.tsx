 
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
import { EgyptDetail,  egyptimg,  indonesiaimg, } from '@/components/Constant'
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

const Egypt = () => {
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
    title='Egypt Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Egypt Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Egypt Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                egyptimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          egyptimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    EgyptDetail.map((array,index)=>(
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
                    title: "Egypt Sticker Visa Requirements ",
                    points:[
                        "8 Months Valid Original Passport With Signature Page Signed.",
                        "CNIC Copy.4 Photographs, Size 2-by-2 Size (White Background, Without Glasses/Cap).",
                        "Updated Last 3 Months Bank Statement Duly Stamped & Signed From Respective Bank With Min PKR 300,000 Closing Balance.",
                        "Account Maintenance Certificate From The Respective Bank.",
                        "2 Covering Letter From Employer.",
                        "Polio Certificate (IPV)(from Government Hospital / Clinic) And Dengue Report",
                        "(Confirm Hotel Reservation & invitation needs to send an intimation to Egypt Embassy Islamabad ).",
                        "Approval Is Subject to Egypt Embassy / Consulate.",
                    ]
                },
                {
                    title: "6 – 8 Week Processing Time",
                    points:[
                        "Single Tourist Visa   ",
                        "Single Entry Business Visa",
                        "Multiple Entry Business Visa",
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
                    title: "Egypt E-visa not Available for Pakistani Citizen.",
                    
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
                        "Plot no. 38-51, UN Boulevard, Diplomatic Enclave , P.O. Box 2088, Ramna 5-4, Islamabad, Pakistan",
                    ]
                },
                {
                    title: "Phones",
                    points:[
                        "+92 (51) 2209072",
                        "+92 (51) 2209082",

                    ]
                },
                {
                    title: "Fax",
                    points:[
                        "(+92) 51 2279552",
                    ]
                },
                {
                    title: "Email",
                    points:[
                        "Egynet@isb.comsats.net.pk",
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
                title: "Day 1: Cairo",
                content: 
                    "Visit the Pyramids of Giza, one of the most famous landmarks in Egypt.\nExplore the Sphinx, an iconic statue located near the pyramids.\nVisit the Egyptian Museum, which houses over 120,000 artifacts including Tutankhamun’s treasures.\nEnjoy dinner on a Nile River cruise while taking in the city views."
            },
            {
                title: "Day 2: Luxor",
                content: 
                    "Take an early morning flight to Luxor and visit the Karnak Temple Complex, one of the largest temple complexes in the world.\nVisit the Valley of the Kings, where the tombs of pharaohs and powerful nobles are located.\nExplore the Temple of Hatshepsut, an impressive temple dedicated to one of Egypt’s few female pharaohs.\nTake an evening walk along the Nile River and enjoy the beautiful scenery."
            },
            {
                title: "Day 3: Aswan",
                content: 
                    "Take a scenic train or car ride to Aswan.\nVisit the Philae Temple, an ancient temple complex dedicated to the goddess Isis.\nVisit the Aswan High Dam, a modern engineering marvel that regulates the Nile River’s flow.\nTake a relaxing felucca (traditional sailboat) ride on the Nile River."
            },
            {
                title: "Day 4: Alexandria",
                content: 
                    "Take an early morning flight to Alexandria.\nVisit the Bibliotheca Alexandrina, a modern library that pays homage to the ancient Library of Alexandria.\nExplore the ancient Roman Amphitheatre, which once seated up to 800 spectators.\nVisit the Citadel of Qaitbay, a 15th-century fortress built on the ruins of the ancient Pharos Lighthouse.\nEnjoy a seafood dinner while watching the sunset over the Mediterranean Sea."        
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

export default Egypt