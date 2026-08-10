import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../../Css/sidebar.css'
import logo from "../../assets/logo/logo original.jpg"
import {
  FaHome,
  FaUsers,
  FaClipboardList,
  FaUserTie,
  FaTint,
  FaHandHoldingHeart,
  FaTree,
  FaSeedling,
  FaChartBar,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';
const Sidebar = ({ show, handleClose, handleShow }) => {
  const dark = useSelector((state) => state.theme.dark);
  return (
    <div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        className="text-nowrap"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h3 className='pb-1' ><img src={logo} alt="" className='w-25' /></h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='p-0'>
          <div className={dark ? 'sidebar d-lg-flex d-md-flex  flex-column  justify-content-between ' : 'sidebar_dark d-flex flex-column  justify-content-between '}>
            <div className='menu '>
              <h3 className='pb-1 d-none d-lg-block'> <img
                src={logo}
                alt="logo"
                className="logo"
              /></h3>
              <NavLink
                className={dark ? 'Navlink_set' : 'Navlink_set_dark'}
                to="/dashboard"
                onClick={handleClose}
              >
                <FaHome /> ડેશબોર્ડ
              </NavLink>

              <NavLink
                className={dark ? 'Navlink_set' : 'Navlink_set_dark'}
                to="/dashboard/team"
                onClick={handleClose}
              >
                <FaUsers /> ટીમ મેનેજમેન્ટ
              </NavLink>

              <NavLink
                className={dark ? 'Navlink_set' : 'Navlink_set_dark'}
                to="/dashboard/dailywork"
                onClick={handleClose}
              >
                <FaClipboardList /> દૈનિક કામગીરી
              </NavLink>

              <NavLink
                className={dark ? 'Navlink_set' : 'Navlink_set_dark'}
                to="/dashboard/employee"
                onClick={handleClose}
              >
                <FaUserTie /> કર્મચારી
              </NavLink>

              <NavLink
                className={dark ? 'Navlink_set' : 'Navlink_set_dark'}
                to="/dashboard/water-management"
                onClick={handleClose}
              >
                <FaTint /> પાણી પાવાની વ્યવસ્થા
              </NavLink>

              <NavLink
                className={dark ? 'Navlink_set' : 'Navlink_set_dark'}
                to="/dashboard/donor"
                onClick={handleClose}
              >
                <FaHandHoldingHeart /> દાતા મેનેજમેન્ટ
              </NavLink>

              <NavLink
                className={dark ? 'Navlink_set' : 'Navlink_set_dark'}
                to="/dashboard/plantation"
                onClick={handleClose}
              >
                <FaTree /> વૃક્ષારોપણ
              </NavLink>

              <NavLink
                className={dark ? 'Navlink_set' : 'Navlink_set_dark'}
                to="/dashboard/nursury"
                onClick={handleClose}
              >
                <FaSeedling /> નર્સરી સ્ટોક
              </NavLink>

              <NavLink
                className={dark ? 'Navlink_set' : 'Navlink_set_dark'}
                to="/dashboard/reports"
                onClick={handleClose}
              >
                <FaChartBar /> રિપોર્ટ્સ
              </NavLink>

              <NavLink
                className={dark ? 'Navlink_set' : 'Navlink_set_dark'}
                to="/dashboard/profile"
                onClick={handleClose}
              >
                <FaUserCircle /> પ્રોફાઇલ
              </NavLink>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Sidebar
