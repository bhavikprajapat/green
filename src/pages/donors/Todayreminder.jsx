import React from 'react'
import { MdCelebration } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";

const Todayreminder = () => {
    return (
        <div className="col-lg-4">
            <div className="card border-0 shadow-sm p-4 h-100">

                <h5 className="fw-bold mb-4">
                    <MdCelebration className="text-success me-2 fs-4" />
                    Today's Reminders
                </h5>

              
                <div className="card border-0 shadow-sm mb-3 p-3 reminder-card">
                    <div className="d-flex align-items-center justify-content-between">

                        <div className="d-flex align-items-center">

                            <div className="remider_box me-3">
                                <FaBirthdayCake className="birthicon" />
                            </div>

                            <div>
                                <h6 className="mb-1 fw-bold">
                                    રાકેશભાઈ શાહ
                                </h6>

                                <small className="text-muted">
                                    🎂 જન્મદિવસ - આજે
                                </small>
                            </div>

                        </div>

                        <button className="btn btn-success btn-sm">
                            શુભેચ્છા પાઠવો
                        </button>

                    </div>
                </div>

               
                <div className="card border-0 shadow-sm mb-3 p-3 reminder-card">
                    <div className="d-flex align-items-center justify-content-between">

                        <div className="d-flex align-items-center">

                            <div className="remider_box me-3">
                                <FaBirthdayCake className="birthicon" />
                            </div>

                            <div>
                                <h6 className="mb-1 fw-bold">
                                    મહેશભાઈ પટેલ
                                </h6>

                                <small className="text-muted">
                                    🎂 લગ્ન વર્ષગાંઠ - આજે
                                </small>
                            </div>

                        </div>

                        <button className="btn btn-success btn-sm">
                            શુભેચ્છા પાઠવો
                        </button>

                    </div>
                </div>

              
                <div className="border-top pt-3 mt-2">

                    <h6 className="fw-bold text-secondary">
                        આવતીકાલે
                    </h6>

                    <div className="d-flex align-items-center mt-2">

                        <FaBirthdayCake className="text-success me-2" />

                        <span>
                            વિજયભાઈ ત્રિવેદી (જન્મદિવસ)
                            <small className="text-muted">
                                {" "} 
                            </small>
                        </span>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Todayreminder;