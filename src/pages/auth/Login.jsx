import React, { useState } from "react";
import "..//../Css/logout.css";
import logo from "../../assets/logo/logo.png"; // Green Army Logo
import bg from "../../assets/images/bg_img.png";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email()
                .required('required'),

            password: Yup.string()
                .required('required'),


        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }


    })

    const { handleChange, handleSubmit, handleBlur, touched, errors, values } = formik
    return (
        <div
            className="login-page"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="overlay"></div>

            <div className="login-title">
                1. લોગિન કરો
            </div>

            <div className="container-fluid h-100">

                <div className="row h-100">

                    <div className="col-lg-7 d-none d-lg-block"></div>

                    <div className="col-lg-5 col-12 d-flex align-items-center justify-content-center">

                        <div className="login-card">

                            <img
                                src={logo}
                                alt="logo"
                                className="logo"
                            />

                            <h2>ગ્રીન આર્મી</h2>

                            <h5>ચેરિટેબલ ટ્રસ્ટ, સુરત</h5>

                            <h4>લોગિન કરો</h4>

                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-3">

                                    <span className="input-group-text">
                                        <FaUserAlt />
                                    </span>

                                    <input
                                        type="email"
                                        placeholder="યુઝર નામ દાખલ કરો"
                                        className="form-control"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />

                                </div>
                                {
                                    touched.email && errors.email ? (
                                        <div style={{ color: "Red" }} className="m-0 p-0">{errors.email}</div>
                                    ) : null
                                }

                                <div className="input-group mb-3">

                                    <span className="input-group-text">
                                        <FaLock />
                                    </span>

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="પાસવર્ડ દાખલ કરો"
                                        className="form-control"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />

                                    <span
                                        className="input-group-text"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>


                                </div>
                                {
                                    touched.password && errors.password ? (
                                        <div style={{ color: "Red" }}>{errors.password}</div>
                                    ) : null
                                }

                                <div className="d-flex justify-content-between mb-4">

                                    <div>

                                        <input type="checkbox" />

                                        <span className="ms-2">
                                            મને યાદ રાખો
                                        </span>

                                    </div>

                                    <a href="/">પાસવર્ડ ભૂલી ગયા?</a>

                                </div>

                                <button className="btn btn-success w-100 login-btn" type='submit'>
                                    લોગિન કરો
                                </button>
                            </form>


                            <p className="copyright">
                                © 2024 ગ્રીન આર્મી ચેરિટેબલ ટ્રસ્ટ, સુરત
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;