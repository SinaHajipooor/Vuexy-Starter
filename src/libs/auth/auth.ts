import axiosConfig from "@/utils/axios/axios";


type UserData = {
    username: string;
    password: string;
}

// login 
export async function login(userData: UserData) {
    try {
        const response = await axiosConfig.post(`/auth/login`, userData);

        return response.data;
    } catch (error) {
        throw error
    }
}


// get user info
export async function fetchUserDetails(token: string) {
    try {
        const response = await  axiosConfig.get(`/auth/user`, {
            headers : { Authorization: `Bearer ${token}` },
        });

        return response.data;
    } catch (error) {

    }
}
