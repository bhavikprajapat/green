import React from 'react'

const Header = () => {
  return (
    <div className='landing_bg shadow'>
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center px-5'>
             <div className='py-3  ' >
           <h3 >Landing Page</h3>
            </div>
            <div className='d-flex'>
            <ul className='d-flex align-items-center m-0'>
                <li className='px-4'>Home</li>
                <li className='px-4'>About</li>
                <li className='px-4'>Events</li>
                <li className='px-4'>Activities</li>
                <li className='px-4'>Contact</li>
                 <button className='m-2 btn_set'>
                Donate
            </button>
            <button className='m-2 btn_set'>
                Valunteer
            </button>
            <li className='px-4'>Admin</li>
            </ul>
           
            </div>
            </div>
           
        </div>
        </div>
  )
}

export default Header