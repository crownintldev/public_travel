import VisaForm from '@/components/Appointment/Visaform'
import HeadPage from '@/components/Common/HeadPage'
import React from 'react'

const appointment = () => {
  return (
    <>
    <HeadPage
    className='bg-servicehead'
    title='Appointment'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Appointment'
    />
    <VisaForm/>
    </>
  )
}

export default appointment