import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)};
  return (
    <div>
      <div className='d-flex layout'>
        <Sidebar show={show} handleClose={ handleClose} handleShow={handleShow} className='' />
        <div className='w-100 '>
          <Navbar show={show} handleClose={handleClose} handleShow={handleShow} className='' />
         <main>
        <Outlet />
      </main>
        </div>
      
      </div>
     
    </div>
  )
}

export default Layout
