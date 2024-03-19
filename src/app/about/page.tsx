import AboutInfo from '@/components/About/AboutInfo'
import HappyClient from '@/components/About/HappyClient'
import ChooseUs from '@/components/ChooseUs'
import HeadPage from '@/components/Common/HeadPage'
import React from 'react'

const About = () => {
  return (
    <>
    <HeadPage
        className='bg-abouthead'
        title='About'
        text='We Are The World Best Travel Agency Company'
        bredcrumb='About'
    />
    <AboutInfo/>
    <HappyClient/>
    <ChooseUs/>
    </>
  )
}

export default About