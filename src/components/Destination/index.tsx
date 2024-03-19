
import React from "react";
import { HeadingH2 } from "../Common/Heading";
import { Para16 } from "../Common/Paragraph";
import Slider from "../Carousel/Slider";
import malaysia from '../../../public/assets/images/malaysia.jpg'
import vitenam from '../../../public/assets/images/vitenam.jpg'
import indonesia from '../../../public/assets/images/indonesia.jpg'


const Destination = () => {

  return (
    <>
    <div className="container p-2 md:p-4 lg:p-6 mt-32 mb-32">
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 items-center space-y-4 gap-4  ">
        <div className="space-y-3">
          <HeadingH2
            className="leading-tight"
            title="Go beyond your imagination"
          />
          <div className="border-b-2 border w-72 border-b-primary-orange-200" />
          <Para16 title="We Have Authorized Embassy Visa Application Centre & Dropbox" />
        </div>
        <div className="col-span-2">
        <Slider 
           
           destinations={[
            {
               href:"/dropbox/malaysia" , image:malaysia ,visatype:"Official Drop Box Centre", title:"Malaysia Visa", description:"Malaysia is a vibrant and diverse country located in Southeast Asia, known for its stunning natural landscapes, rich cultural heritage, and modern cities."
            },
            {
              href:"/dropbox/vietnam" , image:vitenam ,visatype:"Official Drop Box Centre", title:"Vietnam Visa", description:"Vietnam, located in Southeast Asia, is bordered by China to the north, Laos to the northwest, Cambodia to the southwest, and the South China Sea to the east."
           },
           {
            href:"/dropbox/indonesia" , image:indonesia ,visatype:"Official Drop Box Centre", title:"Indonesia Visa", description:"Indonesia is a vast archipelago nation located in Southeast Asia, comprised of thousands of islands, and home to a population of over 270 million people."
          },
          ]}
        />   
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Destination;
