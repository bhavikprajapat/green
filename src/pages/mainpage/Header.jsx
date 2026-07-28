import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo original.jpg'

const Header = () => {
  return (
    <div className='landing_bg shadow position-sticky top-0 left-0 z-3'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='py-3  ' >
           <img src={logo} alt="" className='logo-set'/>
          </div>
          <div className='d-flex'>
            <ul className='d-lg-flex d-md-flex d-sm-none d-none gap-lg-4 gap-md-3 align-items-center m-0'>
              <li ><NavLink className="Navlink_set1" to="/home"> મુખ્યપૃષ્ઠ </NavLink></li>
              <li ><NavLink className="Navlink_set1" to="/about"> વિશે </NavLink></li>
              <li >કાર્યક્રમ</li>
              <li >પ્રવૃત્તિઓ</li>
              <li >સંપર્ક</li>
              <button className=' btn_set'>
                દાન
              </button>
              <button className=' btn_set'>
                સ્વયંસેવક
              </button>
              <li ><NavLink className="Navlink_set1" to="/login"> વહીવટકર્તા </NavLink></li>
            </ul>
            <div className='d-lg-none d-md-none '>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FiMenu />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item >મુખ્યપૃષ્ઠ</Dropdown.Item>
                  <Dropdown.Item ><NavLink className="Navlink_set1" to="/about"> વિશે </NavLink></Dropdown.Item>
                  <Dropdown.Item >કાર્યક્રમ</Dropdown.Item>
                  <Dropdown.Item >વિશે</Dropdown.Item>
                  <Dropdown.Item >કાર્યક્રમ</Dropdown.Item>
                  <div>
                  <button className=' btn_set w-100  mb-2'>
                    દાન
                  </button>
                  <button className=' btn_set w-100'>
                    સ્વયંસેવક
                  </button>
                  </div>
                  
                  <Dropdown.Item ><NavLink className="Navlink_set1" to="/login"> વહીવટકર્તા </NavLink></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Header