import Theme from '@/components/Theme';
import React, { FC, ReactNode } from 'react';

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider: FC<LayoutProviderProps> = ({ children }) => {
  return (
    <main className='w-full'>
      
      {children}
    </main>
  );
}

export default LayoutProvider;
