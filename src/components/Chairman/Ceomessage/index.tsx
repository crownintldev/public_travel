import { HeadingH1, HeadingH3, HeadingH4 } from "@/components/Common/Heading";
import { Para16, Para18 } from "@/components/Common/Paragraph";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
const words = `Crown International is a renowned name in the Travel industry since 2007 and has excellent record of best customer satisfaction. We ensure that our client get professional, reliable and hassle free services 24/7, round the year. We’ve a team of professionals who are qualified and have years of experience in handling travel requirement. At Crown International , we strive to do our best and with “The Name of Confidence” you’re assured of quality services that are provided with the highest standards of customer support. As a leading Travel Agent in the area, we are tied-up with all airlines and hotels to provide our customers with the best value for their money.Whether you want a cheap Air Ticket, looking forward to perform religious activity like Hajj or Umrah or just a leisure or family vacation, our experienced staff will help you choose from customized packages. Our travel representative can also compare prices across airlines and hotels to find the best deal for our customers to match their budget needs also.
`;
const CeoMessage:React.FC = () => {
  return (
    <>
      <div className=" text-center mt-32 container p-2" >
        <HeadingH1
          className={"whitespace-pre-wrap"}
          title={"Our Mission"}
          />
        <Para18
          className={"whitespace-pre-wrap pt-10"}
          
          title={
            "Embark on unparalleled adventures with Crown Intl Travels, where our mission is to redefine travel experiences. As a leading travel agency, we are committed to curating journeys that surpass expectations, fostering meaningful connections, and promoting sustainable exploration. Our personalized service ensures that each adventure is tailored to your unique preferences. Crown Intl Travels - your gateway to extraordinary moments. Explore the world with us and let your dreams take flight. "
          }
          
          />
      </div>
      <div className=" rounded-md  pt-5  bg-primary-orange-300 shadow container p-2 mt-10 lg:mt-32">
        <div className=" lg:p-8 md:p-6 sm:p-4 p-2 space-y-3 text-white">
          <HeadingH3  className={'border-b-2 text-white'} title={'CEO Message'}/>
          <FaQuoteLeft size={25} />
          <TextGenerateEffect className="text-white" words={words} />
          <FaQuoteRight size={25} />
       
          <HeadingH4
            
            title={"Mubashir Nazir"}
            />
          <Para16 className={"font-medium "} title={"CEO & FOUNDER"} />
        </div>
      
      </div>
            </>
  );
};

export default CeoMessage;
