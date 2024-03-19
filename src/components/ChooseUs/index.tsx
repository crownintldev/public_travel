import React from "react";
import { HeadingH3, HeadingH4, HeadingH6 } from "../Common/Heading";
import { MdDateRange } from "react-icons/md";
import { Para14 } from "../Common/Paragraph";
import Image from "next/image";
import chooseus from '../../../public/assets/images/Chooseus.png'
import { FaBuilding } from "react-icons/fa6";
import { IoMdCompass } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const ChooseUs = () => {
  return (
    <>
      <div className="container p-2 mt-10 md:mt-32 mb-10 md:mb-32">
        <div className="text-center space-y-4">
          <HeadingH4
            className="text-primary-orange-300 font-fam uppercase  "
            title="WHY CHOOSE US"
          />
          <HeadingH3
            className="tracking-wider"
            title="Get The Best Travel Experience"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 mt-16 mb-10 justify-items-center">
          <div className="space-y-4 flex flex-col justify-center">
            <div className=" group  p-2 sm:p-4 lg:p-6 space-y-1">
              <div className="border flex justify-center items-center border-primary-orange-200 rounded-full w-20 h-20 group-hover:bg-primary-orange-200 duration-200 transition">
              <MdDateRange className="text-primary-orange-200 group-hover:text-white" size={30} />
              </div>
              <HeadingH6 title="Set Travel Plan"/>
              <Para14 title="Crown International Aviation, in partnership with its affiliates, offers air ambulance and small plane services."/>
            </div>
            <div className=" group  p-2 sm:p-4 lg:p-6 space-y-1">
              <div className="border flex justify-center items-center border-primary-orange-200 rounded-full w-20 h-20 group-hover:bg-primary-orange-200 duration-200 transition">
              <FaBuilding className="text-primary-orange-200 group-hover:text-white" size={30} />
              </div>
              <HeadingH6 title="Luxary Hotel"/>
              <Para14 title="We offer competitive airfares for worldwide destinations, empowering travel agents to increase profitability."/>
            </div>
          </div>
          <div className="col-span-2">
            <Image src={chooseus} width={500} height={500} alt="chooseus" />
          </div>
          <div className="space-y-4 flex flex-col justify-center">
            <div className=" group  p-2 sm:p-4 lg:p-6 space-y-1">
              <div className="border flex justify-center items-center border-primary-orange-200 rounded-full w-20 h-20 group-hover:bg-primary-orange-200 duration-200 transition">
              <IoMdCompass  className="text-primary-orange-200 group-hover:text-white" size={30} />
              </div>
              <HeadingH6 title="Explore Around"/>
              <Para14 title="At Crown International, we specialize in designing holiday and tour packages tailored to our clients’ needs and preferences."/>
            </div>
            <div className=" group  p-2 sm:p-4 lg:p-6 space-y-1">
              <div className="border flex justify-center items-center border-primary-orange-200 rounded-full w-20 h-20 group-hover:bg-primary-orange-200 duration-200 transition">
              <BiSupport  className="text-primary-orange-200 group-hover:text-white" size={30} />
              </div>
              <HeadingH6 title="Support 24/7"/>
              <Para14 title="We are available to serve our clients 24/7 for any emergency travel needs, accessible via mobile."/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
