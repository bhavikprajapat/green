import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
    FaUser,
    FaPhone,
    FaMapMarkerAlt,
    FaIdCard,
    FaCalendarAlt,
    FaLock,
    FaImage,
    FaArrowLeft,
    FaEnvelope,
} from "react-icons/fa";

import { toast } from "react-toastify";

import {
    addDonor,
    updateDonor,
    getAllDonors,
    clearDonorState,
} from "../../store/Reduxslice/donorSlice";

const AddDonor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    // =====================================================
    // URL
    // Add  : /dashboard/donor/add
    // Edit : /dashboard/donor/add?id=UUID
    // =====================================================

    const donorId = searchParams.get("id");
    const isEditMode = Boolean(donorId);

    // =====================================================
    // REDUX
    // =====================================================

    const {
        donors = [],
        loading,
        addLoading,
        updateLoading,
        error,
        message,
    } = useSelector((state) => state.donor);

    const isSubmitting = addLoading || updateLoading;

    // =====================================================
    // EDIT LOADING
    // =====================================================

    const [editDataLoading, setEditDataLoading] =
        useState(isEditMode);

    // =====================================================
    // VALIDATION
    // =====================================================

    const validationSchema = Yup.object({
        DonorName: Yup.string()
            .trim()
            .min(
                3,
                "ડોનરનું નામ ઓછામાં ઓછા 3 અક્ષરનું હોવું જોઈએ"
            )
            .required("ડોનરનું નામ જરૂરી છે"),

        MobileNo: Yup.string()
            .matches(
                /^[6-9]\d{9}$/,
                "માન્ય 10 અંકનો મોબાઇલ નંબર દાખલ કરો"
            )
            .required("મોબાઇલ નંબર જરૂરી છે"),

        Email: Yup.string()
            .trim()
            .email(
                "માન્ય ઈમેલ સરનામું દાખલ કરો"
            )
            .required(
                "ઈમેલ સરનામું જરૂરી છે"
            ),

        AlternateMobileNo: Yup.string()
            .nullable()
            .test(
                "alternate-mobile",
                "માન્ય 10 અંકનો મોબાઇલ નંબર દાખલ કરો",
                (value) => {
                    if (!value) return true;

                    return /^[6-9]\d{9}$/.test(
                        value
                    );
                }
            ),

        Address: Yup.string()
            .trim()
            .required("સરનામું જરૂરી છે"),

        PANNo: Yup.string()
            .transform((value) =>
                value
                    ? value.toUpperCase()
                    : value
            )
            .matches(
                /^[A-Z]{5}[0-9]{4}[A-Z]$/,
                "માન્ય PAN નંબર દાખલ કરો"
            )
            .required(
                "PAN નંબર જરૂરી છે"
            ),

        BirthDate: Yup.date()
            .required(
                "જન્મ તારીખ પસંદ કરો"
            ),

        MarriageDate: Yup.date()
            .nullable(),

        Password: isEditMode
            ? Yup.string().test(
                "password-length",
                "પાસવર્ડ ઓછામાં ઓછો 6 અક્ષરનો હોવો જોઈએ",
                (value) => {
                    if (!value) return true;

                    return value.length >= 6;
                }
            )
            : Yup.string()
                .min(
                    6,
                    "પાસવર્ડ ઓછામાં ઓછો 6 અક્ષરનો હોવો જોઈએ"
                )
                .required(
                    "પાસવર્ડ જરૂરી છે"
                ),
    });

    // =====================================================
    // INITIAL VALUES
    // =====================================================

    const initialValues = {
        DonorName: "",
        MobileNo: "",
        Email: "",
        Password: "",
        AlternateMobileNo: "",
        Address: "",
        PANNo: "",
        BirthDate: "",
        MarriageDate: "",
        Status: true,
        ProfilePhoto: null,
    };

    // =====================================================
    // FORMIK
    // =====================================================

    const formik = useFormik({
        enableReinitialize: true,

        initialValues,

        validationSchema,

        onSubmit: async (values) => {
            try {
                // =================================================
                // CLEAN VALUES
                // =================================================

                const mobile =
                    values.MobileNo?.trim();

                const email =
                    values.Email
                        ?.trim()
                        .toLowerCase();

                // =================================================
                // DUPLICATE MOBILE CHECK
                // =================================================

                const duplicateMobile =
                    donors.find((donor) => {
                        const donorMobile =
                            String(
                                donor?.MobileNo || ""
                            ).trim();

                        const sameDonor =
                            String(
                                donor?.DonorUkId || ""
                            ).toLowerCase() ===
                            String(
                                donorId || ""
                            ).toLowerCase();

                        return (
                            donorMobile ===
                                mobile &&
                            !sameDonor
                        );
                    });

                if (duplicateMobile) {
                    toast.error(
                        "આ મોબાઇલ નંબર પહેલાથી જ બીજા દાતા સાથે નોંધાયેલ છે."
                    );

                    return;
                }

                // =================================================
                // DUPLICATE EMAIL CHECK
                // =================================================

                const duplicateEmail =
                    donors.find((donor) => {
                        const donorEmail =
                            String(
                                donor?.Email || ""
                            )
                                .trim()
                                .toLowerCase();

                        const sameDonor =
                            String(
                                donor?.DonorUkId || ""
                            ).toLowerCase() ===
                            String(
                                donorId || ""
                            ).toLowerCase();

                        return (
                            donorEmail ===
                                email &&
                            !sameDonor
                        );
                    });

                if (duplicateEmail) {
                    toast.error(
                        "આ ઈમેલ સરનામું પહેલાથી જ બીજા દાતા સાથે નોંધાયેલ છે."
                    );

                    return;
                }

                // =================================================
                // FORM DATA
                // =================================================

                const formData =
                    new FormData();

                // Donor Name
                formData.append(
                    "DonorName",
                    values.DonorName.trim()
                );

                // Mobile
                formData.append(
                    "MobileNo",
                    mobile
                );

                // Email
                formData.append(
                    "Email",
                    email
                );

                // Password
                // ADD -> required
                // EDIT -> only when entered

                if (
                    values.Password?.trim()
                ) {
                    formData.append(
                        "Password",
                        values.Password.trim()
                    );
                }

                // Alternate Mobile
                if (
                    values.AlternateMobileNo?.trim()
                ) {
                    formData.append(
                        "AlternateMobileNo",
                        values.AlternateMobileNo.trim()
                    );
                }

                // Address
                formData.append(
                    "Address",
                    values.Address.trim()
                );

                // PAN
                formData.append(
                    "PANNo",
                    values.PANNo
                        .trim()
                        .toUpperCase()
                );

                // Birth Date
                formData.append(
                    "BirthDate",
                    values.BirthDate
                );

                // Marriage Date
                if (
                    values.MarriageDate
                ) {
                    formData.append(
                        "MarriageDate",
                        values.MarriageDate
                    );
                }

                // Status
                formData.append(
                    "Status",
                    values.Status
                        ? "true"
                        : "false"
                );

                // Profile Photo
                if (
                    values.ProfilePhoto
                ) {
                    formData.append(
                        "ProfilePhoto",
                        values.ProfilePhoto
                    );
                }

                // =================================================
                // DEBUG
                // =================================================

                console.log(
                    "========== DONOR FORM DATA =========="
                );

                for (
                    const [
                        key,
                        value,
                    ] of formData.entries()
                ) {
                    console.log(
                        key,
                        value
                    );
                }

                console.log(
                    "===================================="
                );

                // =================================================
                // EDIT DONOR
                // =================================================

                if (isEditMode) {
                    const result =
                        await dispatch(
                            updateDonor({
                                donorUkId:
                                    donorId,
                                formData,
                            })
                        ).unwrap();

                    console.log(
                        "UPDATE DONOR RESPONSE:",
                        result
                    );

                    if (
                        result?.success ===
                        false
                    ) {
                        toast.error(
                            getGujaratiApiError(
                                result
                            )
                        );

                        return;
                    }

                    toast.success(
                        result?.message ||
                        "ડોનરની માહિતી સફળતાપૂર્વક અપડેટ થઈ ગઈ છે."
                    );

                    dispatch(
                        clearDonorState()
                    );

                    setTimeout(() => {
                        navigate(
                            "/dashboard/donor"
                        );
                    }, 1000);

                    return;
                }

                // =================================================
                // ADD DONOR
                // =================================================

                const result =
                    await dispatch(
                        addDonor(formData)
                    ).unwrap();

                console.log(
                    "ADD DONOR RESPONSE:",
                    result
                );

                if (
                    result?.success ===
                    false
                ) {
                    toast.error(
                        getGujaratiApiError(
                            result
                        )
                    );

                    return;
                }

                toast.success(
                    result?.message ||
                    "ડોનર સફળતાપૂર્વક નોંધાઈ ગયો છે."
                );

                formik.resetForm();

                dispatch(
                    clearDonorState()
                );

                setTimeout(() => {
                    navigate(
                        "/dashboard/donor"
                    );
                }, 1000);
            } catch (err) {
                console.error(
                    "DONOR SUBMIT ERROR:",
                    err
                );

                toast.error(
                    getGujaratiApiError(
                        err
                    )
                );
            }
        },
    });

    // =====================================================
    // API ERROR -> GUJARATI
    // =====================================================

    const getGujaratiApiError = (
        err
    ) => {
        const errorText =
            err?.error ||
            err?.message ||
            err?.response?.data
                ?.error ||
            err?.response?.data
                ?.message ||
            "";

        const text =
            String(errorText)
                .toLowerCase();

        // Duplicate Mobile
        if (
            text.includes(
                "uq_donormaster_mobileno"
            ) ||
            text.includes(
                "duplicate key"
            ) &&
            text.includes(
                "mobileno"
            )
        ) {
            return (
                "આ મોબાઇલ નંબર પહેલાથી જ નોંધાયેલ છે."
            );
        }

        // Duplicate Email
        if (
            text.includes(
                "uq_donormaster_email"
            ) ||
            text.includes(
                "duplicate key"
            ) &&
            text.includes(
                "email"
            )
        ) {
            return (
                "આ ઈમેલ સરનામું પહેલાથી જ નોંધાયેલ છે."
            );
        }

        // PAN
        if (
            text.includes("panno") &&
            text.includes("duplicate")
        ) {
            return (
                "આ PAN નંબર પહેલાથી જ નોંધાયેલ છે."
            );
        }

        return (
            err?.message ||
            err?.response?.data
                ?.message ||
            "ડોનર સાથે સમસ્યા આવી."
        );
    };

    // =====================================================
    // LOAD DONOR FOR EDIT
    // =====================================================

    useEffect(() => {
        const loadEditDonor =
            async () => {
                if (!isEditMode) {
                    setEditDataLoading(
                        false
                    );

                    return;
                }

                try {
                    setEditDataLoading(
                        true
                    );

                    let donorList =
                        donors;

                    // =========================================
                    // LOAD DONORS IF REDUX EMPTY
                    // =========================================

                    if (
                        !donorList ||
                        donorList.length === 0
                    ) {
                        const result =
                            await dispatch(
                                getAllDonors()
                            ).unwrap();

                        donorList =
                            result?.data ||
                            result?.donors ||
                            [];
                    }

                    // =========================================
                    // FIND DONOR
                    // =========================================

                    const donor =
                        donorList.find(
                            (item) =>
                                String(
                                    item?.DonorUkId
                                ) ===
                                String(
                                    donorId
                                )
                        );

                    if (!donor) {
                        toast.error(
                            "ડોનરની માહિતી મળી નથી."
                        );

                        navigate(
                            "/dashboard/donor"
                        );

                        return;
                    }

                    console.log(
                        "EDIT DONOR DATA:",
                        donor
                    );

                    // =========================================
                    // SET FORM
                    // =========================================

                    formik.setValues({
                        DonorName:
                            donor.DonorName ||
                            "",

                        MobileNo:
                            donor.MobileNo ||
                            "",

                        Email:
                            donor.Email ||
                            "",

                        Password:
                            "",

                        AlternateMobileNo:
                            donor.AlternateMobileNo ||
                            "",

                        Address:
                            donor.Address ||
                            "",

                        PANNo:
                            donor.PANNo ||
                            "",

                        BirthDate:
                            donor.BirthDate
                                ? donor.BirthDate.substring(
                                    0,
                                    10
                                )
                                : "",

                        MarriageDate:
                            donor.MarriageDate
                                ? donor.MarriageDate.substring(
                                    0,
                                    10
                                )
                                : "",

                        Status:
                            donor.Status ===
                            undefined
                                ? true
                                : Boolean(
                                    donor.Status
                                ),

                        ProfilePhoto:
                            null,
                    });
                } catch (err) {
                    console.error(
                        "LOAD EDIT DONOR ERROR:",
                        err
                    );

                    toast.error(
                        getGujaratiApiError(
                            err
                        )
                    );
                } finally {
                    setEditDataLoading(
                        false
                    );
                }
            };

        loadEditDonor();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isEditMode,
        donorId,
    ]);

    // =====================================================
    // REDUX ERROR
    // =====================================================

    useEffect(() => {
        if (!error) return;

        const errorMessage =
            typeof error ===
            "string"
                ? error
                : getGujaratiApiError(
                    error
                );

        toast.error(
            errorMessage
        );

        dispatch(
            clearDonorState()
        );
    }, [
        error,
        message,
        dispatch,
    ]);

    // =====================================================
    // INPUT CLASS
    // =====================================================

    const inputClass = (
        field
    ) => {
        if (
            formik.touched[field] &&
            formik.errors[field]
        ) {
            return "form-control is-invalid";
        }

        return "form-control";
    };

    // =====================================================
    // FIELD ERROR
    // =====================================================

    const fieldError = (
        field
    ) => {
        if (
            formik.touched[field] &&
            formik.errors[field]
        ) {
            return (
                <div className="text-danger small mt-1">
                    {
                        formik.errors[
                            field
                        ]
                    }
                </div>
            );
        }

        return null;
    };

    // =====================================================
    // EDIT LOADING
    // =====================================================

    if (editDataLoading) {
        return (
            <div
                className="container-fluid d-flex justify-content-center align-items-center"
                style={{
                    minHeight:
                        "70vh",
                }}
            >
                <div className="text-center">
                    <div
                        className="spinner-border text-success"
                        role="status"
                    />

                    <p className="mt-3 text-muted">
                        ડોનરની માહિતી લોડ થઈ રહી છે...
                    </p>
                </div>
            </div>
        );
    }

    // =====================================================
    // UI
    // =====================================================

    return (
        <div
            className="container-fluid py-4"
            style={{
                background:
                    "#f5f7f9",
                minHeight:
                    "100vh",
            }}
        >
            {/* =================================================
                HEADER
            ================================================= */}

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3
                        className="fw-bold mb-1"
                        style={{
                            color:
                                "#198754",
                        }}
                    >
                        {isEditMode
                            ? "ડોનરની માહિતી અપડેટ કરો"
                            : "ડોનર ઉમેરો"}
                    </h3>

                    <p className="text-muted mb-0">
                        {isEditMode
                            ? "ડોનરની માહિતીમાં જરૂરી ફેરફાર કરો"
                            : "નવા ડોનરની માહિતી દાખલ કરો"}
                    </p>
                </div>

                <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() =>
                        navigate(
                            "/dashboard/donor"
                        )
                    }
                    disabled={
                        isSubmitting
                    }
                >
                    <FaArrowLeft className="me-2" />
                    ડોનર યાદી
                </button>
            </div>

            {/* =================================================
                CARD
            ================================================= */}

            <div
                className="card border-0 shadow-sm"
                style={{
                    borderRadius:
                        "14px",
                }}
            >
                <div className="card-body p-4">
                    <form
                        onSubmit={
                            formik.handleSubmit
                        }
                        noValidate
                    >
                        {/* =================================================
                            PERSONAL INFORMATION
                        ================================================= */}

                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">
                                <FaUser className="text-success me-2" />
                                વ્યક્તિગત માહિતી
                            </h5>

                            <hr />

                            <div className="row">
                                {/* NAME */}

                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">
                                        ડોનરનું નામ *
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <FaUser className="text-success" />
                                        </span>

                                        <input
                                            type="text"
                                            name="DonorName"
                                            placeholder="ડોનરનું પૂરું નામ"
                                            className={inputClass(
                                                "DonorName"
                                            )}
                                            value={
                                                formik
                                                    .values
                                                    .DonorName
                                            }
                                            onChange={
                                                formik.handleChange
                                            }
                                            onBlur={
                                                formik.handleBlur
                                            }
                                        />
                                    </div>

                                    {fieldError(
                                        "DonorName"
                                    )}
                                </div>

                                {/* MOBILE */}

                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">
                                        મોબાઇલ નંબર *
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <FaPhone className="text-success" />
                                        </span>

                                        <input
                                            type="text"
                                            name="MobileNo"
                                            maxLength={
                                                10
                                            }
                                            inputMode="numeric"
                                            placeholder="9876543210"
                                            className={inputClass(
                                                "MobileNo"
                                            )}
                                            value={
                                                formik
                                                    .values
                                                    .MobileNo
                                            }
                                            onChange={(
                                                e
                                            ) => {
                                                const value =
                                                    e.target.value.replace(
                                                        /\D/g,
                                                        ""
                                                    );

                                                formik.setFieldValue(
                                                    "MobileNo",
                                                    value
                                                );
                                            }}
                                            onBlur={
                                                formik.handleBlur
                                            }
                                        />
                                    </div>

                                    {fieldError(
                                        "MobileNo"
                                    )}
                                </div>

                                {/* EMAIL */}

                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">
                                        ઈમેલ સરનામું *
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <FaEnvelope className="text-success" />
                                        </span>

                                        <input
                                            type="email"
                                            name="Email"
                                            placeholder="example@gmail.com"
                                            className={inputClass(
                                                "Email"
                                            )}
                                            value={
                                                formik
                                                    .values
                                                    .Email
                                            }
                                            onChange={(
                                                e
                                            ) => {
                                                formik.setFieldValue(
                                                    "Email",
                                                    e.target.value
                                                );
                                            }}
                                            onBlur={
                                                formik.handleBlur
                                            }
                                        />
                                    </div>

                                    {fieldError(
                                        "Email"
                                    )}
                                </div>

                                {/* ALTERNATE MOBILE */}

                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">
                                        વૈકલ્પિક મોબાઇલ નંબર
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <FaPhone className="text-success" />
                                        </span>

                                        <input
                                            type="text"
                                            name="AlternateMobileNo"
                                            maxLength={
                                                10
                                            }
                                            inputMode="numeric"
                                            placeholder="વૈકલ્પિક નંબર"
                                            className={inputClass(
                                                "AlternateMobileNo"
                                            )}
                                            value={
                                                formik
                                                    .values
                                                    .AlternateMobileNo
                                            }
                                            onChange={(
                                                e
                                            ) => {
                                                const value =
                                                    e.target.value.replace(
                                                        /\D/g,
                                                        ""
                                                    );

                                                formik.setFieldValue(
                                                    "AlternateMobileNo",
                                                    value
                                                );
                                            }}
                                            onBlur={
                                                formik.handleBlur
                                            }
                                        />
                                    </div>

                                    {fieldError(
                                        "AlternateMobileNo"
                                    )}
                                </div>

                                {/* ADDRESS */}

                                <div className="col-md-12 mb-3">
                                    <label className="form-label fw-semibold">
                                        સરનામું *
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <FaMapMarkerAlt className="text-success" />
                                        </span>

                                        <textarea
                                            name="Address"
                                            rows="3"
                                            placeholder="સંપૂર્ણ સરનામું"
                                            className={inputClass(
                                                "Address"
                                            )}
                                            value={
                                                formik
                                                    .values
                                                    .Address
                                            }
                                            onChange={
                                                formik.handleChange
                                            }
                                            onBlur={
                                                formik.handleBlur
                                            }
                                        />
                                    </div>

                                    {fieldError(
                                        "Address"
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* =================================================
                            PAN & DATE
                        ================================================= */}

                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">
                                <FaIdCard className="text-success me-2" />
                                ઓળખ અને તારીખ
                            </h5>

                            <hr />

                            <div className="row">
                                {/* PAN */}

                                <div className="col-md-4 mb-3">
                                    <label className="form-label fw-semibold">
                                        PAN નંબર *
                                    </label>

                                    <input
                                        type="text"
                                        name="PANNo"
                                        maxLength={
                                            10
                                        }
                                        placeholder="ABCDE1234F"
                                        className={inputClass(
                                            "PANNo"
                                        )}
                                        value={
                                            formik
                                                .values
                                                .PANNo
                                        }
                                        onChange={(
                                            e
                                        ) => {
                                            formik.setFieldValue(
                                                "PANNo",
                                                e.target.value
                                                    .toUpperCase()
                                            );
                                        }}
                                        onBlur={
                                            formik.handleBlur
                                        }
                                    />

                                    {fieldError(
                                        "PANNo"
                                    )}
                                </div>

                                {/* BIRTH DATE */}

                                <div className="col-md-4 mb-3">
                                    <label className="form-label fw-semibold">
                                        જન્મ તારીખ *
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <FaCalendarAlt className="text-success" />
                                        </span>

                                        <input
                                            type="date"
                                            name="BirthDate"
                                            className={inputClass(
                                                "BirthDate"
                                            )}
                                            value={
                                                formik
                                                    .values
                                                    .BirthDate
                                            }
                                            onChange={
                                                formik.handleChange
                                            }
                                            onBlur={
                                                formik.handleBlur
                                            }
                                        />
                                    </div>

                                    {fieldError(
                                        "BirthDate"
                                    )}
                                </div>

                                {/* MARRIAGE DATE */}

                                <div className="col-md-4 mb-3">
                                    <label className="form-label fw-semibold">
                                        લગ્ન તારીખ
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <FaCalendarAlt className="text-success" />
                                        </span>

                                        <input
                                            type="date"
                                            name="MarriageDate"
                                            className={inputClass(
                                                "MarriageDate"
                                            )}
                                            value={
                                                formik
                                                    .values
                                                    .MarriageDate
                                            }
                                            onChange={
                                                formik.handleChange
                                            }
                                            onBlur={
                                                formik.handleBlur
                                            }
                                        />
                                    </div>

                                    {fieldError(
                                        "MarriageDate"
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* =================================================
                            LOGIN
                        ================================================= */}

                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">
                                <FaLock className="text-success me-2" />
                                લૉગિન માહિતી
                            </h5>

                            <hr />

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">
                                        પાસવર્ડ{" "}
                                        {!isEditMode &&
                                            "*"}
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <FaLock className="text-success" />
                                        </span>

                                        <input
                                            type="password"
                                            name="Password"
                                            placeholder={
                                                isEditMode
                                                    ? "નવો પાસવર્ડ હોય તો દાખલ કરો"
                                                    : "પાસવર્ડ દાખલ કરો"
                                            }
                                            className={inputClass(
                                                "Password"
                                            )}
                                            value={
                                                formik
                                                    .values
                                                    .Password
                                            }
                                            onChange={
                                                formik.handleChange
                                            }
                                            onBlur={
                                                formik.handleBlur
                                            }
                                        />
                                    </div>

                                    {isEditMode && (
                                        <small className="text-muted">
                                            પાસવર્ડ બદલવો ન હોય તો ખાલી રાખો.
                                        </small>
                                    )}

                                    {fieldError(
                                        "Password"
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* =================================================
                            PROFILE PHOTO
                        ================================================= */}

                        <div className="mb-4">
                            <h5 className="fw-bold mb-3">
                                <FaImage className="text-success me-2" />
                                પ્રોફાઇલ ફોટો
                            </h5>

                            <hr />

                            <input
                                type="file"
                                name="ProfilePhoto"
                                accept="image/png,image/jpeg,image/jpg"
                                className="form-control"
                                onChange={(
                                    e
                                ) => {
                                    const file =
                                        e.target.files?.[0] ||
                                        null;

                                    formik.setFieldValue(
                                        "ProfilePhoto",
                                        file
                                    );
                                }}
                            />

                            {formik
                                .values
                                .ProfilePhoto && (
                                    <div className="mt-3">
                                        <img
                                            src={URL.createObjectURL(
                                                formik
                                                    .values
                                                    .ProfilePhoto
                                            )}
                                            alt="Preview"
                                            style={{
                                                width:
                                                    "90px",
                                                height:
                                                    "90px",
                                                objectFit:
                                                    "cover",
                                                borderRadius:
                                                    "10px",
                                                border:
                                                    "2px solid #198754",
                                            }}
                                        />
                                    </div>
                                )}
                        </div>

                        {/* =================================================
                            STATUS
                        ================================================= */}

                        <div className="mb-4">
                            <div className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="Status"
                                    name="Status"
                                    checked={
                                        formik
                                            .values
                                            .Status
                                    }
                                    onChange={
                                        formik.handleChange
                                    }
                                />

                                <label
                                    className="form-check-label fw-semibold"
                                    htmlFor="Status"
                                >
                                    ડોનર સક્રિય રાખવો
                                </label>
                            </div>
                        </div>

                        {/* =================================================
                            BUTTONS
                        ================================================= */}

                        <div className="d-flex justify-content-end gap-2 pt-3 border-top">
                            <button
                                type="button"
                                className="btn btn-light px-4"
                                onClick={() =>
                                    navigate(
                                        "/dashboard/donor"
                                    )
                                }
                                disabled={
                                    isSubmitting
                                }
                            >
                                રદ કરો
                            </button>

                            <button
                                type="submit"
                                className="btn btn-success px-5"
                                disabled={
                                    isSubmitting
                                }
                            >
                                {isSubmitting ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                        />

                                        {isEditMode
                                            ? "અપડેટ થઈ રહ્યું છે..."
                                            : "ડોનર ઉમેરાઈ રહ્યો છે..."}
                                    </>
                                ) : (
                                    <>
                                        <FaUser className="me-2" />

                                        {isEditMode
                                            ? "ડોનર અપડેટ કરો"
                                            : "ડોનર ઉમેરો"}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDonor;