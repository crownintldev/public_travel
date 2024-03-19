 
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
import { UkDetail,  indonesiaimg, } from '@/components/Constant'
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

const Uk = () => {
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
    title='Uk File Processing'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Uk File Processing'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Uk File Processing"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
             <div className=' mt-10'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    UkDetail.map((array,index)=>(
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
                title: "Day 1: Exploring London",
                content: 
                    "Arrive in London and check into your hotel.\nVisit Buckingham Palace, the Tower of London, and Tower Bridge.\nExplore Westminster Abbey, Big Ben, and the Houses of Parliament.\nWalk along the South Bank, seeing the London Eye and Shakespeare’s Globe Theatre.\nEvening in Covent Garden for dining and entertainment."
            },
            {
                title: "Day 2: Discovering Edinburgh",
                content: 
                    "Travel to Edinburgh.\nExplore the Royal Mile connecting Edinburgh Castle and the Palace of Holyroodhouse.\nVisit Edinburgh Castle and enjoy city views.\nWalk through Old Town and the Grassmarket area.\nEvening on Rose Street or in Leith for Scottish cuisine and pubs."
            },
            {
                title: "Day 3: Delving into Welsh Culture in Cardiff",
                content: 
                    "Travel to Cardiff.\nVisit Cardiff Castle and Cardiff Bay waterfront.\nExplore St Fagans National Museum of History.\nRelax in Bute Park.\nExperience Cardiff’s nightlife on St Mary Street and Mill Lane."
            },
            {
                title: "Day 4: Experiencing the Beauty of Bath",
                content: 
                    "Visit Bath, a UNESCO World Heritage Site.\nExplore the Roman Baths and Georgian streets.\nVisit Bath Abbey and its tower for views.\nRelax in Thermae Bath Spa or visit the Theatre Royal in the evening."
            },
            {
                title: "Day 5: Historic Oxford and Departure",
                content: 
                    "Visit Oxford, home to the historic university.\nTour the Bodleian Library and historic colleges like Christ Church College.\nExplore the city center's bookstores and cafes.\nVisit the Ashmolean Museum.\nDepart from Oxford or return to London."
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

export default Uk   