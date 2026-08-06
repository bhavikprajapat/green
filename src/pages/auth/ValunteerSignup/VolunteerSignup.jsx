import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
} from "react-bootstrap";

import {
    BsPerson,
    BsPhone,
    BsEnvelope,
    BsHouse,
    BsCalendarDate,
} from "react-icons/bs";

import "../../../Css/volunteerSignup.css";
import logo from "../../../assets/logo/logo original.jpg";
import bgImage from "../../../assets/images/login.jpg";

import * as Yup from "yup";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../../store/Reduxslice/volunteerSlice";
import { useNavigate } from "react-router-dom";


export default function VolunteerSignup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, employee, error } = useSelector(
        (state) => state.volunteer
    );

    const formik = useFormik({

        initialValues: {

            fullName: "",
            phone: "",
            email: "",
            address: "",
            dob: "",
            joiningDate: "",
            gender: "male",
            team: "",
            // role: "",
            password: "",
            confirmPassword: "",
            profile: null,
            terms: false,

        },

        validationSchema: Yup.object({

            fullName: Yup.string()
                .required("પૂરું નામ જરૂરી છે"),

            phone: Yup.string()
                .matches(/^[6-9]\d{9}$/, "માન્ય મોબાઇલ નંબર દાખલ કરો")
                .required("મોબાઇલ નંબર જરૂરી છે"),

            email: Yup.string()
                .email("માન્ય ઈમેલ દાખલ કરો")
                .required("ઈમેલ જરૂરી છે"),

            address: Yup.string()
                .required("સરનામું જરૂરી છે"),

            dob: Yup.string()
                .required("જન્મ તારીખ પસંદ કરો"),

            joiningDate: Yup.string()
                .required("જોડાવાની તારીખ પસંદ કરો"),

            officer: Yup.string().required("કાર્ય પસંદ કરો"),

            gender: Yup.string()
                .required("લિંગ પસંદ કરો"),

            password: Yup.string()
                .min(6, "ઓછામાં ઓછા 6 અક્ષર")
                .required("પાસવર્ડ જરૂરી છે"),

            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "પાસવર્ડ મેળ ખાતો નથી")
                .required("પાસવર્ડ ફરી દાખલ કરો"),

            profile: Yup.mixed()
                .required("ફોટો અપલોડ કરો"),

            terms: Yup.boolean()
                .oneOf([true], "નિયમો સ્વીકારવા જરૂરી છે"),

        }),

        onSubmit: async (values, { resetForm }) => {

            const formData = new FormData();

            formData.append("EmployeeName", values.fullName);
            formData.append("MobileNo", values.phone);
            formData.append("Email", values.email);
            formData.append("dob",values.dob)
            formData.append("gender",values.gender)
            formData.append("Address", values.address);
            formData.append("ProfilePhoto", values.profile);
            formData.append("JoiningDate", values.joiningDate);
            formData.append("TeamUkId", "");
            formData.append("IsTeamLeader", false);
            // formData.append("Role", values.role);
            formData.append("Password", values.password);
            formData.append("ReportingToUkId", "");

            await dispatch(addEmployee(formData));
            dispatch(clearEmployeeState());
        },

    });

    useEffect(() => {
    if (employee) {

        toast.success("Registration Successful");

        formik.resetForm();

        setTimeout(() => {
            navigate("/login");
        }, 1500);

    }
}, [employee, navigate]);

    useEffect(() => {

        if (error) {

            toast.error(
                error?.message || "Something went wrong"
            );

            console.log(error);

        }

    }, [error]);

    return (

        <Container fluid className="signup-page p-0">

            <Row className="g-0 min-vh-100">

                <Col lg={6} className="left-panel">

                    <div className="overlay"></div>

                    <img
                        src={bgImage}
                        className="bg-image"
                        alt=""
                    />

                    <div className="left-content">

                        <div className="logo-box">

                            <img src={logo} alt="" />

                        </div>

                        <h2>ગ્રીન આર્મી</h2>

                        <p>ચેરિટેબલ ટ્રસ્ટ, સુરત</p>

                    </div>

                </Col>

                <Col lg={6} className="right-panel">

                    <div className="form-wrapper">

                        <h4 className="page-title">
                            સ્વયંસેવક નોંધણી
                        </h4>

                        <p className="subtitle">
                            ગ્રીન આર્મી સાથે જોડાઓ અને
                            પર્યાવરણ બચાવવા માટે યોગદાન આપો.
                        </p>

                        <Card className="signup-card">

                            <Card.Body>

                                <Form onSubmit={formik.handleSubmit}>

                                    <Form.Group className="mb-3">

                                        <Form.Label>પૂરું નામ</Form.Label>

                                        <div className="input-icon">

                                            <BsPerson />

                                            <Form.Control
                                                type="text"
                                                name="fullName"
                                                placeholder="તમારું પૂરું નામ દાખલ કરો"
                                                value={formik.values.fullName}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={
                                                    formik.touched.fullName &&
                                                    formik.errors.fullName
                                                }
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                {formik.errors.fullName}
                                            </Form.Control.Feedback>

                                        </div>

                                    </Form.Group>

                                    <Row>

                                        <Col md={6}>

                                            <Form.Group className="mb-3">

                                                <Form.Label>મોબાઇલ નંબર</Form.Label>

                                                <div className="input-icon">

                                                    <BsPhone />

                                                    <Form.Control
                                                        type="text"
                                                        name="phone"
                                                        placeholder="+91"
                                                        value={formik.values.phone}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        isInvalid={
                                                            formik.touched.phone &&
                                                            formik.errors.phone
                                                        }
                                                    />

                                                    <Form.Control.Feedback type="invalid">
                                                        {formik.errors.phone}
                                                    </Form.Control.Feedback>

                                                </div>

                                            </Form.Group>

                                        </Col>

                                        <Col md={6}>

                                            <Form.Group className="mb-3">

                                                <Form.Label>ઈમેલ સરનામું</Form.Label>

                                                <div className="input-icon">

                                                    <BsEnvelope />

                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        placeholder="email@example.com"
                                                        value={formik.values.email}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        isInvalid={
                                                            formik.touched.email &&
                                                            formik.errors.email
                                                        }
                                                    />

                                                    <Form.Control.Feedback type="invalid">
                                                        {formik.errors.email}
                                                    </Form.Control.Feedback>

                                                </div>

                                            </Form.Group>

                                        </Col>

                                    </Row>

                                    <Form.Group className="mb-3">

                                        <Form.Label>સરનામું</Form.Label>

                                        <div className="input-icon textarea">

                                            <BsHouse />

                                            <Form.Control
                                                as="textarea"
                                                rows={2}
                                                name="address"
                                                placeholder="સંપૂર્ણ સરનામું"
                                                value={formik.values.address}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={
                                                    formik.touched.address &&
                                                    formik.errors.address
                                                }
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                {formik.errors.address}
                                            </Form.Control.Feedback>

                                        </div>

                                    </Form.Group>

                                    <Row>

                                        <Col md={6}>

                                            <Form.Group className="mb-3">

                                                <Form.Label>જન્મ તારીખ</Form.Label>

                                                <div className="input-icon">

                                                    <BsCalendarDate />

                                                    <Form.Control
                                                        type="date"
                                                        name="dob"
                                                        value={formik.values.dob}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        isInvalid={
                                                            formik.touched.dob &&
                                                            formik.errors.dob
                                                        }
                                                    />

                                                    <Form.Control.Feedback type="invalid">
                                                        {formik.errors.dob}
                                                    </Form.Control.Feedback>

                                                </div>

                                            </Form.Group>

                                        </Col>

                                        <Col md={6}>

                                            <Form.Group className="mb-3">

                                                <Form.Label>જોડાવાની તારીખ</Form.Label>

                                                <div className="input-icon">

                                                    <BsCalendarDate />

                                                    <Form.Control
                                                        type="date"
                                                        name="joiningDate"
                                                        value={formik.values.joiningDate}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        isInvalid={
                                                            formik.touched.joiningDate &&
                                                            formik.errors.joiningDate
                                                        }
                                                    />

                                                    <Form.Control.Feedback type="invalid">
                                                        {formik.errors.joiningDate}
                                                    </Form.Control.Feedback>

                                                </div>

                                            </Form.Group>

                                        </Col>

                                    </Row>



                                    <Form.Group className="mb-3">
                                        <Form.Label>લિંગ</Form.Label>

                                        <div className="gender-group">

                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="પુરુષ"
                                                name="gender"
                                                value="male"
                                                checked={formik.values.gender === "male"}
                                                onChange={formik.handleChange}
                                            />

                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="મહિલા"
                                                name="gender"
                                                value="female"
                                                checked={formik.values.gender === "female"}
                                                onChange={formik.handleChange}
                                            />

                                            <Form.Check
                                                inline
                                                type="radio"
                                                label="અન્ય"
                                                name="gender"
                                                value="other"
                                                checked={formik.values.gender === "other"}
                                                onChange={formik.handleChange}
                                            />

                                        </div>

                                        {formik.touched.gender && formik.errors.gender && (
                                            <div className="text-danger mt-1">
                                                {formik.errors.gender}
                                            </div>
                                        )}

                                    </Form.Group>



                                    <Row>

                                        {/* <Col md={6}>
                                            <Form.Group className="mb-3">

                                                <Form.Label>ટીમ પસંદ કરો</Form.Label>

                                                <Form.Select
                                                    name="team"
                                                    value={formik.values.team}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    isInvalid={
                                                        formik.touched.team &&
                                                        formik.errors.team
                                                    }
                                                >

                                                    <option value="">ટીમ પસંદ કરો</option>

                                                    <option value="tree">
                                                        વૃક્ષારોપણ ટીમ
                                                    </option>

                                                    <option value="awareness">
                                                        જાગૃતિ અભિયાન
                                                    </option>

                                                    <option value="clean">
                                                        સ્વચ્છતા ટીમ
                                                    </option>

                                                </Form.Select>

                                                <Form.Control.Feedback type="invalid">
                                                    {formik.errors.team}
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </Col> */}

                                        {/* <Col md={6}>
                                            <Form.Group className="mb-3">

                                                <Form.Label>
                                                    કામગીરી
                                                </Form.Label>

                                                <Form.Select
                                                    name="officer"
                                                    value={formik.values.role}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    isInvalid={
                                                        formik.touched.role &&
                                                        formik.errors.role
                                                    }
                                                >
                                                    <option value="">
                                                       કાર્ય પસંદ કરો
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

                                                </Form.Select>

                                                <Form.Control.Feedback type="invalid">
                                                    {formik.errors.officer}
                                                </Form.Control.Feedback>

                                            </Form.Group>
                                        </Col> */}

                                    </Row>



                                    <Row>

                                        <Col md={6}>

                                            <Form.Group className="mb-3">

                                                <Form.Label>પાસવર્ડ</Form.Label>

                                                <Form.Control
                                                    type="password"
                                                    name="password"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    isInvalid={
                                                        formik.touched.password &&
                                                        formik.errors.password
                                                    }
                                                />

                                                <Form.Control.Feedback type="invalid">
                                                    {formik.errors.password}
                                                </Form.Control.Feedback>

                                            </Form.Group>

                                        </Col>

                                        <Col md={6}>

                                            <Form.Group className="mb-3">

                                                <Form.Label>
                                                    પાસવર્ડની ખાતરી કરો
                                                </Form.Label>

                                                <Form.Control
                                                    type="password"
                                                    name="confirmPassword"
                                                    value={formik.values.confirmPassword}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    isInvalid={
                                                        formik.touched.confirmPassword &&
                                                        formik.errors.confirmPassword
                                                    }
                                                />

                                                <Form.Control.Feedback type="invalid">
                                                    {formik.errors.confirmPassword}
                                                </Form.Control.Feedback>

                                            </Form.Group>

                                        </Col>

                                    </Row>



                                    <Form.Group className="mb-3">

                                        <Form.Label>
                                            પ્રોફાઇલ ફોટો અપલોડ કરો
                                        </Form.Label>

                                        <Form.Control
                                            type="file"
                                            name="profile"
                                            onBlur={formik.handleBlur}
                                            onChange={(e) => {
                                                formik.setFieldValue(
                                                    "profile",
                                                    e.target.files[0]
                                                );
                                            }}
                                        />

                                        {formik.touched.profile &&
                                            formik.errors.profile && (
                                                <div className="text-danger mt-1">
                                                    {formik.errors.profile}
                                                </div>
                                            )}

                                    </Form.Group>



                                    <Form.Group className="mb-3">

                                        <Form.Check
                                            type="checkbox"
                                            name="terms"
                                            checked={formik.values.terms}
                                            onChange={formik.handleChange}
                                            label="હું ગ્રીન આર્મીના નિયમો અને શરતો સ્વીકારું છું."
                                        />

                                        {formik.touched.terms &&
                                            formik.errors.terms && (
                                                <div className="text-danger">
                                                    {formik.errors.terms}
                                                </div>
                                            )}

                                    </Form.Group>



                                    <Button
                                        type="submit"
                                        className="register-btn w-100"
                                        disabled={loading}
                                    >

                                        {
                                            loading
                                                ? "Submitting..."
                                                : "નોંધણી કરો"
                                        }

                                    </Button>



                                    <div className="text-center mt-3">

                                        <span className="text-muted">
                                            પહેલેથી નોંધણી કરી છે?
                                        </span>

                                        <a
                                            href="/login"
                                            className="ms-2 text-success fw-bold text-decoration-none"
                                        >
                                            લૉગિન કરો
                                        </a>

                                    </div>

                                </Form>

                            </Card.Body>

                        </Card>

                    </div>

                </Col>

            </Row>

        </Container>
    )
}