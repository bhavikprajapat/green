import React from 'react'
import { FiCalendar, FiClock, FiMapPin, FiUsers } from 'react-icons/fi';

const Wheredonationgo = () => {
     const Wheredonation = [
            {
                icon: <FiCalendar />,
                title: "Tree Plantation",
                desc: "Financing the saplings and the labor required for large-scale reforestation.",
    
            },
            {
                icon: <FiUsers />,
                title: "Tree Care",
                desc: "Post-planting maintenance, including irrigation and organic fertilizing.",
    
            },
            {
                icon: <FiClock />,
                title: "Awareness",
                desc: "Conducting educational workshops for schools and rural communities.",
    
            },
            {
                icon: <FiMapPin />,
                title: "Development",
                desc: "Empowering local communities with sustainable livelihood programs.",
    
            },
        ];
    return (
        <div style={{ background: "#F7FAF7" }}>
            {/* <div className='container py-5'>
                <div className='text-center py-5'>
                    <h3 className='fw-bold'>Where Your Donation Goes</h3>
                </div>

                <div className='row'>
                    <div className='col-lg-3 '>
                        <div className='wheredonatecard'>
                            <div className='smallbox'></div>
                        <h6>Tree Plantation</h6>
                        <p>Financing the saplings and the labor require for large-scale reforestation </p>
                        </div>
                    </div>
                    <div className='col-lg-3 '>
                        <h6>Tree Plantation</h6>
                        <p>Financing the saplings and the labor require for large-scale reforestation </p>
                    </div>
                    <div className='col-lg-3 '>
                        <h6>Tree Plantation</h6>
                        <p>Financing the saplings and the labor require for large-scale reforestation </p>
                    </div>
                    <div className='col-lg-3 '>
                        <h6>Tree Plantation</h6>
                        <p>Financing the saplings and the labor require for large-scale reforestation </p>
                    </div>
                </div>
            </div> */}
             <div>
                <section className="volunteer-section py-5">

                    <div className="container">

                        <div className="text-center mb-5">

                            <span className="section-badge">
                                🌿 Green Army
                            </span>

                            <h2 className="section-title mt-3">
                                Where Your Donation Goes
                            </h2>

                            

                        </div>

                        <div className="row g-4">

                            {Wheredonation.map((item, index) => (

                                <div className="col-lg-3 col-md-6" key={index} data-aos="flip-up">

                                    <div className="wheredonatecard h-100">

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

        </div>
    )
}

export default Wheredonationgo