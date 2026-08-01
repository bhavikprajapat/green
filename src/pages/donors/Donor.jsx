import React from 'react'
import Premiumdonorlist from './Premiumdonorlist'
import Todayreminder from './Todayreminder'
import DonationReport from './DonationReport'

const Donor = () => {
  return (
    <div className=' row p-4'>
        <Premiumdonorlist/>
        <Todayreminder/>
        <DonationReport/>
    </div>
  )
}

export default Donor