import HeadPage from '@/components/Common/HeadPage'
import Address from '@/components/Contact/Address'
import ContactForm from '@/components/Contact/ContactForm'
import Map from '@/components/Contact/Map'
import React from 'react'

const Contact:React.FC = () => {
  return (
    <>
    <HeadPage
        className='bg-contacthead'
        title='Contact'
        text='We Are The World Best Travel Agency Company'
        bredcrumb='Contact'
    />
    <Address/>
    <ContactForm/>
    <Map/>
    </>
  )
}

export default Contact