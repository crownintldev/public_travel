import { HeadingH6 } from '@/components/Common/Heading'
import { Para14 } from '@/components/Common/Paragraph'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaAddressCard } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'

const addressinfo=[
    {id:1,icon:<MdMail className="text-primary-orange-300" size={25} /> ,  title:"Email", des1:"info@crownintltechnology.com", des2:"crownintltechnology@gmail.com",},
    {id:2,icon:<BsFillTelephoneFill className="text-primary-orange-300" size={25} /> ,  title:"Phone Number", des1:"+92 051 5511155", des2:"+92 328 0143786",},
    {id:3,icon:  <FaAddressCard className="text-primary-orange-300" size={25} />,  title:"Address", des1:"Office No. 406 , 4th Floor Rizwan Arcade I, Adam Jee Road Saddar, Rawalpindi, Punjab, Pakistan", des2:"",},

]

const Address = () => {
  return (
    <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 container  gap-5 justify-items-center p-5 mt-10 lg:mt-32'>
                {
                    addressinfo.map((item,index)=>{
                        return(
                            <div key={index} className=' rounded-md shadow  bg-primary-orange-300 hover:bg-primary-orange-200 duration-300 transition text-white  p-4 pb-10  space-y-4 relative mt-5 mb-5 w-full '>
                            <div className='border flex items-center justify-center shadow rounded-full w-14 h-14 absolute -top-6 -left-4 backdrop-blur-md '>
                               {item.icon}
                            </div> 
                            <HeadingH6 title={item.title}/>
                            <div>
                            <Para14 title={item.des1}/>
                            <Para14 title={item.des2}/>
                            </div>
                            <div className='  shadow rounded-full w-10 h-10 -right-2  absolute  backdrop-blur-sm ' />
                          
                        </div>
                        )
                    })
                }
           

    
          
     
        </div>
    </>
  )
}

export default Address