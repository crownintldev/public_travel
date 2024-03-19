 
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
import { indonesiaDetail, indonesiaimg, malaysiaDetail, malaysiaimg, nepalDetail, nepalimg, overviewDetail, vietnamDetail, vietnamimg } from '@/components/Constant'
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

const Nepal = () => {
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
    title='Nepal Visa'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Nepal Visa'
    />
     <TracingBeam className="p-2  mt-10 ">
      <div className="mt-10">
        <HeadingH4 title={"Nepal Visa"}/>
        <hr className='w-16 border-2 border-primary-orange-300'/>
      </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 mt-10  md:gap-5'>
         <div className='col-span-4'>
         <div ref={sliderRef} className="keen-slider">
            {
                nepalimg.map((array, index)=>(
                    <div className="keen-slider__slide w-full h-auto lg:h-[500px] rounded-lg shadow-md "key={index}>
                        <Image className='w-full object-contain bg-contain bg-bottom ' src={array.image} width={1440} height={768} alt='images'/>
                    </div>
                ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail mt-2 rounded-lg">
      {
          nepalimg.map((array, index)=>(
                    <div className="keen-slider__slide "key={index}>
                        <Image className='w-full h-[200px] object-cover' src={array.image} width={150} height={150} alt='images'/>      
                    </div>
                )) }
      </div>




             <div className=' mt-10 lg:mt-32'>
            <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3'>
                <HeadingH3 title={"Overview"}/>
                {
                    nepalDetail.map((array,index)=>(
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
                    title: "Stamp Visa Requirements are:",
                    points: [
                        "Original passport",
                        "CNIC copy",
                        "04 photos in white background",
                        "Last 6 month bank statement with maintenance",
                        "NTN",
                    ]
                },
                {
                    title: "Single Entry 15 Days",
                    points: [
                        "Validity 3 Month",
                        "Stay 15 Days Charges",
                        "For 1st Time Traveler ",
                        "For Repeat Traveler",

                    ]
                },
                {
                    title: "Single Entry 30 Days",
                    points: [
                        "Validity 3 Month",
                        "Stay 1 month Charges",
                        "For 1st Time Traveler",
                        "For Repeat Traveler",
                    ]
                },
                {
                    title: "Multiple Entry 90 Days",
                    points: [
                        "Validity 3 Month",
                        "Stay 3 Month Charges",
                        "For Repeat Traveler",
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
                    title: "Vietnam E Visa Not Available",
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
                        "House No.6, Gomal Rd، E-7 Islamabad, Islamabad Capital Territory",
                    ]
                },
                {
                    title: "Telephone:",
                    points: [
                        "(+92-51) 2610317, 2610318",
                    ]
                },
                {
                    title: "Fax:",
                    points: [
                        "(+92-51) 2610320",
                    ]
                },
                {
                    title: "Email:",
                    points: [
                        "eonislamabad@mofa.gov.np",
                        "eonislamabad@gmail.com",
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
                title: "Day 1: Kathmandu",
                content: 
                    "Arrive in Kathmandu, the capital city of Nepal.\nVisit Swayambhunath Stupa, also known as the Monkey Temple, for panoramic views of the city and to explore the Buddhist temple complex.\nVisit Kathmandu Durbar Square, a UNESCO World Heritage site, to see the ancient palaces and temples.\nStroll through the bustling streets of Thamel, a popular tourist district, for shopping and dining options."
            },
            {
                title: "Day 2: Pokhara",
                content: 
                    "Take a scenic flight or drive from Kathmandu to Pokhara, a picturesque lakeside city in the Himalayan foothills.\nVisit the World Peace Pagoda for stunning views of the Annapurna range and the Phewa Lake.\nTake a boat ride on Phewa Lake and visit the Tal Barahi Temple on the island in the lake.\nVisit the International Mountain Museum to learn about the mountaineering history and culture of Nepal."
            },
            {
                title: "Day 3: Chitwan National Park",
                content: 
                    "Travel from Pokhara to Chitwan National Park, a UNESCO World Heritage site known for its rich wildlife.\nGo on a jungle safari on elephant back or jeep to spot Bengal tigers, one-horned rhinoceros, and other wildlife.\nEnjoy a cultural program in the evening featuring Tharu dance, a traditional dance of the indigenous Tharu people."
            },
            {
                title: "Day 4: Bhaktapur and Departure",
                content: 
                    "Travel back to Kathmandu and visit Bhaktapur, a medieval city known for its well-preserved architecture and cultural heritage.\nExplore Bhaktapur Durbar Square and visit the Nyatapola Temple, the tallest temple in Nepal.\nDepart from Kathmandu for your next destination."        
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

export default Nepal