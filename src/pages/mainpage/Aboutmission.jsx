import React from 'react'
import mission from '../../assets/images/mission.png'

const Aboutmission = () => {
    return (
        <div >
            <div style={{ background: "#F9FAFB" }} className='mb-5' >
                <div className='container d-flex align-items-center py-4'>
                    <div className='col-6 px-5'>
                        <h1 style={{fontSize:"40px",fontWeight:"800"}}>About Our Mission</h1>
                        <p className='fw-bold'>Hope Foundation is dedicated to empowering communities through sustainable development initiatives, educational programs, and humanitarian support. Since our founding, we've been committed to creating lasting positive change.

                            Our team of dedicated volunteers and partners work tirelessly to address critical needs in education, healthcare, environmental sustainability, and social welfare.</p>

                    </div>
                    <div className='col-6 p-3'>
                    <img src={mission} className='w-75 rounded' alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutmission