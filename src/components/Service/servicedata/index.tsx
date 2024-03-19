import React from 'react';
import { HeadingH6 } from '@/components/Common/Heading';
import { Para14, Para16 } from '@/components/Common/Paragraph';
import { GoDotFill } from 'react-icons/go';

interface ServiceDataProps {
  data: { title?: string; des?: string;des2?: string; points?: string[] }[];
}

const ServiceData: React.FC<ServiceDataProps> = ({ data }) => {
  // Check if data is provided, otherwise return null
  if (data.length === 0) return null;

  return (
    <div className='p-2 md:p-4 shadow border-t-4 border-t-primary-orange-200 rounded-md space-y-3 mt-10'>
      {data.map((array, index) => (
        <div key={index}>
          <HeadingH6 title={array.title} />
          {array.des && <Para14 className='font-medium mt-2' title={array.des} />}
          {array.des2 && <Para14 className='font-medium' title={array.des2} />}

          {array.points && Array.isArray(array.points) && array.points.map((item, subIndex) => (
            <div className='flex gap-2 items-center pt-1' key={subIndex}>
              <GoDotFill />
              <Para14 title={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ServiceData;
