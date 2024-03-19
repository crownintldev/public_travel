import Condition from '@/components/Common/Condition'
import HeadPage from '@/components/Common/HeadPage'
import React from 'react'

const Terms = () => {
  return (
    <>
        <HeadPage 
        className='bg-termshead'
        title='Terms & Conditions'
        text='We Are The World Best Travel Agency Company'
        bredcrumb='Terms & Conditions'
        />
        <Condition
          info={[
            {title: 'Introduction' , description:"Welcome to Crown International Travels! These Terms and Conditions govern your use of our services and website, and by accessing or using our services, you agree to be bound by these terms."},
            {title: 'Service Description' , description:"Crown International Travels provides travel-related services including flight bookings, hotel reservations, travel insurance, tour packages, and personalized itinerary planning."},
            {title: 'Use of Our Services' , description:"To use our services, you must be at least 18 years of age and possess the legal authority to enter into this agreement. You agree to use our services only for lawful purposes and in compliance with all applicable laws."},
            {title: 'Booking and Payment' , description:"When you book a travel service through us, you agree to provide accurate and complete information as required. Full payment or a deposit will be required to confirm the booking. Specific payment terms will be outlined at the time of booking."},
            {title: 'Cancellation and Refund Policy' , description:"Our cancellation and refund policy will be clearly communicated at the time of booking. Depending on the nature of your booking, some services may be non-refundable or subject to cancellation fees."},
            {title: 'Travel Documentation' , description:"It is your responsibility to ensure you have all necessary travel documentation, including passports, visas, and travel insurance. Crown International Travels is not responsible for any issues arising from a lack of appropriate documentation."},
            {title: 'Liability and Limitations' , description:"Crown International Travels is not liable for any damages or losses resulting from your use of our services, except where we have breached our contract with you. Our liability is limited to the total cost of your booking."},
            {title: 'Changes to Services' , description:"We reserve the right to modify or cancel any travel services due to unforeseen circumstances. In such cases, we will offer alternative arrangements or a refund where applicable."},
            {title: 'Intellectual Property' , description:"All content on our website, including text, graphics, logos, and images, is the property of Crown International Travels and is protected by copyright laws."},
            {title:'Privacy Policy', description:'Your use of our services is also governed by our Privacy Policy, which outlines how we handle your personal information.'},
            {title:'Governing Law', description:'These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Crown International Travels is based.'},
            {title:'Amendments to Terms and Conditions', description:'We reserve the right to amend these Terms and Conditions at any time. The updated version will be effective as soon as it is posted on our website.'},
            {title:'Contact Us', description:'For any questions or concerns regarding these Terms and Conditions, please contact us'},

            
          ]}
          />
    </>
  )
}

export default Terms