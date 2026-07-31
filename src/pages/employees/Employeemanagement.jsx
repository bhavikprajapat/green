import React from 'react'
import '../../Css/employeemanage.css'
import { FaUsers } from 'react-icons/fa'
import { BsCalendarCheck, BsCalendarX } from 'react-icons/bs'
import { GrLineChart } from "react-icons/gr";
import EmployeeList from './EmployeeList';

const Employeemanagement = () => {
    return (
        <div className='p-5'>
            <div>
                <h3>કર્મચારી સંચાલન</h3>
                <p>આજે, ૨૨ મે ૨૦૨૪ | દૈનિક ગતિવિધિઓ</p>
            </div>
            <div className=''>
                <div className='row g-4 py-5 '>
                    <div className='col-lg-3 '>
                        <div className='employeecard'>
                            <div className='d-flex justify-content-between h-100'>
                                <div>
                                    <h6>કુલ કર્મચારી</h6>
                                    <p>૧૪૨</p>
                                    <p>+૫ આ મહિને</p>
                                </div>
                                <div >
                                    <div className='icon_employee'>
                                        <FaUsers />
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className='col-lg-3 '>
                        <div className='employeecard'>
                            <div className='d-flex justify-content-between h-100'>
                                <div>
                                    <h6>કુલ કર્મચારી</h6>
                                    <p>૧૪૨</p>
                                    <p>+૫ આ મહિને</p>
                                </div>
                                <div >
                                    <div className='icon_employee'>
                                        <BsCalendarCheck />
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className='col-lg-3 '>
                        <div className='employeecard'>
                            <div className='d-flex justify-content-between h-100'>
                                <div>
                                    <h6>કુલ કર્મચારી</h6>
                                    <p>૧૪૨</p>
                                    <p>+૫ આ મહિને</p>
                                </div>
                                <div >
                                    <div className='icon_employee'>
                                        <BsCalendarX />
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className='col-lg-3 '>
                        <div className='employeecard'>
                            <div className='d-flex justify-content-between h-100'>
                                <div>
                                    <h6>કુલ કર્મચારી</h6>
                                    <p>૧૪૨</p>
                                    <p>+૫ આ મહિને</p>
                                </div>
                                <div >
                                    <div className='icon_employee'>
                                        <GrLineChart />
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                

                </div>
            </div>
            <EmployeeList/>

        </div>
    )
}

export default Employeemanagement