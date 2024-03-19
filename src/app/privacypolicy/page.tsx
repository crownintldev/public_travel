import Condition from '@/components/Common/Condition'
import HeadPage from '@/components/Common/HeadPage'
import React from 'react'

const privacyPolicy:React.FC = () => {
  return (
    <>
        <HeadPage 
        className='bg-privacyhead'
        title='Privacy Policy'
        text='We Are The World Best Travel Agency Company'
        bredcrumb='Privacy Policy'
        />
        <Condition
          info={[
            {title: 'Introduction to Our Commitment to Your Privacy' , description:"At Crown International Travels, your privacy is paramount. We are dedicated to protecting the personal information of our esteemed clients. This privacy policy outlines how we collect, use, and safeguard your data, ensuring a seamless and secure travel experience. Our commitment extends beyond providing top-notch travel services; we prioritize the confidentiality and integrity of your personal details at every step."},
            {title: 'Information We Collect and Why' , description:"In our quest to offer personalized travel services, we collect essential information like your name, contact details, passport numbers, and travel preferences. This data is pivotal in facilitating travel arrangements, hotel bookings, and creating customized itineraries that cater to your unique travel desires. Our collection methods are transparent, ranging from website forms to direct communication, ensuring your full awareness and consent."},
            {title: 'How We Use Your Data ' , description:"The personal information you provide is used to streamline your travel arrangements, offering a hassle-free and enjoyable travel experience. From booking flights to arranging special accommodations, your data enables us to tailor our services to meet your specific needs. It also aids in processing payments and keeping you informed about exciting travel opportunities and updates."},
            {title: ' Storing and Protecting Your Information' , description:"We employ stringent security measures to protect your personal information. Data storage is handled with the utmost care, utilizing advanced encryption and security protocols. Our commitment extends to ensuring that your data is protected against unauthorized access, alteration, or disclosure, providing you with peace of mind as you explore the world with us."},
            {title: 'Your Rights Over Your Data ' , description:"As our valued client, you have the right to access, amend, or delete the personal information you've shared with us. Our transparent policy empowers you to make informed decisions about your data, fostering a relationship built on trust and respect."},
            {title: 'Use of Cookies and Tracking Technologies ' , description:"Our website uses cookies and similar tracking technologies to improve your browsing experience. These tools help us understand your preferences and enhance website functionality. We provide clear instructions on how you can manage cookie settings, ensuring your control over your online data."},



          ]}
        />
    </>
  )
}

export default privacyPolicy