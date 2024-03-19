import React from 'react'
import count from '../../../../public/assets/images/count.png'
import Image from 'next/image'
import { Aboutchallenge } from '@/components/Constant'
import { HeadingH1 } from '@/components/Common/Heading'
import { Para18 } from '@/components/Common/Paragraph'
import Counter from './Counter'


const HappyClient:React.FC = () => {
  return (
    <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container p-2 mt-10 lg:mt-32  ">
            <div>
              <Image src={count} width={600} height={600} alt='counter Image' />
            </div>
            <div>
              <div className="grid grid-cols-1  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center mt-10 md:mt-20 md:justify-items-end  gap-4   p-3 ">
                {Aboutchallenge.map((array, index) => (
                  <div
                    className={`mt-5 mb-5 ${array.className}  hover:scale-105 md:mx-auto duration-300 w-full transition pt-5 pb-5  p-2 rounded-md shadow`}
                    key={index}
                  >
                    <HeadingH1
                      className={"text-center"}
                      title={
                        <Counter
                          start={array.start}
                          end={array.end}
                          duration={array.duration}
                        />
                      }
                    />
                    <Para18 className={"text-center"} title={array.link} />
                  </div>
                ))}
              </div>
            </div>
          </div>
    </>
  )
}

export default HappyClient