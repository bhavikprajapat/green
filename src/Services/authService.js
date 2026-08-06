import axiosInstance from "../api/axiosInstance";

class AuthService {

    async login(data) {

        const response = await axiosInstance.post(
            "/api/auth/green-army/login",
            data
        );

        return response.data;
    }

}

export default new AuthService();