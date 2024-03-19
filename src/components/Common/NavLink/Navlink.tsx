
//@ts-nocheck
import Link from 'next/link';
import React, { useState,  } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import DropDown from '../DropDown';
import MegaMenu from '../MegaManu';




const Navlink = ({ onDropdownClose }) => {

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
    if (isMegaMenuOpen) setIsMegaMenuOpen(false);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
    if (isDropDownOpen) setIsDropDownOpen(false);
  };

  const handleClose = () => {
    setIsDropDownOpen(false);
    setIsMegaMenuOpen(false);
    if (onDropdownClose) onDropdownClose(); // Close mobile menu
  };



  return (
    <>
      <Link className='font-semibold' href="/" onClick={handleClose}>
        Home
      </Link>
      <div>
      <DropDown
         onLinkClick={handleClose}
         toggleMenu={toggleDropDown}
         isOpen={isDropDownOpen}
          alignment="sm:text-start p-3 "
          text="About"
          icon={
            <MdOutlineKeyboardArrowDown
              className="mt-1"
              aria-hidden="true"
            />
          }
          array={[
            {
              items: [
                { id: "1",  title: "About Ceo", subtitle:"CEO",href: "/chairman" },
                { id: "2", title: "About Company", subtitle:"CROWN",href: "/about" },
                { id: "3", title: "Our Team", subtitle:"CROWN TEAM",href: "/team" },
                { id: "4", title: "Company Profile", subtitle:"PDF PROFILE",href: "/" },
              ],
            },
          ]}
        />
      </div>


      <div>
      <MegaMenu
            onLinkClick={handleClose}
            toggleMenu={toggleMegaMenu}
            isOpen={isMegaMenuOpen}
          className={"  h-fit "}
          alignment="md:overflow-y-hidden z-50 overflow-y-scroll w-full gap-3 
           sm:text-start   "
          text="Visa"
          icon={
            <MdOutlineKeyboardArrowDown
              className="mt-1"
              aria-hidden="true"
            />
          }
          
        />
      </div>
      <Link className='font-semibold' href="/gallery" onClick={handleClose} >
        Gallery
      </Link>
      <Link className='font-semibold' href="/appointment" onClick={handleClose} >
        Appointment
      </Link>
      <Link className='font-semibold' href="/contact" onClick={handleClose} >
        Contact
      </Link>
    </>
  );
};

export default Navlink;
