import React, { ReactNode } from 'react';
import { Para16 } from '@/components/Common/Paragraph'; // Assuming Para16 is a valid component
import { FaPlaneDeparture } from 'react-icons/fa6'; // Uncomment if used

interface LocationOption {
  option ?: string;
}

interface Visadata {
  title: string;
  icon: ReactNode;
  datepick ?: ReactNode;
  location: LocationOption[];
  Passenger?: ReactNode;
}

const VisaData: React.FC<Visadata> = ({ title, icon, datepick, location,Passenger }) => {
  return (
    <div>
     
        <div className='shadow bg-primary-orange-200 h-12 hover:bg-primary-orange-300 duration-300 transition rounded-md p-2 space-y-5'>
          {/* <div className='flex justify-between'>
            <Para16 className='font-medium' title={title} />
          </div> */}
          <div>
          {location.length > 0 &&  (
            <div className='flex gap-2 justify-between items-center'>
             {icon}
            <select className=" px-4 pe-9 block w-full h-8  bg-transparent rounded-lg text-sm focus:border-none focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none outline-none" defaultValue="">
              <option value="" disabled>Select Location</option>
              {location.length>0 && location.map((item, index) => (
                <option value={item.option} key={index}>{item.option}</option>
              ))}
            </select>
            </div>
              )}
            {datepick}
            {Passenger}
          </div>
        </div>
    
    </div>
  );
}

export default VisaData;
