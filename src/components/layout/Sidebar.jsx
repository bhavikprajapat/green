import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../Css/sidebar.css";

import logo from "../../assets/logo/logo original.jpg";

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
} from "react-icons/fa";

import Offcanvas from "react-bootstrap/Offcanvas";

const Sidebar = ({ show, handleClose, handleShow }) => {
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        className={`text-nowrap sidebar-offcanvas ${
          dark ? "offcanvas-light" : "offcanvas-dark"
        }`}
      >
        {/* Mobile Header */}
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3 className="mobile-logo-wrapper">
              <img
                src={logo}
                alt="logo"
                className="mobile-logo"
              />
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="p-0">
          <div
            className={
              dark
                ? "sidebar d-lg-flex d-md-flex flex-column justify-content-between"
                : "sidebar_dark d-flex flex-column justify-content-between"
            }
          >
            <div className="menu">

              {/* Desktop Logo */}
              <h3 className="sidebar-logo-wrapper pb-1 d-none d-lg-block">
                <img
                  src={logo}
                  alt="logo"
                  className="logo"
                />
              </h3>

              {/* Dashboard */}
              <NavLink
               end
                className={
                  dark
                    ? "Navlink_set"
                    : "Navlink_set_dark"
                }
                to="/dashboard"
                onClick={handleClose}
              >
                <FaHome />
                <span>ડેશબોર્ડ</span>
              </NavLink>

              {/* Team */}
              <NavLink
                className={
                  dark
                    ? "Navlink_set"
                    : "Navlink_set_dark"
                }
                to="/dashboard/team"
                onClick={handleClose}
              >
                <FaUsers />
                <span>ટીમ મેનેજમેન્ટ</span>
              </NavLink>

              {/* Daily Work */}
              <NavLink
                className={
                  dark
                    ? "Navlink_set"
                    : "Navlink_set_dark"
                }
                to="/dashboard/dailywork"
                onClick={handleClose}
              >
                <FaClipboardList />
                <span>દૈનિક કામગીરી</span>
              </NavLink>

              {/* Employee */}
              <NavLink
                className={
                  dark
                    ? "Navlink_set"
                    : "Navlink_set_dark"
                }
                to="/dashboard/employee"
                onClick={handleClose}
              >
                <FaUserTie />
                <span>કર્મચારી</span>
              </NavLink>

              {/* Water Management */}
              <NavLink
                className={
                  dark
                    ? "Navlink_set"
                    : "Navlink_set_dark"
                }
                to="/dashboard/water-management"
                onClick={handleClose}
              >
                <FaTint />
                <span>પાણી પાવાની વ્યવસ્થા</span>
              </NavLink>

              {/* Donor */}
              <NavLink
                className={
                  dark
                    ? "Navlink_set"
                    : "Navlink_set_dark"
                }
                to="/dashboard/donor"
                onClick={handleClose}
              >
                <FaHandHoldingHeart />
                <span>દાતા મેનેજમેન્ટ</span>
              </NavLink>

              {/* Plantation */}
              <NavLink
                className={
                  dark
                    ? "Navlink_set"
                    : "Navlink_set_dark"
                }
                to="/dashboard/plantation"
                onClick={handleClose}
              >
                <FaTree />
                <span>વૃક્ષારોપણ</span>
              </NavLink>

              {/* Nursery */}
              <NavLink
                className={
                  dark
                    ? "Navlink_set"
                    : "Navlink_set_dark"
                }
                to="/dashboard/nursury"
                onClick={handleClose}
              >
                <FaSeedling />
                <span>નર્સરી સ્ટોક</span>
              </NavLink>

              {/* Reports */}
              <NavLink
                className={
                  dark
                    ? "Navlink_set"
                    : "Navlink_set_dark"
                }
                to="/dashboard/reports"
                onClick={handleClose}
              >
                <FaChartBar />
                <span>રિપોર્ટ્સ</span>
              </NavLink>

              {/* Profile */}
              <NavLink
                className={
                  dark
                    ? "Navlink_set"
                    : "Navlink_set_dark"
                }
                to="/dashboard/profile"
                onClick={handleClose}
              >
                <FaUserCircle />
                <span>પ્રોફાઇલ</span>
              </NavLink>

            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;