import BookingForm from '@/components/Appointment/bookingForm'
import HeadPage from '@/components/Common/HeadPage'
import React from 'react'

const Booking = () => {
  return (
    <>
    <HeadPage
    className='bg-servicehead'
    title='Appointment'
    text='We Are The World Best Travel Agency Company'
    bredcrumb='Appointment'
    />
    <BookingForm/>
    </>
  )
}

export default Booking