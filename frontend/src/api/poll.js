import axiosInstance from "./axiosInstance"


export const votePoll = async (postId, pollId, index) => {
    try {
        const response = await axiosInstance.patch(`/posts/${postId}/votepoll/${pollId}/${index}`)
        console.log(response.data);
        
        return response.data
    } catch (error) {
        console.error('Failed to create post:', error);
        
        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to create post';
        
        throw new Error(errorMessage); 
    }
}