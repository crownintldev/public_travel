import React from 'react'
import { HeadingH3, HeadingH6 } from '../Common/Heading'
import { Para14 } from '../Common/Paragraph'

const TravelTeam = () => {
  return (
    <>
        <div className='text-center mt-10 lg:mt-32 space-y-3'>
            <HeadingH3 className='font-fam' title={"Meet Our Team"}/>
            <hr className='border-2 border-primary-orange-300 w-80 mx-auto'/>
        </div>
        <div className="mt-20 container p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 justify-items-center">
        <div className="card card0 mt-5 mb-5">
          <div className="borderteam text-start">
            <div className="flex flex-col p-2">
            <HeadingH6 className="text-start text-white " title="Mubashir" />
              <Para14 className="text-start text-white " title="CEO" />
            </div>
          </div>
        </div>
        <div className="card card1 mt-5 mb-5">
          <div className="borderteam text-start">
            <div className="flex flex-col p-2">
              <HeadingH6 className="text-start text-white " title="Mubashir" />
              <Para14 className="text-start text-white " title="CEO" />
            </div>
          </div>
        </div>
        <div className="card card2 mt-5 mb-5">
          <div className="borderteam text-start">
            <div className="flex flex-col p-2">
              <HeadingH6 className="text-start text-white " title="Mubashir" />
              <Para14 className="text-start text-white " title="CEO" />
            </div>
          </div>
        </div>
        <div className="card card2 mt-5 mb-5">
          <div className="borderteam text-start">
            <div className="flex flex-col p-2">
              <HeadingH6 className="text-start text-white " title="Mubashir" />
              <Para14 className="text-start text-white " title="CEO" />
            </div>
          </div>
        </div>
        <div className="card card2 mt-5 mb-5">
          <div className="borderteam text-start">
            <div className="flex flex-col p-2">
              <HeadingH6 className="text-start text-white " title="Mubashir" />
              <Para14 className="text-start text-white " title="CEO" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TravelTeam