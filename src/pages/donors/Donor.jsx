import React from "react";
import Premiumdonorlist from "./Premiumdonorlist";
import Todayreminder from "./Todayreminder";
import DonationReport from "./DonationReport";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Donor = () => {
  const navigate = useNavigate();

  return (
    <div className="row p-4">

      {/* Add Donor Button */}
      <div className="col-12 d-flex justify-content-end mb-3">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => navigate("/dashboard/donor/add")}
          style={{
            width: "auto",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: "500",
          }}
        >
          <FaPlus className="me-2" />
          Donor ઉમેરો
        </button>
      </div>

      <Premiumdonorlist />

      <Todayreminder />

      <DonationReport />

    </div>
  );
};

export default Donor;