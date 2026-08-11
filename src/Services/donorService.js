import axiosInstance from "../api/axiosInstance";

class DonorService {

    // =========================================
    // GET ALL DONORS
    // =========================================

    async getAllDonors() {
        const response = await axiosInstance.get(
            "/api/donor"
        );

        return response.data;
    }

    // =========================================
    // ADD DONOR
    // =========================================

    async addDonor(formData) {
        const response = await axiosInstance.post(
            "/api/donor",
            formData
        );

        return response.data;
    }

    // =========================================
    // UPDATE DONOR
    // PUT /api/donor/uk/:DonorUkId
    // =========================================

    async updateDonor(donorUkId, formData) {
        const response = await axiosInstance.put(
            `/api/donor/uk/${donorUkId}`,
            formData
        );

        return response.data;
    }

    // =========================================
    // DELETE DONOR
    // =========================================

    async deleteDonor(donorUkId) {
        const response = await axiosInstance.delete(
            `/api/donor/uk/${donorUkId}`
        );

        return response.data;
    }
}

export default new DonorService();