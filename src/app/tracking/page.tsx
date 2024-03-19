//@ts-nocheck
"use client"
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Alert } from 'antd';
import Button from '@/components/Common/Button';
import HeadPage from '@/components/Common/HeadPage';

const Tracking = () => {
  const [referenceId, setReferenceId] = useState('');
  const [PassportId, setPassportId] = useState('');
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSearch = () => {
    if (referenceId.trim() === '' && PassportId.trim() === '') {
      setAlertType('warning');
      setAlertMessage('Both Reference ID and Passport ID are empty!');
    } else if (referenceId.trim() === '') {
      setAlertType('warning');
      setAlertMessage('Reference ID is empty!');
    } else if (PassportId.trim() === '') {
      setAlertType('warning');
      setAlertMessage('Passport ID is empty!');
    } else {
      // Perform search functionality here
      setAlertType('info'); // Change to 'info' or 'warning' as per your requirement
      setAlertMessage('Performing search...');
      console.log('Performing search...');
    }
  };

  return (
    <>
      <HeadPage
        className='bg-abouthead'
        title='Tracking'
        text='We Are The World Best Travel Agency Company'
        bredcrumb='Tracking'
      />

      <div className="flex justify-center items-center px-4 md:px-20 mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row items-center p-6 space-y-6 md:space-y-0 md:space-x-6 bg-white rounded-xl shadow ">
          <div className="flex bg-gray-100 p-4 md:w-72 space-x-4 rounded-lg">
            <IoSearch size={25} className='h-6 w-6 opacity-30' />
            <input
              className="bg-gray-100 outline-none flex-grow"
              type="text"
              placeholder="Enter Reference ID"
              value={referenceId}
              onChange={(e) => setReferenceId(e.target.value)}
            />
          </div>
          <div className="flex bg-gray-100 p-4 md:w-72 space-x-4 rounded-lg">
            <IoSearch size={25} className='h-6 w-6 opacity-30' />
            <input
              className="bg-gray-100 outline-none flex-grow"
              type="text"
              placeholder="Enter Passport ID"
              value={PassportId}
              onChange={(e) => setPassportId(e.target.value)}
            />
          </div>
          <Button
            title="Search"
            className="bg-primary-orange-300 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>

      {alertMessage && (
        <div className=' w-full md:w-96 mx-auto p-4 flex justify-center'>
          <Alert
            className="mt-2"
            message={alertMessage}
            type={`${alertType}`}
            showIcon
          />
        </div>
      )}

      {alertType === 'info' && (
        <div className='border-2 hover:border-primary-orange-200 rounded-md p-2 container h-20 mt-10'>
          <p>Record not found</p>
        </div>
      )}
    </>
  )
}

export default Tracking;
