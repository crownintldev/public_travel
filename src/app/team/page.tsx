import HeadPage from '@/components/Common/HeadPage'
import TravelTeam from '@/components/Team/TravelTeam'
import React from 'react'

const Team:React.FC = () => {
  return (
    <>
    <HeadPage
      className='bg-contacthead'
      title='Our Team'
      text='We Are The World Best Travel Agency Company'
      bredcrumb='Team'
    />
    <TravelTeam/>
    </>
  )
}

export default Team