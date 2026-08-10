import React from 'react'
import { CgMenuLeftAlt } from 'react-icons/cg'
import { IoMoon } from 'react-icons/io5'
import { PiBell } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { themechange } from '../../store/Reduxslice/themeSlice'
import '../../Css/navbar.css'
import { FaBars } from 'react-icons/fa'


const Navbar = ({ show, handleClose, handleShow }) => {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.dark)
    return (
        <div className='w-100'>
            <div className='w-100 '>
                <div className={theme ? "navbar_set " : "navbar_set_dark "}>
                    <div className='py-md-2 px-md-5 '>
                        <div className='d-flex flex-md-nowrap  flex-wrap  justify-content-between  align-items-center'>
                            <div className={theme ? "d-lg-none bg-transparent h3 px-3  order-0" : "d-lg-none h3 px-3 text-white order-0"} onClick={handleShow}>
                                <CgMenuLeftAlt />
                            </div>
                            <div className='order-md-1 order-2  w-100 ' style={{ maxWidth: '400px' }}>
                                <div className='pos_set d-flex align-items-center rounded-0 pt-1'>
                                    <input type="text" className='form-control fw-bold mx-auto' placeholder=' 🔍  શોધો' />

                                </div>
                            </div>

                            <div className='d-flex gap-4 align-items-center order-md-2 flex-nowrap order-1 '>
                                <div style={{ fontSize: "25px", cursor: "pointer" }} onClick={() => dispatch(themechange(!theme))}>
                                    <IoMoon />
                                </div>
                                <div style={{ fontSize: "25px" }}>
                                    <PiBell />
                                </div>
                                <div className='d-flex align-items-center gap-2 '>
                                    <div className='profile_round'>

                                    </div>
                                    <button
                                        className="btn btn-danger"
                                        // onClick={handleLogout}
                                    >
                                        Logout
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
