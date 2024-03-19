import React from 'react'
import { PiPhoneCallBold } from 'react-icons/pi'
import { Para14 } from '../Paragraph'
import { HeadingH3, HeadingH4, HeadingH5 } from '../Heading'

interface ConditionProps {
    info: Array<{ title?: string, description?: string }>
}

const Condition:React.FC<ConditionProps> = ({info}) => {
  return (
    <>
    <div className='container p-2 grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 lg:mt-32'>
        <div className='col-span-3 '>
            {
               info.length > 0 && info.map((item , index)=>(
                <div className='space-y-3 mb-10 lg:mb-24' key={index}>
                <HeadingH3 title={item.title}/>
                <div className='border-b-2 border w-16 border-b-primary-orange-200' />
                <Para14 className='text-start' title={item.description} />
            </div>
                ))
            }
            
        </div>
        <div>
        <div className='shadow-lg rounded-md group p-2 h-auto sm:p-4 md:p-6 w-full text-center space-y-3'>
            <div className='w-16 h-16 flex justify-center border-2 mx-auto bg-white  border-primary-orange-200 group-hover:bg-primary-orange-200 items-center rounded-full duration-300 transition'>
            <PiPhoneCallBold size={30} className='text-primary-orange-200 group-hover:text-white duration-300 transition' />
            </div>
            <Para14 title={'Contact us 24/7'}/>
            <HeadingH5 title={'+92 328 0143786'}/>
            <HeadingH5 title={'+92 051 5511155'}/>
        </div>
        </div>
       
    </div> 
    </>
  )
}

export default Condition