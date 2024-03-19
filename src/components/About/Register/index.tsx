import { HeadingH3 } from '@/components/Common/Heading'
import React from 'react'
import mora from '../../../../public/assets/images/mora.jpg'
import Image from 'next/image'
import { Para14 } from '@/components/Common/Paragraph'
import { reg } from '@/components/Constant'

const Register:React.FC = () => {
  return (
    <div className='container mt-10 lg:mt-32'>
        <HeadingH3 className='text-center' title={'We Are Registered With'}/>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 justify-items-center'>
            {
                reg.map((array, index)=>(
                    <div key={index}>
                    <div className='border w-28 h-28 rounded-full p-2 mb-3'>
                        <Image className='rounded-full' src={array.image} width={300} height={300} alt='mora'/>
                    </div>
                    <Para14 title={array.text}/>
                    </div>
                ))
            }
           
          
            
        </div>
    </div>
  )
}

export default Register