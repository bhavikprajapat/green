import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo original.jpg'
import { useTranslation } from "react-i18next";
import LanguageSwitcher from '../../LanguageSwitcher';



const Header = () => {
  const { t , i18n } = useTranslation();
  return (
    <div className='landing_bg shadow position-sticky top-0 left-0 z-3'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='py-3  ' >
           <img src={logo} alt="" className='logo-set'/>
          </div>
          <div className='d-flex'>
            <ul className='d-lg-flex d-md-flex d-sm-none d-none gap-lg-4 gap-md-3 align-items-center m-0'>
              <li > <a href="#main">{t("home")}</a>  </li>
              <li ><a href="#about">{t("about")}</a></li>
              <li  > <a href="#upcoming">{t("event")}</a></li>
              <li ><a href="#activity">{t("activities")}</a></li>
              <li ><a href="#contact">{t("contact")}</a></li>
              <li ><NavLink className="Navlink_set1" to="/login"> {t("admin")} </NavLink></li>
              <button className=' btn_set btnanimation'>
               <NavLink to="/donation" style={{color:"white"}}>{t("donate")}</NavLink> 
              </button>
              <button className=' btn_set '>
               <NavLink to="/Volunteer" style={{color:"white"}}>{t("volunteer")}</NavLink> 
              </button>
              <LanguageSwitcher />
            </ul>
            <div className='d-lg-none d-md-none '>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FiMenu />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item ><li > <a href="#main">મુખ્યપૃષ્ઠ</a>  </li></Dropdown.Item>
                  <Dropdown.Item ><li ><a href="#about">વિશે</a></li></Dropdown.Item>
                  <Dropdown.Item ><a href="#upcoming">કાર્યક્રમ</a></Dropdown.Item>
                  <Dropdown.Item ><a href="#activity">પ્રવૃત્તિઓ</a></Dropdown.Item>
                  <Dropdown.Item ><a href="#contact">સંપર્ક</a></Dropdown.Item>
                  <div>
                  <button className=' btn_set w-100  mb-2'>
                  <NavLink to="/donation" style={{color:"white"}}>દાન</NavLink> 
                  </button>
                  <button className=' btn_set w-100'>
                   <NavLink to="/Volunteer" style={{color:"white"}}>સ્વયંસેવક</NavLink> 
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