"use client"
import Tab from "@/components/Tabs";
import React, { useState } from "react";
import Flights from "../Flights";


const Booking = () => {
  
  return (
    <>
      <div className="container w-full shadow z-10  rounded-lg p-2 sm:p-4 md:p-6 space-y-4">
      <Tab 
        tabsData = {[
          {
            key: '1',
            title: 'Flights',
            content: <Flights/>,
          },
          {
            key: '2',
            title: 'Tours',
            content: <Flights/>,
          },
        
        ]}
      />
      </div>
    </>
  );
};

export default Booking;
