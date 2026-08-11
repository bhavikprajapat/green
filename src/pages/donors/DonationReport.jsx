import React, { useEffect, useMemo, useState } from "react";
import { Pagination, Modal } from "antd";
import {
    FaEye,
    FaSearch,
    FaEdit,
    FaTrash,
    FaPlus,
    FaRupeeSign,
    FaTree,
    FaBox,
    FaTimes,
    FaSave,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
    getAllDonors,
    deleteDonor,
} from "../../store/Reduxslice/donorSlice";

import donationService from "../../Services/donationService";

// =====================================================
// JWT માંથી EmployeeUkId કાઢવા માટે
// =====================================================

const getEmployeeUkIdFromToken = () => {
    try {
        const token = localStorage.getItem("token");

        if (!token) {
            console.error("Token localStorage માં મળ્યો નથી.");
            return null;
        }

        const parts = token.split(".");

        if (parts.length !== 3) {
            console.error("Invalid JWT token.");
            return null;
        }

        const base64Url = parts[1];

        const base64 = base64Url
            .replace(/-/g, "+")
            .replace(/_/g, "/");

        const paddedBase64 =
            base64 +
            "=".repeat((4 - (base64.length % 4)) % 4);

        const decodedPayload = decodeURIComponent(
            atob(paddedBase64)
                .split("")
                .map(
                    (char) =>
                        "%" +
                        ("00" + char.charCodeAt(0).toString(16)).slice(-2)
                )
                .join("")
        );

        const payload = JSON.parse(decodedPayload);

        console.log("JWT PAYLOAD:", payload);
        console.log(
            "EmployeeUkId:",
            payload?.EmployeeUkId
        );

        return payload?.EmployeeUkId || null;
    } catch (error) {
        console.error(
            "EmployeeUkId token માંથી કાઢવામાં error:",
            error
        );

        return null;
    }
};

// =====================================================
// DATE FORMAT
// =====================================================

const getTodayDate = () => {
    const date = new Date();

    const year = date.getFullYear();

    const month = String(
        date.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        date.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

const formatDate = (date) => {
    if (!date) return "-";

    try {
        return new Date(date).toLocaleDateString(
            "gu-IN"
        );
    } catch {
        return "-";
    }
};

const formatDateTime = (date) => {
    if (!date) return "-";

    try {
        return new Date(date).toLocaleString(
            "gu-IN"
        );
    } catch {
        return "-";
    }
};

// =====================================================
// COMPONENT
// =====================================================

const DonationReport = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // =====================================================
    // DONOR STATES
    // =====================================================

    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] =
        useState(1);

    const [itemPerPage, setItemPerPage] =
        useState(5);

    const [selectedDonor, setSelectedDonor] =
        useState(null);

    const [isViewModalOpen, setIsViewModalOpen] =
        useState(false);

    // =====================================================
    // DONATION MODAL
    // =====================================================

    const [isDonationModalOpen, setIsDonationModalOpen] =
        useState(false);

    const [donationSubmitting, setDonationSubmitting] =
        useState(false);

    const [donationForm, setDonationForm] =
        useState({
            DonationDate: getTodayDate(),
            Amount: "",
            PaymentMode: "CASH",
            TransactionRef: "",
            PlantationStatus: "Pending",
            PlantationUkId: "",
            TreesPromised: "",
            CagesPromised: "",
            Remarks: "",
        });

    // =====================================================
    // REDUX
    // =====================================================

    const {
        donors = [],
        loading,
        deleteLoading,
        error,
    } = useSelector(
        (state) => state.donor
    );

    // =====================================================
    // GET DONORS
    // =====================================================

    useEffect(() => {
        dispatch(getAllDonors());
    }, [dispatch]);

    // =====================================================
    // SEARCH
    // =====================================================

    const filteredDonors = useMemo(() => {
        const text = search
            .trim()
            .toLowerCase();

        if (!text) {
            return donors;
        }

        return donors.filter((item) => {
            return (
                item.DonorName
                    ?.toLowerCase()
                    .includes(text) ||
                item.MobileNo
                    ?.toLowerCase()
                    .includes(text) ||
                item.PANNo
                    ?.toLowerCase()
                    .includes(text) ||
                item.Address
                    ?.toLowerCase()
                    .includes(text)
            );
        });
    }, [donors, search]);

    // =====================================================
    // PAGINATION
    // =====================================================

    const lastIndex =
        currentPage * itemPerPage;

    const firstIndex =
        lastIndex - itemPerPage;

    const currentDonors =
        filteredDonors.slice(
            firstIndex,
            lastIndex
        );

    const handlePaginationChange = (
        page,
        pageSize
    ) => {
        setCurrentPage(page);

        setItemPerPage(pageSize);
    };

    // =====================================================
    // VIEW DONOR
    // =====================================================

    const handleViewDonor = (donor) => {
        console.log(
            "========== SELECTED DONOR =========="
        );

        console.log(
            "FULL DONOR DATA:",
            donor
        );

        console.log(
            "PROFILE PHOTO:",
            donor?.ProfilePhoto
        );

        console.log(
            "===================================="
        );

        setSelectedDonor(donor);

        setIsViewModalOpen(true);
    };

    // =====================================================
    // OPEN ADD DONATION
    // =====================================================

    const handleOpenDonationModal = (
        donor
    ) => {
        if (!donor?.DonorUkId) {
            toast.error(
                "ડોનરનો અનન્ય ક્રમાંક મળ્યો નથી."
            );

            return;
        }

        setSelectedDonor(donor);

        setDonationForm({
            DonationDate: getTodayDate(),
            Amount: "",
            PaymentMode: "CASH",
            TransactionRef: "",
            PlantationStatus: "Pending",
            PlantationUkId: "",
            TreesPromised: "",
            CagesPromised: "",
            Remarks: "",
        });

        setIsDonationModalOpen(true);
    };

    // =====================================================
    // DONATION INPUT CHANGE
    // =====================================================

    const handleDonationChange = (
        e
    ) => {
        const {
            name,
            value,
        } = e.target;

        setDonationForm(
            (previous) => ({
                ...previous,
                [name]: value,
            })
        );
    };

    // =====================================================
    // ADD DONATION
    // =====================================================

    const handleAddDonation = async (
        e
    ) => {
        e.preventDefault();

        if (!selectedDonor?.DonorUkId) {
            toast.error(
                "ડોનરનો અનન્ય ક્રમાંક મળ્યો નથી."
            );

            return;
        }

        // =============================================
        // EmployeeUkId JWT માંથી
        // =============================================

        const employeeUkId =
            getEmployeeUkIdFromToken();

        if (!employeeUkId) {
            toast.error(
                "EmployeeUkId મળ્યો નથી. કૃપા કરીને ફરી Login કરો."
            );

            console.error(
                "EmployeeUkId JWT માં પણ મળ્યો નથી."
            );

            return;
        }

        // =============================================
        // VALIDATION
        // =============================================

        if (
            !donationForm.DonationDate
        ) {
            toast.error(
                "દાનની તારીખ પસંદ કરો."
            );

            return;
        }

        if (
            !donationForm.Amount ||
            Number(donationForm.Amount) <= 0
        ) {
            toast.error(
                "માન્ય દાનની રકમ દાખલ કરો."
            );

            return;
        }

        if (
            donationForm.TreesPromised &&
            Number(
                donationForm.TreesPromised
            ) < 0
        ) {
            toast.error(
                "વૃક્ષોની સંખ્યા માન્ય નથી."
            );

            return;
        }

        if (
            donationForm.CagesPromised &&
            Number(
                donationForm.CagesPromised
            ) < 0
        ) {
            toast.error(
                "પાંજરાની સંખ્યા માન્ય નથી."
            );

            return;
        }

        // =============================================
        // REQUEST BODY
        // =============================================

        const body = {
            DonorUkId:
                selectedDonor.DonorUkId,

            EmployeeUkId:
                employeeUkId,

            DonationDate:
                donationForm.DonationDate,

            Amount:
                Number(
                    donationForm.Amount
                ),

            PaymentMode:
                donationForm.PaymentMode,

            TransactionRef:
                donationForm.TransactionRef
                    ?.trim() || null,

            PlantationStatus:
                donationForm.PlantationStatus,

            PlantationUkId:
                donationForm.PlantationUkId
                    ?.trim() || null,

            TreesPromised:
                Number(
                    donationForm.TreesPromised || 0
                ),

            CagesPromised:
                Number(
                    donationForm.CagesPromised || 0
                ),

            Remarks:
                donationForm.Remarks
                    ?.trim() || null,
        };

        console.log(
            "========== ADD DONATION BODY =========="
        );

        console.log(body);

        console.log(
            "========================================"
        );

        try {
            setDonationSubmitting(true);

            // =============================================
            // API CALL
            // =============================================

            const response =
                await donationService.addDonation(
                    body
                );

            console.log(
                "ADD DONATION RESPONSE:",
                response
            );

            if (
                response?.success === false
            ) {
                throw new Error(
                    response?.message ||
                    "દાન ઉમેરવામાં સમસ્યા આવી."
                );
            }

            toast.success(
                response?.message ||
                "દાન સફળતાપૂર્વક ઉમેરવામાં આવ્યું."
            );

            // =============================================
            // CLOSE MODAL
            // =============================================

            setIsDonationModalOpen(
                false
            );

            setSelectedDonor(null);

            // =============================================
            // RESET
            // =============================================

            setDonationForm({
                DonationDate:
                    getTodayDate(),

                Amount: "",

                PaymentMode: "CASH",

                TransactionRef: "",

                PlantationStatus:
                    "Pending",

                PlantationUkId: "",

                TreesPromised: "",

                CagesPromised: "",

                Remarks: "",
            });

            // =============================================
            // REFRESH DONORS
            // =============================================

            dispatch(
                getAllDonors()
            );
        } catch (err) {
            console.error(
                "ADD DONATION ERROR:",
                err
            );

            const message =
                err?.response?.data
                    ?.message ||
                err?.message ||
                "દાન ઉમેરવામાં સમસ્યા આવી.";

            toast.error(message);
        } finally {
            setDonationSubmitting(
                false
            );
        }
    };

    // =====================================================
    // DELETE
    // =====================================================

    const handleDeleteDonor = (
        donor
    ) => {
        const donorUkId =
            donor?.DonorUkId;

        if (!donorUkId) {
            toast.error(
                "ડોનરનો અનન્ય ક્રમાંક મળ્યો નથી."
            );

            return;
        }

        Modal.confirm({
            title: "ડોનર કાઢી નાખવો છે?",

            content: (
                <div>
                    શું તમે{" "}
                    <strong>
                        {donor.DonorName}
                    </strong>{" "}
                    ને કાઢી નાખવા માંગો છો?

                    <br />

                    <small className="text-muted">
                        આ પ્રક્રિયા પાછી લાવી
                        શકાશે નહીં.
                    </small>
                </div>
            ),

            okText: "કાઢી નાખો",

            cancelText: "રદ કરો",

            okType: "danger",

            centered: true,

            async onOk() {
                try {
                    const result =
                        await dispatch(
                            deleteDonor(
                                donorUkId
                            )
                        ).unwrap();

                    toast.success(
                        result?.message ||
                        "ડોનર સફળતાપૂર્વક કાઢી નાખવામાં આવ્યો."
                    );

                    if (
                        selectedDonor
                            ?.DonorUkId ===
                        donorUkId
                    ) {
                        setIsViewModalOpen(
                            false
                        );

                        setSelectedDonor(
                            null
                        );
                    }
                } catch (err) {
                    toast.error(
                        err?.message ||
                        "ડોનર કાઢી નાખવામાં સમસ્યા આવી."
                    );

                    throw err;
                }
            },
        });
    };

    // =====================================================
    // CLOSE VIEW MODAL
    // =====================================================

    const handleCloseViewModal =
        () => {
            setSelectedDonor(null);

            setIsViewModalOpen(false);
        };

    // =====================================================
    // CLOSE DONATION MODAL
    // =====================================================

    const handleCloseDonationModal =
        () => {
            if (
                donationSubmitting
            ) {
                return;
            }

            setIsDonationModalOpen(
                false
            );

            setSelectedDonor(null);
        };

    // =====================================================
    // ERROR
    // =====================================================

    if (error) {
        return (
            <div className="container-fluid mt-4">
                <div className="alert alert-danger">
                    {typeof error ===
                    "string"
                        ? error
                        : "ડોનરની માહિતી લોડ કરવામાં સમસ્યા આવી."}
                </div>
            </div>
        );
    }

    // =====================================================
    // LOADING
    // =====================================================

    if (loading) {
        return (
            <div className="text-center p-5">
                <div className="spinner-border text-success" />

                <p className="mt-3">
                    ડોનરની માહિતી લોડ થઈ રહી છે...
                </p>
            </div>
        );
    }

    // =====================================================
    // UI
    // =====================================================

    return (
        <div className="container-fluid mt-4">

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h5 className="m-0">
                        દાન ઇતિહાસ
                    </h5>

                    <small className="text-muted">
                        કુલ ડોનર :{" "}
                        {filteredDonors.length}
                    </small>
                </div>
            </div>

            {/* =================================================
                SEARCH
            ================================================= */}

            <div className="row mb-3">
                <div className="col-md-5">
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="નામ, મોબાઇલ, PAN શોધો..."
                            value={search}
                            onChange={(e) => {
                                setSearch(
                                    e.target.value
                                );

                                setCurrentPage(
                                    1
                                );
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* =================================================
                TABLE
            ================================================= */}

            <div className="table-responsive">
                <table className="table table-hover align-middle">

                    <thead className="table-light">
                        <tr>
                            <th>ID</th>

                            <th>
                                નામ
                            </th>

                            <th>
                                મોબાઇલ
                            </th>

                            <th>
                                PAN
                            </th>

                            <th>
                                કુલ દાન
                            </th>

                            <th>
                                સ્થિતિ
                            </th>

                            <th width="220">
                                ક્રિયા
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentDonors.length >
                        0 ? (
                            currentDonors.map(
                                (item) => (
                                    <tr
                                        key={
                                            item.DonorUkId
                                        }
                                    >
                                        <td>
                                            {
                                                item.DonorId
                                            }
                                        </td>

                                        <td>
                                            <strong>
                                                {
                                                    item.DonorName
                                                }
                                            </strong>
                                        </td>

                                        <td>
                                            {
                                                item.MobileNo
                                            }
                                        </td>

                                        <td>
                                            {
                                                item.PANNo
                                            }
                                        </td>

                                        <td className="text-success fw-bold">
                                            ₹{" "}
                                            {Number(
                                                item.TotalDonation ||
                                                0
                                            ).toLocaleString(
                                                "en-IN"
                                            )}
                                        </td>

                                        <td>
                                            {item.Status ? (
                                                <span className="badge bg-success">
                                                    સક્રિય
                                                </span>
                                            ) : (
                                                <span className="badge bg-danger">
                                                    નિષ્ક્રિય
                                                </span>
                                            )}
                                        </td>

                                        <td>
                                            <div className="d-flex gap-2">

                                                {/* VIEW */}

                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-success"
                                                    title="વિગતો જુઓ"
                                                    onClick={() =>
                                                        handleViewDonor(
                                                            item
                                                        )
                                                    }
                                                >
                                                    <FaEye />
                                                </button>

                                                {/* ADD DONATION */}

                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-success"
                                                    title="દાન ઉમેરો"
                                                    onClick={() =>
                                                        handleOpenDonationModal(
                                                            item
                                                        )
                                                    }
                                                >
                                                    <FaPlus />
                                                </button>

                                                {/* EDIT */}

                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-primary"
                                                    title="ફેરફાર કરો"
                                                    onClick={() =>
                                                        navigate(
                                                            `/dashboard/donor/add?id=${item.DonorUkId}`
                                                        )
                                                    }
                                                >
                                                    <FaEdit />
                                                </button>

                                                {/* DELETE */}

                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-outline-danger"
                                                    title="કાઢી નાખો"
                                                    disabled={
                                                        deleteLoading
                                                    }
                                                    onClick={() =>
                                                        handleDeleteDonor(
                                                            item
                                                        )
                                                    }
                                                >
                                                    {deleteLoading ? (
                                                        <span className="spinner-border spinner-border-sm" />
                                                    ) : (
                                                        <FaTrash />
                                                    )}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )
                        ) : (
                            <tr>
                                <td
                                    colSpan={
                                        7
                                    }
                                    className="text-center py-4"
                                >
                                    કોઈ ડોનર મળ્યો નથી.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* =================================================
                PAGINATION
            ================================================= */}

            {filteredDonors.length >
                0 && (
                <div className="d-flex justify-content-center mt-3">
                    <Pagination
                        current={
                            currentPage
                        }
                        pageSize={
                            itemPerPage
                        }
                        total={
                            filteredDonors.length
                        }
                        showSizeChanger
                        pageSizeOptions={[
                            "5",
                            "10",
                            "20",
                            "50",
                        ]}
                        onChange={
                            handlePaginationChange
                        }
                    />
                </div>
            )}

            {/* =====================================================
                DONOR DETAILS MODAL
            ===================================================== */}

            <Modal
                title={null}
                open={
                    isViewModalOpen
                }
                onCancel={
                    handleCloseViewModal
                }
                footer={null}
                width={850}
                centered
                destroyOnClose
                styles={{
                    body: {
                        padding: 0,
                    },
                }}
            >
                {selectedDonor && (
                    <div>

                        {/* HEADER */}

                        <div
                            className="p-4"
                            style={{
                                background:
                                    "linear-gradient(135deg, #198754 0%, #157347 100%)",
                                color: "#fff",
                                borderRadius:
                                    "8px 8px 0 0",
                            }}
                        >
                            <div className="d-flex align-items-center gap-4">

                                {/* IMAGE */}

                                <div>
                                    {selectedDonor.ProfilePhoto ? (
                                        <img
                                            src={
                                                selectedDonor.ProfilePhoto.startsWith(
                                                    "http"
                                                )
                                                    ? selectedDonor.ProfilePhoto
                                                    : `https://green-army-api.myeventz.in/uploads/${selectedDonor.ProfilePhoto}`
                                            }
                                            alt={
                                                selectedDonor.DonorName
                                            }
                                            onError={(
                                                e
                                            ) => {
                                                e.currentTarget.style.display =
                                                    "none";
                                            }}
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                                objectFit:
                                                    "cover",
                                                borderRadius:
                                                    "50%",
                                                border:
                                                    "4px solid rgba(255,255,255,0.8)",
                                            }}
                                        />
                                    ) : (
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                                borderRadius:
                                                    "50%",
                                                background:
                                                    "#fff",
                                                color:
                                                    "#198754",
                                                fontSize:
                                                    "38px",
                                                fontWeight:
                                                    "700",
                                            }}
                                        >
                                            {selectedDonor.DonorName
                                                ?.charAt(
                                                    0
                                                )
                                                ?.toUpperCase() ||
                                                "D"}
                                        </div>
                                    )}
                                </div>

                                {/* NAME */}

                                <div>
                                    <h4 className="mb-2 fw-bold">
                                        {
                                            selectedDonor.DonorName
                                        }
                                    </h4>

                                    <div className="d-flex gap-2 flex-wrap">

                                        {selectedDonor.IsVIPDonor && (
                                            <span className="badge bg-warning text-dark">
                                                ⭐ વિશેષ દાતા
                                            </span>
                                        )}

                                        {selectedDonor.Status ? (
                                            <span className="badge bg-light text-success">
                                                ● સક્રિય
                                            </span>
                                        ) : (
                                            <span className="badge bg-light text-danger">
                                                ● નિષ્ક્રિય
                                            </span>
                                        )}
                                    </div>

                                    <small className="d-block mt-2">
                                        દાતા ક્રમાંક :{" "}
                                        {
                                            selectedDonor.DonorId
                                        }
                                    </small>
                                </div>
                            </div>
                        </div>

                        {/* BODY */}

                        <div className="p-4">

                            <div className="d-flex align-items-center mb-3">
                                <div
                                    style={{
                                        width: "4px",
                                        height: "22px",
                                        background:
                                            "#198754",
                                        borderRadius:
                                            "4px",
                                        marginRight:
                                            "10px",
                                    }}
                                />

                                <h6 className="mb-0 fw-bold">
                                    મૂળભૂત માહિતી
                                </h6>
                            </div>

                            <div className="row g-3">

                                <DetailBox
                                    label="દાતા ક્રમાંક"
                                    value={
                                        selectedDonor.DonorId
                                    }
                                />

                                <DetailBox
                                    label="દાતા અનન્ય ક્રમાંક"
                                    value={
                                        selectedDonor.DonorUkId
                                    }
                                />

                                <DetailBox
                                    label="મોબાઇલ નંબર"
                                    value={
                                        selectedDonor.MobileNo
                                    }
                                />

                                <DetailBox
                                    label="વૈકલ્પિક મોબાઇલ નંબર"
                                    value={
                                        selectedDonor.AlternateMobileNo
                                    }
                                />

                                <DetailBox
                                    label="ઈમેલ"
                                    value={
                                        selectedDonor.Email
                                    }
                                />

                                <DetailBox
                                    label="PAN નંબર"
                                    value={
                                        selectedDonor.PANNo
                                    }
                                />

                                <DetailBox
                                    label="જન્મ તારીખ"
                                    value={formatDate(
                                        selectedDonor.BirthDate
                                    )}
                                />

                                <DetailBox
                                    label="લગ્ન તારીખ"
                                    value={formatDate(
                                        selectedDonor.MarriageDate
                                    )}
                                />

                                <DetailBox
                                    label="કર્મચારીનું નામ"
                                    value={
                                        selectedDonor.EmployeeName
                                    }
                                />

                                <div className="col-md-12">
                                    <div className="border rounded p-3">
                                        <small className="text-muted">
                                            સરનામું
                                        </small>

                                        <div className="fw-semibold mt-1">
                                            {
                                                selectedDonor.Address
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* DONATION */}

                            <div className="d-flex align-items-center mt-4 mb-3">
                                <div
                                    style={{
                                        width: "4px",
                                        height: "22px",
                                        background:
                                            "#198754",
                                        borderRadius:
                                            "4px",
                                        marginRight:
                                            "10px",
                                    }}
                                />

                                <h6 className="mb-0 fw-bold">
                                    દાનની માહિતી
                                </h6>
                            </div>

                            <div className="row g-3">

                                <StatBox
                                    label="કુલ દાન"
                                    value={`₹ ${Number(
                                        selectedDonor.TotalDonation ||
                                        0
                                    ).toLocaleString(
                                        "en-IN"
                                    )}`}
                                />

                                <StatBox
                                    label="કુલ વૃક્ષો"
                                    value={
                                        selectedDonor.TotalTrees ||
                                        0
                                    }
                                />

                                <StatBox
                                    label="કુલ પાંજરા"
                                    value={
                                        selectedDonor.TotalCages ||
                                        0
                                    }
                                />
                            </div>

                            {/* ACCOUNT */}

                            <div className="d-flex align-items-center mt-4 mb-3">
                                <div
                                    style={{
                                        width: "4px",
                                        height: "22px",
                                        background:
                                            "#198754",
                                        borderRadius:
                                            "4px",
                                        marginRight:
                                            "10px",
                                    }}
                                />

                                <h6 className="mb-0 fw-bold">
                                    ખાતાની માહિતી
                                </h6>
                            </div>

                            <div className="row g-3">

                                <div className="col-md-6">
                                    <div className="border rounded p-3">
                                        <small className="text-muted">
                                            વિશેષ દાતા સ્થિતિ
                                        </small>

                                        <div className="mt-2">
                                            {selectedDonor.IsVIPDonor ? (
                                                <span className="badge bg-warning text-dark">
                                                    ⭐ વિશેષ દાતા
                                                </span>
                                            ) : (
                                                <span className="badge bg-secondary">
                                                    સામાન્ય દાતા
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="border rounded p-3">
                                        <small className="text-muted">
                                            ખાતાની સ્થિતિ
                                        </small>

                                        <div className="mt-2">
                                            {selectedDonor.Status ? (
                                                <span className="badge bg-success">
                                                    ● સક્રિય
                                                </span>
                                            ) : (
                                                <span className="badge bg-danger">
                                                    ● નિષ્ક્રિય
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="border rounded p-3">
                                        <small className="text-muted">
                                            નોંધણીની તારીખ
                                        </small>

                                        <div className="fw-semibold mt-1">
                                            {formatDateTime(
                                                selectedDonor.CreatedDate
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end mt-4 pt-3 border-top">
                                <button
                                    type="button"
                                    className="btn btn-success px-4"
                                    onClick={
                                        handleCloseViewModal
                                    }
                                >
                                    બંધ કરો
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            {/* =====================================================
                ADD DONATION MODAL
            ===================================================== */}

            <Modal
                title={null}
                open={
                    isDonationModalOpen
                }
                onCancel={
                    handleCloseDonationModal
                }
                footer={null}
                width={700}
                centered
                destroyOnClose
                closable={!donationSubmitting}
                maskClosable={
                    !donationSubmitting
                }
            >
                <div>

                    {/* MODAL HEADER */}

                    <div
                        className="d-flex justify-content-between align-items-center p-3 mb-4"
                        style={{
                            background:
                                "linear-gradient(135deg, #198754, #157347)",
                            color: "#fff",
                            borderRadius:
                                "10px",
                        }}
                    >
                        <div>
                            <h5 className="mb-1 fw-bold">
                                દાન ઉમેરો
                            </h5>

                            <small>
                                દાતા :{" "}
                                <strong>
                                    {
                                        selectedDonor?.DonorName
                                    }
                                </strong>
                            </small>
                        </div>

                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                width: "45px",
                                height: "45px",
                                background:
                                    "rgba(255,255,255,0.2)",
                            }}
                        >
                            <FaRupeeSign />
                        </div>
                    </div>

                    <form
                        onSubmit={
                            handleAddDonation
                        }
                    >

                        {/* DONOR INFO */}

                        <div className="alert alert-light border mb-4">
                            <div className="row">

                                <div className="col-md-6">
                                    <small className="text-muted">
                                        દાતા ક્રમાંક
                                    </small>

                                    <div className="fw-semibold">
                                        {
                                            selectedDonor?.DonorId
                                        }
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <small className="text-muted">
                                        મોબાઇલ
                                    </small>

                                    <div className="fw-semibold">
                                        {
                                            selectedDonor?.MobileNo
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-3">

                            {/* DATE */}

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">
                                    દાનની તારીખ *
                                </label>

                                <input
                                    type="date"
                                    name="DonationDate"
                                    className="form-control"
                                    value={
                                        donationForm.DonationDate
                                    }
                                    onChange={
                                        handleDonationChange
                                    }
                                    required
                                />
                            </div>

                            {/* AMOUNT */}

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">
                                    દાનની રકમ *
                                </label>

                                <div className="input-group">
                                    <span className="input-group-text">
                                        ₹
                                    </span>

                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        name="Amount"
                                        className="form-control"
                                        placeholder="150000"
                                        value={
                                            donationForm.Amount
                                        }
                                        onChange={
                                            handleDonationChange
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            {/* PAYMENT */}

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">
                                    ચુકવણીનો પ્રકાર
                                </label>

                                <select
                                    name="PaymentMode"
                                    className="form-select"
                                    value={
                                        donationForm.PaymentMode
                                    }
                                    onChange={
                                        handleDonationChange
                                    }
                                >
                                    <option value="CASH">
                                        રોકડ
                                    </option>

                                    <option value="UPI">
                                        UPI
                                    </option>

                                    <option value="ONLINE">
                                        ઓનલાઈન
                                    </option>

                                    <option value="CHEQUE">
                                        ચેક
                                    </option>

                                    <option value="BANK">
                                        બેંક ટ્રાન્સફર
                                    </option>
                                </select>
                            </div>

                            {/* TRANSACTION */}

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">
                                    વ્યવહાર ક્રમાંક
                                </label>

                                <input
                                    type="text"
                                    name="TransactionRef"
                                    className="form-control"
                                    placeholder="Transaction ID"
                                    value={
                                        donationForm.TransactionRef
                                    }
                                    onChange={
                                        handleDonationChange
                                    }
                                />
                            </div>

                            {/* PLANTATION STATUS */}

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">
                                    વૃક્ષારોપણ સ્થિતિ
                                </label>

                                <select
                                    name="PlantationStatus"
                                    className="form-select"
                                    value={
                                        donationForm.PlantationStatus
                                    }
                                    onChange={
                                        handleDonationChange
                                    }
                                >
                                    <option value="Pending">
                                        બાકી
                                    </option>

                                    <option value="Completed">
                                        પૂર્ણ
                                    </option>

                                    <option value="InProgress">
                                        ચાલુ છે
                                    </option>
                                </select>
                            </div>

                            {/* PLANTATION ID */}

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">
                                    વૃક્ષારોપણ અનન્ય ક્રમાંક
                                </label>

                                <input
                                    type="text"
                                    name="PlantationUkId"
                                    className="form-control"
                                    placeholder="Plantation UUID"
                                    value={
                                        donationForm.PlantationUkId
                                    }
                                    onChange={
                                        handleDonationChange
                                    }
                                />
                            </div>

                            {/* TREES */}

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">
                                    <FaTree className="text-success me-2" />
                                    વચન આપેલા વૃક્ષો
                                </label>

                                <input
                                    type="number"
                                    min="0"
                                    name="TreesPromised"
                                    className="form-control"
                                    placeholder="1500"
                                    value={
                                        donationForm.TreesPromised
                                    }
                                    onChange={
                                        handleDonationChange
                                    }
                                />
                            </div>

                            {/* CAGES */}

                            <div className="col-md-6">
                                <label className="form-label fw-semibold">
                                    <FaBox className="text-success me-2" />
                                    વચન આપેલા પાંજરા
                                </label>

                                <input
                                    type="number"
                                    min="0"
                                    name="CagesPromised"
                                    className="form-control"
                                    placeholder="1500"
                                    value={
                                        donationForm.CagesPromised
                                    }
                                    onChange={
                                        handleDonationChange
                                    }
                                />
                            </div>

                            {/* REMARKS */}

                            <div className="col-md-12">
                                <label className="form-label fw-semibold">
                                    નોંધ
                                </label>

                                <textarea
                                    name="Remarks"
                                    rows="3"
                                    className="form-control"
                                    placeholder="દાન અંગેની નોંધ..."
                                    value={
                                        donationForm.Remarks
                                    }
                                    onChange={
                                        handleDonationChange
                                    }
                                />
                            </div>
                        </div>

                        {/* BUTTONS */}

                        <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">

                            <button
                                type="button"
                                className="btn btn-light px-4"
                                disabled={
                                    donationSubmitting
                                }
                                onClick={
                                    handleCloseDonationModal
                                }
                            >
                                <FaTimes className="me-2" />
                                રદ કરો
                            </button>

                            <button
                                type="submit"
                                className="btn btn-success px-4"
                                disabled={
                                    donationSubmitting
                                }
                            >
                                {donationSubmitting ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" />

                                        દાન ઉમેરાઈ રહ્યું છે...
                                    </>
                                ) : (
                                    <>
                                        <FaSave className="me-2" />

                                        દાન સાચવો
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

// =====================================================
// DETAIL BOX
// =====================================================

const DetailBox = ({
    label,
    value,
}) => {
    return (
        <div className="col-md-6">
            <div
                className="border rounded p-3 h-100"
                style={{
                    background:
                        "#f8faf9",
                }}
            >
                <small className="text-muted">
                    {label}
                </small>

                <div
                    className="fw-semibold mt-1"
                    style={{
                        wordBreak:
                            "break-word",
                    }}
                >
                    {value || "-"}
                </div>
            </div>
        </div>
    );
};

// =====================================================
// STAT BOX
// =====================================================

const StatBox = ({
    label,
    value,
}) => {
    return (
        <div className="col-md-4">
            <div
                className="rounded p-3 text-center h-100"
                style={{
                    background:
                        "linear-gradient(135deg, #f0fff5, #e5f8ec)",
                    border:
                        "1px solid #ccebd8",
                }}
            >
                <small className="text-muted">
                    {label}
                </small>

                <h5 className="text-success fw-bold mt-2 mb-0">
                    {value}
                </h5>
            </div>
        </div>
    );
};

export default DonationReport;