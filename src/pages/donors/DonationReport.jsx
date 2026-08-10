import { Pagination, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { FaEye, FaSearch, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAllDonors } from "../../store/Reduxslice/donorSlice";

const DonationReport = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(5);

    const [selectedDonor, setSelectedDonor] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // =========================
    // REDUX
    // =========================

    const {
        donors = [],
        loading,
        error,
        message,
    } = useSelector((state) => state.donor);

    // =========================
    // GET DONORS
    // =========================

    useEffect(() => {
       dispatch(getAllDonors());
    }, [dispatch]);

    // =========================
    // SEARCH
    // =========================

    const filteredDonors = donors.filter((item) => {
        const searchText = search.toLowerCase().trim();

        return (
            item.DonorName?.toLowerCase().includes(searchText) ||
            item.MobileNo?.toLowerCase().includes(searchText) ||
            item.PANNo?.toLowerCase().includes(searchText) ||
            item.Address?.toLowerCase().includes(searchText)
        );
    });

    // =========================
    // PAGINATION
    // =========================

    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;

    const currentDonors = filteredDonors.slice(
        firstIndex,
        lastIndex
    );

    const handlePaginationChange = (page, pageSize) => {
        setCurrentPage(page);
        setItemPerPage(pageSize);
    };

    // =========================
    // SEARCH CHANGE
    // =========================

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    // =========================
    // VIEW DONOR
    // =========================

    const handleViewDonor = (donor) => {
        setSelectedDonor(donor);
        setIsModalOpen(true);
    };

    // =========================
    // CLOSE MODAL
    // =========================

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDonor(null);
    };

    // =========================
    // DATE FORMAT
    // =========================

    const formatDate = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("gu-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    const formatDateTime = (date) => {
        if (!date) return "-";

        return new Date(date).toLocaleString("gu-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    // =========================
    // LOADING
    // =========================

    if (loading) {
        return (
            <div className="container-fluid mt-4">
                <div className="text-center p-5">
                    <div
                        className="spinner-border text-success"
                        role="status"
                    />

                    <p className="mt-3">
                        Donor માહિતી લોડ થઈ રહી છે...
                    </p>
                </div>
            </div>
        );
    }

    // =========================
    // ERROR
    // =========================

    if (error) {
        return (
            <div className="container-fluid mt-4">
                <div className="alert alert-danger">
                    {message ||
                        "Donor માહિતી મેળવવામાં સમસ્યા આવી."}
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid mt-4">

            {/* ================= HEADER ================= */}

            <div className="d-flex justify-content-between align-items-center mb-3">

                <div>
                    <h5 className="m-0">
                        દાન ઇતિહાસ
                    </h5>

                    <small className="text-muted">
                        કુલ Donor: {filteredDonors.length}
                    </small>
                </div>

              

            </div>

            {/* ================= SEARCH ================= */}

            <div className="row mb-3">

                <div className="col-md-5">

                    <div className="input-group">

                        <span className="input-group-text">
                            <FaSearch />
                        </span>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="નામ, મોબાઇલ, PAN અથવા સરનામું શોધો..."
                            value={search}
                            onChange={handleSearch}
                        />

                    </div>

                </div>

            </div>

            {/* ================= TABLE ================= */}

            <div className="table-responsive">

                <table className="table table-hover align-middle mb-0">

                    <thead className="table-light">

                        <tr>
                            <th>ID</th>
                            <th>નામ</th>
                            <th>મોબાઇલ</th>
                            <th>સરનામું</th>
                            <th>PAN No.</th>
                            <th>કુલ દાન</th>
                            <th>કુલ વૃક્ષો</th>
                            <th>કુલ કેજ</th>
                            <th>VIP</th>
                            <th>સ્થિતિ</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {currentDonors.length > 0 ? (

                            currentDonors.map((item) => (

                                <tr key={item.DonorUkId}>

                                    {/* ID */}

                                    <td>
                                        {item.DonorId}
                                    </td>

                                    {/* NAME */}

                                    <td>
                                        <strong>
                                            {item.DonorName || "-"}
                                        </strong>
                                    </td>

                                    {/* MOBILE */}

                                    <td>
                                        {item.MobileNo || "-"}
                                    </td>

                                    {/* ADDRESS */}

                                    <td>
                                        {item.Address || "-"}
                                    </td>

                                    {/* PAN */}

                                    <td>
                                        {item.PANNo || "-"}
                                    </td>

                                    {/* DONATION */}

                                    <td>
                                        <span className="fw-bold text-success">
                                            ₹{" "}
                                            {Number(
                                                item.TotalDonation || 0
                                            ).toLocaleString("en-IN")}
                                        </span>
                                    </td>

                                    {/* TREES */}

                                    <td>
                                        {item.TotalTrees || 0}
                                    </td>

                                    {/* CAGES */}

                                    <td>
                                        {item.TotalCages || 0}
                                    </td>

                                    {/* VIP */}

                                    <td>

                                        {item.IsVIPDonor ? (

                                            <span className="badge bg-warning text-dark">
                                                VIP
                                            </span>

                                        ) : (

                                            <span className="badge bg-secondary">
                                                સામાન્ય
                                            </span>

                                        )}

                                    </td>

                                    {/* STATUS */}

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

                                    {/* ACTION */}

                                    <td>

                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-success"
                                            onClick={() =>
                                                handleViewDonor(item)
                                            }
                                            title="Donor ની માહિતી જુઓ"
                                        >
                                            <FaEye />
                                        </button>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="11"
                                    className="text-center py-5"
                                >

                                    <div className="text-muted">

                                        {search
                                            ? "કોઈ Donor મળ્યો નથી."
                                            : "હાલમાં કોઈ Donor ઉપલબ્ધ નથી."
                                        }

                                    </div>

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

            {/* ================= PAGINATION ================= */}

            {filteredDonors.length > 0 && (

                <div className="d-flex justify-content-center mt-4">

                    <Pagination
                        current={currentPage}
                        pageSize={itemPerPage}
                        total={filteredDonors.length}
                        showSizeChanger
                        pageSizeOptions={[
                            "5",
                            "10",
                            "20",
                            "50",
                        ]}
                        onChange={handlePaginationChange}
                    />

                </div>

            )}

            {/* =====================================================
                DONOR DETAILS MODAL
            ===================================================== */}

            <Modal
                title="Donor ની સંપૂર્ણ માહિતી"
                open={isModalOpen}
                onCancel={handleCloseModal}
                footer={null}
                width={750}
                centered
            >

                {selectedDonor && (

                    <div>

                        {/* ================= PROFILE ================= */}

                        <div className="text-center mb-4">

                            {selectedDonor.ProfilePhoto ? (

                                <img
                                    src={`https://green-army-api.myeventz.in/uploads/${selectedDonor.ProfilePhoto}`}
                                    alt={selectedDonor.DonorName}
                                    style={{
                                        width: "110px",
                                        height: "110px",
                                        objectFit: "cover",
                                        borderRadius: "50%",
                                        border: "4px solid #198754",
                                    }}
                                />

                            ) : (

                                <div
                                    className="d-flex align-items-center justify-content-center mx-auto"
                                    style={{
                                        width: "110px",
                                        height: "110px",
                                        borderRadius: "50%",
                                        background: "#e9f7ef",
                                        color: "#198754",
                                        fontSize: "40px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {selectedDonor.DonorName
                                        ?.charAt(0)
                                        ?.toUpperCase() || "D"}
                                </div>

                            )}

                            <h5 className="mt-3 mb-1">
                                {selectedDonor.DonorName}
                            </h5>

                            <div>

                                {selectedDonor.IsVIPDonor && (

                                    <span className="badge bg-warning text-dark me-2">
                                        VIP Donor
                                    </span>

                                )}

                                {selectedDonor.Status ? (

                                    <span className="badge bg-success">
                                        સક્રિય
                                    </span>

                                ) : (

                                    <span className="badge bg-danger">
                                        નિષ્ક્રિય
                                    </span>

                                )}

                            </div>

                        </div>

                        {/* ================= BASIC DETAILS ================= */}

                        <div className="row g-3">

                            <div className="col-md-6">

                                <div className="border rounded p-3 h-100">

                                    <small className="text-muted">
                                        Donor ID
                                    </small>

                                    <div className="fw-bold mt-1">
                                        {selectedDonor.DonorId || "-"}
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="border rounded p-3 h-100">

                                    <small className="text-muted">
                                        Donor Unique ID
                                    </small>

                                    <div
                                        className="fw-bold mt-1"
                                        style={{
                                            fontSize: "12px",
                                            wordBreak: "break-all",
                                        }}
                                    >
                                        {selectedDonor.DonorUkId || "-"}
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="border rounded p-3 h-100">

                                    <small className="text-muted">
                                        મોબાઇલ નંબર
                                    </small>

                                    <div className="fw-bold mt-1">
                                        {selectedDonor.MobileNo || "-"}
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="border rounded p-3 h-100">

                                    <small className="text-muted">
                                        Alternate Mobile
                                    </small>

                                    <div className="fw-bold mt-1">
                                        {selectedDonor.AlternateMobileNo ||
                                            "-"}
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="border rounded p-3 h-100">

                                    <small className="text-muted">
                                        PAN Number
                                    </small>

                                    <div className="fw-bold mt-1">
                                        {selectedDonor.PANNo || "-"}
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="border rounded p-3 h-100">

                                    <small className="text-muted">
                                        જન્મ તારીખ
                                    </small>

                                    <div className="fw-bold mt-1">
                                        {formatDate(
                                            selectedDonor.BirthDate
                                        )}
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="border rounded p-3 h-100">

                                    <small className="text-muted">
                                        લગ્ન તારીખ
                                    </small>

                                    <div className="fw-bold mt-1">
                                        {formatDate(
                                            selectedDonor.MarriageDate
                                        )}
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="border rounded p-3 h-100">

                                    <small className="text-muted">
                                        Employee Name
                                    </small>

                                    <div className="fw-bold mt-1">
                                        {selectedDonor.EmployeeName ||
                                            "-"}
                                    </div>

                                </div>

                            </div>

                            <div className="col-md-12">

                                <div className="border rounded p-3">

                                    <small className="text-muted">
                                        સરનામું
                                    </small>

                                    <div className="fw-bold mt-1">
                                        {selectedDonor.Address || "-"}
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ================= DONATION SUMMARY ================= */}

                        <h6 className="mt-4 mb-3">
                            દાનની માહિતી
                        </h6>

                        <div className="row g-3">

                            <div className="col-md-4">

                                <div
                                    className="border rounded p-3 text-center"
                                    style={{
                                        background: "#f0fff5",
                                    }}
                                >

                                    <small className="text-muted">
                                        કુલ દાન
                                    </small>

                                    <h5 className="text-success mt-2 mb-0">

                                        ₹{" "}
                                        {Number(
                                            selectedDonor.TotalDonation ||
                                                0
                                        ).toLocaleString("en-IN")}

                                    </h5>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div
                                    className="border rounded p-3 text-center"
                                    style={{
                                        background: "#f0fff5",
                                    }}
                                >

                                    <small className="text-muted">
                                        કુલ વૃક્ષો
                                    </small>

                                    <h5 className="text-success mt-2 mb-0">
                                        {selectedDonor.TotalTrees || 0}
                                    </h5>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div
                                    className="border rounded p-3 text-center"
                                    style={{
                                        background: "#f0fff5",
                                    }}
                                >

                                    <small className="text-muted">
                                        કુલ કેજ
                                    </small>

                                    <h5 className="text-success mt-2 mb-0">
                                        {selectedDonor.TotalCages || 0}
                                    </h5>

                                </div>

                            </div>

                        </div>

                        {/* ================= ACCOUNT INFO ================= */}

                        <h6 className="mt-4 mb-3">
                            Account માહિતી
                        </h6>

                        <div className="row g-3">

                            <div className="col-md-6">

                                <div className="border rounded p-3">

                                    <small className="text-muted">
                                        VIP Status
                                    </small>

                                    <div className="mt-1">

                                        {selectedDonor.IsVIPDonor ? (

                                            <span className="badge bg-warning text-dark">
                                                VIP Donor
                                            </span>

                                        ) : (

                                            <span className="badge bg-secondary">
                                                સામાન્ય Donor
                                            </span>

                                        )}

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="border rounded p-3">

                                    <small className="text-muted">
                                        Account Status
                                    </small>

                                    <div className="mt-1">

                                        {selectedDonor.Status ? (

                                            <span className="badge bg-success">
                                                સક્રિય
                                            </span>

                                        ) : (

                                            <span className="badge bg-danger">
                                                નિષ્ક્રિય
                                            </span>

                                        )}

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-12">

                                <div className="border rounded p-3">

                                    <small className="text-muted">
                                        Registration Date
                                    </small>

                                    <div className="fw-bold mt-1">
                                        {formatDateTime(
                                            selectedDonor.CreatedDate
                                        )}
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ================= CLOSE ================= */}

                        <div className="text-end mt-4">

                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={handleCloseModal}
                            >
                                બંધ કરો
                            </button>

                        </div>

                    </div>

                )}

            </Modal>

        </div>
    );
};

export default DonationReport;