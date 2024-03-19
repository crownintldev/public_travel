import Link from 'next/link';
import React, { ReactNode } from 'react';

// Define a type for the items in the arrays
type FooterLinkItem = {
  title: any;
  href: any;
};

// Define the props for FooterLink
interface FooterLinkProps {
  title?: string;
  array?: FooterLinkItem[];
  children?: ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ title, array, children }) => {
  return (
    <div className='space-y-3'>
      {title && <h1 className='text-[20px] font-semibold'>{title}</h1>}
      {array && (
        <ul className='flex space-y-3 flex-col items-start list-none'>
          {array.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className='transition hover:opacity-75'>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};

export default FooterLink;