import React, { useEffect, useState } from "react";
import "../../Css/logout.css";
import logo from "../../assets/logo/logo.png"; // Green Army Logo
import bg from "../../assets/images/bg_img.png";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/Reduxslice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const { loading, success, error, user } = useSelector(
        (state) => state.login
    );

    const formik = useFormik({
        initialValues: {
            mobile: "",
            password: "",
            role: ""
        },
        validationSchema: Yup.object({
            mobile: Yup.string()
                .matches(/^[6-9]\d{9}$/, "માન્ય મોબાઇલ નંબર દાખલ કરો")
                .required("મોબાઇલ નંબર જરૂરી છે"),

            password: Yup.string()
                .required('પાસવર્ડ જરૂરી છે'),

            role: Yup.string()
                .required('required'),


        }),
        onSubmit: async (values) => {

            const loginData = {

                MobileNumber: values.mobile,
                Password: values.password,
                Role: values.role,

            };

            dispatch(loginUser(loginData));

        },



    })

    useEffect(() => {

        if (success) {

            toast.success("Login Successful");

            setTimeout(() => {

                navigate("/dashboard");

            }, 1000);

        }

    }, [success, navigate]);

    useEffect(() => {

        if (error) {

            toast.error(
                error?.message || "Invalid Login Credentials"
            );

        }

    }, [error]);


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
                                        type="number"
                                        placeholder="યુઝર નંબર  દાખલ કરો"
                                        className="form-control"
                                        name="mobile"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.mobile}
                                    />

                                </div>
                                {
                                    touched.mobile && errors.mobile ? (
                                        <div style={{ color: "Red" }} className="m-0 p-0">{errors.mobile}</div>
                                    ) : null
                                }



                                <div className="mb-3">


                                    <div className="">
                                        <select
                                            className={`form-select role-select ${formik.touched.role && formik.errors.role ? "is-invalid" : ""
                                                }`}
                                            name="role"
                                            value={formik.values.role}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        >

                                            <option value="">
                                                તમારી ભૂમિકા પસંદ કરો
                                            </option>

                                            <option value="SuperAdmin">
                                                સુપર એડમિન
                                            </option>

                                            <option value="TeamAdmin">
                                                ટીમ એડમિન
                                            </option>

                                            <option value="TeamSubAdmin">
                                                ટીમ સબ-એડમિન
                                            </option>

                                            <option value="Employee">
                                                સ્વયંસેવક
                                            </option>

                                        </select>

                                        <div className="invalid-feedback">
                                            {formik.errors.role}
                                        </div>

                                    </div>
                                </div>




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
                                {/* password and remember password */}
                                {/* <div className="d-flex justify-content-between mb-4">

                                    <div>

                                        <input type="checkbox" />

                                        <span className="ms-2">
                                            મને યાદ રાખો
                                        </span>

                                    </div>

                                    <a href="">પાસવર્ડ ભૂલી ગયા?</a>

                                </div> */}

                                <p className="text-center mt-3">
                                    સ્વયંસેવક છો?
                                    <NavLink to="/volunteer-signup" className="ms-2 text-success fw-bold" >
                                        અહીં રજિસ્ટર કરો
                                    </NavLink>
                                </p>

                                <button
                                    type="submit"
                                    className="btn btn-success w-100 login-btn"
                                    disabled={loading}
                                >
                                    {
                                        loading
                                            ? "Logging..."
                                            : "લોગિન કરો"
                                    }
                                </button>
                            </form>


                            <p className="copyright">
                                © 2018 ગ્રીન આર્મી ચેરિટેબલ ટ્રસ્ટ, સુરત
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;