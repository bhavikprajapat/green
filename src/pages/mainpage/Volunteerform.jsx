import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Volunteerform = () => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegExp = /^\d{10}$/;

    const formik = useFormik({
        initialValues: {
            name: "",
            contact: "",
            email: "",
            age: "",
            address: "",
            city: "",
            business: "",
            activity: "",
            about: "",
            Terms: false,
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .matches(/^[\p{L}\s]+$/u, "માત્ર અક્ષરો")
                .min(2, "ઓછામાં ઓછા 2 અક્ષર")
                .max(50, "વધુમાં વધુ 50 અક્ષર")
                .required("કૃપા કરીને તમારું પૂર્ણ નામ દાખલ કરો."),

            email: Yup.string().email()
                .matches(emailRegex, 'કૃપા કરીને સાચું ઇમેઇલ સરનામું દાખલ કરો')
                .required('કૃપા કરીને ઇમેઇલ દાખલ કરો'),

            contact: Yup.string()
                .matches(phoneRegExp, "મોબાઇલ નંબર 10 અંકનો હોવો જોઈએ.")
                .required("કૃપા કરીને મોબાઇલ નંબર દાખલ કરો."),

            city: Yup.string()
                .required('કૃપા કરીને શહેર અથવા ગામનું નામ દાખલ કરો'),

            age: Yup.string()
                .required("ઉંમર જરૂરી છે"),

            address: Yup.string()
                .required('કૃપા કરીને સંપૂર્ણ સરનામું દાખલ કરો'),

            business: Yup.string()
                .required('કૃપા કરીને તમારો વ્યવસાય દાખલ કરો'),

            activity: Yup.string()
                .required('કૃપા કરીને કોઈ એક પ્રવૃત્તિ પસંદ કરો'),

            about: Yup.string()
                .min(10, "ઓછામાં ઓછા 10 અક્ષર લખો.")
                .max(300, "વધુમાં વધુ 300 અક્ષર લખી શકો છો.")
                .required("કૃપા કરીને તમારા વિશે થોડું લખો."),

            Terms: Yup.boolean()
                .oneOf([true], "આગળ વધવા માટે કૃપા કરીને સંમતિ આપો")


        }),
        onSubmit: (values, { resetForm }) => {

            console.log("Button Click", values)
            toast.success("તમારી નોંધણી સફળતાપૂર્વક થઈ ગઈ છે")
            resetForm()
        }


    })

    const { handleChange, handleSubmit, handleBlur, touched, errors, values } = formik;



    return (

        <div className='pt-5'><div className="container">
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                pauseOnHover
                theme="colored"
            />

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="volunteer-form-card">

                        <div className="text-center mb-5">

                            <span className="form-badge">
                                🌿 ગ્રીન આર્મી
                            </span>

                            <h2 className="mt-3 fw-bold">
                                સ્વયંસેવક નોંધણી ફોર્મ
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="row">

                                <div className="col-md-6 mb-4">
                                    <label htmlFor='name'>પૂર્ણ નામ : </label>
                                    <input
                                        type="text"
                                        id='name'
                                        name='name'
                                        className="form-control"
                                        placeholder="તમારું સંપૂર્ણ નામ"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    {
                                        touched.name && errors.name ? (
                                            <div style={{ color: "Red" }}>{errors.name}</div>
                                        ) : null
                                    }
                                </div>

                                <div className="col-md-6 mb-4">
                                    <label htmlFor='contact'>મોબાઇલ નંબર :</label>
                                    <input
                                        type="tel"
                                        id='contact'
                                        name='contact'
                                        className="form-control"
                                        placeholder="૯૮૭૬૫૪૩૨૧૦"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.contact}
                                    />
                                    {
                                        touched.contact && errors.contact ? (
                                            <div style={{ color: "Red" }}>{errors.contact}</div>
                                        ) : null
                                    }
                                </div>

                                <div className="col-md-6 mb-4">
                                    <label htmlFor='email'>ઇમેઇલ :</label>
                                    <input
                                        type="email"
                                        id='email'
                                        name='email'
                                        className="form-control"
                                        placeholder="example@gmail.com"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {
                                        touched.email && errors.email ? (
                                            <div style={{ color: "Red" }}>{errors.email}</div>
                                        ) : null
                                    }
                                </div>

                                <div className="col-md-6 mb-4">
                                    <label htmlFor='age'>ઉંમર :</label>
                                    <input
                                        type="number"
                                        name='age'
                                        id='age'
                                        className="form-control"
                                        placeholder="ઉંમર"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.age}
                                    />
                                    {
                                        touched.age && errors.age ? (
                                            <div style={{ color: "Red" }}>{errors.age}</div>
                                        ) : null
                                    }
                                </div>

                                <div className="col-md-6 col-lg-12 mb-4">
                                    <label htmlFor='address'>સરનામું :</label>
                                    <input
                                        id='address'
                                        name='address'
                                        type="text"
                                        className="form-control"
                                        placeholder="સરનામું"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                    />
                                    {
                                        touched.address && errors.address ? (
                                            <div style={{ color: "Red" }}>{errors.address}</div>
                                        ) : null
                                    }
                                </div>

                                <div className="col-md-6 mb-4">
                                    <label htmlFor='city'>શહેર / ગામ :</label>
                                    <input
                                        id='city'
                                        name='city'
                                        type="text"
                                        className="form-control"
                                        placeholder="તમારું શહેર"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.city}
                                    />
                                    {
                                        touched.city && errors.city ? (
                                            <div style={{ color: "Red" }}>{errors.city}</div>
                                        ) : null
                                    }
                                </div>

                                <div className="col-md-6 mb-4">
                                    <label htmlFor='business'>વ્યવસાય :</label>
                                    <input
                                        id='business'
                                        name='business'
                                        type="text"
                                        className="form-control"
                                        placeholder="વ્યવસાય"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.business}
                                    />
                                    {
                                        touched.business && errors.business ? (
                                            <div style={{ color: "Red" }}>{errors.business}</div>
                                        ) : null
                                    }
                                </div>

                                <div className="col-12 mb-4">

                                    <label htmlFor='activity'>તમે કઈ પ્રવૃત્તિમાં જોડાવા માંગો છો?</label>

                                    <select className="form-select" id='activity' onChange={handleChange} name='activity'
                                        onBlur={handleBlur}
                                        value={values.activity}>
                                        <option value="">પ્રવૃત્તિ પસંદ કરો</option>
                                        <option value="વૃક્ષારોપણ અભિયાન">વૃક્ષારોપણ અભિયાન</option>

                                        <option value="પર્યાવરણ જાગૃતિ">પર્યાવરણ જાગૃતિ</option>

                                        <option value="સમાજ સેવા">સમાજ સેવા</option>

                                        <option value="ઇવેન્ટ વ્યવસ્થાપન" >ઇવેન્ટ વ્યવસ્થાપન</option>

                                    </select>

                                    {
                                        touched.activity && errors.activity ? (
                                            <div style={{ color: "Red" }}>{errors.activity}</div>
                                        ) : null
                                    }
                                </div>

                                <div className="col-12 mb-4">

                                    <label htmlFor='about'>તમારા વિશે થોડું લખો :</label>

                                    <textarea
                                        id='about'
                                        name='about'
                                        rows="5"
                                        className="form-control"
                                        placeholder="તમારો અનુભવ અથવા સેવાભાવ વિશે લખો..."
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.about}
                                    ></textarea>
                                    {touched.about && errors.about && (
                                        <div className="text-danger">{errors.about}</div>
                                    )}
                                </div>

                                <div className="col-12 mb-4">

                                    <div className="form-check">

                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="Terms"
                                            name='Terms'
                                            checked={values.Terms}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />

                                        <label
                                            className="form-check-label"
                                            htmlFor="Terms"
                                        >
                                            હું ગ્રીન આર્મી ચેરીટેબલ ટ્રસ્ટ સાથે
                                            સ્વયંસેવક તરીકે જોડાવા સંમત છું.
                                        </label>
                                        {
                                            touched.Terms && errors.Terms ? (
                                                <div style={{ color: "Red" }}>{errors.Terms}</div>
                                            ) : null
                                        }
                                    </div>

                                </div>

                                <div className="text-center">

                                    <button type='submit' className="btn volunteer-btn">
                                        નોંધણી કરો
                                    </button>

                                </div>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div></div>
    )
}

export default Volunteerform