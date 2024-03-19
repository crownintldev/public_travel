//@ts-nocheck

import React, { useState, useRef, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { HeadingH6 } from "../Heading";
import MegaData from "../MegaData";

const MegaMenu = ({
  array,
  className,
  text,
  icon,
  onLinkClick,
  textSize = "font-semibold mt-0",
  alignment = "left-0",
  servicecatProp,
  toggleMenu,
  isOpen,
  ...otherProps
}) => {
  const dropdownRef = useRef(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index); // Update the active tab
  };
 
  const handleLinkClick = () => {
      onLinkClick(false);
  };

  const dropdata = [
    { id: "1", title: "Visa Drop Box", content: <MegaData 
    service={[
      {
        id: "1",
        title: "Malaysia Visa",
        para: "Malaysia is a vibrant and diverse country located in Southeast Asia, known for its stunning natural landscapes,",
        ref: "/dropbox/malaysia",
      },
      {
        id: "2",
        title: "Vietnam Visa",
        para:"Vietnam, located in Southeast Asia, is bordered by China to the north, Laos to the northwest,",
        ref: "/dropbox/vietnam",
      },
      {
        id: "3",
        title: "Indonesia Visa",
        para:"Indonesia is a vast archipelago nation located in Southeast Asia, comprised of thousands of islands,",

        ref: "/dropbox/indonesia",
      },
    ]}
    onLinkClick={handleLinkClick} /> },
    // 2
    { id: "2", title: "Visa", content: <MegaData onLinkClick={handleLinkClick} service={[
      
      { id: "1",title: "Malaysia Visa", para: "Malaysia is a vibrant and diverse country located in Southeast Asia,",ref: "/servicedetail/malaysia",},
       { id: "2",title: "Thailand Visa", para: "Thailand is a stunning country located in Southeast Asia, renowned for its rich",ref: "/servicedetail/thailand",},
       { id: "3",title: "Indonesia Visa", para: "Indonesia is a vast archipelago nation located in Southeast Asia,",ref: "/servicedetail/indonesia",},
       { id: "4",title: "Vietnam Visa", para: "Vietnam, located in Southeast Asia, is bordered by China to the north, Laos to the northwest,",ref: "/servicedetail/vietnam",},
       { id: "5",title: "Nepal Visa", para: "Nepal is a country located in South Asia, bordered by China to the north and India",ref: "/servicedetail/nepal",},
       { id: "6",title: "Sri Lanka Visa", para: "Sri Lanka is a tropical island nation located in the Indian Ocean, southeast",ref: "/servicedetail/srilanka",},
       { id: "7",title: "Singapore Visa", para: "Singapore, a small island city-state located in Southeast Asia, is known for its modern",ref: "/servicedetail/singapore",},
       { id: "8",title: "Cambodia Visa", para: "Cambodia is a Southeast Asian country located on the southern portion of the Indochine",ref: "/servicedetail/cambodia",},
       { id: "9",title: "Egypt Visa", para: "Egypt is a country located in North Africa and the Middle East, renowned for its rich history,",ref: "/servicedetail/egypt",},
       { id: "10",title: "Azerbaijan Visa", para: "Azerbaijan is a country located in the South Caucasus region of Eurasia, bordered",ref: "/servicedetail/azerbaijan",},
       { id: "11",title: "Tajikistan Visa", para: "Tajikistan is a Central Asian landlocked country that shares borders with Afghanistan",ref: "/servicedetail/tajikistan",},
       { id: "12",title: "Uzbekistan Visa", para: "Uzbekistan is a landlocked country in Central Asia, renowned for its rich history,",ref: "/servicedetail/uzbekistan",},
       { id: "13",title: "Jordan Visa", para: "Jordan is a country in the Middle East, bordered by Syria to the north, Iraq to the northeast,",ref: "/servicedetail/jordan",},
       { id: "14",title: "Philippine Visa", para: "The Philippines is an archipelagic country located in Southeast Asia.",ref: "/servicedetail/philippine",},
       { id: "15",title: "Kenya Visa", para: "Kenya is a country located in East Africa, with a population of over 54 million people.",ref: "/servicedetail/kenya",},
       { id: "16",title: "Turkey Visa", para: "Turkey is a transcontinental country that straddles both Europe and Asia, with a rich cultural",ref: "/servicedetail/turkey",},
       { id: "17",title: "Dubai Visa", para: "Dubai is a city and emirate in the United Arab Emirates (UAE) located on the southeastern",ref: "/servicedetail/dubai",},
    ]} /> },
    // 3
    { id: "3", title: "File Processing", content: <MegaData onLinkClick={handleLinkClick} service={[
      {
      id: "1",
      title: "Schengen File Processing",
      para: "The Schengen Area is a zone consisting of 26 European countries that have",
      ref: "/servicedetail/schengen",
    },
    {
      id: "2",
      title: "USA File Processing",
      para: "The United States of America, also known as the USA or just America, is a sizable",
      ref: "/servicedetail/usa",
    },
    {
      id: "3",
      title: "Canada File Processing",
      para: "The second-largest nation in the world, Canada, is a riveting tourist",
      ref: "/servicedetail/canada",
    },
    {
      id: "4",
      title: "UK File Processing",
      para: "The United Kingdom, or UK as it is more frequently known, is an intriguing location",
      ref: "/servicedetail/uk",
    },
  
  ]} /> },
  { id: "4", title: "Other Service", content: <MegaData onLinkClick={handleLinkClick} service={[
    {
    id: "1",
    title: "Hajj & Umrah",
    para: "Crown International Travels (Pvt) Ltd offers the best Umrah packages for this year and beyond, tailored to satisfy all your needs and requirements for a memorable pilgrimage. ",
    ref: "/servicedetail/hajj_umrah",
  },
  {
    id: "2",
    title: "Air Ticket",
    para: "We are an online travel agency that provides a direct connection to hundreds of airlines worldwide, allowing you to effortlessly find the most affordable flights",
    ref: "/servicedetail/airticket",
  },
  {
    id: "3",
    title: "Travel insurance",
    para: "Travel insurance is an important aspect of any travel planning process. At Crown International Travels, we understand that unexpected events can occur while traveling, such as flight cancellations,",
    ref: "/servicedetail/insurance",
  },
  {
    id: "4",
    title: "Rent a Car",
    para: "Crown International Travels (Pvt) Ltd Rent a Car is a 100% nationally owned car rental company that seeks to meet the increasing demand for hire vehicles due to the growing business activities.",
    ref: "/servicedetail/rentcar",
  },

]} /> },
  ];

  return (
    <div className={`inline-block  ${textSize}`}>
      <button
        onClick={toggleMenu}
        className={`inline-flex  font-semibold  ${text && text} ${
          icon && icon
        }`}
      >
        {text && text}
        {icon && icon}
      </button>
      {isOpen && (
        <div
          className={`absolute top-0 left-0 lg:top-auto lg:mt-5 xl:mt-4 ${alignment}  z-20   shadow-lg bg-white`}
          ref={dropdownRef}
        >
          <div
            onClick={toggleMenu}
            className="border-2 hover:scale-105 m-2 mt-10 hover:border-primary-orange-300 duration-300 transition rounded-md flex lg:hidden p-2 items-center justify-center w-10"
          >
            <ImCross />
          </div>
          <div
            className="flex gap-1 "
            style={{ width: "100%", maxHeight: "calc(100vh - 65px)" }}
          >
            <div
              className={` ${className}  p-1 overflow-y-scroll lg:max-h-[330px] xl:max-h-[420px] xxl:xl:max-h-[500px] pt-5 w-5/12 sm:w-3/12  `}
            >
              {dropdata.map((array, index) => (
                <div
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`${
                    activeTab === index ? "active  bg-primary-orange-300 text-white" : ""
                  } p-2 rounded-md mt-2 mb-2 hover:bg-primary-orange-300 hover:text-white transition duration-100`}
                >
                  <HeadingH6 className="text-[10px]" title={array.title} />
                </div>
              ))}
            </div>
            <div
              className={`${className} grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-3 md:w-9/12 w-7/12 pb-[25vh] md:pb-[5vh] p-2 z-30 overflow-y-scroll lg:max-h-[330px] xl:max-h-[420px] xxl:xl:max-h-[500px]`}
            >
              {dropdata[activeTab].content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
