import React, { FC } from 'react';
import Link from 'next/link';
import { HeadingH6 } from '../Heading';
import { Para12 } from '../Paragraph';

interface Service {
  ref: string;
  title: string;
  para: string;
}

interface MegaDataProps {
  onLinkClick?: () => void;
  service: Service[];
}

const MegaData: FC<MegaDataProps> = ({ onLinkClick, service }) => {
  return (
    <>
      {service.length >0 && service.map((item, index) => (
        <div key={index}>
          <Link href={item.ref} onClick={onLinkClick}>
            <div className="flex flex-col sm:flex-row border md:border-none mt-2 md:mt-0 mb-3 md:mb-0 duration-300 transition gap-3 rounded-md hover:bg-primary-orange-300 hover:text-white px-2 py-2">
              <div>
                <HeadingH6 title={item.title} />
                <Para12 title={item.para} />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default MegaData;