  import React, { useState } from 'react';
  import { Popover } from 'antd';
  import { Para12, Para14, Para16 } from '@/components/Common/Paragraph';
  import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';
import Button from '@/components/Common/Button';

  interface PassengerProps {
    userAgent: Array<{
      title?: string;
      age?: string;
    }>;
  }

  const Passenger: React.FC<PassengerProps> = ({ userAgent }) => {
    const [counts, setCounts] = useState(() => userAgent.map(() => 0));
    const [value, setValue] = useState(1);
  
    const increment = (index: number) => {
      setCounts(counts => {
        const newCounts = counts.map((count, i) => (i === index ? count + 1 : count));
        // console.log("Increment Index:", index, "New Counts:", newCounts);
        return newCounts;
      });
    };
  
    const decrement = (index: number) => {
      setCounts(counts => {
        const newCounts = counts.map((count, i) => (i === index && count > 0 ? count - 1 : count));
        // console.log("Decrement Index:", index, "New Counts:", newCounts);
        return newCounts;
      });
    };
    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    const content = (
      <div className='p-2 space-y-3'>
        {userAgent.map((passenger, index) => (
          <div className='flex justify-between' key={index}>
            <div>
              <Para14 className='font-medium' title={passenger.title} />
              <Para12 className='font-medium' title={passenger.age} />
            </div>
            <div className="counter">
              <button className='bg-primary-orange-200 hover:bg-primary-orange-300' onClick={() => decrement(index)}>-</button>
              <span>{counts[index]}</span>
              <button className='bg-primary-orange-200 hover:bg-primary-orange-300' onClick={() => increment(index)}>+</button>
            </div>
          </div>
        ))}
        <hr/>
        <div className='mt-5 space-y-3'>
        <div className="flex">
        <input type="checkbox" value={'Business'} id="Business" className="peer hidden" />
        <label htmlFor="Business" className="select-none cursor-pointer rounded-lg border-2 border-primary-orange-200 py-3 px-6 font-bold text-primary-orange-300 transition-colors duration-200 ease-in-out w-full peer-checked:bg-primary-orange-200 peer-checked:text-white peer-checked:border-primary-orange-200 "> Business </label>
        </div>
        <div className="flex">
        <input type="checkbox" value={'Economy'} id="Economy" className="peer hidden" />
        <label htmlFor="Economy" className="select-none cursor-pointer rounded-lg border-2 border-primary-orange-200 py-3 px-6 font-bold text-primary-orange-300 transition-colors duration-200 ease-in-out w-full peer-checked:bg-primary-orange-200 peer-checked:text-white peer-checked:border-primary-orange-200 "> Economy </label>
        </div>
        <div className="flex">
        <input type="checkbox" value={'First Class'} id="First Class" className="peer hidden" />
        <label htmlFor="First Class" className="select-none cursor-pointer rounded-lg border-2 border-primary-orange-200 py-3 px-6 font-bold text-primary-orange-300 transition-colors duration-200 ease-in-out w-full peer-checked:bg-primary-orange-200 peer-checked:text-white peer-checked:border-primary-orange-200 "> First Class </label>
        </div>
        </div>
      </div>
    );

    return (
      <Popover className='w-full' placement="bottom" trigger="click" content={content} >
        <Button  title={"Passenger"} className=' bg-transparent hover:bg-transparent text-start'/>
      </Popover>
    );
  }

  export default Passenger;
