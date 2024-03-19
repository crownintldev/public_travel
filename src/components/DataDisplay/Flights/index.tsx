"use client";
import React from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa6";
import VisaData from "./VisaData";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import Passenger from "./Passenger";
import { CiCalendarDate } from "react-icons/ci";
import { FaPerson } from "react-icons/fa6";
import Button from "@/components/Common/Button";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
const { RangePicker } = DatePicker;
const Flights: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
        <VisaData
          title="From"
          icon={<FaPlaneDeparture size={25} />}
          location={[
            { option: "Malaysia" },
            { option: "United Kingdom" },
            { option: "United Arab Emirates" },
            { option: "Tajikistan" },
            { option: "Thailand" },
            { option: "Azerbaijan" },
          ]}
        />
        <VisaData
          title="From"
          icon={<FaPlaneArrival size={25} />}
          location={[
            { option: "Malaysia" },
            { option: "United Kingdom" },
            { option: "United Arab Emirates" },
            { option: "Tajikistan" },
            { option: "Thailand" },
            { option: "Azerbaijan" },
          ]}
        />
        <VisaData
          title="Journey date"
          icon={<CiCalendarDate size={25} />}
          location={[]}
          datepick={
            <>
              <div className="flex justify-center items-center gap-2">
                <MdOutlineDateRange size={25} />
                <RangePicker
                  className="w-full text-black h-8 bg-transparent hover:bg-transparent outline-none focus:outline-none"
                  picker="date"
                  id={{
                    start: "startInput",
                    end: "endInput",
                  }}
                 
                />
              </div>
            </>
          }
        />
        <VisaData
          title="Passenger, Class"
          icon={<FaPerson size={25} />}
          location={[]}
          Passenger={
            <>
            <div className="flex justify-center items-center h-8">
                <IoMdPerson  size={25} />
              <Passenger
                userAgent={[
                  { title: "Adult", age: "+18" },
                  { title: "Children", age: "less then 12 years" },
                  { title: "Adult", age: "Less then 2 years" },
                ]}
              />
              </div>
            </>
          }
        />
        <div className="text-center ">
        <Button className=" text-white w-full h-12" title="Search" />
      </div>
      </div>
    </>
  );
};

export default Flights;
