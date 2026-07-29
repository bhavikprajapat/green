import React from 'react'
import { FiCheckCircle } from "react-icons/fi";
import '../../Css/volunteerbenefit.css'


const Volunteerbenefit = () => {
    const benefits = [
  "સમાજ અને પર્યાવરણ માટે સીધું યોગદાન આપવાની તક",
  "નવી કુશળતાઓ અને અનુભવ મેળવવાની તક",
  "પર્યાવરણપ્રેમી લોકો સાથે જોડાવાની તક",
  "ગ્રીન આર્મી તરફથી પ્રશંસાપત્ર (Certificate)",
  "વૃક્ષારોપણ અને સામાજિક કાર્યક્રમોમાં ભાગ લેવાની તક",
  "નેતૃત્વ અને ટીમવર્ક કૌશલ્યનો વિકાસ",
];

  return (
    <div>  <section className="benefits-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="benefit-badge">
            🌿 ગ્રીન આર્મી
          </span>

          <h2 className="benefit-title mt-3">
            સ્વયંસેવક બનવાના લાભો
          </h2>

          <p className="benefit-subtitle">
            ગ્રીન આર્મી સાથે જોડાઈને માત્ર સેવા જ નહીં,
            પરંતુ જીવનમાં નવા અનુભવ અને આત્મસંતોષ પણ મેળવો.
          </p>
        </div>

        <div className="row g-4">

          {benefits.map((item, index) => (

            <div className="col-lg-4 col-md-6" key={index} data-aos="zoom-in" >

              <div className="benefit-card">

                <div className="d-flex align-items-start">

                  <div className="benefit-icon">
                    <FiCheckCircle />
                  </div>

                  <p className="mb-0">
                    {item}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section></div>
  )
}

export default Volunteerbenefit