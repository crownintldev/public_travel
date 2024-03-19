 
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
import { USADetail,  indonesiaimg, } from '@/components/Constant'
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

const USA = () => {
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
    title='USA File Processing'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='USA File Processing'
    />
     <TracingBeam className="p-2 mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"USA File Processing"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
             <div className=' mt-10'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    USADetail.map((array,index)=>(
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
                title: "Day 1: Exploring New York City",
                content: 
                    "Consider the country's size and distances between locations while planning.\nFocus on specific areas or cities and research entry requirements and travel restrictions.\nExperience diverse landscapes, cultural experiences, and vibrant cities in the USA."
            },
            {
                title: "Day 2: Historical Washington, D.C.",
                content: 
                    "Visit Washington, D.C., home to the U.S. government.\nExplore the National Mall, including the Lincoln Memorial, Washington Monument, and U.S. Capitol.\nVisit Smithsonian institutions like the National Air and Space Museum.\nStroll around the Tidal Basin during cherry blossom season.\nEnjoy the evening in Georgetown or Dupont Circle."
            },
            {
                title: "Day 3: Natural Wonders in Arizona",
                content: 
                    "Fly to Phoenix, Arizona, and visit Sedona's red rock formations.\nExplore the Grand Canyon National Park and its viewpoints.\nConsider a hot air balloon or helicopter flight over the Grand Canyon.\nRelax in the evening at the park or with a dusk walk."
            },
            {
                title: "Day 4: Cultural San Francisco",
                content: 
                    "Fly to San Francisco, California.\nVisit the Golden Gate Bridge and iconic neighborhoods like Haight-Ashbury and Chinatown.\nDrive down Lombard Street and visit Alcatraz Island.\nEnd the day with seafood at the Embarcadero."
            },
            {
                title: "Day 5: Sunny Los Angeles",
                content: 
                    "Fly to Los Angeles, California.\nVisit the Hollywood Sign, Hollywood Walk of Fame, and areas like Beverly Hills and Rodeo Drive.\nExplore art at the Getty Center or LACMA.\nRelax at Santa Monica and Venice Beach.\nVisit Griffith Observatory for city and star views."        
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

export default USA   