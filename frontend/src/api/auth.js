import axiosInstance from "./axiosInstance"

export const signUpUser = async (name, email, password) => {
    try {
        const response = await axiosInstance.post('/auth/register', {
            name,
            email,
            password
        })
        
        return response.data // return the response so you can use it where it's called
    } catch (error) {
        console.error('Signup failed:', error);
        throw error; // rethrow so you can handle it in UI (toast, form error, etc.)
    }
}

export const loginUser = async ( email, password) => {
    try {
        const response = await axiosInstance.post('/auth/login', {
            email,
            password
        })
        
        return response.data // return the response so you can use it where it's called
    } catch (error) {
        console.error('Login failed:', error);
        throw error; // rethrow so you can handle it in UI (toast, form error, etc.)
    }
}

export const verifyUser = async (otp) => {
    try {
        const response = await axiosInstance.post('/auth/verify-code', {
            verificationCode: otp
        })
        
        return response.data // return the response so you can use it where it's called
    } catch (error) {
        console.error('Signup failed:', error);
        throw error; // rethrow so you can handle it in UI (toast, form error, etc.)
    }
}

export const logoutUser = async () => {
    try {
        const response = await axiosInstance.post('/auth/logout')
        return response.data // return the response so you can use it where it's called
    } catch (error) {
        console.error('Logout failed:', error);
        throw error; // rethrow so you can handle it in UI (toast, form error, etc.)
    }
}

export const resendOtp = async () => {
    try {
        const response = await axiosInstance.post('/auth/resend-verify-code')
        return response.data // return the response so you can use it where it's called
    } catch (error) {
        console.error('Resend Verification Code failed:', error);
        throw error; // rethrow so you can handle it in UI (toast, form error, etc.)
    }
}