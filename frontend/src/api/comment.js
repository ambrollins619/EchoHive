import axiosInstance from "./axiosInstance"

export const voteComment = async (isUpvote,postId,commentId) => {
    try {
        const response = await axiosInstance.post(`/posts/${postId}/comments/${commentId}/vote`, {
            isUpvote
        })
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

export const createComment = async (postId, content) => {
    try {
        // creating a comment yo
        const response = await axiosInstance.post(`/posts/${postId}/comments`, {
            content
        })

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

export const editComment = async (postId, content, commentId) => {
    try {
        // creating a comment yo
        const response = await axiosInstance.put(`/posts/${postId}/comments/${commentId}`, {
            content
        })
        
        // console.log(response.data)
        
        return response.data
    } catch (error) {
        console.error('Failed to edit comment:', error);
        
        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to edit comment';
        
        throw new Error(errorMessage);
    }
}

export const deleteComment = async (postId, commentId) => {
    try {
        // creating a comment yo
        const response = await axiosInstance.delete(`/posts/${postId}/comments/${commentId}`)
        
        console.log(response.data)
        
        return response.data
    } catch (error) {
        console.error('Failed to delete comment:', error);
        
        // Convert generic Axios errors to more specific messages
        const errorMessage = error.response?.data?.message 
            || error.message 
            || 'Failed to delete comment';
        
        throw new Error(errorMessage);
    }
}