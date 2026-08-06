import axiosInstance from "../api/axiosInstance";

class EmployeeService {

    // Add Employee
    async addEmployee(formData) {

        const response = await axiosInstance.post(
            "/api/employee",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response.data;
    }

}

export default new EmployeeService();