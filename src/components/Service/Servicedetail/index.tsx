import { HeadingH3 } from '@/components/Common/Heading'
import { Para14 } from '@/components/Common/Paragraph'
import { overviewDetail } from '@/components/Constant'
import React from 'react'

const Servicedetail = () => {
  return (
    <>
       <div className=' p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3 mt-10'>
                <HeadingH3 title={"Visa Detail"}/>
                {
                    overviewDetail.map((array,index)=>(
                        <Para14 key={index} title={array.text}/>
                    ))
                }      
            </div>
    </>
  )
}

export default Servicedetail