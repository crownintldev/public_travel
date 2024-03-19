import Link from 'next/link';
import React from 'react';
import logo from "../../../../public/assets/images/logo.png";
import Image from "next/image";

const Logo:React.FC = () => {
  return (
    <Link  href="/">
      {/* <HeadingH3 className={`text-white dark:text-black`} title={'LOGO'}/> */}
      <Image height={150} width={150} alt="crown tech" className='w-16 h-16' src={logo} />
    </Link>
  );
};

export default Logo;