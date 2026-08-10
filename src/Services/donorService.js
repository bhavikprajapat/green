import axiosInstance from "../api/axiosInstance";

class DonorService {

    // Get all donors
    async getAllDonors() {
        const response = await axiosInstance.get("/api/donor");
        return response.data;
    }

    // Add donor
    async addDonor(formData) {
        const response = await axiosInstance.post(
            "/api/donor",
            formData
        );

        return response.data;
    }

    // Update donor
    async updateDonor(id, formData) {
        const response = await axiosInstance.put(
            `/api/donor/${id}`,
            formData
        );

        return response.data;
    }

    // Delete donor
    async deleteDonor(id) {
        const response = await axiosInstance.delete(
            `/api/donor/${id}`
        );

        return response.data;
    }
}

export default new DonorService();