import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../../Css/volunteer.css'


import {
    FiCalendar,
    FiUsers,
    FiClock,
    FiMapPin,
} from "react-icons/fi";
import Volunteerform from './Volunteerform';
import Volunteerbenefit from './Volunteerbenefit';

const Volunteer = () => {
    const volunteerData = [
        {
            icon: <FiCalendar />,
            title: "વૃક્ષારોપણ અભિયાન",
            desc: "દર અઠવાડિયે વિવિધ વિસ્તારોમાં વૃક્ષારોપણ અભિયાનમાં જોડાઈ હરિયાળું ભારત બનાવવામાં સહભાગી બનો.",

        },
        {
            icon: <FiUsers />,
            title: "પર્યાવરણ જાગૃતિ",
            desc: "શાળાઓ, કોલેજો અને સમાજમાં પર્યાવરણ જાગૃતિ કાર્યક્રમો દ્વારા લોકોમાં વૃક્ષોના મહત્વનો સંદેશ પહોંચાડો.",

        },
        {
            icon: <FiClock />,
            title: "કાર્યક્રમ વ્યવસ્થાપન",
            desc: "ગ્રીન આર્મીના વિવિધ કાર્યક્રમો, ઇવેન્ટ્સ અને અભિયાનના આયોજનમાં સ્વયંસેવક તરીકે સહયોગ આપો.",

        },
        {
            icon: <FiMapPin />,
            title: "સ્થાનિક સેવા",
            desc: "તમારા વિસ્તારના હરિયાળા અભિયાનમાં જોડાઓ અને વધુ લોકોને ગ્રીન આર્મી સાથે જોડાવા પ્રેરિત કરો.",

        },
    ];
    return (
        <div >
            <Header />
            <div>
                <div className='bg_overlay_set1    text-white' id='main' data-aos="zoom-in">
                    <div className="container h-100">
                        <div className="d-flex flex-column justify-content-center align-items-center h-100 text-center text-white">
                            <h1 className="display-3 fw-bold">
                                સ્વયંસેવક બનો
                            </h1>
                            <p className="fs-5 mt-3">
                                વાસ્તવિક પરિવર્તન લાવનારા સમર્પિત સ્વયંસેવકોના અમારા સમુદાયમાં જોડાઓ.
                            </p>

                        </div>

                    </div>

                </div>
                <section className="volunteer-section py-5">

                    <div className="container">

                        <div className="text-center mb-5">

                            <span className="section-badge">
                                🌿 ગ્રીન આર્મી
                            </span>

                            <h2 className="section-title mt-3">
                                સ્વયંસેવક તરીકે જોડાવાની તક
                            </h2>

                            <p className="section-subtitle">
                                તમારા સમય અને સેવાભાવ દ્વારા હરિયાળું ભારત બનાવવાના
                                અભિયાનમાં આજે જ જોડાઓ.
                            </p>

                        </div>

                        <div className="row g-4">

                            {volunteerData.map((item, index) => (

                                <div className="col-lg-3 col-md-6" key={index} data-aos="flip-up">

                                    <div className="volunteer-card h-100">

                                        <div className="icon-box">
                                            {item.icon}
                                        </div>

                                        <h4>{item.title}</h4>

                                        <p>{item.desc}</p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>
            </div>
            <Volunteerform />
            <Volunteerbenefit/>
            <Footer />
        </div>
    )
}

export default Volunteer