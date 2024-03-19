import Button from '@/components/Common/Button'
import { HeadingH1, HeadingH3, HeadingH4, HeadingH5, HeadingH6 } from '@/components/Common/Heading'
import { Para12, Para14 } from '@/components/Common/Paragraph'
import React from 'react'

const ContactForm = () => {
  return (
    <>
 <div className="container p-2 mt-10 lg:mt-32">
  <div className="max-w-xxl mx-auto">
    <div className="text-center space-y-3">
      <HeadingH1  className='font-fam' title={"Contact us"}/>
      <hr className='border-primary-orange-300 border-2 w-72 mx-auto'/>
      <Para14 title="We'd love to talk about how we can help you."/>
    </div>
  </div>
  <div className="mt-12 max-w-[60rem] mx-auto">
    <div className="flex flex-col shadow-lg rounded-xl p-4 sm:p-6 lg:p-8 ">
        <HeadingH6 className='text-primary-orange-300' title={"Fill in the form"}/>

      <form className='mt-5'>
        <div className="grid gap-4 lg:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Full Name</label>
              <input  type="text" name="FullName" id="FullName" placeholder="Full Name" className="w-full rounded-md border-2 border-primary-orange-100 bg-white py-3 px-6 text-base font-medium  focus:border-dotted focus:border-primary-orange-300 focus:shadow-md"/>
            </div>
            <div>
              <label  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
              <input  type="email" name="email" id="email" placeholder="Enter Email" className="w-full rounded-md border-2 border-primary-orange-100 bg-white py-3 px-6 text-base font-medium  focus:border-dotted focus:border-primary-orange-300 focus:shadow-md"/>
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Email</label>
              <input  type="email" name="email" id="email" placeholder="Enter Email" className="w-full rounded-md border-2 border-primary-orange-100 bg-white py-3 px-6 text-base font-medium  focus:border-dotted focus:border-primary-orange-300 focus:shadow-md"/>
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Phone Number</label>
              <input  type="Number" name="Number" id="email" placeholder="Enter Phone Number" className="w-full rounded-md border-2 border-primary-orange-100 bg-white py-3 px-6 text-base font-medium  focus:border-dotted focus:border-primary-orange-300 focus:shadow-md"/>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-white">Comment</label>
            <textarea  name="Comment" placeholder='Comment Here' rows={4} className="w-full rounded-md border-2 border-primary-orange-100 bg-white py-3 px-6 text-base font-medium outline-none focus:border-dotted focus:border-primary-orange-300 focus:shadow-md"  />
          </div>
        </div>
        <Button className='mt-5 text-white hover:scale-95 duration-300 transition' title="Send inquiry"/>
        <div className="mt-3 text-center">
          <Para14 title="We'll get back to you in 1-2 business days."/>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default ContactForm