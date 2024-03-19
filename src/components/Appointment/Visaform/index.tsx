"use client"
import { HeadingH3, HeadingH6 } from '@/components/Common/Heading'
import Flights from '@/components/DataDisplay/Flights'
import Tab from '@/components/Tabs'
import React from 'react'
import Individual from '../Individual'
import Family from '../Family'

const VisaForm = () => {
  return (
    <>
    <div className='mt-20 p-2 space-y-5'>
      <HeadingH3 className='text-center' title={"Appointment for the Visa Application Center"}/>

      <div className='container border rounded-md bg-primary-orange-300 p-2 md:p-4 max-w-screen-md'>
      <Tab 
        tabsData = {[
          {
            key: '1',
            title: 'Individual',
            content: <Individual/>,
          },
          {
            key: '2',
            title: 'Family',
            content: <Family/>,
          },
        
        ]}
      />
      </div>
    </div>
    </>
  )
}

export default VisaForm