import React, { useState } from 'react'
import '../../Css/dailywork.css'

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTree,
  FaUsers,
  FaCloudUploadAlt,
} from "react-icons/fa";


const Dailywork = () => {

   const [formData, setFormData] = useState({
    date: "",
    location: "",
    description: "",
    volunteers: "",
    trees: "",
    donation: "",
    image: null,
  });
  
    const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

    

  return (
    <div>
       <div className=" activity-page p-4">

      <div className="row">

        {/* Left Side */}

        <div className="col-lg-8">

          <div className="activity-card">

            <div className="activity-header">

              <div>

                <h3>દૈનિક કામગીરી નેટવર્ક</h3>

                <p>આજની પ્રવૃત્તિની વિગત અહીં દાખલ કરો</p>

              </div>

              <div className="leaf-icon">
                🌿
              </div>

            </div>

            {/* Date & Place */}

            <div className="row mt-3">

              <div className="col-md-6 mb-3">

                <label>તારીખ</label>

                <div className="input-icon">

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />

                  <FaCalendarAlt />

                </div>

              </div>

              <div className="col-md-6 mb-3">

                <label>સ્થળ</label>

                <div className="input-icon">

                  <input
                    type="text"
                    name="location"
                    placeholder="વિસ્તારનું નામ"
                    value={formData.location}
                    onChange={handleChange}
                  />

                  <FaMapMarkerAlt />

                </div>

              </div>

            </div>

            {/* Map */}

            <div className="mb-4">

              <label>નકશો / લોકેશન</label>

              <div className="map-box">

                <img
                  src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
                  alt=""
                />

                <button className="location-btn">

                  <FaMapMarkerAlt />

                  વર્તમાન લોકેશન મેળવો

                </button>

              </div>

            </div>

            {/* Description */}

            <div className="mb-4">

              <label>કાર્યનું વર્ણન</label>

              <textarea
                rows="5"
                name="description"
                placeholder="આજના કાર્યની વિગતવાર માહિતી..."
                value={formData.description}
                onChange={handleChange}
              />

            </div>

            {/* Volunteers & Trees */}

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>હાજર સ્વયંસેવકો</label>

                <div className="input-icon">

                  <input
                    type="number"
                    name="volunteers"
                    value={formData.volunteers}
                    onChange={handleChange}
                  />

                  <FaUsers />

                </div>

              </div>

              <div className="col-md-6 mb-3">

                <label>વાવેલ વૃક્ષો</label>

                <div className="input-icon">

                  <input
                    type="number"
                    name="trees"
                    value={formData.trees}
                    onChange={handleChange}
                  />

                  <FaTree />

                </div>

              </div>

            </div>

            {/* Donation */}

            <div className="mb-4">

              <label>દાન (જો કોઈ હોય)</label>

              <select
                name="donation"
                value={formData.donation}
                onChange={handleChange}
              >

                <option value="">દાન પસંદ કરો</option>

                <option>₹100</option>

                <option>₹500</option>

                <option>₹1000</option>

              </select>

            </div>

            {/* Upload */}

            <div className="mb-4  ">
             

              <label>ફોટો અપલોડ</label>

              <label className="upload-box d-flex">

                <input
                  type="file"
                  hidden
                  onChange={handleChange}
                />

                <FaCloudUploadAlt className="upload-icon" />

                <h5>ક્લિક કરો અથવા ફોટો અહીં મૂકો</h5>

                <p>PNG, JPG (મહત્તમ 4 MB)</p>

              </label>

            </div>

            {/* Buttons */}

            <div className="btn-group-custom">

              <button className="save-btn">

                સાચવો

              </button>

              <button className="cancel-btn">

                રદ કરો

              </button>

            </div>

          </div>

        </div>

        {/* Right Side Timeline */}

        <div className="col-lg-4">

         {/* Right Side Timeline */}

<div className="col-lg-4 w-100 mt-4 mt-lg-0">

  <div className="timeline-card">

    <div className="timeline-header">

      <h5>🕒 તાજેતરની પ્રવૃત્તિઓ</h5>

    </div>

    {/* Activity 1 */}

    <div className="timeline-item">

      <div className="timeline-dot active"></div>

      <div className="timeline-content">

        <small className="time">

          આજે • 10:30 AM

        </small>

        <span className="status-badge">

          સફળ

        </span>

        <h6>

          ૧૦૦ વૃક્ષો વાવ્યા

        </h6>

        <p>

          📍 રિંગ રોડ, સુરત

        </p>

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600"
          alt=""
        />

      </div>

    </div>

    {/* Activity 2 */}

    <div className="timeline-item">

      <div className="timeline-dot active"></div>

      <div className="timeline-content">

        <small className="time">

          ગઈકાલે • 04:15 PM

        </small>

        <h6>

          જનજાગૃતિ સફાઈ અભિયાન

        </h6>

        <p>

          📍 તાપી નદી કિનારો

        </p>

        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600"
          alt=""
        />

      </div>

    </div>

    {/* Activity 3 */}

    <div className="timeline-item">

      <div className="timeline-dot"></div>

      <div className="timeline-content">

        <small className="time">

          ૨૫ મે • 09:00 AM

        </small>

        <h6>

          ૫૦૦ નવા સભ્યો જોડાયા

        </h6>

        <p>

          📍 કૃષિ મંદિર, કતારગામ

        </p>

      </div>

    </div>

    {/* View All */}

    <button className="view-all-btn">

      બધી પ્રવૃત્તિઓ જુઓ →

    </button>

  </div>

</div>

        </div>

      </div>

    </div>
    </div>
  )
}

export default Dailywork
