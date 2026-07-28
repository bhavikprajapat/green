import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../../Css/aboutpage.css'
import banner from '../../assets/images/bannerabout.png'

const About = () => {
    return (
        <div>
            <Header />
            <div
                className="about-banner"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,90,50,.75), rgba(0,90,50,.75)), url(${banner})`,
                }}
            >
                <div className="container h-100">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 text-center text-white">

                        <h1 className="display-3 fw-bold">
                            ગ્રીન આર્મી ફાઉન્ડેશન વિશે
                        </h1>

                        <p className="fs-5 mt-3">
                            આપણે સાથે મળીને પરિવર્તન લાવી શકીએ છીએ! ચાલો, ભારતને હરિત બનાવીએ.
                        </p>

                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>

                </div>
                <div className='col-6'>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About