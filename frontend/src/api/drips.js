import axiosInstance from "./axiosInstance"

export const updateDrip = async (dripId, questionIndex, selectedUserId) => {
    try {
        const response = await axiosInstance.post(`/drips/update/${dripId}/${questionIndex}/${selectedUserId}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Failed to vote post:', error);
        
        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to vote post';
        
        throw new Error(errorMessage);
    }
}

export const getDrip = async () => {
    try {
        const response = await axiosInstance.get(`/drips`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Failed to vote post:', error);
        
        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to vote post';
        
        throw new Error(errorMessage);
    }
}

export const getQuestion = async (dripId, questionIndex) => {
    try {
        const response = await axiosInstance.get(`/drips/problem/${dripId}/${questionIndex}`)
        console.log(response.data.question || response.data)
        return response.data.question || response.data
    } catch (error) {
        console.error('Failed to vote post:', error);
        
        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to vote post';
        
        throw new Error(errorMessage);
    }
}

export const shuffleOptions = async (dripId, questionIndex, newOptions) => {
    try {
        const response = await axiosInstance.post(`/drips/update/${dripId}/${questionIndex}`, {
            newOptions
        })
        // console.log(response.data.options)
        return response.data.options
    } catch (error) {
        console.error('Failed to vote post:', error);
        
        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to vote post';
        
        throw new Error(errorMessage);
    }
}

export const getActivity = async () => {
    try {
        const response = await axiosInstance.get(`/drips/activity`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Failed to fetch activity:', error);
        
        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to fetch activity';
        
        throw new Error(errorMessage);
    }
}

export const getInbox = async () => {
    try {
        const response = await axiosInstance.get(`/drips/inbox`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Failed to fetch inbox:', error);
        
        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to fetch inbox';
        
        throw new Error(errorMessage);
    }
}

export const getQuestionResponse = async (questionResponseId) => {
    try {
        const response = await axiosInstance.get(`/drips/question-response/${questionResponseId}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Failed to vote post:', error);
        
        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to vote post';
        
        throw new Error(errorMessage);
    }
}

export const skipLast = async (dripId) => {
    try {
        console.log('hi')
        const response = await axiosInstance.post(`/drips/skip-last/${dripId}`)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Failed to skip Last:', error);
        
        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to skip Last';
        
        throw new Error(errorMessage);
    }
}