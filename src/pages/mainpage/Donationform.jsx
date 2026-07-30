import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";

const Donationform = () => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const phoneRegex = /^[6-9]\d{9}$/;

    const formik = useFormik({
        initialValues: {
            name: "",
            contact: "",
            email: "",
            city: "",
            amount: "",
            purpose: "",
            message: "",
            terms: "",

        },
        validationSchema: Yup.object({
            name: Yup.string()
                .matches(/^[A-Za-z\s]+$/, "Only letters are allowed")
                .min(2, "Minimum 2 characters required")
                .max(50, "Maximum 50 characters allowed")
                .required("Full Name is required"),

            contact: Yup.string()
                .matches(phoneRegex, "Enter a valid 10-digit mobile number")
                .required("Mobile Number is required"),

            email: Yup.string()
                .matches(emailRegex, "Enter a valid email address")
                .required("Email is required"),

            city: Yup.string()
                .min(2, "City name is too short")
                .required("City is required"),

            amount: Yup.number()
                .typeError("Enter a valid donation amount")
                .positive("Amount must be greater than zero")
                .required("Donation amount is required"),

            purpose: Yup.string()
                .required("Please select a donation purpose"),

            message: Yup.string()
                .max(300, "Maximum 300 characters allowed"),

            terms: Yup.boolean()
                .oneOf([true], "Please accept the declaration")


        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    const { handleBlur, handleSubmit, handleChange, values, errors, touched } = formik


    return (
        <div>
            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="donation-card">

                            <div className="text-center mb-5">

                                <span className="donation-badge">
                                    Green Army
                                </span>

                                <h2 className="mt-3 fw-bold">
                                    Donation Form
                                </h2>

                                <p className="text-muted">
                                    Even your small contribution can make a big difference for a greener future.
                                </p>

                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="row">


                                    <div className="col-md-6 mb-4">
                                        <label>Full Name</label>
                                        <input
                                            name='name'
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your full name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.name}
                                        />
                                        {
                                            touched.name && errors.name ?
                                                <div className='text-danger mt-1'>{errors.name}</div> : null
                                        }
                                    </div>


                                    <div className="col-md-6 mb-4">
                                        <label>Mobile Number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="9876543210"
                                            name='contact'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.contact}
                                        />
                                        {
                                            touched.contact && errors.contact ?
                                                <div className='text-danger mt-1'>{errors.contact}</div> : null
                                        }
                                    </div>


                                    <div className="col-md-6 mb-4">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="example@gmail.com"
                                            name='email'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.email}
                                        />
                                        {
                                            touched.email && errors.email ?
                                                <div className='text-danger mt-1'>{errors.email}</div> : null
                                        }
                                    </div>


                                    <div className="col-md-6 mb-4">
                                        <label>City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your city"
                                            name='city'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.city}
                                        />
                                        {
                                            touched.city && errors.city ?
                                                <div className='text-danger mt-1'>{errors.city}</div> : null
                                        }
                                    </div>


                                    {/* <div className="col-12 mb-4">

                                        <label></label>

                                        <div className="amount-buttons d-flex flex-wrap gap-3 mt-2">

                                            <button type="button" className="btn btn-outline-success">
                                                ₹101
                                            </button>

                                            <button type="button" className="btn btn-outline-success">
                                                ₹501
                                            </button>

                                            <button type="button" className="btn btn-outline-success">
                                                ₹1001
                                            </button>

                                            <button type="button" className="btn btn-outline-success">
                                                ₹5001
                                            </button>

                                        </div>

                                    </div> */}


                                    <div className="col-12 mb-4">

                                        <label>Select Donation Amount</label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Amount (₹)"
                                            name='amount'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.amount}
                                        />
                                        {
                                            touched.amount && errors.amount ?
                                                <div className='text-danger mt-1'>{errors.amount}</div> : null
                                        }
                                    </div>

                                    <div className="col-12 mb-4">

                                        <label>Purpose of Donation</label>

                                        <select className="form-select" onBlur={handleBlur} name='purpose' onChange={handleChange} value={values.purpose}>

                                            <option value="">Select Purpose</option>
                                            <option value="Tree Plantation">Tree Plantation</option>
                                            <option value="Environmental Awareness">Environmental Awareness</option>
                                            <option value="Community Service">Community Service</option>
                                            <option value="Educational Activities">Educational Activities</option>
                                            <option value="General Donation">General Donation</option>
                                        </select>
                                          {
                                            touched.purpose && errors.purpose ?
                                            <div className='text-danger mt-1'>{errors.purpose}</div> : null
                                        }
                                    </div>

                                    <div className="col-12 mb-4">

                                        <div className="form-check">

                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="agree"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.terms}
                                            />


                                            <label className="form-check-label" htmlFor="agree">
                                                I confirm that the information provided is accurate.
                                            </label>

                                        </div>

                                    </div>


                                    <div className="text-center">

                                        <button className="btn donate-submit" type='submit'>

                                            Donate Now

                                        </button>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Donationform