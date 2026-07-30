import React from 'react'
import Header from './Header'
import '../../Css/donation.css'
import { MdFoundation } from 'react-icons/md'
import { LuHandshake } from 'react-icons/lu'
import { FaAward, FaSeedling } from 'react-icons/fa'
import Wheredonationgo from './Wheredonationgo'
import Footer from './Footer'
import Donationform from './Donationform'

const Donation = () => {
  return (
    <div>
      <div>
        <Header />
        {/* for landing image */}
        <div
          className="bg_overlay_set2 d-flex flex-column justify-content-center align-items-end"
          data-aos="fade-right"
        >
          <div className="container hero-content">

            <span className="donation-badge">
              Support Green Army
            </span>

            <h1 className="donation-title mt-3">
              Together We Can Build a
              <br />
              <span>Greener Future</span>
            </h1>

            <p className="hero-desc">
              Every donation helps us plant more trees, protect nature,
              <br />
              and create a healthier environment for future generations.
            </p>

            <div className="mt-4">
              <button className="btn donate-btn me-3">
                Donate Now
              </button>


            </div>

          </div>
        </div>
        {/* for cart landing page */}
        <div className=''>
          <div
            className='row container m-auto text-center py-5'
            style={{ fontSize: "50px", fontWeight: "600" }}
          >

            <div
              className='col-lg-3 col-md-6 col-6 '
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <MdFoundation style={{ color: "#009966" }} />
              <h3 className='pt-2'>2018</h3>
              <h5>Established</h5>
            </div>

            <div
              className='col-lg-3 col-md-6 col-6'
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <LuHandshake style={{ color: "#009966" }} />
              <h3 className='pt-2'>300+</h3>
              <h5>Volunteers</h5>
            </div>

            <div
              className='col-lg-3 col-md-6 col-6'
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaSeedling style={{ color: "#009966" }} />
              <h3 className='pt-2'>10,00,000</h3>
              <h5>Plantation</h5>
            </div>

            <div
              className='col-lg-3 col-md-6 col-6'
              data-aos="fade-up"
              data-aos-delay="550"
            >
              <FaAward style={{ color: "#009966" }} />
              <h3 className='pt-2'>10 +</h3>
              <h5>Award Winners</h5>
            </div>

          </div>
          {/* for transprancy sec */}
          <Wheredonationgo />
        </div>
        <Donationform/>
        <Footer/>
      </div>
    </div>
  )
}

export default Donation