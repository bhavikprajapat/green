import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import '../../Css/layout.css'


const Layout = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className="app-layout">

            <Sidebar
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />

            <Navbar
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
            />

            <main className="main-content">
                <Outlet />
            </main>

        </div>
    )
}

export default Layout