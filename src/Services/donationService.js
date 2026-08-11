import axiosInstance from "../api/axiosInstance";

// =====================================================
// ADD DONATION
// =====================================================

const addDonation = async (donationData) => {
    const response = await axiosInstance.post(
        "/api/donation",
        donationData
    );

    return response.data;
};

// =====================================================
// SERVICE
// =====================================================

const donationService = {
    addDonation,
};

export default donationService;