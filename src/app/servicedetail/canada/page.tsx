 
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
import { CanadaDetail,  indonesiaimg, } from '@/components/Constant'
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

const Canada = () => {
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
    title='Canada File Processing'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Canada File Processing'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Canada File Processing"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
             <div className=' mt-10'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    CanadaDetail.map((array,index)=>(
                        <Para14 key={index} title={array.text}/>
                    ))
                }      
            </div>
        </div>
        <Tab  className={"mt-10 lg:mt-32"}
        tabsData = {[
          {
            key: '1',
            title: 'Bussinessman / Self-Employed',
            content: <ServiceData
            data={[
                {
                    title: "Required Documents",
                    des:"Basic Documents", 
                    points:[
                        "Passport Copy (All Passport Required)",
                        "ID Card Copy",
                        "Picture White Background",
                        "FRC / MRC",
                    ]
                },
                {
                    des:"Personal Documents", 
                    points:[
                        "Personal Last 6 month Bank Statement",
                        "Property Documents",
                        "Vehicles Documents",
                    ]
                },
                {
                    des:"Company Documents", 
                    points:[
                        "NTN",
                        "Chamber of Commerce (if Available)",
                        "Company Letterhead",
                        "Business Account Maintenance Letter",
                        "Company Last 6 month Bank Statement",
                        "Last 3 Year Tax Return",
                        "Company Registration Certificate",
                    ]
                },
                {
                    des:"Employment Documents", 
                    points:[
                        "Last 6 Month Salary Slip",
                        "Employment Account Maintenance Letter",
                        "Employment Letter",
                    ]
                },
                {
                    des:"Appointment Charges  & Embassy Fee will be Paid by Customer.", 
                    des2:"For More Info Contact Us:"
                },
            ]}
            />,
          },
          {
            key: '2',
            title: 'For Employee',
            content: <ServiceData
            data={[
                {
                    title: "Required Documents",
                    des:"Basic Documents",
                    points:[
                      "Passport Copy (All Passport Required)",
                      "ID Card Copy",            
                      "Picture White Background",            
                      "FRC / MRC",            
                               

                    ]          
                },
                {
                    des:"Personal Documents",
                    points:[
                      "Personal Last 6 month Bank Statement",            
                      "Property Documents",            
                      "Vehicles Documents",            
                 
                    ]          
                },
                {
                    des:"Company Documents",
                    points:[
                        "NTN",
                        "Chamber of Commerce (if Available)",
                        "Company Letterhead",
                        "Business Account Maintenance Letter",
                        "Company Last 6 month Bank Statement",
                        "Last 3 Year Tax Return",
                        "Company Registration Certificate",
                    ]          
                },
                {
                    des:"Employment Documents",
                    points:[
                        "Last 6 Month Salary Slip",
                        "Employment Account Maintenance Letter",
                        "Employment Letter",
                    ]
                },
                {
                    des:"Appointment Charges & Embassy Fee will be Paid by Customer.",
                    des2:"For More Info Contact Us",
                }
                      
            ]}
            />,
          },  
          
          {
            key: '3',
            title: 'For Student',
            content: <ServiceData
            data={[
                
                {
                    title: "Required Documents",
                    des:"Basic Documents",
                    points:[
                        "Passport Copy (All Passport Required)",
                        "ID Card Copy",
                        "Picture White Background",
                        "FRC / MRC",
                    ]
                },
                {
                    des: "Personal Documents",
                    points:[
                        "Personal Last 6 month Bank Statement",
                        "Property Documents",
                        "Vehicles Documents",
                    ]
                },
                {
                    des: "Company Documents",
                    points:[
                        "NTN",
                        "Chamber of Commerce (if Available)",
                        "Company Letterhead",
                        "Business Account Maintenance Letter",
                        "Company Last 6 month Bank Statement",
                        "Last 3 Year Tax Return",
                        "Company Registration Certificate",
                    ]
                },   
                {
                    des: "Employment Documents",
                    points:[
                        "Last 6 Month Salary Slip",
                        "Employment Account Maintenance Letter",
                        "Employment Letter",
                    ]
                }, 
                {
                    des:"Appointment Charges & Embassy Fee will be Paid by Customer",
                    des2:"For More Info Contact Us"
                }
            ]}
            />,
          }, 
          {
            key: '4',
            title: 'Family Immigrant',
            content: <ServiceData
            data={[
                
                {
                    title: "Required Documents",
                    des:"Basic Documents",
                    points:[
                        "Passport Copy (All Passport Required)",
                        "ID Card Copy",
                        "Picture White Background",
                        "FRC / MRC",
                    ]
                },
                {
                    des: "Personal Documents",
                    points:[
                        "Personal Last 6 month Bank Statement",
                        "Property Documents",
                        "Vehicles Documents",
                    ]
                },
                {
                    des: "Company Documents",
                    points:[
                        "NTN",
                        "Chamber of Commerce (if Available)",
                        "Company Letterhead",
                        "Business Account Maintenance Letter",
                        "Company Last 6 month Bank Statement",
                        "Last 3 Year Tax Return",
                        "Company Registration Certificate",
                    ]
                },   
                {
                    des: "Employment Documents",
                    points:[
                        "Last 6 Month Salary Slip",
                        "Employment Account Maintenance Letter",
                        "Employment Letter",
                    ]
                }, 
                {
                    des:"Appointment Charges & Embassy Fee will be Paid by Customer",
                    des2:"For More Info Contact Us"
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
                title: "Day 1: Exploring Vancouver",
                content: 
                    "Check into your lodging in Vancouver.\nVisit Stanley Park for great views and the Totem Poles.\nExplore Gastown and Chinatown's historic charm and diverse dining.\nStroll along Coal Harbour’s seawall with city skyline and mountain views.\nEnjoy Vancouver's culinary scene with regional seafood or other cuisines."
            },
            {
                title: "Day 2: Discovering the Canadian Rockies in Banff",
                content: 
                    "Travel to Banff, located in the Canadian Rockies.\nExplore Banff National Park.\nVisit Lake Louise for a walk around the lake or a boat ride.\nDiscover Banff town's stores, art galleries, and eateries.\nRelax in the Banff Upper Hot Springs."
            },
            {
                title: "Day 3: Experiencing the Whistler Adventure",
                content: 
                    "Visit Whistler in the Coast Mountains.\nTake a gondola to Whistler Mountain for outdoor activities.\nTry zip-lining or ATV riding.\nExplore Whistler Village’s shops, restaurants, and galleries.\nVisit the Squamish Lil’wat Cultural Centre.\nUnwind at a pub or enjoy fine dining."
            },
            {
                title: "Day 4: Discovering the Cultural Delights of Montreal",
                content: 
                    "Travel to Montreal, Quebec.\nVisit Old Montreal for its cobblestone streets and historic buildings.\nExplore Plateau-Mont-Royal and Mile End's hip vibe.\nVisit the Pointe-à-Callière Museum or the Montreal Museum of Fine Arts.\nSample Montreal's food scene with poutine and bagels.\nExperience Montreal's nightlife with bars and live music venues."
            },
            {
                title: "Day 5: Experiencing the Beauty of Niagara Falls",
                content: 
                    "Travel to Niagara Falls.\nExplore the falls and surrounding attractions.\nParticipate in activities like boat tours or visit the Niagara Parks Butterfly Conservatory.\nEnjoy the local cuisine and scenic views.\nExperience the nightlife near the falls."        
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

export default Canada   