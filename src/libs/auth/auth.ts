import axiosConfig from "@/utils/axios/axios";


type UserData = {
    username: string;
    password: string;
}

// login 
export async function login(userData: UserData) {
    try {
        const response = await axiosConfig.post(`/auth/login`, userData);
        const data = response.data;

        return data;
    } catch (error) {
        throw error
    }
}
