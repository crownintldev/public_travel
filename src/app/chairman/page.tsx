import Register from '@/components/About/Register'
import CeoMessage from '@/components/Chairman/Ceomessage'
import Ceosection from '@/components/Chairman/Ceosection'
import HeadPage from '@/components/Common/HeadPage'
import React from 'react'

const Chairman:React.FC = () => {
  return (
    <>
     <HeadPage
     className='bg-ceohead'
     title='Chairman & CEO'
     text='We Are The World Best Travel Agency Company'
     bredcrumb='Chairman & CEO'
     />   
     <Ceosection/>
     <CeoMessage/>
     <Register/>
    </>
  )
}

export default Chairman