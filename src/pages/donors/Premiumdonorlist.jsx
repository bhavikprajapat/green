import React from 'react'
import '../../Css/donor.css'

const Premiumdonorlist = () => {
    return (
        <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="card premiumset shadow-sm border-0 p-2 h-100">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h5 className=" mb-0">
                        પ્રીમિયમ દાતાઓની સૂચિ (₹1 લાખ+)
                    </h5>
                    <h5 className=' mb-0'>
                        બધા જુઓ..
                    </h5>
                </div>

                <div className="row">

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="donor-card text-center">

                            <div className="donoriconbox_outer mx-auto">
                                <div className="donoriconbox">

                                </div>
                            </div>

                            <h5 className="mt-3 mb-1">
                                રાકેશભાઈ શાહ
                            </h5>

                            <p className="text-muted mb-2">
                                ડાયમંડ એક્સપોર્ટર્સ
                            </p>

                            <span className="donation-amount">
                                ₹ 5,00,000
                            </span>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="donor-card text-center">

                            <div className="donoriconbox_outer mx-auto">
                                <div className="donoriconbox">

                                </div>
                            </div>

                            <h5 className="mt-3 mb-1 ">
                                મહેશભાઈ પટેલ
                            </h5>

                            <p className="text-muted mb-2">
                                પટેલ ઇન્ડસ્ટ્રીઝ
                            </p>

                            <span className="donation-amount">
                                ₹ 2,50,000
                            </span>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="donor-card text-center">

                            <div className="donoriconbox_outer mx-auto">
                                <div className="donoriconbox">

                                </div>
                            </div>

                            <h5 className="mt-3 mb-1 ">
                                અમિતભાઈ દેસાઈ
                            </h5>

                            <p className="text-muted mb-2">
                                ગ્રીન ફાઉન્ડેશન
                            </p>

                            <span className="donation-amount">
                                ₹ 1,25,000
                            </span>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Premiumdonorlist